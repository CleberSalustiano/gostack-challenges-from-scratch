/* eslint-disable react/function-component-definition */
import React from "react";
import { Routes, Route } from "react-router-dom";
import CourierPage from "../pages/CourierPage";
import RecipientsPageRegister from "../pages/RecipientsPageRegister";
import OrderPage from "../pages/OrderPage";
import OrderPageRegister from "../pages/OrderPageRegister";
import ProblemsPage from "../pages/ProblemsPage";
import RecipientsPage from "../pages/RecipientsPage";
import SignInPage from "../pages/SignInPage";
import ProtectedRoute from "./routes";
import CourierPageRegister from "../pages/CourierPageRegister";

const ApplicationRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route
            path="/orders"
            element={
                <ProtectedRoute>
                    <OrderPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/orders/register"
            element={
                <ProtectedRoute>
                    <OrderPageRegister />
                </ProtectedRoute>
            }
        />
        <Route
            path="/couriers"
            element={
                <ProtectedRoute>
                    <CourierPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/couriers/register"
            element={
                <ProtectedRoute>
                    <CourierPageRegister />
                </ProtectedRoute>
            }
        />
        <Route
            path="/recipients/register"
            element={
                <ProtectedRoute>
                    <RecipientsPageRegister />
                </ProtectedRoute>
            }
        />
        <Route
            path="/recipients"
            element={
                <ProtectedRoute>
                    <RecipientsPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/problems"
            element={
                <ProtectedRoute>
                    <ProblemsPage />
                </ProtectedRoute>
            }
        />
    </Routes>
);

export default ApplicationRoutes;
