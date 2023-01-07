import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ButtonLink from './components/ButtonLink';
import Table from './components/Table';
import CreateProduct from './pages/CreateProduct';
import DetailProduct from './pages/DetailProduct';
import UpdateProduct from './pages/UpdateProduct';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container mx-auto my-20">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <ButtonLink text="Add" link="/create" class="btn" />
                <Table />
              </>
            }
          />
          <Route
            path="create"
            element={
              <>
                <ButtonLink text="Back" link="/" class="btn" />
                <CreateProduct />
              </>
            }
          />
          <Route
            path="detail/:id"
            element={
              <>
                <ButtonLink text="Back" link="/" class="btn" />
                <DetailProduct />
              </>
            }
          />
          <Route
            path="update/:id"
            element={
              <>
                <ButtonLink text="Back" link="/" class="btn" />
                <UpdateProduct />
              </>
            }
          />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} theme="colored" />
    </div>
  );
}

export default App;
