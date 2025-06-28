import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TaskManager from "./pages/Taskmanager";
import API from "./pages/API";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="pt-4">
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<API />} />
        </Routes>
        </Layout>
      </main>
    </div>
  );
};

export default App;
