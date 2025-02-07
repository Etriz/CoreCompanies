'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [isChecked, setIsChecked] = useState(false);
	const blankInfo = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	};
	const [info, setInfo] = useState(blankInfo);
	const checkHandler = () => {
		setIsChecked(!isChecked);
	};
	const changeHandler = (name) => {
		return (e) => {
			setInfo({ ...info, [name]: e.target.value });
		};
	};
	const handleClick = (e) => {
		e.preventDefault();
		if (isChecked == true) {
			setInfo(blankInfo);
			setIsChecked(false);
			sendEmail(info);
		} else {
			console.log('Checkbox not checked');
		}
	};
	emailjs.init({
		publicKey: '2FpEKU9Zq_60k7nSi',
		// allow headless browsers
		blockHeadless: false,
		blockList: {
			// Block the suspended emails
			list: [],
			// The variable contains the email address
			watchVariable: 'email',
		},
	});
	const sendEmail = (params) => {
		try {
			emailjs.send('default_service', 'generic_contact', params).then(
				(response) => {
					console.log('Email sent', response.status, response.text);
				},
				(err) => {
					console.error('FAILED...', err);
				}
			);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h2 className="text-3xl text-center sm:text-left">
					Contact Us For More Information
				</h2>
				<div>
					<form
						className="flex flex-col gap-4 text-white items-start"
						id="contact">
						<div className="flex flex-col">
							<label htmlFor="firstName">First Name</label>
							<input
								value={info.firstName}
								onChange={changeHandler('firstName')}
								type="text"
								name="firstName"
								required
								className="text-black px-1 w-[250px] md:w-[500px]"></input>
						</div>
						<div className="flex flex-col">
							<label htmlFor="lastName">Last Name</label>
							<input
								value={info.lastName}
								onChange={changeHandler('lastName')}
								type="text"
								name="lastName"
								required
								className="text-black px-1 w-[250px] md:w-[500px]"></input>
						</div>
						<div className="flex flex-col">
							<label htmlFor="emailName">Email</label>
							<input
								value={info.email}
								onChange={changeHandler('email')}
								type="email"
								name="email"
								required
								className="text-black px-1 w-[250px] md:w-[500px]"></input>
						</div>
						<div className="flex flex-col">
							<label htmlFor="phone">Phone</label>
							<input
								value={info.phone}
								onChange={changeHandler('phone')}
								type="tel"
								name="phone"
								className="text-black px-1 w-[250px] md:w-[500px]"></input>
						</div>
						<div className="flex flex-row gap-2">
							<input
								checked={isChecked}
								onChange={checkHandler}
								type="checkbox"
								name="checkbox"
								required
							/>
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
