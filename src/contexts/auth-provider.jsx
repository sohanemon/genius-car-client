import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/app";
const Auth = createContext();
export const useAuth = () => useContext(Auth);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("no previous user found");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   const googleLogin = () => {
  //     const provider = new GoogleAuthProvider();

  //     return signInWithPopup(auth, provider)
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  const googleLogin = () =>
    new Promise((resolve) => {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          resolve("logged");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  const emailSignUp = (data) => {
    return new Promise((res) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((result) => {
          res();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const emailLogin = (data) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((result) => {
          resolve();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <Auth.Provider
      value={{ user, logOut, googleLogin, emailSignUp, emailLogin }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
