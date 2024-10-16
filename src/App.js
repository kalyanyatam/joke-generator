import React,{useState,useEffect} from 'react'
import axios from 'axios'
const  App = () => {
 const [search,setSearch] = useState("");
 const [setup,setSetup] = useState("");
 const [joke,setJoke] = useState("");
 const getData = async ()=> {
  const options = {
    method : 'GET',
    }
    const res = await fetch('https://v2.jokeapi.dev/joke/Any');
  const data = await res.json()
  setJoke(data.delivery);
  setSetup(data.setup);
  console.log(data);
  }
  
 
 useEffect(()=>{
  getData()
 },[])
  return (
    <div>
      <center>
        <h4>Lets Laugh😂</h4>
        {
         
          joke && 
          <>
            <h1>{setup}</h1>
            <p>{joke}</p>
          
          </>
        }
      </center>
    </div>
  );
}

export default App;
