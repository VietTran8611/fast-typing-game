import { useState,useEffect,useRef } from "react";

export default function useWordGames(value = 5){
    const STARTING_TIME=value


    const [text,setText] = useState("")
    const [time, setTime]=useState(0)
    const [isRun,setIsRun]=useState(false)
    const [numWord,setNumWord]=useState(0)
    const inputRef=useRef(null)

    function handleChange(event){
        const {name, value, type, checked}= event.target
        setText(value)
    }

    function wordCount(text){
        const wordArr= text.trim().split(" ")
        const filterWord= wordArr.filter(word => word !=="").length
        return filterWord
    }

    function startgame(){
        setIsRun(true)
        setTime(STARTING_TIME)
        setText("")
        setNumWord(0)
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    function endGame(){
        setIsRun(false)
        const numWords= wordCount(text)
        setNumWord(numWords)
    }

    useEffect(()=>{
        if(time>0 && time){
            setTimeout(()=>{
                setTime(time => time-1)
            },1000)
        } else if(time===0) {
            endGame()
        }
    },
    [time,isRun])

    return [inputRef, isRun, handleChange,text, time, startgame,numWord]
}