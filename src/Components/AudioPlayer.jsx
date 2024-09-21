import React, { useRef, useState } from "react";

const AudioPlayer= () => {
    const Sources=['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'] 
    const audioRef=useRef(null)
    const [idx,setIdx]=useState(0);
    function playHandler(){
        if(audioRef.current){
            audioRef.current.play();
        }
    }
    function pauseHandler(){
        if(audioRef.current){
            audioRef.current.pause()
        }
    }
    function NextHandler(){
        if(idx< Sources.length-1){
            setIdx((prev) => prev+1);
        }
        else{
            setIdx(0);
        }
    }
    function resetHandler(){
        if(audioRef.current){
            audioRef.current.reset();
        }
    }
    return(

        <div>
            <audio ref={audioRef}  src={Sources[idx]}/>
            <button onClick={playHandler}>Play</button>
            <button onClick={pauseHandler}>Pause</button>
            <button onClick={resetHandler}>Pause</button>
            <button onClick={NextHandler}>Next</button>
        </div>
    )
}
export default AudioPlayer