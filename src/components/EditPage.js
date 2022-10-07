import React,{useState} from 'react'
import axios from "axios"

const EditPage = ({id,name,desc,edit,setEdit,getData}) => {
 const [updateName, setUpdateName] = useState(name)
 const [updateDesc, setUpdateDesc] = useState(desc)
 const done = (e) => {
  const datum = {
   desc: updateDesc,
   id : id,
   name : updateName
  }
  if (e.target.innerText === "Save") {
   axios.put(`https://633acdc6471b8c3955755ac0.mockapi.io/blog/${id}`,datum)
   getData();
  }
  setEdit(!edit)
  console.log(e.target.innerText);
 }
 return (
  <>
   <tr>
    <td>
     {id}
    </td>
    <td>
     <input
       type="text"
       required
       placeholder="Enter an id..."
       name=""
       value={updateName}
       onChange={(e)=>setUpdateName(e.target.value)} 
     />
    </td>
    <td>
     <input 
       type="text"
       required
       placeholder="Enter an id..."
       name=""
       value={updateDesc}
       onChange={(e)=>setUpdateDesc(e.target.value)}
     />
    </td>
    <td>
     <button onClick={(e)=>done(e)}>Save</button>
     <button onClick={(e)=>done(e)}>Cancel</button>
    </td>
   </tr>
  </>
 )
}

export default EditPage