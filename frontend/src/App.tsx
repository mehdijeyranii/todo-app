import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Search from "./pages/Search";
import Inbox from "./pages/Inbox";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import Filter from "./pages/Filter";
import Add from "./pages/Add";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/add"
        element={
          <MainLayout>
            <Add />
          </MainLayout>
        }
      />
      <Route
        path="/search"
        element={
          <MainLayout>
            <Search />
          </MainLayout>
        }
      />
      <Route
        path="/inbox"
        element={
          <MainLayout>
            <Inbox />
          </MainLayout>
        }
      />
      <Route
        path="/today"
        element={
          <MainLayout>
            <Today />
          </MainLayout>
        }
      />
      <Route
        path="/upcoming"
        element={
          <MainLayout>
            <Upcoming />
          </MainLayout>
        }
      />
      <Route
        path="/filter"
        element={
          <MainLayout>
            <Filter />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
