"use client";

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
import { Input } from "@/components/ui/input";
import Dropzone from "shadcn-dropzone";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import { useCreateUpdateAssetMutation } from "@/lib/services/graphql/generated";

const formSchema = z.object({
  name: z.string({ message: "Please enter file name" }),
  file: z.instanceof(File, { message: "Please provide a valid file" }),
  description: z.string({ message: "Please enter file description" }),
  folderId: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  folderUuid: string;
  onSuccess?: () => void;
}

const AssetForm: React.FC<Props> = ({ folderUuid, onSuccess }) => {
  const [{ fetching }, mutate] = useCreateUpdateAssetMutation();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormSchema) => {
    mutate({
      input: {
        folderUuid,
        name: value.name,
        file: value.file,
        description: value.description,
      },
    });
    onSuccess?.()
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="File name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <Dropzone
                  dropZoneClassName="py-8"
                  onDrop={(accepted) => field.onChange(accepted.at(0))}
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Enter text..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={fetching} loading={fetching}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default AssetForm;
