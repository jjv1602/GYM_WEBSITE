 ;
 import Card from "./UI/Card";
 import Image from 'next/image';
const Trainer = ({ image, name, job, socials }) => {
	return (
		<Card className="trainer">
			<div className="trainer__Image">
				<Image src={image} alt={name} />
			</div>
			<h3>{name}</h3>
			<p>{job}</p>
			<div className="trainer__socials">
				{socials.map(({ icon, link }, index) => {
					return (
						<a
							href={link}
							key={index}
							target="_blank"
							rel="noreferrer noopener"
						>
							{icon}
						</a>
					);
				})}
			</div>
		</Card>
	);
};

export default Trainer;
