import React from 'react'
import Router from './router/Router'
import Links from './link/Link'
import './App.css'

export default class App extends React.Component{
    render(){
        return(
          <div className="App">
            <div className='container'>
              <header>
                <nav>
                  <Links/>
                </nav>
              </header>
              <Router/>
            </div>  
          </div>
        )
    }
}

