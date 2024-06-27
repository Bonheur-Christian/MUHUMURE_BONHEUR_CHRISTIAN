import Form from "./components/form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/updateUser";
import UpdateContact from "./components/updateContact";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route element={<UpdateUser />} path="/updateUser/:id" />
          <Route element={<UpdateContact />} path="/updateContact/:id" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
