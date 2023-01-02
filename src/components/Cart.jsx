import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { delCart, addCart, clearCard } from '../redux/action'

const Cart = () => {
  let state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  // useEffect(()=> {
  //   if (localStorage.getItem("prod")) {
  //     let locObj = localStorage.getItem("prod");
  //     state = JSON.parse(locObj)
  //   } 
  //   console.log(state);
  // }, [])

  // useEffect(()=>{
  //   localStorage.setItem("prod", JSON.stringify(state));
  // }, [state])

  const handleAdd = (item) => {
    dispatch(addCart(item))
  }

  const handleDel = (item) => {
    dispatch(delCart(item))
  }
  
  const handleClose = (item) => {
    dispatch(clearCard(item))
  }

  const cartItems = (product) => {
    return(
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(product)} className="btn-close float-end" aria-label='Close'></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className='lead fw-bold'>{product.qty} X ${product.price} = ${product.qty * product.price}</p>
              <button className="btn btn-outline-dark me-4" onClick={() => handleDel(product)}><i className="fa fa-minus"></i></button>
              <button className="btn btn-outline-dark" onClick={() => handleAdd(product)}><i className="fa fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return(
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Card is Empty</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && <div className='w-100 text-center pb-5'><Link to="/checkout" className='btn btn-outline-primary px-5'>Procces to Checkout</Link></div>}
    </>
  )
}

export default Cart;