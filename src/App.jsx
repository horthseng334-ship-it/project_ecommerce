import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainlayout from "./component/layout/Mainlayout";
import Homepage from "./component/page/Homepage";
import Shoppage from "./component/page/Shoppage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Mainlayout />}>

          <Route index element={<Homepage />} />

          <Route path="shop" element={<Shoppage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;