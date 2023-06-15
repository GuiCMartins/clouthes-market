import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const hadleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use!');
      } else {
        console.log('User creation encoutered an error', e.message);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with you email and passowrd</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          requires
          type="text"
          onChange={hadleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          requires
          type="email"
          onChange={hadleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          requires
          type="password"
          onChange={hadleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          requires
          type="password"
          onChange={hadleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
