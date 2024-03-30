import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import StateRoute from './components/StateRoute'
import About from './components/About'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StateRoute} />
    <Route element={<NotFound/>} />
  </Switch>

  </BrowserRouter>
  
)

export default App