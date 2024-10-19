"use client";

import React from 'react';
import NavBar from './components/NavBar';
import '../styles/globals.css';

export default function Page() {
  return (
    <div className="dark">
      <NavBar />
      <div className="p-4 bg-black text-white">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the landing page of my portfolio.</p>
      </div>
    </div>
  );
}