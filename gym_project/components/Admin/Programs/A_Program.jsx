
import { FaCrown } from "react-icons/fa";
import SectionHead from "../../SectionHead";
import Card from "../../UI/Card";
import Link from 'next/link';
import { AiFillCaretRight } from "react-icons/ai";
import EditProgram from "./EditProgram";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useToast, Button } from "@chakra-ui/react";
import {
	Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input,
} from '@chakra-ui/react'
import {
	FormControl,
	FormLabel,
} from '@chakra-ui/react'
const A_Program = (props) => {
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	// Add new 
	const [title, setTitle] = useState();
	const [info, setInfo] = useState();
	const [path, setPath] = useState();
	const [allprograms, setPrg] = useState(props.allprograms);
	useEffect(() => {
		(async () => {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.get(`/api/programs`, config);
			setPrg(data);
			console.log("called");
		})
	}, []);
	const update = async (_id, title, info, path) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(`/api/programs/${_id}`, { title, info, path }, config);
	}
	const Delete = async (_id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.delete(`/api/programs/${_id}`, config);
		toast({
			title: `Deleted `,
			description: "Deleted Successfully ",
			status: 'success',
			duration: 9000,
			isClosable: true,
		})
	}
	const Addprg = async (title, info, path) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(`/api/programs`, { title, info, path }, config);
		onClose();
	}
	return (
		<>
			<section className="programs">
				<div className="container programs container ">
					
					<SectionHead icon={<FaCrown />} title="Programs" />
					<br></br>
					<button onClick={onOpen} className='btn sm prg add'> + Add New </button>
					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Add Plan </ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<FormControl>
									<FormLabel>Enter Title </FormLabel>
									<Input type='text' onChange={(e) => setTitle(e.target.value)} />
								</FormControl>
								<FormControl>
									<FormLabel>Enter Info </FormLabel>
									<Input type='text' onChange={(e) => setInfo(e.target.value)} />
								</FormControl>
								<FormControl>
									<FormLabel>Enter Path </FormLabel>
									<Input type='text' onChange={(e) => setPath(e.target.value)} />
								</FormControl>
							</ModalBody>

							<ModalFooter>
								<Button colorScheme='blue' mr={3} onClick={() => Addprg(title, info, path)}>
									Add Plan
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
					<div className="program__wrapper">
						{allprograms.map(({ _id, icon, title, info, path }) => {
							return (
								<EditProgram key={_id} id={_id} title={title} info={info} path={path} update={update} deleteprops={Delete}></EditProgram>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default A_Program;
