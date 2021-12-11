import React, { useState } from "react";
import "./comment.css";

export default function Commnet() {
    const[comment,setComment] = useState(null);
    const[list,setList] = useState([]);
   const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(comment);
       const data = {comment}
       if(comment){
           setList((ls)=>[...ls,data])
           setComment("")
       }
   }
    return (
        <div className="write">
        <p classname="writeComment">
            Comments
        </p>
        {
            list.map((a)=><div>
                <br></br>
              <li>{a.comment}</li>
            </div>)
        }
        <form onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            name="comment"
            value={comment}
            placeholder="Post a comment"
            type="text"
            autoFocus={true}
            onChange={(e)=>setComment(e.target.value)}
          />
        </div>
        <button className="writeSubmit" >
         Comment
        </button>
      </form>
      </div>
    )
}
