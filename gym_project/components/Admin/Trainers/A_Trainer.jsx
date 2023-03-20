import React,{useState,useEffect} from 'react'
import SingleTrainer from './SingleTrainer'
import HeaderImage from "../../../images/header_bg_5.jpg";
import Header from '@/components/Header';
import axios from 'axios';
import {
	Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Button, Image,
} from '@chakra-ui/react'
import {  FormControl, FormLabel} from '@chakra-ui/react'
const A_Trainer = ({ alltrainers }) => {
	const [trn,setTrn]=useState(alltrainers);
	const [n_name, setNname] = useState();
	const [n_job, setNjob] = useState();
	const [img, setImg] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
	const { isOpen, onOpen, onClose } = useDisclosure()
	const updateHandler = async (_id, name, image, job) => {
		// console.log(_id+" name- "+ name +"img-"+ image + "job-"+job);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(`/api/trainers/${_id}`, { name, image, job }, config);
		console.log(data);
	}

	const updatePic = (pics) => {
		if (pics.type === "image/jpeg" || pics.type === "image/png") {
			const data = new FormData();
			data.append("file", pics);
			data.append("upload_preset", "eventmanage");
			data.append("cloud_name", "dxxu4powb");
			fetch("https://api.cloudinary.com/v1_1/dxxu4powb/image/upload", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					setImg(data.url.toString());
				})
				.catch((err) => {
				});
		} else {
			
		}
	};

	const AddTrainer=async(name, image, job )=>{
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(`/api/trainers`, { name, image, job }, config);
		setImg("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
		setTrn([...trn,data]);
		onClose();
	}
	const deleteHandler=async(_id)=>{
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.delete(`/api/trainers/${_id}`, config);
		setTrn(trn.filter(t=>t._id!==_id));
	}
	return (
		<div>
			
			<Header image={HeaderImage} title="Our Trainers">
				Adipisicing labore laboris ea sunt cillum ea velit.Adipisicing labore la
				boris ea sunt cillum ea velit. sunt cillum ea velit.
			</Header>
			<button onClick={onOpen} className='btn sm prg add'>+ Add New Trainer</button>
			
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Trainer</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Image src={img} boxSize='150px'
							objectFit='cover' ml="auto" mr="auto"
						/>
						<br></br>
						<FormControl>
							<Input type='file' onChange={(e) => updatePic(e.target.files[0])}
								accept=".png, .jpg, .jpeg" />
						</FormControl>
						<FormControl>
							<FormLabel>Enter Name </FormLabel>
							<Input type='text' onChange={(e) => setNname(e.target.value)} />
						</FormControl>
						<FormControl>
							<FormLabel>Enter Job </FormLabel>
							<Input type='text' onChange={(e) => setNjob(e.target.value)} />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={() => AddTrainer(n_name,img,n_job)}>
							Add Trianer
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<section className="trainers">
				<div className="container trainers__container">
					{trn.map(({ _id, name, image, job }) => {
						return (
							<>
							<SingleTrainer key={_id} _id={_id} name={name} image={image} job={job} updateHandle={updateHandler} deleteHandle={deleteHandler}></SingleTrainer>
							</>
						)


					})}
				</div>
			</section>
		</div>
	)
}

export default A_Trainer
