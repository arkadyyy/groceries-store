import React from 'react';
import Header from './Header/Header';

import './App.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import apple from './img/apple.jpg'
import banana from './img/banana.jpg'
import grapes from './img/grapes.jpg'
import mango from './img/mango.jpg'
import orange from './img/orange.jpg'
import watermelon from './img/watermelon.jpg'

class App extends React.Component{
    state = {counter :0}
    

      increment = ()=>{
            
        this.setState({counter : this.state.counter+1});
      }
  
    render(){
      return(
       
          <div>
            
            <Header/>
            <Cart counter = {this.state.counter}/>
            <div className = 'products'>
              
              <Product quantity = {4} image = {apple} increment = {this.increment}/>
              <Product quantity = {16} image = {banana} increment = {this.increment}/>
              <Product quantity = {2} image = {grapes} increment = {this.increment}/>
              <Product quantity = {13} image = {mango} increment = {this.increment}/>
              <Product quantity = {9} image = {orange} increment = {this.increment}/>
              <Product quantity = {5} image = {watermelon} increment = {this.increment}/>
             
                        
              </div>
          </div>
           



      )
    }


}

export default App;
