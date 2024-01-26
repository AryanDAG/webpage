import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'   
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

   //  console.log("ye raha mera form type");
   //  console.log(formtype)
  return (
    <div className='flex justify-between w-11/12  max-w-[1100px] mx-auto gap-x-12  gap-y-0 '>

       <div className='w-11/12 max-w-[450px]'>
         <h1
         className='text-orange-500 font-semibold text-[1.875rem] leading-[2.375rem]'
         >
         {title}</h1>
         <p className='text-[1.125rem leading[1.625rem] mt-4'>
            <span className='text-black'>{desc1}</span>
            <br/>
            <span className='text-rich italic'>{desc2}</span>
         </p>

         {formtype === "signup" ?
         (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
         (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
         }

         <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='text-black font-medium leading[1.375rem]'>
                OR
            </p>
            <div className='w-full h-[1px] bg-richblack-800'></div>
         </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-black
         border border-black px-[12px] py-[8px] gap-x-2 mt-6'>
        <FcGoogle/> 
            <p>Sign up with Google</p>
        </button>


       </div>

       <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage}
        alt="pattern"
        loading="lazy"
      />
       

        <img src={image}
        alt="Students"
        loading="lazy" 
         className='absolute top-4 right-4'
        />
       </div>

    </div>
  )
}

export default Template