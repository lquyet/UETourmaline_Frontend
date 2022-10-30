import DefaultLayout from "../components/Layouts/DefaultLayout"
import Login from "../pages/Login"
import MainScreen from "../pages/MainScreen"
import Player from "../pages/Player"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"
import { routeConfigs } from "./routeconfigs"
export const publicRoutes = [
    {
        path:routeConfigs.homeRoute,
        page:MainScreen,
        layout: DefaultLayout
    },
    {
        path:routeConfigs.profileRoute,
        page: Profile
    },
    {
        path: routeConfigs.loginRoute,
        page: Login
    },
    {
        path:routeConfigs.playerRoute,
        page: Player
    },
    {
        path: routeConfigs.uploadRoute,
        page: Upload
    },
    {
        path: routeConfigs.libraryRoute,
        page: MainScreen,
    }
]