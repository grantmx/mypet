import Footer from "@/components/Footer";
import Header from "@/components/Header";

function GlobalLayout({ children }) {
	return (
		<>
			<Header />
			
			<main>
				{children}
			</main>

			<Footer />
		</>
  	);
}


export default GlobalLayout;