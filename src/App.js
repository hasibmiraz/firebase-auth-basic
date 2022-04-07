import './App.css';
import app from './firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('successful');
        setUser({});
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="App">
      {user.email ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <h2>Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      )}
    </div>
  );
}

export default App;
