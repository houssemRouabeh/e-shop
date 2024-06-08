import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/notConnectedUsers/home/Home';
import UserContext from '../context/UserContext';

const Routing = () => {
  const NotConnectedRoutes = React.lazy(() =>
    import('../pages/notConnectedUsers/notConnectedRouting.js')
  );
  const ConnectedRoutes = React.lazy(() =>
    import('../pages/connectedUsers/connectedRouting.js')
  );
  // const [isConnected, setIsConnected] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem('loggedIn')) {
  //     console.log('true');
  //     setIsConnected(true);
  //   } else {
  //     console.log('false');
  //   }
  // }, []);
  // console.log(localStorage.getItem('loggedIn'));
  const userConnection = useContext(UserContext);

  const isConnected = userConnection.isConnected;

  return (
    <>
      {isConnected ? (
        <Suspense>
          <Routes>
            <Route path="/:id/*" element={<ConnectedRoutes />} />
          </Routes>
        </Suspense>
      ) : (
        <Suspense>
          <Routes>
            <Route path="/*" element={<NotConnectedRoutes />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default Routing;
