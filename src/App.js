import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {publicRoutes} from './routes'
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index)=> {
              const Page = route.page
              let Layout
              if(route.layout !== null) {
                Layout = route.layout
              } else  {
                Layout = Fragment
              }
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
