import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./page/login/Login";
import LeadsPage from "./page/leadsPage/LeadsPage";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./auth/RequireAuth";
import UserAuth from "./auth/UserAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Navigate to="leads" />} />
          <Route
            path="dashboard"
            element={
              <div className="flex justify-center items-center h-[100vh]">
                <h2 className="text-3xl">This is Dashboard</h2>
              </div>
            }
          />
          <Route path="leads" element={<LeadsPage />} />
          <Route
            path="customer"
            element={
              <div className="flex justify-center items-center h-[100vh]">
                <h2 className="text-3xl">This is Customer</h2>
              </div>
            }
          />
          <Route
            path="sales"
            element={
              <div className="flex justify-center items-center h-[100vh]">
                <h2 className="text-3xl">This is Sales</h2>
              </div>
            }
          />
          <Route
            path="expense"
            element={
              <div className="flex justify-center items-center h-[100vh]">
                <h2 className="text-3xl">This is Expense</h2>
              </div>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <UserAuth>
              <Login />
            </UserAuth>
          }
        ></Route>
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
