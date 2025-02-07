import { Roboto } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'CoreCompanies',
	description: 'Home Page for Core Companies',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto} antialiased min-h-screen`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
