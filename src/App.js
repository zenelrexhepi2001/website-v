import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Blog from "./pages/blog/blog-component";
import BlogOpened from "./components/blog-opened/blog-opened.component";
import SignIn from "./pages/sign-in/sign-in.component";

function App() {
  return (
      <Router>
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={Blog}/>
          <Route path='/Blog-opened' component={BlogOpened}/>
          <Route path="/login" component={SignIn}/>
      </Switch>
    </main>
      </Router>
  );
}

export default App;
