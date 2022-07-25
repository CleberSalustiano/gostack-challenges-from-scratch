/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Comments from '../pages/Comments';

const ApplicationRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Comments />} />
  </Routes>
);

export default ApplicationRoutes;