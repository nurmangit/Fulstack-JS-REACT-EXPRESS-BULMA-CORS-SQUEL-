import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";
import Clock from "./components/Clock";


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="add" element={<AddUser/>}/>
      <Route path="edit/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
