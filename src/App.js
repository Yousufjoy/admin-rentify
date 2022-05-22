import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ViewAdd from "./components/ViewAdd/viewadd";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <ViewAdd
        title="Advertisement information"
        imageUrl="https://rents.com.bd/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-03-at-6.09.45-PM-592x444.jpeg"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur "
      />

      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
      <Route exact path="/viewadd" component={() => <viewAdd />} />
    </div>
  );
};
export default App;
