import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './Layout';
import './index.css';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import { ClerkProvider } from '@clerk/clerk-react'
import Organization from './pages/Organization';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing REACT_APP_CLERK_PUBLISHABLE_KEY");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkPubKey}
      signInFallbackRedirectUrl="/hometowntax/"
      signUpFallbackRedirectUrl="/hometowntax/"
      afterSignOutUrl="/hometowntax/" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="organization" element={<Organization />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);