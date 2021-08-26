import { useEffect, useState } from 'react'
import Form from './Form/Form'
import Table from './Table/Table'
import Search from './Search/Search'
const App = () => {
  const [userArray, setUserArray] = useState([])
  const [tempUserArray, setTempArray] = useState(userArray)

  // Fetching Data from Local Storage
  useEffect(() => {
    const data = localStorage.getItem("userArray");
    if(data) {
      setUserArray(JSON.parse(data));
    }
  } , []);

  
  // Adding Data to local Storage
  useEffect(() => {
    localStorage.setItem("userArray" , JSON.stringify(userArray));
    setTempArray(userArray)
  } , [userArray]);


  // Adding user to array
  const saveUser = (userData) => {
    //console.log(userData);
    setUserArray((prevState)=>{
      return [userData, ...prevState];
    })
    alert('Data Added Successfully!!')
    //console.log(userArray)
  }
  

  // Search Entry
  const searchEntry = (entry) => {
    if (entry.trim().length === 0) {
      setTempArray([...userArray])
    }
    else{
      setTempArray(userArray.filter(
        user=>user.FirstName.toLowerCase() === entry |
        user.LastName.toLowerCase() === entry |
        user.Age.toLowerCase() === entry |
        user.City.toLowerCase() === entry
        ))
    }
  }


  return (
    <div>
      <Form onSaveUser={saveUser}/>
      <Search value = {searchEntry}/>
      <Table data={tempUserArray}/>
    </div>
  );
}

export default App;
