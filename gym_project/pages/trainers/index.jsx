
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { trainers } from "../../components/data";
import Trainer from "../../components/Trainer";
import Trainers from "@/Backend/models/Trainers";
import {useState} from 'react';
const Trainers = ({alltrainers}) => {
	const [trainers,SetTrn]=useState(alltrainers);
	return (
		<>
			<Header image={HeaderImage} title="Our Trainers">
				Adipisicing labore laboris ea sunt cillum ea velit.Adipisicing labore la
				boris ea sunt cillum ea velit. sunt cillum ea velit.
			</Header>
			<section className="trainers">
				<div className="container trainers__container">
					{trainers.map(({ id, image, name, job, socials }) => {
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{ icon: <BsInstagram />, link: socials[0] },
									{ icon: <AiOutlineTwitter />, link: socials[1] },
									{ icon: <FaFacebookF />, link: socials[2] },
									{ icon: <FaLinkedinIn />, link: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export async function getServerSideProps(context) {

	if (!mongoose.connections[0].readyState) {
	  await mongoose.connect(process.env.MONGO_URI)
  
	}
  
	let alltrainers = await Trainers.find();
	
	return {
	  props: {
		alltrainers: JSON.parse(JSON.stringify(alltrainers)),
		
	  }
	}
  }
export default Trainers;
