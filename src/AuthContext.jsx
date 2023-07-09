import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const [signUpToken, setSignUpToken] = useState('');
  const [loginToken, setLoginToken] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userEmail, setuserEmail] = useState('');

  useEffect(() => {
    const storedToken = Cookies.get('signUpToken');
    const storedLoginToken = Cookies.get('loginToken');
    const storedFirstName = Cookies.get('firstName');
    const storedLastName = Cookies.get('lastName');
    const storedRole = Cookies.get('userRole');
    const storedEmail = Cookies.get('userEmail');

    if (storedToken) {
      setSignUpToken(storedToken);
    }
    if (storedLoginToken) {
      setLoginToken(storedLoginToken);
    }
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
    if (storedRole) {
      setUserRole(storedRole);
    }
    if (storedEmail) {
      setuserEmail(storedEmail);
    }
  }, []);

  const toggleButton = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleUpdateImage = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const handleRemoveImage = () => {
    setImageSrc('');
  };

  const updateFirstName = (newFirstName) => {
    setFirstName(newFirstName);
  };

  const updateLastName = (newLastName) => {
    setLastName(newLastName);
  };

  const updateUserRole = (newRole) => {
    setUserRole(newRole);
  };
  const updateUserEmail = (newEmail) => {
    setuserEmail(newEmail);
  };

  const authContextValue = {
    isActive,
    toggleButton,
    signUpToken,
    setSignUpToken,
    loginToken,
    setLoginToken,
    imageSrc,
    firstName,
    lastName,
    onUpdateImage: handleUpdateImage,
    onRemoveImage: handleRemoveImage,
    updateFirstName,
    updateLastName,
    userRole,
    updateUserRole,
    updateUserEmail,
    userEmail,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
