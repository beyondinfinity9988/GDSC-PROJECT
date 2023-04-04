import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Middle from '@/components/Middle.js'
 import App from '@/components/Slider'
 import Hero from '../components/Hero.js'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    <div className="font-mono  bg-orange-400  font-bold text-2xl">

 <div className=' bg-cover pt-4  flex justify-between bg-orange-400'> 
<h1 className='text-4xl bg-orange-400 justify-between  pt-4 pl-4 font-mono font-extrabold'> HUNGERREMOVERS 
    </h1>
    <Image src="/images/bg1.jpg" className='justify-end  y7=600   pr-0'
    
    width={80} height={30} />
 < h1 className='text-2xl pr-10'>World Is IN
 <span className='flex pr-30'>  your Hands
   </span>
  </h1>
  
  </div>
 < div>
    <p className='text-2xl font-mono pb-1 pt-4 text-orange-900 pl-10'> "Yes,even before the COVID-19 pandemic and the current cost-of-living crisis  </p> <b> </b><h1 className=' text-white font-bold pl-10 flex font-mono pb-1 text-2xl'> are accounted for, the data shows that 1.2 billion people in 111 developing countries,  </h1>
    <h1 className=' text-2xl pb-2 pl-10 text-green-700 font-mono font-bold'>live in acute multidimensional poverty".</h1> 

   </div>
    
    <div className=' bg-orange-400  flex justify-between items-center  '>
    <Image src="/images/HU2.jpg" className='w-[26rem]  h-[20rem]   pl-5 pt-3  rounded-bl-extraLarge rounded-tr-extraLarge object-cover '
    alt="hunger"
    width={900} height={300}/>
  

 < h1 className='text-blue-500 pl-19 px-2 ' >No more empty stomachs
</ h1>
< h1 className='text-blue-500 pl-10  ' > Share your plate, fight world hunger

</ h1>
< h1 className='text-blue-500 px-5 pl-2 pr-0 '    >Give hope, give food, give life.
</ h1>
  <Image src="/images/HU3.jpg" className='w-[25rem]  h-[20rem]  pr-5 pl-5 pt-3  rounded-bl-extraLarge rounded-tr-extraLarge object-cover '
    alt="hunger" 
    width={900} height={300}/>
   </div>
<div className='flex text-center items-center justify-center'>
< button className='rounded px-3 py-4 bg-gray-700 font-normal animate-bounce  text-white hover:bg-orange-500'>
 DONATE NOW 
</ button>
</div>
   <div className=''>
 <h1 className='text-blue-500 pl-4 pr-4 pt-4 pb-3'> <span className='  text-black'> HUNGERREMOVERS </span>is a platform where NGO Owners can ragister their NGO's and then can link thereselves with other NGO so that at any moment when they need help others can make direct help them out.
   </ h1>
</div>
< div className='flex py-2 relative pl-12 justify-between pb-5  flex-row pr-12 bg-cover bg-black pt-5 flex-wrap '>

 <button className=' px-2  hover:bg-white text-center bg-orange-500 text-black  h-[2rem]'>Register Yourself 
 </button>
 <button className=' px-2  hover:bg-orange-500 text-center text-black bg-white h-[2rem]'> Have any Jobs for them 
</button>
 <button className=' px-2  hover:bg-orange-500 text-center text-black bg-green-700 h-[2rem]'> Link Your NGO
</button>
</div>
< Middle/>
 <App/>
< Hero/>
<div className='bg-white h-[50rem]'>

</div>
  </div>
  )

}
