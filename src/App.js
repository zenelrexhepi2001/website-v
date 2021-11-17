import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Blog from "./pages/blog/blog-component";
import BlogOpened from "./components/blog-opened/blog-opened.component";
import SignIn from "./pages/sign-in/sign-in.component";
import Register from "./pages/register/register.component";
import FaqSupport from "./pages/faq-support/faq-support.component";
import ArticleSupportPage from "./pages/article-support/article-support.component";
import ContactSupport from "./pages/contact-support/contact-support.component";
import Services from "./pages/services/services.component";
import liveChatSupport from "./pages/live-chat-support/live-chat-support.component";
import chatLiveSupport from "./pages/chatting/chatting.component";
import Api from "./pages/API/api.component";
import ArticleOpenedPage from "./pages/article-opened/article-opened.component";
import DropdownParent from "./components/dropdown/dropdown.component";

function App() {
  return (
      <Router>
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={Blog}/>
          <Route path='/Blog-opened' component={BlogOpened}/>
          <Route path='/faq-support' component={FaqSupport}/>
          <Route path="/login" component={SignIn}/>
          <Route path='/register' component={Register}/>
          <Route path='/article-support' component={ArticleSupportPage}/>
          <Route path='/article-support-opened' component={ArticleOpenedPage}/>
          <Route path='/contact-support' component={ContactSupport}/>
          <Route path='/services' component={Services}/>
          <Route path='/live-chat-support' component={liveChatSupport}/>
          <Route path='/chatting-advisor'  component={chatLiveSupport}/>
          <Route path='/developers' component={Api}/>
      </Switch>
    </main>
      </Router>
  );
}

export default App;
