import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";

//Pages 

import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Library from "./pages/Library";
import About from "./pages/About"
import Photos from "./pages/Photos"
import RegistroLibro from "./pages/RegistroLibro";
import RegistroPublications from "./pages/Publications";
import NuevaPublicacion from "./pages/RegistroPublicacion";
import EditarPublicacion from "./pages/EditarPublicacion"

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        { /*routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        )) */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>} />
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>} />
        <Route path="/Library" element={<Library/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Photos" element={<Photos/>}/>
        <Route path="/Libro" element={<RegistroLibro/>}/>
        <Route path="/Publications" element={ <RegistroPublications user={user}/>  }/>
        <Route path="/post-new" element={ <NuevaPublicacion />  }/>
        <Route path="/editpublication" element={ <EditarPublicacion />  }/>
      </Routes>
    </div>
  );
}
