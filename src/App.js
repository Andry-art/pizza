import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import store from './redux/store';

import './App.css';

import {Header, Home, Cart} from './components';
import {Route} from 'react-router-dom';
import {setPizzas} from './redux/action/pizza';


// function App() {

//   const[pizzas, setPizzas] = useState()

// useEffect(()=>{
//    axios.get('http://localhost:3000/db.json').then(({data})=> setPizzas(data.pizzas))
// },[])

//   return  <>
//     <div className="wrapper">
//    <Header/>
//       <div className="content">
//        <Route exact path="/" render={()=><Home pizzas={pizzas}/> }/>
//        <Route exact path="/cart" component={Cart}/>
//       </div>
//     </div>
//     </>
// }


class App extends React.Component {

  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(( { data } )=> {
      store.dispatch(setPizzas(data.pizzas))
    })
  };

  render(){
   console.log(this.props)
    return<>
    <div className="wrapper">
     <Header/>
         <div className="content">
          <Route exact path="/" render={()=><Home pizzas={this.props.items}/> }/>
          <Route exact path="/cart" component={Cart}/>
         </div>
       </div>
    </>
  }
}

const mapStateToProps = state =>{
 
return{
  items : state.pizzas.items,
}
}

export default connect(mapStateToProps)(App);
