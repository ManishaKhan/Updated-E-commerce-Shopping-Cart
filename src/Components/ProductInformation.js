import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { NavLink, Link, useParams } from 'react-router-dom'
import { MdLocalOffer } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillHighlight } from 'react-icons/ai';
import { Footer } from './Footer';

export const ProductInformation = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);

   

    //fetch data from own created json server
    useEffect(() => {
        fetch("https://ecommerce-backend-data-3ha3.onrender.com/posts/" + id).then((result) => {
            result.json().then((res) => {
                setData(res);
            })
        })
    }, [])

    const dispatch = useDispatch()

    //send item to the cart
    const send = (e) => {
        console.log(e);
        dispatch(ADD(e));
        toast.success('Product has been added to cart', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <>
            
            <div class="main-productInformation">
                <ul class="cards-productInformation">
                    <li class="cards_item-productInformation" id="item_salad-productInformation">
                        <div class="card-productInformation">
                            
                            <div class="card_image-productInformation"><img src={data.img} alt=""  /></div>
                            <div class="card_content-productInformation">
                                <h2 class="card_title-productInformation">{data.name}</h2>
                                <div class="card_text-productInformation">
                                    <p>{data.details}</p>
                                    <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{data.rating} ★</span>{data.review}</p>
                                    <p>
                            <strong style={{fontSize: "25px"}}>₹{data.price}</strong>
                            <span style={{textDecoration: 'line-through', marginLeft: "10px"}}>{data.off}</span> <span style={{marginLeft: "10px", color:"#4CAF50"}}>{data.discount}</span>
                        </p>

                        <p><strong>Available offers</strong></p>
                        <p ><span style={{ color:"#4CAF50"}}><MdLocalOffer/></span><span>{data.offer1}</span></p>
                        <p ><span style={{ color:"#4CAF50"}}><MdLocalOffer/></span><span>{data.offer2}</span></p>
                        <p ><span style={{ color:"#4CAF50"}}><MdLocalOffer/></span><span>{data.offer3}</span></p>

                        
                        <p style={{fontSize: "18px"}}><strong>Specifications</strong></p>
                        <p ><b>Model Number:</b> <span>{data.highlights1}</span></p>
                        <p ><b>Type:</b> <span>{data.highlights2}</span></p>
                        <p ><b>Power Source:</b> <span>{data.highlights3}</span></p>
                        <p ><b>Warranty:</b> <span>{data.Warranty}</span></p>
                        

                        <p style={{fontSize: "18px"}}><strong>Highlights</strong></p>
                        <p ><AiFillHighlight/>{data.highlights4}</p>
                        <p ><AiFillHighlight/>{data.highlights5}</p>
                        <p ><AiFillHighlight/>{data.highlights6}</p>
                        <p ><AiFillHighlight/>{data.highlights7}</p>


                        <div className="button_div d-flex justify-content-center">
                            <main>
                                <article>

                                    <button className='button-product' onClick={() => send(data)}>
                                        Add To Cart
                                    </button>
                                </article>

                            </main>
                            <ToastContainer />
                        </div>



                        <div className="button_div d-flex justify-content-center">
                            <Link to="/cartitems" class="contact-button">
                                Go
                                <svg class="icon icon-paperplane"></svg>
                            </Link>
                        </div>

                        <div className="button_div d-flex justify-content-center">
                            <main class="content" data-form-type="card">
                                <Link to="/shop" class="btn">
                                    <span class="btn__circle"></span>
                                    <span class="btn__white-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                                            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                                        </svg>
                                    </span>
                                    <span class="btn__text">BACK</span>
                                </Link>
                            </main>
                        </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>


    
            {/* footer */}
            <Footer />
        </>
    )
}
