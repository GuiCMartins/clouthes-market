import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles.js';
import Button from '../button/button.component';

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
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with you email and passowrd</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          required
          type="text"
          onChange={hadleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label={'Email'}
          required
          type="email"
          onChange={hadleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={'Password'}
          required
          type="password"
          onChange={hadleChange}
          name="password"
          value={password}
        />
        <FormInput
          label={'Confirm Password'}
          required
          type="password"
          onChange={hadleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
