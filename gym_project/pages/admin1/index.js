// Models Import 
import Faqs from '@/Backend/models/Faqs';
import Program from '@/Backend/models/Program';
import Testimonials from '@/Backend/models/Testimonials';
import Trainers from '@/Backend/models/Trainers';

// Components
import AFAQs from '@/components/Admin/Faqs/AFAQs';
import A_Program from '@/components/Admin/Programs/A_Program';
import React from 'react'
import mongoose from "mongoose";
import { ChakraProvider } from '@chakra-ui/react';

const index = ({ allfaq,allprograms,alltestimonials,alltrainers }) => {
  
  return (
    <div className='admin_body'>
      <ChakraProvider>
        <A_Program></A_Program>
        <AFAQs allfaq={allfaq}></AFAQs>
        
      </ChakraProvider>
    </div >
  )
}
export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }

  let allfaqs = await Faqs.find();
  let allprograms=await Program.find();
  let alltestimonials=await Testimonials.find();
  let alltrainers=await Trainers.find();
  return {
    props: { allfaq: JSON.parse(JSON.stringify(allfaqs)) ,
              allprograms:JSON.parse(JSON.stringify(allprograms)),
              alltestimonials:JSON.parse(JSON.stringify(alltestimonials)),
              alltrainers:JSON.parse(JSON.stringify(alltrainers)),   
            }
  }
}
export default index
