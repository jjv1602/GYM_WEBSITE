
import Header from "../../../components/Header";
import HeaderImage from "../../../images/header_bg_4.jpg";
import Card from "../../../components/UI/Card";
import SinglePlans from "./SinglePlans";
import axios from "axios";
import {useState,useEffect} from 'react';
const A_Plans = ({ allplans }) => {
	const update = async(id, name, desc, price) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(`/api/plans/${_id}`, { name, desc, price }, config);
	}
	const [plans,setPlans]=useState(allplans);
	useEffect(() => { 
		(async()=>{
		  const config = {
			headers: {
			  "Content-Type": "application/json",
			},
		  };
		  const { data } = await axios.get(`/api/plans`, config);
		  setPlans(data);
		  console.log("called plans");
		})()
	  }, []);
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
				Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
				reprehenderit esse minim.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					
					{plans.map(({ id, name, desc, price, features }) => {
						return(<>
						<SinglePlans id={id} name={name} desc={desc} price={price} features={features} update={update}></SinglePlans>
						</>
					)
						
					})}
				</div>
			</section>
		</>
	);
};

export default A_Plans;
