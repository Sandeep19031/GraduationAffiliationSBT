import "./App.css";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryLayout from "./Components/Layout/PrimaryLayout";
import SbtSearch from "./Pages/SbtSearch";
import GraduationCard from "./Pages/GraduationCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationContainer />
        <PrimaryLayout>
          <Routes>
            <Route path="/" element={<SbtSearch />} />
            <Route path="/sbtSearch/:address" element={<GraduationCard />} />
            <Route path={"*"} />
          </Routes>
        </PrimaryLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
