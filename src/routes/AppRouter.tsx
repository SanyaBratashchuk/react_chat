import React from 'react';
import { privateRoutes, publicRoutes } from './routes';
import { Routes, Route } from 'react-router-dom';
import { Context } from '..';
import {useAuthState} from 'react-firebase-hooks/auth';

export const AppRouter = () => {
  const { auth } = React.useContext(Context);
  const [ user ] = useAuthState(auth);

  console.log(user);
  const isAuth = user;

  return isAuth
    ?
    <Routes>
      {publicRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>

    : (
      <Routes>
        {privateRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    );
};