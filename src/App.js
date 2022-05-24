import {
  MainLayout,
  AdminMainLayout,
} from './components/Layout';
import PageSpinner from './components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './styles/reduction.scss';
import Landing from './pages/Landing';

// user pages
import Login from './pages/user/login';
import Register from './pages/user/register';
import ForgotPassword from './pages/user/forgotPassword';
import ResetForgotPassword from './pages/resetForgotPassword';

// admin pages
import AdminLogin from './pages/admin/adminLogin';
import AdminForgotPassword from './pages/admin/adminForgotPassword';

import { ProtectedRoute } from './validations/protectedRoute';
import { IsUserRedirect } from './validations/isUserRedirect';

//Admin
const AdminDashboard = React.lazy(() => import('./pages/admin/adminDashboard'));
const AdminProfile = React.lazy(() => import('./pages/admin/adminProfile'));
const AdminClients = React.lazy(() => import('./pages/admin/adminClients'));
const AdminReceivedDocuments = React.lazy(() => import('./pages/admin/documentsReceived'));
const AdminSentDocuments =React.lazy(() => import('./pages/admin/documentsSent'))
const AdminRequests = React.lazy(() => import('./pages/admin/adminRequests'));
const AdminAppointments = React.lazy(() => import('./pages/admin/adminAppointments'));
const AdminViewClientDetails = React.lazy(() => import('./pages/admin/adminViewClientDetails'));
const AdminResetPassword = React.lazy(() => import('./pages/admin/resetPassword'));
const AdminRegisterClient = React.lazy(() => import('./pages/admin/clientRegister'));

//User
const DashboardPage = React.lazy(() => import('./pages/user/DashboardPage'));
const Profile = React.lazy(() => import('./pages/user/profile'));
const CreateNewRequest = React.lazy(() => import('./pages/user/createRequest'));
const UserViewRequests = React.lazy(() => import('./pages/user/viewRequests'));
const UserViewReceivedDocuments = React.lazy(() => import('./pages/user/viewReceivedDocuments'));
const UserViewSentDocuments = React.lazy(() => import('./pages/user/viewSentDocuments'));
const UserUploadDocument = React.lazy(() => import('./pages/user/uploadDocument'));
const UserViewAppointments = React.lazy(() => import('./pages/user/viewAppointments'));
const BookAppointment = React.lazy(() => import('./pages/user/bookAppointment'));
const UserResetPassword = React.lazy(() => import('./pages/user/resetPassword'));
const UserPhoto = React.lazy(() => import('./pages/user/photo'));

// superAdmin
const superAdminDashboard = React.lazy(() => import('./pages/super/adminDashboard'));
const superAdminRegisterAdmin = React.lazy(() => import('./pages/super/adminRegister'));
const superAdminRegisterClient = React.lazy(() => import('./pages/super/clientRegister'))
const superAdminAllAdmins = React.lazy(() => import('./pages/super/allAdmins'));
const superAdmin_Admin_Clients = React.lazy(() => import('./pages/super/adminClients'));
const superAdmin_Admin_Client = React.lazy(() => import('./pages/super/adminClient'));
const superAdminProfile = React.lazy(() => import('./pages/super/profile'));
const superAdminRequests = React.lazy(() => import('./pages/super/requests'));
const superAdminAppointments = React.lazy(() => import('./pages/super/appointments'));
const superAdminDocumentPage = React.lazy(() => import('./pages/super/document')); 
const superAdminClientPage = React.lazy(() => import('./pages/super/clientPage'));
const superAdminClients_Active = React.lazy(() => import('./pages/super/activeClients'));
const superAdminClients_InActive = React.lazy(() => import('./pages/super/inactiveClients'));
const superAdminClients_Prospect = React.lazy(() => import('./pages/super/prospectClients'));
const superAdminViewClientDetails = React.lazy(() => import('./pages/super/adminViewClientDetails'));

const auth = localStorage.getItem('jwtToken');
const role = localStorage.getItem('role');

