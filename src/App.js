import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {publicRoutes} from './routes'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index)=> {
              const Page = route.page
              return (
                <Route key={index} path={route.path} element={<Page/>} />
              )
            })}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
