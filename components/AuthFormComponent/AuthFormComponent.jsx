import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AuthSuccess } from '../../redux/slices/authSlice';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import styles from './form.module.css';
const AuthFormComponent = ({ isRegisterForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == 'admin@admin.com' && password == 'admin') {
      localStorage.setItem('isAuth', true);
      dispatch(AuthSuccess());
      router.push('/');
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className={styles.formLabel}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className={styles.formLabel}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        {error ? (
          <Form.Group className="mb-3">
            <Alert variant="danger">Username / Password Salah</Alert>
          </Form.Group>
        ) : (
          ''
        )}
        <CustomButtonComponent title="Submit" type="submit" />
      </Form>
    </div>
  );
};

export default AuthFormComponent;
