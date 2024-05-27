import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import { GlobalProvider } from "./context/GlobalState";
import EditTask from "./components/EditTask/EditTask";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Tasks />}/>
          <Route path="/editTask/:_id" element={<EditTask/>}/>
        </Routes>
        </BrowserRouter>
       
      </GlobalProvider>
    </>
  );
}

export default App;
