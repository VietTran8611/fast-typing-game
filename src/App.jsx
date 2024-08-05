import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import useWordGames from "./hooks/useWordGame"
export default function App(){

    const [inputRef, isRun, handleChange,text, time, startgame,numWord]= useWordGames(10)

   return(
    <div>
        <h1>title</h1>
        {/* 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents) */}
        <textarea ref={inputRef} disabled={!isRun} onChange={handleChange} value={text}/>
        <h4>Time remaining: {time}</h4>
        <button 
            onClick={()=>{startgame()}}
            disabled={isRun}
            >Start
        </button>
        <h1>word count: {numWord}</h1>
    </div>
   ) 
}