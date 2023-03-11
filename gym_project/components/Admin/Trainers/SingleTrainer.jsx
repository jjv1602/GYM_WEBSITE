import React, { useState } from 'react'
import Card from '@/components/UI/Card';
import { Image, useToast } from '@chakra-ui/react'
import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input
} from '@chakra-ui/react'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import styled from '@emotion/styled';
import EdiText from 'react-editext';
const SingleTrainer = (props) => {
    const [cname, setCname] = useState(props.name);
    const [cjob, setCjob] = useState(props.job);
    const [img, setImg] = useState(props.image);
    const toast = useToast();
    const   socials= ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
   const soc=[
        { icon: <BsInstagram />, link: socials[0] },
        { icon: <AiOutlineTwitter />, link: socials[1] },
        { icon: <FaFacebookF />, link: socials[2] },
        { icon: <FaLinkedinIn />, link: socials[3] },
    ]
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
            toast({
                title: `Error `,
                description: "Please Select a jpeg image",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    const updateHandler=()=>{
        props.updateHandle(props._id,cname,img,cjob);
    }
    const deleteHandler=()=>{
        props.deleteHandle(props._id);
    }
    const StyledEdiText = styled(EdiText)`
	button {   
		border-radius: 4rem;
    margin-top:-2%;
	  }
	  button[editext="edit-button"] {
		background: #ffffff;
		width: 50px;
    &:hover {
      background: #000000;
      color: #fff;
    }
	  }
	  button[editext="save-button"] {
		width: 50px;
		&:hover {
		  background: greenyellow;
		}
	  }
	  button[editext="cancel-button"] {
		&:hover {
		  background: crimson;
		  color: #fff;
		}
	  }
	  `
    return (
    
        <Card className="trainer">
            <div className="trainer__Image">
                <Image src={img}  />
                <br></br>
                <FormControl>
                    <Input type='file' onChange={(e) => updatePic(e.target.files[0])} 
                        accept=".png, .jpg, .jpeg" />
                </FormControl>
            </div>
            <h3>
              <StyledEdiText
          
          type='textarea'
          editOnViewClick={true}
          inputProps={{
            className: 'textarea',
            placeholder: 'Type your content here',
            style: {
              outline: 'none',
              width: '30vw',
              color: "white",
              background: 'hsl(var(--gray-hue), 44%, 25%)',
              fontSize: '1.3rem',
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "lighter",

            },
            rows: 2,
          }}
          onSave={(e) => setCname(e)}
          value={cname}
        />
        </h3>
            <StyledEdiText
          type='textarea'
          editOnViewClick={true}
          inputProps={{
            className: 'textarea',
            placeholder: 'Type your content here',
            style: {
              outline: 'none',
              width: '30vw',
              color: "white",
              background: 'hsl(var(--gray-hue), 44%, 25%)',
              fontSize: '1.3rem',
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "lighter",

            },
            rows: 2,
          }}
          onSave={(e) => setCjob(e)}
          value={cjob}
        />
        <div className="trainer__socials">
				{soc.map(({ icon, link }, index) => {
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
            <div style={{display:"flex"}}>
            <button className="btn " onClick={() => updateHandler()}>Update Trainer</button>
            <button className="btn " onClick={() => deleteHandler()}>Delete Trainer</button>
            </div>
        </Card>

    )
}

export default SingleTrainer
