import "./App.scss";
import NavComponent from "./shared/components/nav";
import HomeComponent from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WikiComponent from "./components/wiki";
import { ROUTES } from "./shared/constants/constants";
import DynmapComponent from "./components/dynmap";
import GalleryComponent from "./components/gallery";
import GuideComponent from "./components/guide";
import FooterComponent from "./shared/components/footer";

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
