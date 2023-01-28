import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users,setUsers]= useState([]);
  const [query,setQuery]= useState('');
  // const [filteredData,setFilteredData]= useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      setUsers(res.data)
      console.log(users)
    })
  },[])

  const onChangeQuery =(e)=>{
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
    console.log(query)
  }
const filteredData = users.filter((user)=>{
  if(query === ''){
    return user
  }else{
    var lowerName= user.name.toLowerCase()
    return lowerName.match(query)
  }
})
    return (
      <div className="App">
        <form>
          <input type='search' value={query} onChange={onChangeQuery}/>
        </form>
  
        <h3>Users</h3>
        <div>
          {filteredData.map((user,index)=>(
            <div key={user.id}>
              <p>{user.name}</p> 
            </div>
          ))}
        </div>
      </div>
    );
  


}

export default App;
