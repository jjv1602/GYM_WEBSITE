
import Header from "../../../components/Header";
import HeaderImage from "../../../images/header_bg_4.jpg";
import Card from "../../../components/UI/Card";
import SinglePlans from "./SinglePlans";
import axios from "axios";
import {useState,useEffect} from 'react';
const A_Plans = ({ allplans }) => {
	const update = async(id, name, desc, price) => {
		console.log("sdads");
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		console.log(id+" akdn"+name +"deas"+desc+"asda"+price);
		const { data } = await axios.put(`/api/plans/${id}`, { name, desc, price }, config);
		console.log("Updated Plan");
	}
	const [plans,setPlans]=useState(allplans);
	
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
				Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
				reprehenderit esse minim.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					
					{plans.map(({ _id, name, desc, price, features }) => {
						return(<>
						<SinglePlans id={_id} name={name} desc={desc} price={price} features={features} update={update}></SinglePlans>
						</>
					)
						
					})}
				</div>
			</section>
		</>
	);
};

export default A_Plans;
