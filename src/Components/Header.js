
import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { ADD, DELETE, REMOVE } from '../redux/actions/action'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { LiaPhoneSolid } from 'react-icons/lia';
import { TiChartPieOutline } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../navbar.css";

const Header = () => {

    const [price, setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    const remove = (item) => {
        dispatch(REMOVE(item))
    }
    const dlt = (id) => {
        dispatch(DELETE(id))
        toast.error('Product has been removed from cart', {
            position: toast.POSITION.TOP_CENTER
        });
    }


    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.quantity + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }} sticky="top">
                <Container>
                    <NavLink to='/' className="text-decoration-none mx-3"><Navbar.Brand ><TiChartPieOutline style={{ fontSize: 50, cursor: "pointer" }} /></Navbar.Brand></NavLink>

                    <Nav className="me-auto">

                        <NavLink to='/' className="text-decoration-none text-light mx-3"><AiOutlineHome style={{ fontSize: 25, cursor: "pointer" }} /><span>Home</span></NavLink>

                        <NavLink to='/shop' className="text-decoration-none text-light mx-3"><AiOutlineShopping style={{ fontSize: 25, cursor: "pointer" }} />Shop</NavLink>
                        <NavLink to='/contact' className="text-decoration-none text-light mx-3"><LiaPhoneSolid style={{ fontSize: 25, cursor: "pointer" }} />Contact</NavLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary" 
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Cart Items</th>
                                            <NavLink to='/cartitems' className="text-decoration-none text-dark mx-3"> <th><button className='button-3'>Go To Cart </button></th></NavLink>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/productinformation/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.img} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.name}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.quantity}</p>


                                                                <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 70, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                                    <span className="button-8" style={{ fontSize: 20 }} onClick={e.quantity <= 1 ? () => dlt(e.id) : () => remove(e)}>-</span>
                                                                    <span className="button-8" style={{ fontSize: 22 }}>{e.quantity}</span>
                                                                    <span className="button-8" style={{ fontSize: 24 }} onClick={() => send(e)}>+</span>
                                                                </div>





                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                                <ToastContainer />
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }

                </Menu>
            </Navbar>


{/* collapsible navbar */}

            {/* <Navbar collapseOnSelect  expand="sm" bg="dark" variant="dark" >
                <Container>
                    <NavLink to='/' className="text-decoration-none mx-3"><Navbar.Brand ><TiChartPieOutline style={{ fontSize: 50, cursor: "pointer" }} /></Navbar.Brand></NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>

                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">

                        <NavLink to='/' className="text-decoration-none text-light mx-3"><AiOutlineHome style={{ fontSize: 25, cursor: "pointer" }} /><span>Home</span></NavLink>

                        <NavLink to='/shop' className="text-decoration-none text-light mx-3"><AiOutlineShopping style={{ fontSize: 25, cursor: "pointer" }} />Shop</NavLink>
                        <NavLink to='/contact' className="text-decoration-none text-light mx-3"><LiaPhoneSolid style={{ fontSize: 25, cursor: "pointer" }} />Contact</NavLink>
                        </Nav>
                       

                    <Nav >
                    <Badge badgeContent={getdata.length} color="primary" className="d-inline-block align-top"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                
                

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Cart Items</th>
                                            <NavLink to='/cartitems' className="text-decoration-none text-dark mx-3"> <th><button className='button-3'>Go To Cart </button></th></NavLink>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/productinformation/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.img} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.name}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.quantity}</p>


                                                                <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 70, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                                    <span className="button-8" style={{ fontSize: 20 }} onClick={e.quantity <= 1 ? () => dlt(e.id) : () => remove(e)}>-</span>
                                                                    <span className="button-8" style={{ fontSize: 22 }}>{e.quantity}</span>
                                                                    <span className="button-8" style={{ fontSize: 24 }} onClick={() => send(e)}>+</span>
                                                                </div>





                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                                <ToastContainer />
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }

                </Menu>
                
            </Navbar> */}

        </>
    )
}

export default Header