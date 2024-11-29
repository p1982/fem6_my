import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../shared/styles/scss/style.scss';
import { BrowserRouter } from 'react-router-dom';
import { CommonLayout } from '../../../shared/layouts/CommonLayout';
import { AppRoutes } from '../../routes';

export const App = () => {
  return (
    <BrowserRouter>
      <CommonLayout>
        <AppRoutes />
      </CommonLayout>
    </BrowserRouter>
  );
};
