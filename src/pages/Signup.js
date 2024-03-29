import React from 'react'
import signupImg from "../assets/signup.jpg"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millions learning to code with StudyNotion for free "
    desc1="Build skills for today, tomorrow, beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
/>
  )
}

export default Signup