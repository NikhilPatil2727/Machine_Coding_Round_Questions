import { useState } from 'react'

import './App.css'

function App() {
      const [page,setPage]=useState(1);

      const Data=[1,2,3,4,5,6,7,8,9,10];
      
      let ItemPerpage=2;

      let TotalPage=Math.ceil(Data.length/ItemPerpage);

      let start=(page-1)*ItemPerpage;

      let end=start+ItemPerpage;

      let contentToShow=Data.slice(start,end);
      
 


  return (
    <>
     
      <div>

        {
          contentToShow.map((item)=>(
            <div>
              {item}
            </div>
          ))
        }

        <button disabled={page==1} onClick={()=>setPage(page-1)}>prev</button>
        

        {
          [...Array(TotalPage)].map((_,i)=>(
            <button onClick={()=>setPage(page+1)}>{i+1}</button>
          ))
        }

       
        <button disabled={page==TotalPage} onClick={()=>setPage(page+1)}>Next</button>



      </div>

     
    </>
  )
}

export default App
