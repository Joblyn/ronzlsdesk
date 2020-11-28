import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import {
  EmptyLayout,
  LayoutRoute,
  MainLayout,
  AdminMainLayout,
} from './components/Layout';
import PageSpinner from './components/PageSpinner';
import React, { useEffect } from 'react';
import componentQueries from 'react-component-queries';
import {
  BrowserRouter as Router,
  Redirect,
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


import {
  logoutAdminAction,
  setCurrentAdminUser,
} from './actions/admin/authAction/Users';
import { ProtectedRoute } from './protected/index';
import { useDispatch } from 'react-redux';
import { getClient } from './actions/admin/clients/Clients';
import { getAllClients } from './apiConstants/apiConstants';

//Admin
// const AdminRegister = React.lazy(() => import('pages/admin/adminRegister'));
const AdminViewClientDetails = React.lazy(() => import('pages/admin/AdminViewClientDetails'));
const adminClient = React.lazy(() => import('pages/admin/adminClient'));
const adminDashboard = React.lazy(() => import('pages/admin/adminDashboard'));
const adminAlertPage = React.lazy(() => import('pages/admin/adminAlertPage'));
const adminBadgePage = React.lazy(() => import('pages/admin/adminBadgePage'));
const adminButtonGroupPage = React.lazy(() =>import('pages/admin/adminButtonGroupPage'),);
const adminButtonPage = React.lazy(() => import('pages/admin/adminButtonPage'));
const adminCardPage = React.lazy(() => import('pages/admin/adminCardPage'));
const adminChartPage = React.lazy(() => import('pages/admin/adminChartPage'));
const adminDashboardPage = React.lazy(() => import('pages/admin/adminDashboardPage'));
const adminDropdownPage = React.lazy(() => import('pages/admin/adminDropdownPage'));
const adminFormPage = React.lazy(() => import('pages/admin/adminFormPage'));
const adminInputGroupPage = React.lazy(() => import('pages/admin/adminInputGroupPage'));
const adminModalPage = React.lazy(() => import('pages/admin/adminModalPage'));
const adminProgressPage = React.lazy(() => import('pages/admin/adminProgressPage'));
const adminTablePage = React.lazy(() => import('pages/admin/adminTablePage'));
const adminTypographyPage = React.lazy(() => import('pages/admin/adminTypographyPage'));
const adminWidgetPage = React.lazy(() => import('pages/admin/adminWidgetPage'));

//User
const AlertPage = React.lazy(() => import('pages/user/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/user/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/user/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/user/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/user/ButtonPage'));
const CardPage = React.lazy(() => import('pages/user/CardPage'));
const ChartPage = React.lazy(() => import('pages/user/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/user/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/user/DropdownPage'));
const FormPage = React.lazy(() => import('pages/user/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/user/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/user/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/user/ProgressPage'));
const TablePage = React.lazy(() => import('pages/user/TablePage'));
const TypographyPage = React.lazy(() => import('pages/user/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/user/WidgetPage'));

// superAdmin
const superAdminRegister = React.lazy(() => import('pages/super/adminRegister'));
const superAdminDashboard = React.lazy(() => import('pages/super/adminDashboard'));
const superAdminButtonGroupPage = React.lazy(() =>import('pages/super/adminButtonGroupPage'));
const superAdminButtonPage = React.lazy(() => import('pages/super/adminButtonPage'));
const superAdminCardPage = React.lazy(() => import('pages/super/adminCardPage'));
const superAdminChartPage = React.lazy(() => import('pages/super/adminChartPage'));
const superAdminClientPage = React.lazy(() => import('pages/super/clientPage'));
const superAdminViewClientDetails = React.lazy(() => import('pages/super/adminViewClientDetails'));
const superAdminDashboardPage = React.lazy(() =>import('pages/super/adminDashboardPage'));
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
const superDocumentPage = React.lazy(() => import('pages/super/superDocument')); 
// end of superAdmin


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const auth = localStorage.getItem('jwtToken');
const role = localStorage.getItem('role');

const App = ({ breakpoint }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />

        {/* admin auth */}
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/forgot-password" component={AdminForgotPassword} />
        <Route path="/admin/confirm-password" component={AdminConfirmPassword} />
        {/* user auth */}
        <Route path="/user/login" component={Login} />
        <Route path="/user/register" component={Register} />
        <Route path="/user/forgot-password" component={ForgotPassword} />
        <Route path="/user/confirm-password" component={ConfirmPassword} />

        {/* User Routes */}
        {role === 'user' ? (
          <MainLayout breakpoint={breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/user/dashboard" component={DashboardPage} />
              <Route exact path="/user/login-modal" component={AuthModalPage} />
              <Route exact path="/user/buttons" component={ButtonPage} />
              <Route exact path="/user/cards" component={CardPage} />
              <Route exact path="/user/widgets" component={WidgetPage} />
              <Route exact path="/user/typography" component={TypographyPage} />
              <Route exact path="/user/alerts" component={AlertPage} />
              <Route exact path="/user/tables" component={TablePage} />
              <Route exact path="/user/badges" component={BadgePage} />
              <Route exact path="/user/button-groups" component={ButtonGroupPage}/>
              <Route exact path="/user/dropdowns" component={DropdownPage} />
              <Route exact path="/user/progress" component={ProgressPage} />
              <Route exact path="/user/modals" component={ModalPage} />
              <Route exact path="/user/forms" component={FormPage} />
              <Route exact path="/user/input-groups" component={InputGroupPage} />
              <Route exact path="/user/charts" component={ChartPage} />
            </React.Suspense>
          </MainLayout>
        ) : ( role === 'admin' ? 
          // Admin Routes
          (<AdminMainLayout breakpoint={breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/admin/dashboardold" component={adminDashboardPage} />
              <Route exact path="/admin/dashboard" component={adminDashboard} />
              <Route exact path="/admin/buttons" component={adminButtonPage} />
              <Route exact path="/admin/cards" component={adminCardPage} />
              <Route exact path="/admin/widgets" component={adminWidgetPage} />
              <Route exact path="/admin/typography" component={adminTypographyPage}/>
              <Route exact path="/admin/alerts" component={adminAlertPage} />
              <Route exact path="/admin/tables" component={adminTablePage} />
              <Route exact path="/admin/badges" component={adminBadgePage} />
              <Route exact path="/admin/button-groups" component={adminButtonGroupPage} />
              <Route exact path="/admin/dropdowns" component={adminDropdownPage} />
              <Route exact path="/admin/progress" component={adminProgressPage} />
              <Route exact path="/admin/modals" component={adminModalPage} />
              <Route exact path="/admin/forms" component={adminFormPage} />
              <Route exact path="/admin/input-groups" component={adminInputGroupPage} />
              <Route exact path="/admin/charts" component={adminChartPage} />
              <Route exact path="/admin/client" component={adminClient} />
              <Route exact path="/admin/client/details/:userId" component={AdminViewClientDetails} /> 
            </React.Suspense>
          </AdminMainLayout>
          ) : (
            <AdminMainLayout breakpoint={breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/superadmin/dashboard" component={superAdminDashboard} />
                <Route exact path="/superadmin/dashboardold" component={superAdminDashboardPage} />
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
                <Route exact path="/superadmin/register" component={superAdminRegister} /> 
                <Route exact path="/superadmin/client" component={superAdminClientPage} />
                <Route exact path="/superadmin/client/details/:userId" component={superAdminViewClientDetails} /> 
                <Route exact path="/superadmin/alert" component={superAdminAlertPage} /> 
                <Route exact path="/superadmin/authmodal" component={superAuthModal} /> 
                <Route exact path="/superadmin/authmodalpage" component={superAuthModalPage} /> 
                <Route exact path="/superadmin/auth" component={superAuthPage} /> 
                <Route exact path="/superadmin/badges" component={superAdminBadgePage} /> 
                <Route exact path="/superadmin/documents" component={superDocumentPage} /> 
              </React.Suspense>
            </AdminMainLayout>
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
