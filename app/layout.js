import { Roboto } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "My Pet",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<CssBaseline />
			<body>
				{children}
			</body>
		</html>
	);
}
