import React, { useState } from 'react'
import {User, Mail,Lock} from 'lucide-react'
import {motion} from "framer-motion"
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    const handleSignUp =(e)=>{
        e.preventDefault();

    }
  return (
    <>
    <motion.div 
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    className='max-w-md w-full bg-gray-800 bg-opacity-50
    backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    
    >
        <div className='p-8'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500
            text-transparent bg-clip-text'>Login Here</h2>

            
        <form onSubmit={handleSignUp}>

           <Input
          icon={Mail}
          type = 'text'
          placeholder = 'Email'
          value ={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
             <Input
          icon={Lock}
          type = 'password'
          placeholder = 'Password'
          value ={password} 
          onChange={(e) => setPassword(e.target.value)}
          />

          {/* <motion.button className='mt-5 w-full py-3 px4 bg-gradient-to-r from-green-500 to-emerald-600 text-white
          font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-200' 
          whileHover={{scale:1.02}}
          whileTap={{scale:0.98}}
          type ='submit'>
            
           Login
          </motion.button> */}
        </form>
        </div>
        {/* <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center' >
          <p className='text-sm text-gray-400'>Already have an account?

          <Link to="/login" className='text-green-400 hover:underline'>Login</Link>
          </p>
          
        </div> */}



    </motion.div>
    </>
  )
}

export default Login
