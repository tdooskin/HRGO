// src/App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { auth, googleAuthProvider } from "./firebase";
import "./App.css";

function LoginPage() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Welcome to HRgo</h1>
      <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;

