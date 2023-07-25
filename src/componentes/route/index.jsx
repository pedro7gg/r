import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produto } from "../../pages/Produto";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}