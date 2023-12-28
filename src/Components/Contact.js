import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [ph, setPh] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success('Message send successfully', {
      position: toast.POSITION.TOP_CENTER
    });

    setName('');
    setEmail('');
    setmessage('');
    setPh('')
  }




  return (
    <>
      <div id="container">
        <h4 style={{ fontSize: "25px" }}>&bull; Keep in Touch &bull;</h4>
        <div class="underline">
        </div>
        <div class="icon_wrapper">
        </div>
        <form action="#" method="post" id="contact_form" onSubmit={onSubmit}>
          <div class="name">
            <label for="name"></label>
            <input type="text" placeholder="My name is" name="name" id="name_input" required onChange={event => setName(event.target.value)}
              value={name} />
          </div>
          <div class="email">
            <label for="email"></label>
            <input type="email" placeholder="My e-mail is" name="email" id="email_input" required onChange={event => setEmail(event.target.value)}
              value={email} />
          </div>
          <div class="telephone">
            <label for="name"></label>
            <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required onChange={event => setPh(event.target.value)} value={ph} />
          </div>

          <div class="message">
            <label for="message"></label>
            <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required onChange={event => setmessage(event.target.value)}
              value={message}></textarea>
          </div>
          <div class="submit">
            <button type="submit" value="Send Message" id="form_button">Send Message</button>
            <ToastContainer />
          </div>
        </form>
      </div>

      <Footer/>
    </>

  )
}

export default Contact