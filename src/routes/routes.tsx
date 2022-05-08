import React from 'react';
import { Chat } from '../components/Chat/Chat';
import { Login } from '../components/Login/Login';
import { CHAT_ROUTE, LOGIN_ROUTE, UNKNOWN_ROUTE } from './utils/constants';
import {Navigate} from 'react-router-dom';
export const publicRoutes:Route[] = [
  {
    path: CHAT_ROUTE,
    component: <Chat />,
  },
  {
    path: UNKNOWN_ROUTE,
    component: <Navigate to={CHAT_ROUTE} />
  }
];

export const privateRoutes:Route[] = [
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
  {
    path: UNKNOWN_ROUTE,
    component: <Navigate to={LOGIN_ROUTE}/>
  }
];

interface Route {
  path: string,
  component: JSX.Element,
}