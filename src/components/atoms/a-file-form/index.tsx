"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Dropzone from "@/components/ui/dropzone";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import NFTCard from "../a-nft-card";
import { calculateIpfsHash, generateUrlFromIpfsHash } from "@/lib/utils/ipfs";
import useWallet from "@/hooks/wallet";
import { useFileUploadMutation } from "@/services/graphql/generated";
import { useToast } from "@/components/ui/use-toast";
import * as StellarSdk from "@stellar/stellar-sdk";

const formSchema = z.object({
  file: z.instanceof(File, { message: "Please provide a file" }),
  title: z.string({ required_error: "Please provide a title" }),
  description: z.string({ required_error: "Please provide a description" }),
  public: z.boolean(),
});

type FormSchema = z.infer<typeof formSchema>;

const FileForm = () => {
  const { isAllowed, publicKey, signTransaction } = useWallet();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState<File>();
  const [nftCard, setNftCard] = React.useState<File>();
  const [hash, setHash] = React.useState<string>();
  const [{ fetching }, mutate] = useFileUploadMutation();
  const { toast } = useToast();

  React.useEffect(() => {
    (async () => {
      if (file) {
        const hash = await calculateIpfsHash(file);
        setHash(hash);
      }
    })();
  }, [file]);

  const onSubmit = async (value: FormSchema) => {
    if (!isAllowed) {
      toast({
        title: "Upload Error",
        description: "Please connect your wallet",
        variant: "destructive",
      });
      return;
    }
    if (!nftCard) {
      toast({
        title: "Nft card not generated",
        description: "The nft card has not been generated",
        variant: "destructive",
      });
      return;
    }

    const server = new StellarSdk.Horizon.Server(
      "https://horizon-testnet.stellar.org",
    );
    const account = await server.loadAccount(publicKey);
    const fee = await server.fetchBaseFee();

    const txn = new StellarSdk.TransactionBuilder(account, {
      fee: fee.toString(),
      networkPassphrase: StellarSdk.Networks.TESTNET,
    })
      .addOperation(
        StellarSdk.Operation.payment({
          destination:
            "GAZYJW5BLTV3FIOGF5LGDRPV5ICDRA3TU5AARF7LFY2CQQHAODL672Q2",
          asset: StellarSdk.Asset.native(),
          amount: "10",
        }),
      )
      .setTimeout(30)
      .build();

    const signedTransaction = await signTransaction(txn.toXDR(), {
      network: StellarSdk.Networks.TESTNET,
      networkPassphrase: StellarSdk.Networks.TESTNET,
    });

    console.log({ signedTransaction });

    const { error } = await mutate({
      input: {
        description: value.description,
        title: value.title,
        file: value.file,
        public: value.public,
        nftImage: nftCard,
        creatorAddress: publicKey,
      },
    });
    if (error?.graphQLErrors) {
      error.graphQLErrors.map((err) =>
        toast({
          title: "Upload Error",
          description: err.message,
          variant: "destructive",
        }),
      );
    } else {
      toast({
        title: "Upload Success",
        description: "Your document has uploaded",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col md:flex-row w-full gap-x-14">
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Upload File</FormLabel>
                <FormControl>
                  <Dropzone
                    onChange={(v) => {
                      if (v.length > 0) {
                        field.onChange(v[0]);
                        setFile(v[0]);
                      }
                    }}
                    className="md:p-56 md:py-80"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex-1 flex flex-col gap-y-4 justify-between">
            <div className="flex flex-col gap-6 h-full">
              <NFTCard
                url={hash && generateUrlFromIpfsHash(hash)}
                title={title}
                onChange={setNftCard}
                publicDoc={form.getValues("public")}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Title</FormLabel>
                    <FormControl>
                      <Input
                        className="text-lg p-6"
                        placeholder="Enter a title..."
                        {...field}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          field.onChange(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        className="text-lg p-6"
                        placeholder="Enter a description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="public"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-lg">Public</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              loading={fetching}
              disabled={fetching}
              className="mb-8 p-6 rounded-full"
              size="lg"
            >
              Save
            </Button>
          </div>
        </fieldset>
      </form>
    </Form>
  );
};

export default FileForm;
