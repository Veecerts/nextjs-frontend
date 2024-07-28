"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { dataURLtoFile } from "@/lib/utils/files";
import { ellipseText } from "@/lib/utils/text";
import html2canvas from "html2canvas";
import Image from "next/image";
import React from "react";
import QRCode from "react-qr-code";

interface Props {
  title?: string;
  publicDoc?: boolean;
  url?: string;
  onChange?: (file: File) => void;
}

const NFTCard: React.FC<Props> = ({ url, title, publicDoc, onChange }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (async () => {
      if (ref.current) {
        const canvas = await html2canvas(ref.current, {
          allowTaint: true,
          removeContainer: true,
          backgroundColor: "transparent",
        });
        const data = canvas.toDataURL("image/png");
        onChange && onChange(dataURLtoFile(data, `${title?.slice(0, 10)}.png`));
      }
    })();
  }, [url, title, publicDoc]);

  return (
    <div className="bg-transparent">
      <div
        ref={ref}
        className="relative z-0 w-full aspect-[16/10] overflow-hidden rounded-[3rem] bg-gradient-to-b from-green-600 to-green-700"
      >
        <div className="bg-black/10 absolute right-[40%] top-[40%] aspect-square w-full rounded-full" />
        <div className="bg-black/10 absolute left-[40%] bottom-[40%] aspect-square w-full rounded-full" />
        <div className="absolute text-white inset-0 z-50 p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <p className="text-[2.5em] font-extrabold">
                {publicDoc ? "Public" : "Private"} Doc
              </p>
              <Image
                className="w-[10%] aspect-square p-2 rounded-lg"
                src="/logo.svg"
                alt="veecerts"
                width={120}
                height={120}
              />
            </div>
            <p className="font-medium text-black/60 text-lg">
              {ellipseText(title, 30).toUpperCase()}
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-[1em]">
              <div className="py-5 text-[2em]">
                <p>VEC-PRM</p>
                <p className="font-extrabold tracking-widest">#00192</p>
              </div>
              <p className="font-extralight">20-07-2024</p>
            </div>
            <div className="flex-1">
              <div className="ml-auto w-[40%] aspect-square border overflow-hidden z-0 rounded-3xl border-black/20 relative">
                {url ? (
                  <div className="bg-white p-4">
                    <QRCode
                      size={256}
                      viewBox={`0 0 256 256`}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={url}
                    />
                  </div>
                ) : (
                  <Skeleton className="w-full aspect-square" />
                )}
                <div className="absolute translate-x-[50%] right-[50%] -translate-y-[50%] top-[50%] z-50">
                  <Image
                    className="bg-white p-1 rounded-lg"
                    src="/logo.svg"
                    alt="veecerts"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
