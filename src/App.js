import React, { Component } from 'react';
import firebase from './Firebase-Config';

class App extends Component {
  componentDidMount() {
    // Initialize the reCAPTCHA container here
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible',
      callback: (response) => {
        // Callback logic if needed
      },
      'expired-callback': () => {
        // Expired callback logic if needed
      }
    });
  }

  handleClick = () => {
    const number = '+94769125141';
    firebase
      .auth()
      .signInWithPhoneNumber(number, window.recaptchaVerifier)
      .then((confirmationResult) => {
        // OTP sent successfully, handle OTP entry
        const code = prompt('Enter the OTP', '');
        if (code === null) return;

        confirmationResult
          .confirm(code)
          .then((result) => {
            // Phone number verification successful
            console.log('User:', result.user);
            document.querySelector('label').textContent =
              result.user.phoneNumber + ' Number verified';
          })
          .catch((error) => {
            console.error('OTP Confirmation Error:', error);
          });
      })
      .catch((error) => {
        console.error('Phone Auth Error:', error);
      });
  };

  render() {
    return (
      <div>
        <label></label>
        <div id="recaptcha"></div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
