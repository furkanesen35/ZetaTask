import React,{useState} from 'react'

const EditPage = ({index,id,name,desc,edit,setEdit}) => {
 const [updateId, setUpdateId] = useState(id)
 const [updateName, setUpdateName] = useState(name)
 const [updateDesc, setUpdateDesc] = useState(desc)
 const done = (e) => {
  e.preventDefault()
  setEdit(!edit)
 }
 return (
  <>
   <tr>
    <td>
     <input 
       type="number"
       required
       placeholder="Enter an id..."
       name="idinp"
       value={updateId}
       onChange={(e)=>setUpdateId(e.target.value)}
     />
    </td>
    <td>
     <input 
       type="text"
       required
       placeholder="Enter an id..."
       name="idinp"
       value={updateName}
       onChange={(e)=>setUpdateName(e.target.value)} 
     />
    </td>
    <td>
     <input 
       type="text"
       required
       placeholder="Enter an id..."
       name="idinp"
       value={updateDesc}
       onChange={(e)=>setUpdateDesc(e.target.value)}
     />
    </td>
    <td>
     <button onClick={(e)=>done(e)} >Save</button>
     <button onClick={(e)=>done(e)}>Cancel</button>
    </td>
   </tr>
  </>
 )
}

export default EditPage