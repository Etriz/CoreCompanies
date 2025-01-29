// import { Geist, Geist_Mono } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'CoreCompanies',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto} antialiased`}>{children}</body>
		</html>
	);
}
