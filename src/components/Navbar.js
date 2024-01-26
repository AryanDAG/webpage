import React from 'react'
import logo from "../assets/logo.png"
import{Link} from "react-router-dom"
import {toast} from "react-hot-toast"



const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto'>

        <Link to="/">
            <img src={logo} alt="Logo" width={120} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-gray-50 font-bold text-base border-2  border-solid  md:rounded-lg bg-transparent hover:bg-transparent active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-lg flex gap-x-12'>
                <li
                 className='px-0 py-0 mx-5 my-1 hover:text-[#fed7aa]  '>
                    <Link to="/">Home</Link>
                </li>
                <li
                className='px-0 py-0 mx-5 my-1 hover:text-[#fed7aa]'>
                    <Link to="/">Career</Link>
                </li>
                <li
                className='px-0 py-0 mx-5 my-1 hover:text-[#fed7aa]'>
                    <Link to="/">About Us</Link>
                </li>
                <li
                className='px-1 py-0 mx-5 my-1 hover:text-[#fed7aa]'>
                    <Link to="/">Contact Us</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}

        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className=" text-white font-bold py-[12px] px-[18px] rounded-[10px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                     "
                     >
                        Log in
                    </button>
                </Link>

            }

            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='text-white font-bold py-[12px] px-[18px] rounded-[10px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                     className='bg-slate-600  text-white py-[8px] px-[12px] rounded-[8px] 
                    border border-black' >
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack text-white py-[8px] px-[12px] rounded-[8px] 
                    border border-black'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar