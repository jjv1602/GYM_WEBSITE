import { useState } from "react";
import Link  from "next/link";
import { NavLink } from "./NavLink";
// NavLink comes with an isactive prop which we can use to detect which page we on
// so we can have a special style for that link
import React from "react";
import Logo from "../images/logo.png";
import { links } from "./data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);

	const handleNavToggle = () => {
		return setIsNavShowing((prevVAlue) => {
			return !prevVAlue;
		});
	};

	return (
		<nav>
			<div className="container nav__container">
				<Link href="/" className="logo" onClick={handleNavToggle}>
					<img alt="Nav-logo" />
				</Link>
				<ul
					className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
				>
					{/* Destructure the links array of object from the links to get each item */}
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									href={path}
									className=""
									onClick={handleNavToggle}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<button onClick={handleNavToggle} className="nav__toggle-btn">
					{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

