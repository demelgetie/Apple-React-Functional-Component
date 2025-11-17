import "./bootstrap.js";
import "./bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main_Body from "./Components/Main_Body/Main_Body";
import SharedLayout from "./Components/pages/SharedLayout";
import Iphone from "./Components/pages/Iphone";
import NotFound from "./Components/pages/NotFound";
import SingleProduct from "./Components/pages/SingleProduct.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main_Body />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:pid" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
