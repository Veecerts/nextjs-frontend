import * as IpfsOnlyHash from "ipfs-only-hash";

export async function calculateIpfsHash(
  input: File | Buffer | string,
): Promise<string> {
  try {
    let content: Uint8Array;

    if (input instanceof File) {
      // For File objects, read as ArrayBuffer and convert to Uint8Array
      const arrayBuffer = await input.arrayBuffer();
      content = new Uint8Array(arrayBuffer);
    } else if (Buffer.isBuffer(input)) {
      // If it's already a Buffer, convert to Uint8Array
      content = new Uint8Array(input);
    } else if (typeof input === "string") {
      // For strings, encode as UTF-8
      content = new TextEncoder().encode(input);
    } else {
      throw new Error("Invalid input type. Expected File, Buffer, or string.");
    }

    // Calculate the IPFS hash (CID)
    const cid = await IpfsOnlyHash.of(content);
    return cid;
  } catch (error) {
    console.error("Error calculating IPFS hash:", error);
    throw error;
  }
}

export const generateUrlFromIpfsHash = (hash: string): string => {
  const gateWay = process.env.NEXT_PUBLIC_PINYATA_GATEWAY_URL ?? "";
  return `${gateWay}/ipfs/${hash}`;
};
