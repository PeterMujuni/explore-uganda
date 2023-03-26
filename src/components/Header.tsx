import React from "react";
import hero from "../assets/images/hero.jpg";
import heroXS from "../assets/images/hero-xs.jpg";
import heroSM from "../assets/images/hero-sm.jpg";
import heroMD from "../assets/images/hero-md.jpg";
import heroLG from "../assets/images/hero-lg.jpg";

const Header = () => {
	return (
		<header className="min-h-screen flex flex-col justify-evenly items-center relative">
			<div className="absolute bg-gradient-to-b inset-0 bottom-3/4 from-accent to-transparent"></div>
			<div className="absolute bg-gradient-to-t inset-0 top-1/3 -bottom-32 from-bkg/80 to-transparent"></div>
			<img
				sizes="(min-width: 500px) 480w, 650w, 800w, 1300w"
				srcSet={`${heroXS} 480w, ${heroSM} 650w, ${heroMD} 800w, ${heroLG} 1300w`}
				className="absolute h-full w-full -z-20 object-cover object-center"
				src={hero}
				aria-hidden="true"
			/>
			<h1 className="text-5xl text-center font-bold text-white tracking-wide py-12 drop-shadow-text-sm lg:drop-shadow-text-lg">
				Unique Trips for <br />
				Adventurous
				<br />
				Travelers
			</h1>
			<a
				className="bg-accent text-bkg font-medium py-3 px-8 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 transition-shadow flex space-x-2 drop-shadow-text-lg hover:drop-shadow-none items-center"
				href="#contact-form"
			>
				<span className="uppercase tracking-wide">Book a Trip</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 256 256"
				>
					<path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"></path>
				</svg>
			</a>
		</header>
	);
};

export default Header;
