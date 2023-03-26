import React from "react";
import SmallSection from "./SmallSection";

const Main = () => {
	return (
		<main className="relative mt-16 sm:mt-24 lg:mt-40 pd-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
			<SmallSection
				catchPhrase="WHAT DREAMS ARE MADE OF"
				title="Trips for Explorers"
				text="We find once-in-a-lifetime locations and reserve them for travelers full of adventure. Calling all explorers and extremists to the trip of their dreams in the most exotic locations all around the globe."
			/>
			<SmallSection
				catchPhrase="off the beaten path"
				title="Places Without People"
				text="We find once-in-a-lifetime locations and reserve them for travelers full of adventure. Calling all explorers and extremists to the trip of their dreams in the most exotic locations all around the globe."
			/>
		</main>
	);
};

export default Main;
