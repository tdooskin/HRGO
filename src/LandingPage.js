// src/LandingPage.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import { auth } from "./firebase";

function LandingPage({ user }) {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <Container className="mt-5">
      <h1>Welcome to HRgo, {user.displayName}!</h1>
      <Button onClick={signOut}>Sign Out</Button>
    </Container>
  );
}

export default LandingPage;

