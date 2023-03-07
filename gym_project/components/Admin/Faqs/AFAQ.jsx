import React, { useState } from 'react';
import EdiText from 'react-editext';
import { useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
const AFAQ = (props) => {
	const toast=useToast();
	const [loading,setLoading]=useState(false);
	const [ques, setQuestion] = useState(props.question);
	const [ans, setAns] = useState(props.answer);
	
	const updateHandler=()=>{
		setLoading(true);
		props.update(props.id,ques,ans);
		toast({
			title: `Faq- ${ques}  Updated `,
			description: "We",
			status: 'success',
			duration: 9000,
			isClosable: true,
		})
	}
	const deleteHandler=()=>{
		props.deleteprops(props.id);
	}
	const StyledEdiText = styled(EdiText)`
	button {
		border-radius: 4rem;
		
	  }
	  button[editext="edit-button"] {
		background: #ffffff;
		width: 50px;
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
		<div className="faq">
			<h4>
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
					onSave={(e)=>setQuestion(e)}
					value={ques}
				/>
			</h4>
				
				 <StyledEdiText
				editOnViewClick={true}
					type='textarea'
					inputProps={{
						className: 'textarea',
						placeholder: 'Type your content here',
						style: {
							outline: 'none',
							width: '30vw',
							color: "white",
							background: '#282644',
							fontSize: '1rem',
							fontFamily: "Montserrat, sans-serif",
							fontWeight: "lighter",
							lineHeight: "1.7",
						},
						rows: 5,
						
					}}
					value={ans}
					onSave={(e)=>setAns(e)}
				/>
				
			<div style={{ display: "flex" }}>
				<button className='btn' onClick={updateHandler}> Update </button>
				<button className='btn' onClick={deleteHandler}> Delete </button>
			</div>
		</div>
	);
};

export default AFAQ;
