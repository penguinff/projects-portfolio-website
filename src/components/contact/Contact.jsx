import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ContactSection, Title, FormContainer, Form, Input, InputLarge, Label, Button, ModalContainer, Modal, Cfa, CopyRight } from './contact.styles';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  let title = useRef(null);
  let modal = useRef(null);

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isModalShown, setIsModalShown] = useState(false);

  const { name, email, message } = contactInfo;

  const handleChange = event => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ 
      name: '',
      email: '',
      message: ''
    });
    setIsModalShown(true);
    gsap.from(modal, {duration: 1.5, opacity: 0, y: 150});
  }

  useEffect(() => {
    gsap.from(title, {duration: 1.5, opacity: 0, x: 150,
      scrollTrigger: {trigger: title, start: 'top 95%', end: 'top 20%', scrub: 4, toggleActions: 'restart none none none'}});
  }, []);

  return (
    <ContactSection id='contact'>
      <Title ref={el => title = el}>
        Contact Me
      </Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='name'>Name</Label><br/>
          <Input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            required
          /><br/>
          <Label htmlFor='email'>Email</Label><br/>
          <Input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          /><br/>
          <Label htmlFor='message'>Message</Label><br/>
          <InputLarge as='textarea'
            id='message'
            type='text'
            name='message'
            value={message}
            onChange={handleChange}
            required
          /><br/>
          <Button type='submit' value='Send'/>
        </Form>
        <Cfa href='https://github.com/penguinff' target='_blank' rel='noreferrer'>Visit My GitHub Page</Cfa>
        <CopyRight>Copyright © 2021 by Christine Fong</CopyRight>
      </FormContainer>
      <ModalContainer isModalShown={isModalShown} onClick={() => setIsModalShown(!isModalShown)}>
        <Modal ref={el => modal = el}>
          <span>Thanks for your message!</span>
          <span>Will get back to you soon!</span>
        </Modal>
      </ModalContainer>
    </ContactSection>
  )
}

export default Contact;