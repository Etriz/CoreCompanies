'use client';
export default function Contact() {
	const handleClick = () => {
		console.log('button clicked');
	};
	return (
		<div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h2 className="text-2xl text-center sm:text-left">
					Contact Us for more information
				</h2>
				<div>
					<form
						className="flex flex-col gap-4 text-white items-start"
						id="contact">
						<div className="flex flex-col">
							<label htmlFor="firstName">First Name</label>
							<input
								type="text"
								name="firstName"
								required></input>
						</div>
						<div className="flex flex-col">
							<label htmlFor="lastName">Last Name</label>
							<input type="text" name="lastName" required></input>
						</div>
						<div className="flex flex-col">
							<label htmlFor="emailName">Email</label>
							<input type="email" name="email" required></input>
						</div>
						<div className="flex flex-col">
							<label htmlFor="phone">Phone</label>
							<input type="tel" name="phone"></input>
						</div>
						<div className="flex flex-row gap-2">
							<input type="checkbox" name="checkbox" required />
							<label htmlFor="checkbox">
								I agree to be contacted
							</label>
						</div>
						<button
							onClick={handleClick}
							type="button"
							className="font-bold border rounded-md border-white py-2 w-full bg-white text-black hover:bg-gray-500 hover:text-white"
							form="contact">
							Submit
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}
