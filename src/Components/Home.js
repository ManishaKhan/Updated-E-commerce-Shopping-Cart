import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Footer } from './Footer';
import "react-multi-carousel/lib/styles.css";
import { useParallax } from "react-scroll-parallax";


// Home page of the e-comerce site
const Home = () => {

    const scaleCParallax = useParallax({
        scaleX: [0, 3, "easeInQuad"],
    });
    const parallaxRotateY = useParallax({
        rotateY: [0, 360],
    });
    const parallaxRotateY2 = useParallax({
        rotateY: [0, 360],
    });
    const parallaxRotateY3 = useParallax({
        rotateY: [0, 360],
    });
    const parallaxEasing = useParallax({
        easing: "easeOutQuad",
        translateX: [-340, 100],
    });
    const parallaxEasingLeft = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, -260],
        translateY: [1100],
    });
    return (
        <>


            <div>
            
                <div class="banner animated tada">
                    <div class=" big-text animated tada">UP TO 50% OFF</div>
                    <Link to="/shop">Go to store</Link>
                </div>



                <section className="bg-container">
                    <img
                        ref={parallaxRotateY.ref}
                        src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
                    />
                    <div className="absolute-text">
                        <h5 ref={parallaxEasing.ref}></h5>
                        <h5 ref={parallaxEasingLeft.ref}></h5>
                    </div>
                </section>
                <br />
                <section className="card-container" ref={scaleCParallax.ref}>
                    <div className="card-home">
                        {/* <img src="" /> */}
                        
                    </div>
                    {/* <div className="card-home">
                        <img src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div> */}
                </section>

                <br />
                <br />
                <section className="card-container">
                    <div className="card-home" ref={parallaxRotateY2.ref}>
                        <img src="https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div ref={parallaxRotateY3.ref} className="card-home">
                        <img src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </section>
                <br />


            </div>


            <div class="container-HomePage">
                            <a class="box-HomePage box--1">
                                <div class="box__background">
                                    <div class="box__text-line box__text-line--top">
                                        <span>Limited time</span>
                                    </div>
                                    <div class="box__text-line box__text-line--bottom">
                                        <span>WEEKEND SALE EVENT</span>
                                    </div>
                                </div>
                                <div class="box__content">
                                    <div class="box__col">
                                        <div class="box__title">Black <span>Friday</span></div>
                                        <div class="box__btn"><Link to="/shop">shop now</Link></div>
                                    </div>
                                    <div class="box__col">
                                        <div class="box__card card-HomePage">
                                            
                                            <div class="card__title">
                                                <span>15%</span> Electronics
                                            </div>
                                            
                                        </div>
                                        <div class="box__card card-HomePage">
                                           
                                            <div class="card__title">
                                                <span>35%</span> Electronics
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a class="box-HomePage box--2">
                                <svg class="box__background" viewBox="0 0 800 800" fill="none" >
                                    <path id="line1"
                                        d="M251.994 21.5L251.995 190.5C251.995 212.591 269.903 230.5 291.995 230.5L517.5 230.5C539.592 230.5 557.5 248.409 557.5 270.5L557.5 275.5C557.5 297.591 575.409 315.5 597.5 315.5L759 315.5"
                                        stroke="black" stroke-width="40" stroke-linecap="round" />
                                    <path id="line2"
                                        d="M20.5001 451L226 451C248.091 451 266 468.909 266 491L266 530C266 552.091 283.908 570 306 570L475.5 570C497.591 570 515.5 587.909 515.5 610L515.5 776.5"
                                        stroke="black" stroke-width="40" stroke-linecap="round" />
                                    <text fill="#fff">
                                        <textpath startOffset="0%" text-anchor="middle" alignment-baseline="central" >
                                            WEEKEND SALE EVENT
                                            <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="6s"
                                                repeatCount="indefinite" />
                                        </textpath>
                                    </text>
                                    <text fill="#fff">
                                        <textpath startOffset="0%" text-anchor="middle" alignment-baseline="central" >
                                            WEEKEND SALE EVENT
                                            <animate attributeName="startOffset" from="0%" to="100%" begin="3s" dur="6s"
                                                repeatCount="indefinite" />
                                        </textpath>
                                    </text>

                                    <text fill="#fff">
                                        <textpath startOffset="0%" text-anchor="middle" alignment-baseline="central" >ONE
                                            Day
                                            <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="6s"
                                                repeatCount="indefinite" />
                                        </textpath>
                                    </text>
                                    <text fill="#fff">
                                        <textpath startOffset="0%" text-anchor="middle" alignment-baseline="central" >
                                            special OFFER
                                            <animate attributeName="startOffset" from="0%" to="100%" begin="3s" dur="6s"
                                                repeatCount="indefinite" />
                                        </textpath>
                                    </text>
                                </svg>
                                <div class="box__content">
                                    get up to <span> 50%</span> off
                                    <div class="box__btn"><Link to="/shop">shop now</Link></div>
                                </div>
                            </a>
                            <a class="box-HomePage box--3">
                                <svg class="box__background" viewBox="0 0 540 540" fill="none" >
                                    <path
                                        d="M420 270C420 352.843 352.843 420 270 420C187.157 420 120 352.843 120 270C120 187.157 187.157 120 270 120C352.843 120 420 187.157 420 270Z"
                                        fill="black" />

                                </svg>

                                <svg class="box__background box__text-svg" viewBox="0 0 540 540" fill="none"
                                    >
                                    <path id="circle1"
                                        d="M440 270C440 363.888 363.888 440 270 440C176.112 440 100 363.888 100 270C100 176.112 176.112 100 270 100C363.888 100 440 176.112 440 270Z"
                                        stroke-width="40" />
                                    <text>
                                        <textPath alignment-baseline="middle" href="#circle1" stroke="none" fill="#000">
                                            SUPER SALE • BEST OFFER • the full • SUPER SALE • SALE EVENT •
                                        </textPath>
                                    </text>
                                </svg>

                                <svg class="box__background box__text-svg box__text-svg--reverse" viewBox="0 0 540 540" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path id="circle2" stroke="#000"
                                        d="M480 270C480 385.98 385.98 480 270 480C154.02 480 60 385.98 60 270C60 154.02 154.02 60 270 60C385.98 60 480 154.02 480 270Z"
                                        stroke-width="40" />


                                    <text>
                                        <textPath alignment-baseline="middle" href="#circle2" stroke="none" fill="#fff">
                                            10% 70% 35% 25% 55% 80% 15% 15% 80% 10% 70% 35% 25% 5% 80% 15% 5% 80% 15%
                                        </textPath>
                                    </text>

                                </svg>
                                <svg class="box__background box__text-svg" viewBox="0 0 540 540" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path id="circle3"
                                        d="M520 270C520 408.071 408.071 520 270 520C131.929 520 20 408.071 20 270C20 131.929 131.929 20 270 20C408.071 20 520 131.929 520 270Z"
                                        stroke-width="40" />



                                    <text>
                                        <textPath alignment-baseline="middle" href="#circle3" stroke="none" fill="#000">
                                            $ $$ $ $$$ $ $$ $$$ $$ $ $$ $ $ $ $$ $$$ $ $$ $ $ $$$ $$ $$ $ $ $$$ $$ $$ $ $ $$$ $ $ $$ $$ $$$
                                            $ $ $$$ $$$
                                        </textPath>
                                    </text>
                                </svg>



                                <div class="box__content">
                                    get up to <span>25%</span>
                                    <div class="box__btn"><Link to="/shop">shop now</Link></div>
                                </div>
                            </a>
                            <a class="box-HomePage box--4">
                                <div class="box__content">
                                    70%
                                    <span>WEEKEND SALE EVENT</span>
                                    5%
                                    <span>the full</span>
                                    20%
                                    <span>SUPER SALE</span>
                                    10%
                                    <span>5% off</span>
                                    <span>SALE</span>
                                    70%
                                    <span>SALE EVENT</span>
                                    <span>ONE Day</span>!
                                    10%
                                    <span>SALE</span>
                                    <span>the full</span>
                                    70%! $$
                                    <span class="box__title box__title--top">Black Friday</span>
                                    <span>70%</span>$$!
                                    <span>85% off</span>
                                    <span class="box__title"><Link to="/shop">shop now</Link></span>$
                                    <span>5% off</span>$
                                    <span>50% OFF</span>
                                    <span>SALE</span>
                                    70%
                                    <span>BEST OFFER</span>
                                    <span>the full</span>$
                                    30%!
                                    <span>Limited time</span>
                                    50%<span>off sale</span>
                                    <span>special OFFER</span>
                                </div>
                            </a>
                        </div>
            <Footer />

        </>
    )
}

export default Home
