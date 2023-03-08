import React from 'react'
import Card from "../../UI/Card";
import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import EdiText from 'react-editext';
import { Button, useToast } from '@chakra-ui/react';
const EditProgram = (props) => {
  const toast = useToast();
  const [ctle, setCtle] = useState(props.title);
  const [cinfo, setInfo] = useState(props.info);
  const [path, setPath] = useState(props.path);
  const updateHandler = () => {
    props.update(props.id, ctle, cinfo, path);
    toast({
      title: `Updated `,
      description: "Updated Successfully ",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  const deleteHandler = () => {
    props.deleteprops(props.id);
  }
  const StyledEdiText = styled(EdiText)`
	button {
		border-radius: 4rem;
	
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
    <div>
      <Card className="programs__program" key={props.id}>
        {/* <span>{props.icon}</span> */}
        <h4> <StyledEdiText
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
          onSave={(e) => setCtle(e)}
          value={ctle}
        /></h4>
        <small>
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
          onSave={(e) => setInfo(e)}
          value={cinfo}
        />
        </small>
        <br></br>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button className='btn sm prg' onClick={updateHandler}> Update </button>
          <button className='btn sm prg' onClick={deleteHandler}> Delete </button>
        </div>
      </Card>
    </div>
  )
}

export default EditProgram
