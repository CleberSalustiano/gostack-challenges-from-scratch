/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourierPage from '../pages/CourierPage';
import OrderPage from '../pages/OrderPage';
import ProblemsPage from '../pages/ProblemsPage';
import RecipientsPage from '../pages/RecipientsPage';
import SignInPage from '../pages/SignInPage';

const ApplicationRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/couriers" element={<CourierPage />} />
        <Route path="/recipients" element={<RecipientsPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
    </Routes>
);

export default ApplicationRoutes;
