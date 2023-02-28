
import { Inter } from 'next/font/google'

import Home1 from '../components/home1/Home1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<>
			<Home1></Home1>
		</>
	);
}
