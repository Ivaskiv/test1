//App.jsx
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from '../../redux/store.js';
import { fetchAdverts } from '../../redux/advert/advertOperation.js';
// import Test from '../../pages/Test.jsx';

const Home = lazy(() => import('../../pages/Home.jsx'));
const Header = lazy(() => import('../../pages/Header.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog.jsx'));
const Favorites = lazy(() => import('../../pages/Favorites.jsx'));
const Footer = lazy(() => import('../../pages/Footer.jsx'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts());
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:advertId" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Flip
          />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
