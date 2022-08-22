import React  from 'react';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation} from 'react-router-dom';
import Main from '../pages/mainPage';
import Product from '../pages/productsPage';
import SinglePage from '../pages/singleProduct';
import '../../style/style.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';



function App() {
  const  [registrVision, setRegistrVison] = useState(false),
         [loginVision, setLoginVision] = useState(false),
         [basketVision, setBasketVision] = useState(false),
         [basketData, setBasketData] = useState([]);
  const location = useLocation();
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="page" timeout={700}>
          <Routes>
            <Route
            path='/'
            element={<Main modalVision={{loginVision, setLoginVision, registrVision, setRegistrVison,}}/>}
            />
            <Route
            path='/catalog'
            element={<Product modalVision={{loginVision,
                                          setLoginVision,
                                          registrVision,
                                          setRegistrVison,
                                          basketVision,
                                          setBasketVision,
                                          basketData,
                                          setBasketData}}/>}/>
            <Route
            path='/catalog/:productId'
            element={<SinglePage modalVision={{loginVision,
                                              setLoginVision,
                                              registrVision,
                                              setRegistrVison,
                                              basketVision,
                                              setBasketVision,
                                              basketData,
                                              setBasketData}}/>}
            ></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
