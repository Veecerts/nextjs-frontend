declare module "ipfs-only-hash" {
	import { Readable } from "stream";

	export function of(data: string | Uint8Array | Readable): Promise<string>;
}
