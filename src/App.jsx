import { Route, Routes } from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";
import InfoUserPage from "./pages/InfoUserPage";
import Layout from "./components/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UsersListPage />} />
        <Route path={":id"} element={<InfoUserPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
