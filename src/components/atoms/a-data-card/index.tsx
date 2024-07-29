"use client";

import React from "react";
import Image from "next/image";

const DataCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      {/* card-1 */}
      <div className="p-2 max-w-sm">
        <div className="flex rounded-lg h-full bg-primary p-8 flex-col">
          <div className="flex items-start justify-between inline-flex">
            <p className="text-[2rem] text-white">Total doc</p>
            <Image
              className="w-[20%] aspect-square p-2 rounded-lg"
              src="/logo.svg"
              alt="veecerts"
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-between text-white flex-col">
            <div>
              <div className="">
                <div className="font-semibold text-3xl">
                  <p>345,590,567</p>
                  <p className="font-normal text-2xl tracking-widest">
                    300+ orders
                  </p>
                  {/* ml-auto */}
                  <div className=" w-[40%] border overflow-hidden z-0 rounded-md border-black/20">
                    <div className="bg-white text-green-500 rounded-full w-25 p-4 text-center">
                      {/* <span className="icon-[line-md--arrow-small-up]"></span> */}
                      <span>7.89%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card-2 */}
      <div className="p-2 max-w-sm">
        <div className="flex rounded-lg h-full bg-primary p-8 flex-col">
          <div className="flex items-start justify-between inline-flex">
            <p className="text-[2rem] text-white">Total doc</p>
            <Image
              className="w-[20%] aspect-square p-2 rounded-lg"
              src="/logo.svg"
              alt="veecerts"
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-between text-white inline-flex">
            <div>
              <div className="text-[1em]">
                <div className="font-semibold py-5 text-[2em]">
                  <p>345,590,567</p>
                  <p className="font-normal text-2xl tracking-widest">
                    300+ orders
                  </p>
                  <div className="ml-auto w-[40%] aspect-square border overflow-hidden z-0 rounded-md border-black/20 relative">
                    <div className="bg-white text-red-500 p-4 text-center">
                      <span className="icon-[line-md--arrow-small-up]"></span>
                      <span>1.89%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
