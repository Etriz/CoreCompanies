import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	return (
		<header className="bg-gray-950 flex gap-8 items-center justify-center py-4 border-b border-gray-500">
			<Image
				className="dark:invert"
				src="/corelogo.svg"
				alt="Core logo"
				width={50}
				height={50}
				priority
			/>
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4 active:underline active"
				href="./"
				target="_self"
				rel="noopener noreferrer">
				Home
			</Link>
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4 active:underline"
				href="./about"
				target="_self"
				rel="noopener noreferrer">
				About
			</Link>
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4 active:underline"
				href="./contact"
				target="_self"
				rel="noopener noreferrer">
				Contact
			</Link>
		</header>
	);
}
