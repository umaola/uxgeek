import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PortfoliosPrimary from "@/components/sections/portfolios/PortfoliosPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Portfolios() {
	return (
		<div>
			<Header isHeaderTop={true} topbarType={4} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Portfolios"} text={"Portfolios"} />
				<h1 className="text-center">Coming Soon...</h1>
				{/* <PortfoliosPrimary /> */}
				<Cta1 />
			</main>
			<Footer8 footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
