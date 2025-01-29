'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
	const [active, setActive] = useState();
	return (
		<header className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
			<Image
				className="dark:invert"
				src="/corelogo.svg"
				alt="Core logo"
				width={100}
				height={100}
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
