/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderPage from '../pages/OrderPage';

const ApplicationRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<OrderPage />} />
  </Routes>
);

export default ApplicationRoutes;
