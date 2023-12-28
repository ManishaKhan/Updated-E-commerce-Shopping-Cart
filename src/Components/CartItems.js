import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADD, DELETE, REMOVE } from '../redux/actions/action'
import { useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItems = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.cartreducer.carts)
    const [price, setPrice] = useState(0);

    const history = useNavigate();
    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    //delete from the cart
    const dlt = (id) => {
        dispatch(DELETE(id));
        //history("/");
        toast.error('Product has been removed from cart', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    //total price
    const total = () => {
        let price = 0;
        data.map((ele, k) => {
            price = ele.price * ele.quantity + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])


    return (
        <>
            {/* Heading */}
            <h2 className='text-center'> <div class="patterns">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                            patternUnits="userSpaceOnUse">
                            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                        </pattern>
                        <style>
                            @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                        </style>

                    </defs>

                    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>



                    <text x="50%" y="60%" text-anchor="middle"  >
                        My cart
                    </text>
                </svg>
            </div>
            </h2>


            {data.map((product, index) => (
                <div class="card">
                    <div class="header">

                        <figure class="snip1033">
                            <img src={product.img} alt="sample20" />
                            <figcaption>
                                <div class="left">
                                <NavLink to='/shop'><h3>Shop</h3></NavLink>
                                </div>
                                <div class="right">
                                <NavLink to={`/productinformation/${product.id}`}><h3 class="white">Details</h3> </NavLink>
                                </div>
                            </figcaption>
                            <div class="center"><i class="ion-ios-loop-strong"></i></div>
                            
                        </figure>

                    </div>
                    <div class="text">
                        <h1 class="food">
                            {product.name}
                        </h1>
                        <i class="fa fa-clock-o"> <p>{product.details}</p></i>


                        <div class="stars">

                            <p style={{ontFamily:"sans-serif"}}><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px", fontFamily:"sans-serif" }}>{product.rating} ★</span></p>

                        </div>
                        <p class="info">
                            <strong style={{ fontSize: "25px" }}>₹{product.price}</strong>
                            <span style={{ textDecoration: 'line-through', marginLeft: "10px" }}>{product.off}</span> <span style={{ marginLeft: "10px", color: "#4CAF50" }}>{product.discount}</span>
                        </p>

                        <p class="info"> <strong>Total</strong>  :₹  {product.price * product.quantity}</p>

                        <p class="info">
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                <span className="button-8" style={{ fontSize: 24 }} onClick={product.quantity <= 1 ? () => dlt(product.id) : () => remove(product)}>-</span>
                                <span className="button-8" style={{ fontSize: 22 }}>{product.quantity}</span>
                                <span className="button-8" style={{ fontSize: 24 }} onClick={() => send(product)}>+</span>



                                <p className='info'><span ><i className='fas fa-trash' onClick={() => dlt(product.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span>
                                    <ToastContainer />
                                </p>
                            </div>


                        </p>



                    </div>

                </div>
            ))}


            <div className="container">
                <div className="row">
                    {
                        data.length > 0 ?
                            (
                                <Card body style={{ backgroundColor: "antiquewhite" }}>
                                    <p className='text-center' style={{ fontSize: "25px" }}><strong>Total Amount:</strong>  ₹{price}</p>
                                </Card>

                            )
                            :
                            (<div>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ display: "block", marginLeft: "auto", marginRight: " auto", width: " 30%" }} />
                                <p style={{ fontSize: 22, textAlign: 'center' }}>Cart is empty</p>
                            </div>)

                    }

                </div>

            </div>
            <Footer />

        </>
    )

}


export default CartItems
