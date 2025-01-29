import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href=""
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
		</footer>
	);
}
