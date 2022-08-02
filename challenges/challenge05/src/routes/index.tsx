/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourierPage from '../pages/CourierPage';
import OrderPage from '../pages/OrderPage';

const ApplicationRoutes: React.FC = () => (
    <Routes>
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/couriers" element={<CourierPage />} />
    </Routes>
);

export default ApplicationRoutes;
