// Models Import 
import Faqs from '@/Backend/models/Faqs';
import Programs from '@/Backend/models/Program';
import Tst from '@/Backend/models/Testimonials';
import Trainers from '@/Backend/models/Trainers';
import Plans from '@/Backend/models/Plans';

// Components
import AFAQs from '@/components/Admin/Faqs/AFAQs';
import A_Program from '@/components/Admin/Programs/A_Program';
import React from 'react'
import mongoose from "mongoose";
import { ChakraProvider } from '@chakra-ui/react';
import A_Plans from '@/components/Admin/Plans/A_Plans';
import A_Trainer from '@/components/Admin/Trainers/A_Trainer';

const index = ({ allfaq, allprograms, alltestimonials, alltrainers, allplans }) => {

  return (
    <div className='admin_body'>
      <ChakraProvider>
        <A_Program allprograms={allprograms}></A_Program>
        <A_Plans allplans={allplans}></A_Plans>
        <AFAQs allfaq={allfaq}></AFAQs>
        <A_Trainer alltrainers={alltrainers}></A_Trainer>
      </ChakraProvider>
    </div >
  )
}
export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }

  let allfaqs = await Faqs.find();
  let allprograms = await Programs.find();
  let alltestimonials = await Tst.find();
  let alltrainers = await Trainers.find();
  let allplans = await Plans.find();
  
  return {
    props: {
      allfaq: JSON.parse(JSON.stringify(allfaqs)),
      allprograms: JSON.parse(JSON.stringify(allprograms)),
      alltestimonials: JSON.parse(JSON.stringify(alltestimonials)),
      alltrainers: JSON.parse(JSON.stringify(alltrainers)),
      allplans: JSON.parse(JSON.stringify(allplans)),
    }
  }
}
export default index
