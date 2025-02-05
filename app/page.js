import Image from 'next/image';
import Footer from './components/footer';
import Card from './components/card';

export default function Home() {
	return (
		<div className="grid grid-rows-[0px_1fr_0px] items-start justify-items-center p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:w-1/2 mx-auto">
				<Image
					className="dark:invert"
					src="/corelogo.svg"
					alt="Next.js logo"
					width={100}
					height={100}
					priority
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
					<Card title="CoreDrafting" link="coredrafting.com" />
					<Card title="CoreRealEstate" link="corerealestate.agency" />
					<Card title="CoreLotStore" link="corelotstore.com" />
					<Card title="CoreCare" link="corecare.services" />
					<Card title="Remmersion" link="remmersion.com" />
				</div>
			</main>
		</div>
	);
}
