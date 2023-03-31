 ;
 import Card from "./UI/Card";
 
 import { Image} from '@chakra-ui/react'
const Trainer = ({ image, name, job, socials }) => {
	return (
		<Card className="trainer">
			<div className="trainer__Image">
				<Image src={image} boxSize='150px'
					objectFit='cover' ml="auto" mr="auto"
				/>
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
