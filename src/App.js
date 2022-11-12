import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './Routes';
import { Fragment } from 'react';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index)=> {
              const Page = route.page
              let Layout = DefaultLayout
              // if(route.layout !== null) {
              //   Layout = route.layout
              // } else  {
              //   Layout = DefaultLayout
              // }
              return (
                <Route key={index} path={route.path} element={
                  <Layout>
                    <Page />  
                  </Layout>
                } />
              )
            })}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
