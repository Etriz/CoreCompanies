import Image from 'next/image';
import Card from './components/card';

export default function Home() {
	const draftingDescription = () => {
		return 'From bathroom remodels to full luxury estates & offices, we are able to assist home & business owners, builders, brokers, interior designers and other drafting firms nationwide.';
	};
	const realEstateDescription = () => {
		return 'Your Real Estate Team for Sioux Falls and the surrounding area. Helping you buy your next home and sell your current residence. Listings from Sioux Falls, Brandon, and more.';
	};
	const lotStoreDescription = () => {
		return 'See where open lots are in the Sioux Falls area. Streamlining the process of finding open lots and providing buyers with the necessary information to make informed decisions.';
	};
	const coreCareDescription = () => {
		return '';
	};
	const remmersionDescription = () => {
		return 'Real Estate Media Management, creating engaging panoramic virtual tours and renderings, website development, and social media marketing. Let us help with your online digital presence.';
	};
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
					<Card
						title="CoreDrafting"
						link="coredrafting.com"
						description={draftingDescription()}
					/>
					<Card
						title="CoreRealEstate"
						link="corerealestate.agency"
						description={realEstateDescription()}
					/>
					<Card
						title="CoreLotStore"
						link="corelotstore.com"
						description={lotStoreDescription()}
					/>
					<Card
						title="CoreCare"
						link="corecare.services"
						description={coreCareDescription()}
					/>
					<Card
						title="Remmersion"
						link="remmersion.com"
						description={remmersionDescription()}
					/>
				</div>
			</main>
		</div>
	);
}
