"use client";

import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import ErrorPrimary from "@/components/sections/error/ErrorPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Error() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"404"} text={"404"} />
				<ErrorPrimary />
				<Cta1 />
			</main>
			<Footer8 footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
