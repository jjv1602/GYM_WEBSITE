
import { plans } from "../../components/data.js";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../components/UI/Card";
import mongoose from "mongoose";
import {useState} from 'react';
import Plans from "@/Backend/models/Plans.js";
const PlansPg = ({allplans}) => {
	const [plans,setPlans]=useState(allplans);
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
				Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
				reprehenderit esse minim.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`$ ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Plan</button>
							</Card>
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

	let allplans = await Plans.find();

	return {
		props: {
			allplans: JSON.parse(JSON.stringify(allplans))
		}
	}
}
export default PlansPg;
