/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error from "./components/Error/Error";
import ManageInventory from "./components/Manage-Inventory/ManageInventory";
import MyItem from "./components/MyItem/MyItem";
import TableManageInventory from "./components/tableManageInventory/TableManageInventory";
import AddItem from "./components/AddItem/AddItem";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App  ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="inventory/:register"
          element={<Inventory></Inventory>}
        ></Route>
        <Route
          path="/book/:id"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/tablemangeinventory"
          element={
            <RequireAuth>
              <TableManageInventory></TableManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/MansurAhmed1/bookhouse-assighnmnet-11.git
// git push -u origin main
