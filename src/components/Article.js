import React from 'react'

export default function Article({title,date,preview,minutes}) {
  const minuteToRead=()=>{
    const array=[]
    if(minutes<30){
      for(let i=0;i<Math.ceil(minutes/5);i++)
            array.push("☕️")
    }
    else{
      for(let i=0;i<Math.ceil(minutes/10);i++)
      array.push("🍱")
    }
    return array
  }
  return (
    <article>
    <h3>{title}</h3>
    <small>{date ? date : "January 1, 1970"} • {minuteToRead()} {minutes} min read
    </small>
    <p>{preview}</p>
    </article>
  )
}

