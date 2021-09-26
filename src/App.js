import "./App.css";
import Header from "./component/Header";
import Home from "./screen/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./screen/DashboardPage";
import PostPage from "./screen/PostPage";
import LinksPage from "./screen/LinksPage";

function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/DashboardPage" component={DashboardPage} />
      <Route path="/PostPage" component={PostPage} />
      <Route path="/LinksPage" component={LinksPage} />
    </Router>
  );
}

export default App;
