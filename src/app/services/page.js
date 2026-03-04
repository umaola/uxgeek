import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Services() {
	return (
		<div>
			<Header  isHeaderTop={true} topbarType={4} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Services"} text={"Services"} />
				<ServicesPrimary />
				<Cta1 />
			</main>
			<Footer8 footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
