import "./App.scss";
import NavComponent from "./shared/components/nav";
import HomeComponent from "./components/home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import WikiComponent from "./components/wiki";
import { ROUTES } from "./shared/constants/constants";
import DynmapComponent from "./components/dynmap";
import GalleryComponent from "./components/gallery";
import GuideComponent from "./components/guide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="topNav">
          <NavComponent />
        </div>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path={ROUTES.WIKI} element={<WikiComponent />} />
            <Route path={ROUTES.DYNMAP} element={<DynmapComponent />} />
            <Route path={ROUTES.GALLERY} element={<GalleryComponent />} />
            <Route path={ROUTES.GUIDE} element={<GuideComponent />} />
          </Routes>
          {/* <FooterComponent /> */}
        </div>
        <div id="bottomNav">
          <NavComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
