import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import styles from './form.module.css';
const AuthFormComponent = ({ isRegisterForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == 'admin@admin.com' && password == 'admin') {
      localStorage.setItem('isAuth', true);
      router.push('/');
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
  return (
    <div>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthFormComponent;