const App = ({ breakpoint }) => {
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          path="/"
          role={role}
          exact
        >
          <Landing />
        </IsUserRedirect>

        {/* admin auth */}
        <IsUserRedirect
          path="/admin/login"
          role={role}
          exact 
        >
          <AdminLogin />
        </IsUserRedirect>
        <IsUserRedirect
          path="/admin/forgot-password"
          role={role}
          exact
        >
         <AdminForgotPassword /> 
        </IsUserRedirect>
        {/* user auth */}
        <IsUserRedirect 
          path="/user/login"
          role={role}
          exact
        >
          <Login />
        </IsUserRedirect>
        <IsUserRedirect
          path="/user/register"
          role={role}
          exact
        >
          <Register />
        </IsUserRedirect>
        <IsUserRedirect
          path="/user/forgot-password"
          role={role}
          exact
        >
          <ForgotPassword />
        </IsUserRedirect>
        <IsUserRedirect
          path={`/resetpage`}
          role={role}
          exact 
        >
          <ResetForgotPassword />
        </IsUserRedirect>
        {/* User Routes */}
        {(auth && role === 'user') ? (
          <MainLayout breakpoint={breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <ProtectedRoute>
                <Route exact path="/user/dashboard" component={DashboardPage} />
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/profile" component={Profile}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/create-new-request" component={CreateNewRequest}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/requests" component={UserViewRequests}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/documents/received" component={UserViewReceivedDocuments}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/documents/sent" component={UserViewSentDocuments}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/upload-document" component={UserUploadDocument}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/view-appointments" component={UserViewAppointments}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/book-appointment" component={BookAppointment}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/reset-password" component={UserResetPassword}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/user/profile/photo" component={UserPhoto}/>
              </ProtectedRoute>
            </React.Suspense>
          </MainLayout>
        ) : ((auth && role === 'admin') ? 
          // Admin Routes
          (<AdminMainLayout breakpoint={breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <ProtectedRoute>
                <Route exact path="/admin/dashboard" component={AdminDashboard} />
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/profile" component={AdminProfile}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/clients" component={AdminClients}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/documents/received" component={AdminReceivedDocuments}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/documents/sent" component={AdminSentDocuments}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/requests" component={AdminRequests}/> 
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/appointments" component={AdminAppointments}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/client/details/:userId" component={AdminViewClientDetails} /> 
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/reset-password" component={AdminResetPassword}/>
              </ProtectedRoute>
              <ProtectedRoute>
                <Route exact path="/admin/registerclient" component={AdminRegisterClient}/>
              </ProtectedRoute>
            </React.Suspense>
          </AdminMainLayout>
          ) : ( (auth && role === 'superadmin') ?
            (
              <AdminMainLayout breakpoint={breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <ProtectedRoute>
                  <Route exact path="/superadmin/dashboard" component={superAdminDashboard} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/profile" component={superAdminProfile} />
                </ProtectedRoute>
                <ProtectedRoute>
                <Route exact path="/superadmin/admins" component={superAdminAllAdmins} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/:adminId/clients" component={superAdmin_Admin_Clients}/>
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/:adminId/clients/:clientId" component={superAdmin_Admin_Client}/>
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/clients" component={superAdminClientPage} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/clients/active" component={superAdminClients_Active} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/clients/inactive" component={superAdminClients_InActive} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/clients/prospect" component={superAdminClients_Prospect} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/documents" component={superAdminDocumentPage} /> 
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/registeradmin" component={superAdminRegisterAdmin} /> 
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route eaxact path="/superadmin/registerclient" component={superAdminRegisterClient}/>
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/requests" component={superAdminRequests} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/client/details/:userId" component={superAdminViewClientDetails} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/appointments" component={superAdminAppointments}/>
                </ProtectedRoute>
              </React.Suspense>
            </AdminMainLayout> 
            )
            : null
          )
        )}
      </Switch>
    </Router>
  );
};

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
