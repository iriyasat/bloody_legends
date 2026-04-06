import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import FindDonors from './pages/FindDonors'
import BloodRequests from './pages/BloodRequests'
import CreateRequest from './pages/CreateRequest'
import RequestDetails from './pages/RequestDetails'
import DonorRegistration from './pages/DonorRegistration'
import DonorDashboard from './pages/DonorDashboard'
import DonationHistory from './pages/DonationHistory'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import MyRequests from './pages/MyRequests'
import AdminLayout from './layouts/AdminLayout'

import AdminDashboard from './pages/AdminDashboard'
import DonorVerifications from './pages/DonorVerifications'
import BloodGroupReviews from './pages/BloodGroupReviews'
import BloodRequestsAdmin from './pages/BloodRequestsAdmin'
import CompletionApprovals from './pages/CompletionApprovals'
import UserManagement from './pages/UserManagement'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="find-donors" element={<FindDonors />} />
        <Route path="blood-requests" element={<BloodRequests />} />
        <Route path="blood-requests/:id" element={<RequestDetails />} />
        <Route path="create-request" element={<CreateRequest />} />
        <Route path="donor-registration" element={<DonorRegistration />} />
        <Route path="donor-dashboard" element={<DonorDashboard />} />
        <Route path="donation-history" element={<DonationHistory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="my-requests" element={<MyRequests />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="donor-verifications" element={<DonorVerifications />} />
        <Route path="blood-group-reviews" element={<BloodGroupReviews />} />
        <Route path="blood-requests" element={<BloodRequestsAdmin />} />
        <Route path="completion-approvals" element={<CompletionApprovals />} />
        <Route path="user-management" element={<UserManagement />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


export default App