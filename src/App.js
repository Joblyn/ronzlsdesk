// import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
// import GAListener from 'components/GAListener';
import {
  // EmptyLayout,
  // LayoutRoute,
  MainLayout,
  AdminMainLayout,
} from './components/Layout';
import PageSpinner from './components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import {
  HashRouter as Router,
  // Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './styles/reduction.scss';
import Landing from './pages/Landing';

// user pages
import Login from './pages/user/login';
import Register from './pages/user/register'
;
import ForgotPassword from './pages/user/forgotPassword';
import ConfirmPassword from './pages/user/confirmPassword';


// admin pages
import AdminLogin from './pages/admin/adminLogin';
import AdminForgotPassword from './pages/admin/adminForgotPassword';
import AdminConfirmPassword from './pages/admin/adminConfirmPassword';


// import {
  // logoutAdminAction,
  // setCurrentAdminUser,
// } from './actions/admin/authAction/Users';
import { ProtectedRoute } from './validations/protectedRoute';
import { IsUserRedirect } from './validations/isUserRedirect';
// // import { useDispatch } from 'react-redux';
// import { getClient } from './actions/admin/clients/Clients';
// import { getAllClients } from './apiConstants/apiConstants';

//Admin
const AdminDashboard = React.lazy(() => import('pages/admin/adminDashboard'));
const AdminProfile = React.lazy(() => import('pages/admin/adminProfile'));
const AdminClients = React.lazy(() => import('pages/admin/adminClients'));
const AdminDocuments = React.lazy(() => import('pages/admin/adminDocuments'));
const AdminRequests = React.lazy(() => import('pages/admin/adminRequests'));
const AdminAppointments = React.lazy(() => import('pages/admin/adminAppointments'));
const AdminViewClientDetails = React.lazy(() => import('pages/admin/adminViewClientDetails'));


// const adminAlertPage = React.lazy(() => import('pages/admin/adminAlertPage'));
// const adminBadgePage = React.lazy(() => import('pages/admin/adminBadgePage'));
// const adminButtonGroupPage = React.lazy(() =>import('pages/admin/adminButtonGroupPage'));
// const adminButtonPage = React.lazy(() => import('pages/admin/adminButtonPage'));
// const adminCardPage = React.lazy(() => import('pages/admin/adminCardPage'));
// const adminChartPage = React.lazy(() => import('pages/admin/adminChartPage'));
// const adminDashboardPage = React.lazy(() => import('pages/admin/adminDashboardPage'));
// const adminDropdownPage = React.lazy(() => import('pages/admin/adminDropdownPage'));
// const adminFormPage = React.lazy(() => import('pages/admin/adminFormPage'));
// const adminInputGroupPage = React.lazy(() => import('pages/admin/adminInputGroupPage'));
// const adminModalPage = React.lazy(() => import('pages/admin/adminModalPage'));
// const adminProgressPage = React.lazy(() => import('pages/admin/adminProgressPage'));
// const adminTablePage = React.lazy(() => import('pages/admin/adminTablePage'));
// const adminTypographyPage = React.lazy(() => import('pages/admin/adminTypographyPage'));
// const adminWidgetPage = React.lazy(() => import('pages/admin/adminWidgetPage'));

//User
const DashboardPage = React.lazy(() => import('pages/user/DashboardPage'));
const Profile = React.lazy(() => import('pages/user/profile'));
const CreateNewRequest = React.lazy(() => import('pages/user/createRequest'));
const UserViewRequests = React.lazy(() => import('pages/user/viewRequests'));
const UserViewDocuments = React.lazy(() => import('pages/user/viewDocuments'));
const UserUploadDocument = React.lazy(() => import('pages/user/uploadDocument'));
const UserViewAppointments = React.lazy(() => import('pages/user/viewAppointments'));
const BookAppointment = React.lazy(() => import('pages/user/bookAppointment'));

// unneccessary 
// const AlertPage = React.lazy(() => import('pages/user/AlertPage'));
// const AuthModalPage = React.lazy(() => import('pages/user/AuthModalPage'));
// const BadgePage = React.lazy(() => import('pages/user/BadgePage'));
// const ButtonGroupPage = React.lazy(() => import('pages/user/ButtonGroupPage'));
// const ButtonPage = React.lazy(() => import('pages/user/ButtonPage'));
// const CardPage = React.lazy(() => import('pages/user/CardPage'));
// const ChartPage = React.lazy(() => import('pages/user/ChartPage'));
// const DropdownPage = React.lazy(() => import('pages/user/DropdownPage'));
// const FormPage = React.lazy(() => import('pages/user/FormPage'));
// const InputGroupPage = React.lazy(() => import('pages/user/InputGroupPage'));
// const ModalPage = React.lazy(() => import('pages/user/ModalPage'));
// const ProgressPage = React.lazy(() => import('pages/user/ProgressPage'));
// const TablePage = React.lazy(() => import('pages/user/TablePage'));
// const TypographyPage = React.lazy(() => import('pages/user/TypographyPage'));
// const WidgetPage = React.lazy(() => import('pages/user/WidgetPage'));


