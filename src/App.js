import React, { Component } from 'react'
import Footer from './components/Footer';
// import Frontpg from './components/Frontpg';
import Header from './components/Header';
// import Wherewework from './components/Wherewework';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

 

export default class App extends Component {
  render() {
    const Frontpg = () => (
      <div>
        <Frontpg />
      </div>
    );
    return (
      <div>
       <Header/>
       <main>
         <div className="container">
           <BrowserRouter>
           <Switch>
              <Route path= "./components/Frontpg.js" component={Frontpg} >
               
              </Route>
           </Switch>
            </BrowserRouter>
         </div>
       </main>
       
       <Footer/>
      </div>
    )
    
    }
  }


