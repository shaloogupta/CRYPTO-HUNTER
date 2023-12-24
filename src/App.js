import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
//import{ makeStyles } from "@material-ui/core";

function App() {
//  const useStyle=makeStyles(()=>({
//   App:{
//     backgroundColor:"#14161a",
//     color:"white",
//     minHeight:"100vh",
//   },
// }));
  
//   const classes = useStyle();
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
      <Route path="/" Component={Homepage} exact/>
      <Route path="*" Component={CoinPage}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
