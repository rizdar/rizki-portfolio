import React from 'react';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const emailValid = enteredEmail.includes('@');

  const sendEmail = (e) => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    if (enteredEmail === '' || !emailValid) {
      setEnteredEmailIsValid(false);
      return;
    }

    setEnteredEmailIsValid(true);

    if (enteredMessage.trim() === '') {
      setEnteredMessageIsValid(false);
      return;
    }
    setEnteredMessageIsValid(true);

    emailjs
      .sendForm('service_lreqdos', 'template_bbr0rmg', e.target, 'Dyk6VxIUKJf-EG6q_')
      .then((res) => {
        alert('Succes || your message sent');
      })
      .catch((err) => {
        alert('Error');
      });

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
  };

  return (
    <section className={classes['section-contact']}>
      <h1 className={classes['header-secondary']}>Contact</h1>
      <div className={classes['contact']}>
        <div className={classes['contact-form__box']}>
          <h1 className={classes['contact-title']}>Send a message</h1>
          <form className={classes['contact-form']} onSubmit={sendEmail}>
            <label className={classes['contact-form__label']}>Name :</label>
            <input className={classes['contact-form__input']} type="text" name="name" onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
            {!enteredNameIsValid && <p className={classes.errortext}>Please input valid name</p>}

            <br />
            <label className={classes['contact-form__label']}>Email :</label>
            <input className={classes['contact-form__input']} type="email" name="user_email" onChange={emailInputChangeHandler} value={enteredEmail} />
            {!enteredEmailIsValid && <p className={classes.errortext}>Please input valid email</p>}
            <br />

            <label className={classes['contact-form__label']}>Message :</label>
            <textarea className={classes['contact-form__input']} name="message" rows="4" value={enteredMessage} onChange={messageInputChangeHandler} />
            {!enteredMessageIsValid && <p className={classes.errortext}>Please input valid message</p>}
            <button className="btn" type="submit">
              Send
            </button>
            <br />
          </form>
        </div>

        <div className={classes['contact-text__box']}>
          <h1>Contact me</h1>
          <div className={classes.icons}>
            <div className={classes.icon}>
              <ion-icon name="call-outline" size="large"></ion-icon>
            </div>
            <p className={classes['icon-text']}>+6287889620618</p>
          </div>

          <div className={classes.icons}>
            <div className={classes.icon}>
              <ion-icon name="mail-open-outline" size="large"></ion-icon>
            </div>
            <p className={classes['icon-text']}>rizdar.contact@gmail.com</p>
          </div>

          <div className={classes.icons}>
            <div className={classes.icon}>
              <ion-icon name="logo-instagram" size="large"></ion-icon>
            </div>
            <p className={classes['icon-text']}>rizdar96</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
