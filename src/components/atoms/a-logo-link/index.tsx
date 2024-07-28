import Link from "next/link";
import Image from "next/image";

const LogoLink = () => {
	return (
		<Link href="/" className="font-medium text-xl flex items-center space-x-2">
			<Image alt="Veecerts" src="/logo.svg" width={34} height={34} />
			<span>Veecerts</span>
		</Link>
	);
};

export default LogoLink;
