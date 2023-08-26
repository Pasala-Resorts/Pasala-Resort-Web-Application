import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Gallery from './components/Gallery'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
      </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