// superAdmin
const superAdminDashboard = React.lazy(() => import('pages/super/adminDashboard'));
const superAdminRegisterAdmin = React.lazy(() => import('pages/super/adminRegister'));
const superAdminAllAdmins = React.lazy(() => import('pages/super/allAdmins'));
const superAdmin_Admin_Clients = React.lazy(() => import('pages/super/adminClients'));
const superAdmin_Admin_Client = React.lazy(() => import('pages/super/adminClient'));
const superAdminProfile = React.lazy(() => import('pages/super/profile'));
const superAdminRequests = React.lazy(() => import('pages/super/requests'));
const superAdminAppointments = React.lazy(() => import('pages/super/appointments'));
const superAdminDocumentPage = React.lazy(() => import('pages/super/document')); 
const superAdminClientPage = React.lazy(() => import('pages/super/clientPage'));
const superAdminViewClientDetails = React.lazy(() => import('pages/super/adminViewClientDetails'));

const superAdminButtonGroupPage = React.lazy(() =>import('pages/super/adminButtonGroupPage'));
const superAdminButtonPage = React.lazy(() => import('pages/super/adminButtonPage'));
const superAdminCardPage = React.lazy(() => import('pages/super/adminCardPage'));
const superAdminChartPage = React.lazy(() => import('pages/super/adminChartPage'));
// const superAdminDashboardPage = React.lazy(() =>import('pages/super/adminDashboardPage'));
const superAdminDropdownPage = React.lazy(() =>import('pages/super/adminDropdownPage'));
const superAdminFormPage = React.lazy(() => import('pages/super/adminFormPage'));
const superAdminInputGroupPage = React.lazy(() =>import('pages/super/adminInputGroupPage'));
const superAdminModalPage = React.lazy(() => import('pages/super/adminModalPage'));
const superAdminProgressPage = React.lazy(() =>import('pages/super/adminProgressPage'));
const superAdminTablePage = React.lazy(() => import('pages/super/adminTablePage'));
const superAdminTypographyPage = React.lazy(() =>import('pages/super/adminTypographyPage'));
const superAdminWidgetPage = React.lazy(() => import('pages/super/adminWidgetPage')); 
const superAdminAlertPage = React.lazy(() => import('pages/super/superAlertPage')); 
const superAuthModal = React.lazy(() => import('pages/super/superAuthModal')); 
const superAuthModalPage = React.lazy(() => import('pages/super/superAuthModalPage')); 
const superAuthPage = React.lazy(() => import('pages/super/superAuthPage')); 
const superAdminBadgePage = React.lazy(() => import('pages/super/superBadgePage')); 
// end of superAdmin


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};
console.log(getBasename);
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
        <IsUserRedirect
          path="/admin/confirm-password"
          role={role}
          exact
        >
          <AdminConfirmPassword />
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
          path="/user/confirm-password"
          role={role}
          exact
        >
          <ConfirmPassword />
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
                <Route exact path="/user/documents" component={UserViewDocuments}/>
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
                <Route exact path="/admin/documents" component={AdminDocuments}/>
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

            </React.Suspense>
          </AdminMainLayout>
          ) : ( (auth && role === 'superadmin') ?
            (<AdminMainLayout breakpoint={breakpoint}>
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
                  <Route exact path="/superadmin/client" component={superAdminClientPage} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/documents" component={superAdminDocumentPage} /> 
                </ProtectedRoute>
                <ProtectedRoute>
                  <Route exact path="/superadmin/registeradmin" component={superAdminRegisterAdmin} /> 
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

                {/* unnecessary */} 
                <Route exact path="/superadmin/buttons" component={superAdminButtonPage} />
                <Route exact path="/superadmin/cards" component={superAdminCardPage} />
                <Route exact path="/superadmin/widgets" component={superAdminWidgetPage} />
                <Route exact path="/superadmin/typography" component={superAdminTypographyPage}/>
                <Route exact path="/superadmin/alerts" component={superAdminAlertPage} />
                <Route exact path="/superadmin/tables" component={superAdminTablePage} />
                <Route exact path="/superadmin/badges" component={superAdminBadgePage} />
                <Route exact path="/superadmin/button-groups" component={superAdminButtonGroupPage} />
                <Route exact path="/superadmin/dropdowns" component={superAdminDropdownPage} />
                <Route exact path="/superadmin/progress" component={superAdminProgressPage} />
                <Route exact path="/superadmin/modals" component={superAdminModalPage} />
                <Route exact path="/superadmin/forms" component={superAdminFormPage} />
                <Route exact path="/superadmin/input-groups" component={superAdminInputGroupPage} />
                <Route exact path="/superadmin/charts" component={superAdminChartPage} />
                <Route exact path="/superadmin/alert" component={superAdminAlertPage} /> 
                <Route exact path="/superadmin/authmodal" component={superAuthModal} /> 
                <Route exact path="/superadmin/authmodalpage" component={superAuthModalPage} /> 
                <Route exact path="/superadmin/auth" component={superAuthPage} /> 
                <Route exact path="/superadmin/badges" component={superAdminBadgePage} /> 
              </React.Suspense>
            </AdminMainLayout> )
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
