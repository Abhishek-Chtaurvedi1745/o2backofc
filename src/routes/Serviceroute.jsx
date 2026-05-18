// src/routes/ServiceRoutes.js
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner/Loadingspinner';
const Accounts = React.lazy(() => import('../Components/Services/Accounts/Accounts'));
const VirtualAssistant = React.lazy(() => import('../Components/Services/VirtualAssistant/VirtualAssistant'));
const Customer = React.lazy(() => import('../Components/Services/CustomerServices/Customer'));
const TechnicalSupport = React.lazy(() => import('../Components/Services/technicalsupport/techinalsupport'));
const CallCenter = React.lazy(() => import('../Components/Services/CallCenter/CallCenter'));
const HrRecruitment = React.lazy(() => import('../Components/Services/hrRecuritment/Hr'));
const Admin = React.lazy(() => import('../Components/Services/adminanddataentry/Admin'));
const SalesSupport = React.lazy(() => import('../Components/Services/saleSupport/Salesupport'));
const SocialMedia = React.lazy(() => import('../Components/Services/socialMediaManagement/SocialMedia'));

const ServiceRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="accountants-and-book-keeping" element={<Accounts />} />
        <Route path="virtual-assitant" element={<VirtualAssistant />} />
        <Route path="customer-services" element={<Customer />} />
        <Route path="techinal-support" element={<TechnicalSupport />} />
        <Route path="call-center-outsourcing" element={<CallCenter />} />
        <Route path="hr-recuirtment" element={<HrRecruitment />} />
        <Route path="admin-and-data-entry" element={<Admin />} />
        <Route path="sales-support" element={<SalesSupport />} />
        <Route path="social-media-management" element={<SocialMedia />} />
      </Routes>
    </Suspense>
  );
};

export default ServiceRoutes;