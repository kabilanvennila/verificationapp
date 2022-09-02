import './App.css';
import PanApp from './PanApp';
import BanApp from './BanApp';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    // <div className="App">
    //   <PanApp />
    // </div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="panapp" element={<PanApp />} />
          <Route path="banapp" element={<BanApp />} />
          <Route path="*" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
