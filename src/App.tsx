import "./App.scss";
import NavComponent from "./shared/components/nav";
import HomeComponent from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WikiComponent from "./components/wiki";
import { ROUTES } from "./shared/constants/constants";
import DynmapComponent from "./components/dynmap";
import GalleryComponent from "./components/gallery";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent />
        <div className="app">
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path={ROUTES.WIKI} exact component={WikiComponent} />
            <Route path={ROUTES.DYNMAP} exact component={DynmapComponent} />
            <Route path={ROUTES.GALLERY} exact component={GalleryComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
