'use client';
import Image from 'next/image';

export default function Footer() {
	const getYear = () => {
		const now = Date.now();
		const year = new Date(now).getFullYear();
		return year;
	};
	return (
		<footer className="grid items-center justify-center py-4 px-8 md:px-16 border-t border-gray-700 grid-cols-3 md:fixed md:bottom-0 md:left-0 md:right-0">
			<div className="col-start-1">&#169; {getYear()} Core-Companies</div>
			<div className="flex flex-col md:flex-row gap-2 md:gap-6 col-start-3 md:items-end md:justify-end">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://www.linkedin.com/company/core-companies/"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="/linkedin.svg"
						alt="Linkedin icon"
						width={16}
						height={16}
					/>
					LinkedIn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href=""
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="/facebook.svg"
						alt="Facebook icon"
						width={16}
						height={16}
					/>
					Facebook
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href=""
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="/instagram.svg"
						alt="Instagram icon"
						width={16}
						height={16}
					/>
					Instagram
				</a>
			</div>
		</footer>
	);
}
