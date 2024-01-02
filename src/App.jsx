import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentContainer from "./content-container";
import MainContent from "./content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentContainer />}>
            <Route index element={<MainContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
