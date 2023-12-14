import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
 

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      localStorage.setItem('userData', JSON.stringify(currentUser));
    
       
    });
  },[auth]);
 
  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut, auth }}>
      {children}
    </userAuthContext.Provider>
  );
};

 const useUserAuth = () => {
  return useContext(userAuthContext);
};
export default useUserAuth;
