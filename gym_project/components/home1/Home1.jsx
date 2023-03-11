
// Backend Model Import 
import Programs from "@/Backend/models/Program"
import Faqs from "@/Backend/models/Faqs";


import MainHeader from "../MainHeader";
import Program from "../Program";
import Values from "../Values";
import FAQs from "../FAQs";
import Testimonial from "../Testimonial";
import Navbar from "../Navbar";


const Home1 = ({allfaqs,allprograms}) => {
	return (
		<>
			<Navbar />
			<MainHeader />
			<Program programs={allprograms}/>
			<Values />
			<FAQs faqs={allfaqs}/>
			<Testimonial />

		</>
	);
};

export default Home1;
