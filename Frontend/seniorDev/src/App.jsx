import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ItemsPage from "../Pages/ItemsPage";
import CustomerPage from "../Pages/CustomersPage";
import UpdatesPage from "../Pages/CustomerUpdatePage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/items" element={<ItemsPage />}></Route>
          <Route path="/customers" element={<CustomerPage />}></Route>
          <Route path="/customers/edit" element= {<UpdatesPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
