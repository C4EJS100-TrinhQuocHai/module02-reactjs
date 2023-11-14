// import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./component/admin /AdminPage";
import Register from "./component/register/Register";
import Login from "./component/login /Login";
import Home from "./component/home/Home";
import AdminProduct from "./component/admin /AdminProduct";
import AdminManagePro from "./component/admin /AdminManagePro";
import AdAccDetail from "./component/admin /AdAccDetail";
import BagPro from "./component/product /BagPro";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/bag-product" element={<BagPro />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/adminPage" element={<AdminPage />}>
          <Route index element={<AdminProduct />}></Route>
          <Route path="admin-product" element={<AdminProduct />}></Route>
          <Route path="admin-manage-pro" element={<AdminManagePro />}></Route>
          <Route path="admin-account-detail" element={<AdAccDetail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;