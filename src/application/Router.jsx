import { BrowserRouter, Route, Routes } from "react-router";
import App from  "../App";
import Discover from "../pages/discover/Discover.jsx";

function Router (){
return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/discover" element={<Discover/>}/>
        </Routes>        
    </BrowserRouter>
  )
}

export default Router
