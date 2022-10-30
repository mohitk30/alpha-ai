import React from 'react'
import LoginIllustrator from '../img/login-illustrator.svg'
 import { CgCardClubs } from 'react-icons/cg';
import { FaLock } from 'react-icons/fa'; 
import FormControl from '@mui/material/FormControl'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Link} from  'react-router-dom'
import './login.css'
  

const Login = () => {
     

    const [isCoordinator, setIsCoordinator] = React.useState(true);
    const [password, setPassword] = React.useState('');
    

    return (

        <div className="w-[100%] flex h-[100vh]">
            {/* Login options */}
            <div className='md:w-[40%] w-[100%]  shadow-2xl'>
               
                <div className='mt-[22%] m-auto ml-[15%]'>
                     <FormControlLabel sx={{margin:'auto',alignItems:'center'}} control={<Switch onChange={(()=>{
                        setIsCoordinator((pre)=>{
                            return !pre;
                        })
                        
                     })} 
                     />} label={""} /> {isCoordinator===false?'Register':'Login'}
                </div>

                
                
                {isCoordinator===false?
                 
                (<div className='w-[80%] m-auto mt-[12px]'>
                     <div className='text-center mt-5 font-bold'>Register  your account</div>


                     {/* Email input */}
                     <div className='w-[80%] m-auto mt-[22px] flex' password>
                        <FormControl variant="standard" sx={{ width: '100%', height: '48px', background: '#F1F3F6', outline: 'none', border: 'none' }} >
                            {/* <InputLabel id="select-club-input"   sx={{width:'100%',outline:'none',border:'none'}}>Select Club</InputLabel> */}

                            <TextField InputProps={{ disableUnderline: true }} sx={{ height: 40, background: '#F1F3F6' }} id="filled-basic1" label="Email" variant="filled" size="small" background="#F1F3F6"   />
                        </FormControl>
                        <div className='h-[48px] w-[48px] bg-[#1E2772] rounded-tr rounded-br'> <CgCardClubs style={{ color: 'white', fontSize: '2rem', margin: 'auto', marginTop: '6px' }} /> </div>
                    </div>




                    {/* password input */}
                    <div className='w-[80%] m-auto mt-[22px] flex' password>
                        <FormControl variant="standard" sx={{ width: '100%', height: '48px', background: '#F1F3F6', outline: 'none', border: 'none' }} >
                            {/* <InputLabel id="select-club-input"   sx={{width:'100%',outline:'none',border:'none'}}>Select Club</InputLabel> */}

                            <TextField InputProps={{ disableUnderline: true }} sx={{ height: 40, background: '#F1F3F6' }} id="filled-basic2" label="Password" variant="filled" size="small" background="#F1F3F6"   />
                        </FormControl>
                        <div className='h-[48px] w-[48px] bg-[#1E2772] rounded-tr rounded-br'> <FaLock style={{ color: 'white', fontSize: '1.5rem', margin: 'auto', marginTop: '10px' }} /> </div>
                    </div>



                    {/* login button */}
                    <div className='w-[80%] m-auto mt-[22px]'>
                        <Link to="/dashboard" sx={{textDecoration:'none'}}> 
                          <Button className='login-button' sx={{ background: '#1E2772', color: 'white', width: '100%' }}   >Register</Button>
                        </Link>
                    </div>



                    {/* forgot password */}
                    <div className='text-center mt-5 cursor-pointer'>Forgot password</div>
                </div>):

               
                <div className='w-[80%] m-auto mt-[12px]'>
                     <div className='text-center mt-5 font-bold'>Login into your account</div>

                     {/* Email input */}
                     <div className='w-[80%] m-auto mt-[22px] flex' password>
                        <FormControl variant="standard" sx={{ width: '100%', height: '48px', background: '#F1F3F6', outline: 'none', border: 'none' }} >
                            {/* <InputLabel id="select-club-input"   sx={{width:'100%',outline:'none',border:'none'}}>Select Club</InputLabel> */}

                            <TextField InputProps={{ disableUnderline: true }} sx={{ height: 40, background: '#F1F3F6' }} id="filled-basic3" label="Email" variant="filled" size="small" background="#F1F3F6"   />
                        </FormControl>
                        <div className='h-[48px] w-[48px] bg-[#1E2772] rounded-tr rounded-br'> <CgCardClubs style={{ color: 'white', fontSize: '2rem', margin: 'auto', marginTop: '6px' }} /> </div>
                    </div>




                    {/* password input */}
                    <div className='w-[80%] m-auto mt-[22px] flex' password>
                        <FormControl variant="standard" sx={{ width: '100%', height: '48px', background: '#F1F3F6', outline: 'none', border: 'none' }} >
                            {/* <InputLabel id="select-club-input"   sx={{width:'100%',outline:'none',border:'none'}}>Select Club</InputLabel> */}

                            <TextField InputProps={{ disableUnderline: true }} sx={{ height: 40, background: '#F1F3F6' }} id="filled-basic4" label="Password" variant="filled" size="small" background="#F1F3F6" value={password} onChange={((e) => { setPassword(e.target.value) })} />
                        </FormControl>
                        <div className='h-[48px] w-[48px] bg-[#1E2772] rounded-tr rounded-br'> <FaLock style={{ color: 'white', fontSize: '1.5rem', margin: 'auto', marginTop: '10px' }} /> </div>
                    </div>



                    {/* login button */}
                    <div className='w-[80%] m-auto mt-[22px]'>
                       <Link to="/dashboard" sx={{textDecoration:'none'}}> 
                           <Button className='login-button' sx={{ background: '#1E2772', color: 'white', width: '100%' }}   >Log In</Button>
                       </Link>
                    </div>



                    {/* forgot password */}
                    <div className='text-center mt-5 cursor-pointer'>Forgot password</div>
                </div>

                }

                




            </div>
             




            {/* Asset */}
            <div className='md:w-[60%] w-[0%] md:visible invisible'>
                <img className=" items-center justify-center h-[70%] w-[70%] m-auto mr-[10%] mt-[15%]" src={LoginIllustrator} alt="" ></img>

            </div>
        </div>
    )
}

export default Login





