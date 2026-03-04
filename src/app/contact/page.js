import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import Contact5 from "@/components/sections/contacts/Contact5";
import ContactTop from "@/components/sections/contacts/ContactTop";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Contact() {
	return (
		<div>
			<Header  isHeaderTop={true} topbarType={4} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Contact"} text={"Contact"} />
				<ContactTop />
				<Contact5  />
			</main>
			<Footer8 footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
