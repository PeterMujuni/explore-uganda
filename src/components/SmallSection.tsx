import React from "react";

type SectionProps = {
    catchPhrase: string,
    title: string,
    text: string,
}

const SmallSection = (props: SectionProps) => {
	return (
		<section aria-labelledby="headline" className="container grid gap-4 text-center max-w-p">
			<div>
				<small className="trancking-widest text-accent uppercase drop-shadow-text-sm">{props.catchPhrase}</small>
				<h2 id="headline" className="text-3xl font-bold tracking-wide drop-shadow-text-md">{props.title}</h2>
			</div>
            <p className="text-muted drop-shadow-text-sm">{props.text}</p>
		</section>
	);
};

export default SmallSection;
