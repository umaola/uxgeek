import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PricingPlan4 from "@/components/sections/pricing-plan/PricingPlan4";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import OtherItems from "@/components/sections/pricing-plan/otherItems"
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function PricingPlan() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Pricing plan"} text={"Pricing plan"} />
				<PricingPlan4 />
				<OtherItems />
				{/* <Cta1[pl;'/] 
				/> */}
			</main>
			<Footer8 footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
