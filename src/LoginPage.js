// src/LoginPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { auth, googleAuthProvider } from "./firebase";

function LoginPage() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate.push("/landing");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <Container className="mt-5">
      <h1>Welcome to HRgo</h1>
      <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    </Container>
  );
}

export default LoginPage;

