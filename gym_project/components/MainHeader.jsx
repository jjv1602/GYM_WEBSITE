import React from "react";
import Link  from "next/link";
import image from "../images/main_header.png";
import Image from 'next/image';

<styles />
const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>#100DaysOfWorkout</h4>
					<h1>Join The Legends of the Fitness World</h1>
					<p>
						Aute nisi adipisicing sunt adipisicing incididunt veniam fugiat
						labore eiusmod nisi quis ad nulla exercitation. Aute nisi
						adipisicing sunt adipisicing incididunt veniam fugiat labore eiusmod
						nisi quis ad nulla exercitation.
					</p>
					<Link href="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<Image src={image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
