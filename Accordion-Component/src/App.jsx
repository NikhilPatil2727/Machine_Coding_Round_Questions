import { useState } from "react";

import "./App.css";

function App() {
  const [idx,setId]=useState(null);
   
  // if(id==){

  // }
  
  const data = [
    {
      id: 1,
      Questions: "What is React?",
      Answers: "React is a JavaScript library for building UI.",
    },
    {
      id: 2,
      Questions: "What is useState?",
      Answers: "useState is a React hook for managing state.",
    },
    {
      id: 3,
      Questions: "What is JSX?",
      Answers: "JSX allows us to write HTML inside JavaScript.",
    },
  ];

  // if(idx==data.id){
  //   setId(null)
  // }
  // else{
  //   setId(idx)
  // }
  const handleclik=(id)=>{
     if(id===idx){
      setId(null)
     }
     else{
      setId(id)
     }
  }

  return (
    <>
      <div>
        {
          data.map((item)=>(
            <div key={item.id}>

              <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px",border:"solid black",height:"50px",cursor:"pointer"}}
               onClick={()=>{
                setId(item.id),
                handleclik(item.id)
               }}
              >
                {item.Questions}
              </div>

              {item.id==idx&&(
                <>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    {item.Answers}
                  </div>
                </>
              )}



            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
