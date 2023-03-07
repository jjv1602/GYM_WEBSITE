 ;
import { FaCrown } from "react-icons/fa";
import SectionHead from "../../SectionHead";
import { programs } from "../data";
import Card from "../../UI/Card";
import Link  from 'next/link';
import { AiFillCaretRight } from "react-icons/ai";

const A_Program = () => {
	return (
		<section className="programs">
			<div className="container programs container">
				<SectionHead icon={<FaCrown />} title="Programs" />

				<div className="program__wrapper">
					{programs.map(({ id, icon, title, info, path }) => {
						return (
							<Card className="programs__program" key={id}>
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link href={path} className="btn sm">
									Learn More <AiFillCaretRight />
								</Link>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default A_Program;
