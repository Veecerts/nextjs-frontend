"use client";
import Search from "@/components/atoms/a-search-bar";
import { generateUrlFromIpfsHash } from "@/lib/utils/ipfs";
import { useFilesQuery } from "@/services/graphql/generated";
import Image from "next/image";
import Link from "next/link";

const ConsoleFilesPage = () => {
  const [{ data, fetching, error }] = useFilesQuery();
  return (
    <div>
      <div>
        <Search />
      </div>
      <ul>
        {data?.files.map((file) => (
          <li key={file.id}>
            <Link
              target="_blank"
              href={generateUrlFromIpfsHash(file.fileIpfsHash)}
            >
              <div className="flex flex-col gap-2 border rounded-t-[30px] rounded-3xl max-w-[434px] overflow-hidden">
                <Image
                  src={generateUrlFromIpfsHash(file.nftIpfsHash)}
                  width={434}
                  height={264}
                  alt={file.title}
                />
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-bold text-2xl">{file.title}</p>
                  <p className="line-clamp-3 text-foreground/60">
                    {file.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsoleFilesPage;
