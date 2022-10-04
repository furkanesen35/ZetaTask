import React,{useState,useEffect} from "react";
import axios from "axios"

function App() {
 const [fetched, setFetched] = useState([]);
 useEffect(() => {
  getData();
 }, [])
 const getData = () => {
  axios.get("https://633acdc6471b8c3955755ac0.mockapi.io/blog").then(res=>setFetched(res.data))
 }
 console.log(fetched);
 
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
    </table>
   </form>
  </div>
 );
}

export default App;
