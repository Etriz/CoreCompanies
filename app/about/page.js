import Image from 'next/image';

export default function About() {
	return (
		<div className="grid items-center justify-items-center p-6 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col row-start-2 items-center sm:items-start">
				<div className="grid grid-cols-1 gap-4 items-center justify-items-center m-auto md:grid-cols-[15%_1fr_1fr_15%] md:cols-start-2">
					<div className=" md:col-start-2">
						<h2 className="text-4xl text-center sm:text-left m-auto">
							About CoreCompanies
						</h2>
						<p className="my-4">
							My professional career started in the financial
							services industry (1990-2004). During that last five
							years as a mortgage sales manager, I
							&ldquo;developed&ldquo; a taste for real estate and
							so it began. Since 2004, CORE Companies, LLC has
							maintained a presence in real estate design,
							drafting, development, brokerage, investment,
							technology, marketing and consulting.
						</p>
						<p>
							My companies and teams are here to serve you. So,
							when it comes to real estate, what is most important
							to you?
						</p>
					</div>
					<img
						className=""
						src="/Joel-headshot.jpg"
						alt="Joel Headshot"
						width={400}
						height={400}
					/>
				</div>
			</main>
		</div>
	);
}
