import React from "react";
import Link  from "next/link";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Image from 'next/image';
const Footer = () => {
	return (
		<footer className="footer_tag">
			<div className="container footer__container">
				<article>
					<Link href="/" className="logo">
						<Image alt="Footer Logo" />
					</Link>
					<p>
						Consectetur non nostrud enim nostrud est culpa ullamco incididunt
						nisi. Consectetur non nostrud enim nostrud est culpa ullamco
						incididunt nisi.
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/in/eniola-ademola-7386161a7/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/_daveworld"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://instagram.com/_daveworld"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link href="/about">About</Link>
					<Link href="/plans">Plans</Link>
					<Link href="/trainers">Trainers</Link>
					<Link href="/gallery">Gallery</Link>
					<Link href="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link href="/s">Blog</Link>
					<Link href="/s">Case Studies</Link>
					<Link href="/s">Events</Link>
					<Link href="/s">Communities</Link>
					<Link href="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link href="/contact">Plans</Link>
					<Link href="/s">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy;  Mayank Ahuja </small>
			</div>
		</footer>
	);
};

export default Footer;
