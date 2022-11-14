import DefaultLayout from '~/layouts/DefaultLayout';
import Login from '../pages/Login';
import MainScreen from '../pages/MainScreen';
import Player from '../pages/Player';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { routesConfig } from './routesConfig';
export const publicRoutes = [
    {
        path: routesConfig.homeRoute,
        page: MainScreen,
        layout: DefaultLayout,
    },
    {
        path: routesConfig.profileRoute,
        page: Profile,
    },
    {
        path: routesConfig.loginRoute,
        page: Login,
    },
    {
        path: routesConfig.playerRoute,
        page: Player,
    },
    {
        path: routesConfig.uploadRoute,
        page: Upload,
    },
    {
        path: routesConfig.libraryRoute,
        page: MainScreen,
    },
];
