import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

export default function Layout({ children }) {
	return (
		<>
			<NavComponent />
			{children}
			<FooterComponent />
		</>
	);
}
