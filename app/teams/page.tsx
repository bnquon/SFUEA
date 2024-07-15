import { Footer } from "@/app/Components/Footer";
import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
import { GamesAndPlayers } from "./GamesAndPlayers";

export default function Home() {
    return (
    	<main className="relative">

    		<SubPageBanner pageTitle="Teams" pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION." blobImage="/blob2.webp" />

            <SubPageHeader title="Our Team" />

            <GamesAndPlayers />

            <Footer />

    	</main>
  	);
}
