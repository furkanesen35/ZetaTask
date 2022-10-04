import axios from 'axios';
import React,{useState} from 'react'
import EditPage from "./EditPage";

const ReadOnly = ({index,id,name,desc,getData}) => {
 const [edit, setEdit] = useState(false);
 const [readMore, setReadMore] = useState(true)
 const reading = (e) => {
  e.preventDefault();
  setReadMore(!readMore);
 }
 const update = (e) => {
  e.preventDefault()
  setEdit(!edit);
 }
 const deleteRow = (e) => {
  e.preventDefault()
  axios.delete(`https://633acdc6471b8c3955755ac0.mockapi.io/blog/${id}`).then(res=>console.log(res))
  getData()
 }

 return (
  <>{edit ? (<EditPage index={index} id={id} name={name} desc={desc} edit={edit} setEdit={setEdit} getData={getData}/>) : (
   <tr key={index}>
    <td>{id}</td>
    <td>{name}</td>
    {readMore ? (
     <td>{desc.slice(0,50)} <button onClick={(e)=>reading(e)}>...read more</button> </td>
    ):(
     <td>{desc} <button onClick={(e)=>reading(e)}>...read less</button> </td>
    )}
    <td>
     <button onClick={(e)=>update(e)}>Edit</button>
     <button onClick={(e)=>deleteRow(e)} >Delete</button>
    </td>
   </tr>
  )}

  </>
 )
}

export default ReadOnly