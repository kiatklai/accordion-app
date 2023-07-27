import { useState } from "react"

const SingleContent=({title,description})=>{
  const [showContent,setShowContent] = useState(false)
  return(
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button onClick={()=>setShowContent(!showContent)}>More Info</button>
      </header>
      {showContent && <p>{description}</p>}
    </article>
  )
}

export default SingleContent