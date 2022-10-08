import React,{useState,useEffect} from "react";
import axios from "axios"
import ReadOnly from "./components/ReadOnly";
import Pagination from "./components/Pagination";
import "./App.css"


function App() {
 const [tab, setTab] = useState(true);
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
    <div className="tab">
     <div className="tab1"><button onClick={()=>setTab(true)} className="tabbtn">1.tab</button></div>
     <div className="tab1"><button onClick={()=>setTab(false)} className="tabbtn">2.tab</button></div>
    </div>
   </div>
   { tab ? (
   <form action="" className="form">
    <table className="table">
     <thead>
      <tr>
       <th className="id">id</th>
       <th className="name" onClick={(e)=>(sortByName(e))}>name</th>
       <th className="description">description</th>
       <th className="action">action</th>
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
   </form> ) : ( 
   <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
   </table>
   )}
   <div>
    <input type="text" placeholder="Enter your search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button onClick={handleSearch}>Search</button>
   </div>
   <Pagination postsPerPage={postsPerPage} totalPosts={fetched.length} paginate={paginate} />
  </div>
 );
}

export default App;
