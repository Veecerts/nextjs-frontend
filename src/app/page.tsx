import PricingCard from "@/components/atoms/a-pricing-card";
import ShadowPill from "@/components/atoms/a-shadow-pill";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex h-[80vh] flex-col items-center justify-center gap-10">
        <ShadowPill>Introducing Veecerts</ShadowPill>
        <h1 className="font-semibold text-center text-7xl text-foreground/70 mt-10 leading-[90px]">
          Blockchain-Powered{" "}
          <span className="text-secondary-foreground">Certainty</span> <br />
          For Critical Documents
        </h1>
        <p className="text-xl text-center text-foreground/60">
          Upload documents to Decentralized Cloud Storage, Verify Documents
          using NFTs, <br /> Integrate Veecerts into your application using our
          API
        </p>
        <div className="flex gap-8 mt-4">
          <Button size="lg" className="text-xl p-8 rounded-full">
            Upload Document
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-xl p-8 rounded-full"
          >
            See Video Demo
          </Button>
        </div>
      </div>

      <div className="flex mt-52 flex-col items-center justify-center gap-8">
        <ShadowPill>Transparend Pricing</ShadowPill>
        <h1 className="font-semibold text-center text-7xl text-foreground/70 leading-[90px]">
          Better Prices.{" "}
          <span className="text-secondary-foreground">No Worries</span> <br />
        </h1>
        <p className="text-xl text-center text-foreground/60">
          Select the best plan for your needs
        </p>
        <div className="flex gap-14 mt-20">
          <PricingCard
            title="Basic"
            description="Limited access to basic features."
            actionLabel="Start Free Trial"
            features={[
              "1GB Storage",
              "50 Max Documents",
              "100 Maximun Reads",
              "1 Administrator",
            ]}
          />
          <PricingCard
            title="Team"
            price={20}
            description="For small teams with multiple users."
            actionLabel="Get Started"
            highlight
            features={[
              "2GB Storage",
              "500 Max Documents",
              "5000 Maximun Reads",
              "10 Max Administrators",
            ]}
          />
          <PricingCard
            title="Organization"
            price={100}
            description="For organizations with multiple users"
            actionLabel="Let's Talk"
            features={[
              "100GB Storage",
              "2050 Max Documents",
              "25000 Maximun Reads",
              "500 Max Administrators",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
