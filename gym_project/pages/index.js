
import { Inter } from 'next/font/google'
// Backend Model Import 
import Programs from "@/Backend/models/Program"
import Faqs from "@/Backend/models/Faqs";
import mongoose from "mongoose";
import Home1 from '../components/home1/Home1'
import Testimonials from "@/Backend/models/Testimonials";
const inter = Inter({ subsets: ['latin'] })

export default function Home({allfaqs,allprograms}) {
  return (
		<>
			<Home1 allfaqs={allfaqs} allprograms={allprograms}></Home1>
		</>
	);
}
export async function getServerSideProps(context) {

	if (!mongoose.connections[0].readyState) {
	  await mongoose.connect(process.env.MONGO_URI)
  
	}
  
	let allfaqs = await Faqs.find();
	let allprograms = await Programs.find();
	let alltestimonials = await Testimonials.find();
	console.log("allprograms");
	console.log(allprograms);
	return {
	  props: {
		allfaqs: JSON.parse(JSON.stringify(allfaqs)),
		allprograms: JSON.parse(JSON.stringify(allprograms)),
		alltestimonials: JSON.parse(JSON.stringify(alltestimonials)),
	  }
	}
  }
