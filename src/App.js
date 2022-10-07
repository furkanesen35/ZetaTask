import React,{useState,useEffect} from "react";
import axios from "axios"
import ReadOnly from "./components/ReadOnly";
import Pagination from "./components/Pagination";


function App() {
 const [tab, setTab] = useState(1);
 const [fetched, setFetched] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(5)
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
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPost = fetched.slice(indexOfFirstPost,indexOfLastPost);
 const paginate = (pageNumbers) => {
  setCurrentPage(pageNumbers)
 }

 return (
  <div className="App">
   <div>
    sadasd
   </div>
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
      {currentPost.map((item,index) => {
       return (
        <>
         <ReadOnly key={index} index={index} id={item.id} name={item.name} desc={item.desc} getData={getData} />
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
   <Pagination postsPerPage={postsPerPage} totalPosts={fetched.length} paginate={paginate} />
  </div>
 );
}

export default App;
