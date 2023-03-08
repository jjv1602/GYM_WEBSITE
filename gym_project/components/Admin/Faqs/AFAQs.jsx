
import { FaQuestion } from "react-icons/fa";
import Faqs from '@/Backend/models/Faqs';
import AFAQ from "./AFAQ";
import axios from "axios";
import SectionHead from "../../SectionHead";
import {
	Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input,
} from '@chakra-ui/react'
import {
	FormControl,
	FormLabel,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import {useState,useEffect} from 'react'
const AFAQs = ({ allfaq }) => {
	const [faqs,setFaqs]=useState(allfaq);
  useEffect(() => { 
    (async()=>{
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/faq`, config);
      setFaqs(data);
      
    })()
  }, []);
	const [newq, setnewq] = useState();
	const [newa, setnewa] = useState();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const Addfaq = async (question, answer) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(`/api/faq`, { question, answer }, config);
		onClose();
	}

	const update = async (_id, question, answer) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(`/api/faq/${_id}`, { question, answer }, config);
	}
	const Delete = async (_id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.delete(`/api/faq/${_id}`, config);
		console.log("dadsa" + data);
	}

	return (
		<section className="faqs">
			<div className="container faqs__container">
				<SectionHead icon={<FaQuestion />} title="Edit FAQs" />
				<br></br>
				{/* Open Modal to add Faq */}
				<button onClick={onOpen} className='btn sm prg add'>+ Add New </button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Add Faq </ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl>
								<FormLabel>Enter Question </FormLabel>
								<Input type='text' onChange={(e) => setnewq(e.target.value)} />
							</FormControl>
							<FormControl>
								<FormLabel>Enter Answer </FormLabel>
								<Input type='text' onChange={(e) => setnewa(e.target.value)} />
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3}  onClick={() => Addfaq(newq, newa) }>
								Add Faq
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
				<div className="faqs__wrapper">
					{faqs.map(({ _id, question, answer }) => {
						return <AFAQ key={_id} id={_id} question={question} answer={answer} update={update} deleteprops={Delete} />;
					})}
				</div>
			</div>
		</section>
	);
};


export default AFAQs;
