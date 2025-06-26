import React, { useEffect, useState } from 'react';
import loadingLogo from '../assets/vr2tech-logo.png'; // Replace with your logo

const LoadingLogo = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show logo for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#fff',
          }}
        >
          <img src={loadingLogo} alt="Loading..." style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
      {!loading && children}
    </>
  );
};

export default LoadingLogo;
