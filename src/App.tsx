import "./App.scss";
import NavComponent from "./shared/components/nav/index.js";
import HomeComponent from "./components/home/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WikiComponent from "./components/wiki/index.js";
import { ROUTES } from "./shared/constants/constants.js";
import DynmapComponent from "./components/dynmap/index.js";
import GalleryComponent from "./components/gallery/index.js";
import GuideComponent from "./components/guide/index.js";
import FooterComponent from "./shared/components/footer/index.js";
import { VideosComponent } from "./components/videos/index.js";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="topNav">
          <NavComponent />
        </div>
        <div className="app">
          <Routes>
            <Route path="/" Component={HomeComponent} />
            <Route path={ROUTES.WIKI} Component={WikiComponent} />
            <Route path={ROUTES.DYNMAP} Component={DynmapComponent} />
            <Route path={ROUTES.GALLERY} Component={GalleryComponent} />
            <Route path={ROUTES.GUIDE} Component={GuideComponent} />
            <Route path={ROUTES.VIDEOS} Component={VideosComponent} />
          </Routes>
          {/* <FooterComponent /> */}
        </div>
        <div id="bottomNav">
          <NavComponent />
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
