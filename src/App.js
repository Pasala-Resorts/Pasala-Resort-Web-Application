import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'; // Import useLocation here

import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import BackendPlugIn from './components/BackendPlugIn';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Header />
      <BackendPlugIn />
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          exact
          path='/gallery'
          component={Gallery}
        />
        <Route
          exact
          path='/about-us'
          component={AboutUs}
        />
        <Route
          exact
          path='/contact'
          component={Contact}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

// const App = () => (
//   <BrowserRouter restoreScroll="auto">
//     <Header />
//     <BackendPlugIn />
//     <Switch>
//       <Route
//         exact
//         path='/'
//         component={Home}
//       />
//       <Route
//         exact
//         path='/gallery'
//         component={Gallery}
//       />
//       <Route
//         exact
//         path='/about-us'
//         component={AboutUs}
//       />
//       <Route
//         exact
//         path='/contact'
//         component={Contact}
//       />
//     </Switch>
//     <Footer />
//   </BrowserRouter>
// );

export default App;
