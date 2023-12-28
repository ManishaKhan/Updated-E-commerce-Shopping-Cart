import React from 'react'
import {
    Container,
    List,
    Segment
} from 'semantic-ui-react'
import { TbExchange } from 'react-icons/tb';
import { FcCurrencyExchange } from 'react-icons/fc';
import { SiCashapp } from 'react-icons/si';
import { BsTruck } from 'react-icons/bs';
import { RiSecurePaymentFill } from 'react-icons/ri';

export const Footer = () => {
    return (

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>

            <Container textAlign='center'>
                <List horizontal inverted divided link size='small'>

                    <List.Item as='a' href='#'><TbExchange style={{ fontSize: 20, cursor: "pointer", color: "orange" }} />7 Days Replacement Policy</List.Item>

                    <List.Item as='a' href='#'><SiCashapp style={{ fontSize: 20, cursor: "pointer", color: "green" }} />Cash on Delivery Avaible</List.Item>

                    <List.Item as='a' href='#'><BsTruck style={{ fontSize: 20, cursor: "pointer" }} />Free shipping on all orders above Rs.499</List.Item>

                    <List.Item as='a' href='#'><FcCurrencyExchange style={{ fontSize: 20, cursor: "pointer" }} />GST invoice available</List.Item>

                    <List.Item as='a' href='#'><RiSecurePaymentFill style={{ fontSize: 20, cursor: "pointer", color: "pink" }} />100% secure payment</List.Item>

                </List>

            </Container>

            <br></br>

{/* social media icon */}
            <Container textAlign='center'>
                <List horizontal inverted link size='small'>

                    <List.Item as='a' href='#'><a
                        className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                        href="#"
                    >
                        <i className="fab fa-twitter fw-normal" />
                    </a></List.Item>

                    <List.Item as='a' href='#'><a
                        className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                        href="#"
                    >
                        <i className="fab fa-facebook-f fw-normal" />
                    </a></List.Item>

                    

                    <List.Item as='a' href='#'><a
                        className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                        href="#"
                    >
                        <i className="fab fa-instagram fw-normal" />
                    </a></List.Item>

                    <List.Item as='a' href='#'> <a
                        className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                        href="#"
                    >
                        <i className="fab fa-youtube fw-normal" />
                    </a></List.Item>

                </List>

            </Container>
        </Segment>




    )
}
