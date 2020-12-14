let localURL = 'https://node.codecradle.co/api/v1/';
let prodURL = 'https://node.codecradle.co/api/v1/';

export let baseUrl = process.env.NODE_ENV === 'production' ? prodURL : localURL;

// Admin
//Authentication
export let adminRegsiter = 'admin/signup';
export let adminLogin = 'admin/login';
export let adminForgotPassword = 'admin/forgetpassword';
export let adminResetForgotPassword = 'admin/resetforgetpassword';
export let adminResetPassword = 'admin/resetpassword';

//Get Admin data
export let getAllAdmin = 'admin';

// Get all admins 
export let superAdminGetAllAdmins = 'admin/allAdmins';

//superadmin view all clients
export let getAllClients = 'admin/actions/users';
// superadmin view client details
export let getClientDetail = 'admin/user/';

// admin view clients under admin
export let getClientsUnderAdmin = 'admin/actions/user';
//Admin Doc Upload
export let adminUploadDoc = 'admin/document/';

// admin get documents sent
export let adminGetDocumentsSentToUser = 'admin/document';

// admin get documenst received
export let adminGetDocumentsReceivedFromUser = 'admin/document/user';
// admin get appoinments from clients under admin
export let getClientAppointments = 'admin/appointment';
// admin confirm appointment 
export let confirmClientAppointment = 'admin/appointment/';
// admin reject appointment
export let rejectClientAppointment = 'admin/appointment/reject/'
// get requests of clients under him
export let getClientsRequests = 'admin/request/userResquests';

// Superadmin get all documents
export let adminGetDocuments = 'admin/document/user';

// Superadmin get requests 
export let adminGetRequests = 'admin/request';

//Superadmin update client subscription
export let adminUpdateSubscription = 'admin/actions/date/'

// superadmin assign client to admin 
export let addUserToAdmin = 'admin/actions/assignUsersToAdmin/';


//User
//Authentication
export let userRegister = 'user/signup';
export let userLogin = 'user/login';
export let userForgotPassword = 'user/forgetpassword';
export let userResetForgotPassword = 'user/resetforgetpassword';
export let userResetPassword = 'user/resetpassword';

//User Data
export let getUserData = 'user';
export let updateUserData = 'user';

//User Doc
export let userUploaDocToAdmin = 'user/document/';
export let userGetDocumentSentByUser = 'user/document';
export let userGetDocumentSentByAdminToUser = 'user/document/admin'
// export let userGetDocumentSentByAdmin = 'admin/document';

// User Requests
export let userCreateRequest = 'user/request';
export let userGetRequests = 'user/request';

// User Appointmens
export let userBookAppointmentWithAdmin = 'user/appointment';
export let userGetAppointments = 'user/appointment';