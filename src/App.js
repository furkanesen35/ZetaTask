import React,{useState,useEffect} from "react";
import axios from "axios"
import ReadOnly from "./components/ReadOnly";
import Pagination from "./components/Pagination";


function App() {
 const [fetched, setFetched] = useState([]);
 const [search, setSearch] = useState(""); 
 useEffect(() => {
  getData();
 }, [])
 const getData = () => {
  axios.get("https://633acdc6471b8c3955755ac0.mockapi.io/blog").then(res=>setFetched(res.data))
 }
 const sortByName = (e) => {
  axios.get(`https://633acdc6471b8c3955755ac0.mockapi.io/blog?sortBy=name&order=asc`).then(res=>setFetched(res.data))
  e.preventDefault()
 }
 const handleSearch = () => {
  axios.get(`https://633acdc6471b8c3955755ac0.mockapi.io/blog?search=${search}`).then(res=>setFetched(res.data))
 }

 return (
  <div className="App">
   <form action="">
    <table>
     <thead>
      <tr>
       <th>id</th>
       <th onClick={(e)=>(sortByName(e))}>name</th>
       <th>description</th>
       <th>action</th>
      </tr>
     </thead>
     <tbody>
      {fetched.map((item,index) => {
       return (
        <>
         <ReadOnly key={index} index={index} id={item.id} name={item.name} desc={item.desc} getData={getData} />
         <Pagination />
        </>
       )})}
     </tbody>
    </table>
   </form>
   <input 
     type="text" 
     placeholder="Enter your search" 
     value={search} 
     onChange={(e)=>setSearch(e.target.value)} 
   />
   <button onClick={handleSearch}>Search</button>
  </div>
 );
}

export default App;
