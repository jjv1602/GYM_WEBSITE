import React, { useState } from 'react'
import Card from "../../../components/UI/Card";
import styled from '@emotion/styled';
import EdiText from 'react-editext';
import { Button, useToast } from '@chakra-ui/react';
const SinglePlans = ({ id, name, desc, price, features,update}) => {
  const toast = useToast();
  const [cname, setCname] = useState(name);
  const [cdesc, setDesc] = useState(desc);
  const [cprice, setPrice] = useState(`${price}`);
  const [cfeatures, setCfet] = useState([features]);
  const updateHandler = () => {
    update(id, cname, cdesc, cprice);
    toast({
      title: `Updated `,
      description: "Updated Successfully ",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
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

    <Card key={id} className="plan">
      <h3 >
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
        /></h3>
      <small style={{
        display: "flex", justifyContent: "center",
        alignItems: "center"
      }} ><StyledEdiText
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
          onSave={(e) => setDesc(e)}
          value={cdesc}
        /></small>
      <h1><StyledEdiText
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
        onSave={(e) => setPrice(`${e} `)}
        value={cprice}
      /></h1>
      <h4>Features</h4>
      {
        cfeatures.map((feat, index) => {
          return (
            <p key={index} >
              {feat}
            </p>
          );
        })
      }
      <button className="btn lg" onClick={() => updateHandler()}>Update Plan</button>
    </Card >
  )
}

export default SinglePlans
