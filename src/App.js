import React, { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import "react-toastify/dist/ReactToastify.css"

import { ToastContainer, toast } from "react-toastify"

import BuyPage from "./Components/BuyPage";

import Cart from "./Components/Cart"

import {
  Container,
  Row,
  Col
} from "reactstrap"

import './App.css';


//http://myjson.dit.upm.es/api/bins/do2h
//563492ad6f917000010000016aece4ec706d4ad1be3757ed1c7c68ec

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) =>{

    const isAlreadyAdded = cartItem.findIndex(function(arrayItem){
      return arrayItem.id === item.id
    })

    if(isAlreadyAdded !== -1){
      toast("Already added in cart",{
        type:"error"
      })
      return
    }

    setCartItem([...cartItem, item])

  }

  const buyNow = (item) => {
    setCartItem([])
    toast("Purchased", {
      type:"success"
    })
  }

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem)=>(singleItem.id !== item.id)))
  }

  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8" >
          <BuyPage addItem={addItem}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;



//{"total_results":2735,"page":1,"per_page":6,"photos":[{"id":238118,"width":4000,"height":2682,"url":"https://www.pexels.com/photo/computer-desk-electronics-keyboard-238118/","photographer":"JÉSHOOTS","photographer_url":"https://www.pexels.com/@jeshoots","photographer_id":2662,"src":{"original":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg","large2x":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false},{"id":461077,"width":4000,"height":2667,"url":"https://www.pexels.com/photo/ballpen-blur-close-up-computer-461077/","photographer":"picjumbo.com","photographer_url":"https://www.pexels.com/@picjumbo-com-55570","photographer_id":55570,"src":{"original":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg","large2x":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false},{"id":374074,"width":5760,"height":3840,"url":"https://www.pexels.com/photo/computer-desk-electronics-indoors-374074/","photographer":"Burst","photographer_url":"https://www.pexels.com/@burst","photographer_id":121963,"src":{"original":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg","large2x":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false},{"id":1229861,"width":6000,"height":4000,"url":"https://www.pexels.com/photo/silver-and-black-laptop-computer-1229861/","photographer":"Hasan Albari","photographer_url":"https://www.pexels.com/@hasanalbari","photographer_id":162689,"src":{"original":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg","large2x":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false},{"id":18105,"width":5184,"height":3456,"url":"https://www.pexels.com/photo/laptop-macbook-pro-office-computer-18105/","photographer":"karsten madsen","photographer_url":"https://www.pexels.com/@morningtrain","photographer_id":1540,"src":{"original":"https://images.pexels.com/photos/18105/pexels-photo.jpg","large2x":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false},{"id":34088,"width":5472,"height":3648,"url":"https://www.pexels.com/photo/iphone-notebook-pen-working-34088/","photographer":"Negative Space","photographer_url":"https://www.pexels.com/@negativespace","photographer_id":3738,"src":{"original":"https://images.pexels.com/photos/34088/pexels-photo.jpg","large2x":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false}],"next_page":"https://api.pexels.com/v1/search/?page=2\u0026per_page=6\u0026query=laptop"}