import  React,{useState,useRef} from 'react'
import { Box } from '@mui/system' 
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Faq from './Faq';
import { Link } from 'react-router-dom';
import Voices from '../voices/elia_voice.mp3'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));



const Dashboard=()=>{

    const audioElem = useRef();

     const [currentTab,setCurrentTab]=useState(1)
     const Tabs=[
        {
            "Tab_Name":'Tab 1',
            "Tab_id":1,
        },
        {
            "Tab_Name":'Tab 2',
            "Tab_id":2,
        },
        {
            "Tab_Name":'Tab 3',
            "Tab_id":3,
        },
        {
            "Tab_Name":'Tab 4',
            "Tab_id":4,
        },
     ]

     const startVoice=()=>{ 
        audioElem.current.currentTime=0;
        audioElem.current.play();
     }
     const stopVoice=()=>{ 
        audioElem.current.pause();
    }



    return (<>


          {/* Navbar */}
          <div  className='h-[60px] background-red p-4 w-100 shadow flex '>
                <div> Dashboard/ Username</div>

                <Link to="/" className='mx-auto mr-4' ><div className='mx-auto mr-4 cursor-pointer'>Log Out</div></Link>
          </div>

          {/* main Faq's */}
          <div className='md:w-[95vw] w-[100vw] mt-4 p-3'>
          <Box sx={{ bgcolor: 'background.default', display: 'flex', flexDirection:'row', gap: 1, }} >
             
                {Tabs.map((tab,index)=>{
                    return ( 
                          <Item  key={index+100} elevation={2}  sx={{px:2,background:(currentTab!==tab.Tab_id?'':'#88b3f4')}} className='cursor-pointer' onClick={(()=>{setCurrentTab(tab.Tab_id)})}>
                             {`Faq Related ${tab.Tab_Name}`}
                          </Item>
                     )
                })}

                <Link to='/eila'><Item    elevation={2}  sx={{px:2,background:'#1E2772',color:'white'}} className='cursor-pointer  ' onMouseEnter={startVoice} onMouseLeave={stopVoice}>
                    {` Interact with Ella`}
                </Item></Link>

                <audio className='voice-note' controls preload="auto"  ref={audioElem} allow="autoplay">
                    <source src={Voices} controls></source> 
                    Your browser isn't invited for super fun audio time.
                </audio>
            
            </Box>



          </div>
          {/* Faqs */}
          <div className='mt-3 p-3'>
            <div className='font-bold'>FAQ's of {`Category ${currentTab}`}</div>
             
             <Faq currentTab={currentTab}/>

          </div>

    
    
    </>)

}
export default Dashboard