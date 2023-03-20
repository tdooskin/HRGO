// src/LoginPage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { auth, googleAuthProvider } from './firebase';

function LoginPage() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Welcome to HRgo</h1>
      <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    </Container>
  );
}

export default LoginPage;

