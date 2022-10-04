import React,{useState,useEffect} from "react";
import axios from "axios"
import ReadOnly from "./components/ReadOnly";

function App() {
 const [fetched, setFetched] = useState([]);
 const [edit, setEdit] = useState(true);
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
       return (
        <ReadOnly index={index} id={item.id} name={item.name} desc={item.desc} />
       )
      })}
     </tbody>
    </table>
   </form>
  </div>
 );
}

export default App;
