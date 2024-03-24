import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Importa QueryClient y QueryClientProvider
import Navbar from "./components/Navbar";
import Home from "./Home";
import Admin from "./Admin";
import Client from "./Client";

// Crear un QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Envolver la aplicación con QueryClientProvider y pasar el QueryClient
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container mx-auto mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/client" element={<Client />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
