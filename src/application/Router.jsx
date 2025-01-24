import { BrowserRouter, Route, Routes } from "react-router";
import App from  "../App";
import Discover from '../pages/discover/Discover'
// import Join from "../pages/Join";

function Router (){
return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/discover" element={<Discover/>}/>
          {/* <Route path="/join" element={<Join/>}/>                     */}
        </Routes>        
    </BrowserRouter>
  )
}

export default Router