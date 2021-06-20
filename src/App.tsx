import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import NavComponent from "./shared/components/nav";
import HomeComponent from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path={ROUTES.WIKI} exact component={WikiComponent} />
            <Route path={ROUTES.DYNMAP} exact component={DynmapComponent} />
            <Route path={ROUTES.GALLERY} exact component={GalleryComponent} />
            <Route path={ROUTES.GUIDE} exact component={GuideComponent} />
          </Switch>
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
