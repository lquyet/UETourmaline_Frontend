import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OnlyBodyLayout } from './layouts';
import DefaultLayout from './layouts/DefaultLayout';
import { privateRoute, publicRoutes } from './Routes';
import { routesConfigPrivate, routesConfigPublic } from './Routes/routesConfig';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={routesConfigPublic.homeRoute} element={<DefaultLayout />}>
                    {publicRoutes.map((route) => {
                        const Page = route.page;
                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Route>
                <Route path={routesConfigPrivate.system} element={<OnlyBodyLayout />}>
                    {privateRoute.map((route) => {
                        const Page = route.page;
                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
