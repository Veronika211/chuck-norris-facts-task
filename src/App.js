import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import FactDetailsPage from "./pages/factDetails/FactDetailsPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { FactProvider } from "./store/FactContext";
import { MainContainer } from "./App.styles";
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MainContainer>
        <QueryClientProvider client={queryClient}>
          <FactProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/fact/:id" element={<FactDetailsPage />} />
              </Routes>
            </Router>
          </FactProvider>
        </QueryClientProvider>
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
