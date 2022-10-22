import Login from "../pages/Login"
import MainScreen from "../pages/MainScreen"
import Player from "../pages/Player"
import Profile from "../pages/Profile"

export const publicRoutes = [
    {
        path:'/',
        page:MainScreen,
    },
    {
        path:'/profile',
        page: Profile
    },
    {
        path:'login',
        page: Login
    },
    {
        path:'player',
        page: Player
    }
]