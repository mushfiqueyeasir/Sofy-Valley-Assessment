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
          <Route path="dashboard" element={<h2>This IS Dashboard</h2>} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="customer" element={<h2>This IS Customer</h2>} />
          <Route path="sales" element={<h2>This IS Sales</h2>} />
          <Route path="expense" element={<h2>This IS Expense</h2>} />
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
