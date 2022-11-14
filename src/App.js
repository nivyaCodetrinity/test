// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Header from './Header';
import Registration from './Registration';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Login from './Login';
import Dashbord from './Dashbord';
import { Blog } from './Blog';
import { Protected } from './Protected';


function App() {

  const [name, setName] = useState("");

  // const loginHandle = (data) => {
  //   const id = uuid();
  //   const Text = { id, data }
  //   setName({ ...name, Text });
  //   localStorage.setItem("fdfdf", JSON.stringify({ ...name, Text }));
  //   console.log(data);

  //   // const localData =  localStorage.getItem("fdfdf", JSON.parse({ ...name, Text }));
  // }

  const [value, setValue] = useState("");

  const loginData = (data) => {
    // console.log(data);
    setValue(data);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* {
          value == true ?  <Header /> : <Login  setData={loginData} />
        } */}
       <Header />
        <Routes>
          {/* <Route path="/Header" element={<Header />} /> */}
          {/* <Route path="/Registration" element={<Registration setData={loginHandle} />} /> */}
          <Route path="/Login" element={ <Login  setData={loginData} />} />
          <Route path="/Dashbord" element={< Protected prop = {Dashbord} /> } />
          <Route path="/Blog" element={ <Protected prop = {Blog} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
