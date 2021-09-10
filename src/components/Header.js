import React from 'react'
import Btn from './Btn'
import {Link, Route} from 'react-router-dom'

const Header = () => {

    return <>
       <div className="header">
        <div className="container">
          <Link to="/">
          <div className="header__logo">
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          </Link>
          <div className="header__cart">
            <Route exact path="/">
            <Btn>
            </Btn>
            </Route>
          </div>
        </div>
      </div>
    </>
}

export default Header
