import EmergencyNavigation from "./components/EmergencyNavigation";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// Em vez de BrowserRouter
import { AppStateProvider } from "./contexts/AppStateContext";
import { AIAssistantProvider } from "./contexts/AIAssistantContext";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Notifications from "./components/Layout/Notifications";
import "./App.css";

function App() {
  return (
    <AppStateProvider>
      <AIAssistantProvider>
        <Router>
          <div className="app">
            <Header />
            <EmergencyNavigation />
            <div className="main-container">
              <Sidebar />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
              </main>
            </div>
            <AIAssistant />
            <Notifications />
          </div>
        </Router>
      </AIAssistantProvider>
    </AppStateProvider>
  );
}

export default App;
