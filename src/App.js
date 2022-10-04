import React,{useState,useEffect} from "react";
import axios from "axios"
import ReadOnly from "./components/ReadOnly";
import EditPage from "./components/EditPage";

function App() {
 const [fetched, setFetched] = useState([]);
 const [edit, setEdit] = useState(false);
 useEffect(() => {
  getData();
 }, [])
 const getData = () => {
  axios.get("https://633acdc6471b8c3955755ac0.mockapi.io/blog").then(res=>setFetched(res.data))
 }
 
 return (
  <div className="App">
   <form action="">
    <table>
     <thead>
      <tr>
       <th>id</th>
       <th>name</th>
       <th>description</th>
       <th>action</th>
      </tr>
     </thead>
     <tbody>
      {fetched.map((item,index) => {
       return (edit ? (
        <ReadOnly index={index} id={item.id} name={item.name} desc={item.desc} edit={edit} setEdit={setEdit}/>
       ):(
        <EditPage index={index} id={item.id} name={item.name} desc={item.desc} edit={edit} setEdit={setEdit}/>
       )
       )})}
     </tbody>
    </table>
   </form>
  </div>
 );
}

export default App;
