import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'

import DiscoverSection from './components/DiscoverSection'

import FooterSection from './components/FooterSection'

import ServiceSection from './components/ServiceSection'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/discover" component={DiscoverSection} />
      <Route exact path="/services" component={ServiceSection} />
    </Switch>
    <FooterSection />
  </BrowserRouter>
)

export default App
