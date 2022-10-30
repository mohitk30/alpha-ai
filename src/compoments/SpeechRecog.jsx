import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { toast } from 'react-toastify';

const SpeechRecog = ({setRecordedAudioText,handleSendQuery}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleSendTranscript=()=>{
    if(transcript===''){
      toast.error("Please record some query.")
      return ;
    }
    setRecordedAudioText((pre)=>{
      return transcript;
    })
    handleSendQuery();
    resetTranscript();
  }

  return (
    <div className='mt-2'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div className='flex'>
        <div className='w-[40%] h-[60px] border-[2px]    '><button className='w-[100%] h-[100%] px-2' style={{px:2,background:'#1E2772',color:'white'}} onClick={SpeechRecognition.startListening}>Start</button></div>
        <div className='w-[40%] h-[60px] border-[2px]    '><button className='w-[100%] h-[100%] px-2' style={{px:2,background:'#1E2772',color:'white'}} onClick={SpeechRecognition.stopListening}>Stop</button></div>
        <div className='w-[20%] h-[60px] border-[2px]    '><button className='w-[100%] h-[100%] px-2' style={{px:2,background:'#1E2772',color:'white'}} onClick={handleSendTranscript}>Send</button></div>
      </div>
      <p>You spoke: {transcript}</p>
    </div>
  );
};
export default SpeechRecog;