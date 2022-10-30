import  React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import Video from '../voices/person.mp4'
import SpeechRecog from './SpeechRecog';
import { toast } from 'react-toastify';

const Other=()=>{
     
    const videoElem = useRef();

    const [recordedAudioText,setRecordedAudioText]=useState('')
    const [videoText,setVideoText]=useState('')
    const [userEnteredText,setUserEnteredText]=useState('')

    const handleSendQuery=()=>{
        if(userEnteredText===''){
            toast.error("Please enter some query.")
            return ;
        }
        setUserEnteredText('')
        videoElem.current.currentTime=0;
        videoElem.current.play();
    }

    return (<>

        {/* Navbar */}
        <div  className='h-[60px]   p-4 w-100 shadow flex '>
                 <Link to="/dashboard"   ><div className=' cursor-pointer'> <span className='text-lg'>← </span>Back to Dashboard</div></Link>
          </div>

          {/* eila intraction */}
          <div className='w-[100%] flex' >
            <div className='w-[50%] p-4'>
                 
                 <div className='w-[100%] h-[300px] border-[2px] shadow'>
                 <video controls ref={videoElem} >
                    <source src={Video}  />  
                </video>
                 </div>

            </div>

            {/* right content */}
            <div className='w-[50%] p-4'>
                 <textarea className='w-[100%] h-[200px] mt-[12px] border-[2px] p-2' placeholder='Paragraph will show here' value={videoText}></textarea>

                 <SpeechRecog setRecordedAudioText={setRecordedAudioText} handleSendQuery={handleSendQuery}/>

                 <div className='flex mt-2'> 

                    <div className='w-[80%] h-[60px] border-[2px]  '><input className=' px-2 w-[100%] h-[100%]' onChange={((e)=>setUserEnteredText(e.target.value))} value={userEnteredText} placeholder='Enter Question?'/> </div>
                    <div className='w-[20%] h-[60px] border-[2px]    '> <button className='w-[100%] h-[100%]' style={{px:2,background:'#1E2772',color:'white'}} onClick={handleSendQuery}>Send</button> </div>


                 </div>
            </div>
          </div>
    
    </>)

}
export default Other