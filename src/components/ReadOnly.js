import React,{useState} from 'react'

const ReadOnly = ({index,id,name,desc}) => {
 const [readMore, setReadMore] = useState(true)
 const reading = (e) => {
  e.preventDefault();
  setReadMore(!readMore);
 }

 return (
  <>
   <tr key={index}>
    <td>{id}</td>
    <td>{name}</td>
    {readMore ? (
     <td>{desc.slice(0,50)} <button onClick={(e)=>reading(e)}>...read more</button> </td>
    ):(
     <td>{desc} <button onClick={(e)=>reading(e)}>...read more</button> </td>
    )}
    <td>
     <button>Edit</button>
     <button>Delete</button>
    </td>
   </tr>
  </>
 )
}

export default ReadOnly