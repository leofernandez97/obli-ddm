import React from 'react';
import { UserProvider } from './src/provider/UserProvider';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
}