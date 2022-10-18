import Login from "../Page/Login"
import MainScreen from "../Page/MainScreen"
import Player from "../Page/Player"
import Profile from "../Page/Profile"

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