import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const [signUpToken, setSignUpToken] = useState('');
  const [loginToken, setLoginToken] = useState('');

  useEffect(() => {
    const storedToken = Cookies.get('signUpToken');
    const storedLoginToken = Cookies.get('loginToken');
    if (storedToken) {
      setSignUpToken(storedToken);
    }
    if (storedLoginToken) {
      setLoginToken(storedLoginToken);
    }
  }, []);

  const toggleButton = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <AuthContext.Provider
      value={{
        isActive,
        toggleButton,
        signUpToken,
        setSignUpToken,
        loginToken,
        setLoginToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
