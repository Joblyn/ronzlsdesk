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

//Get All Admins
export let getAllAdmin = 'admin';

//view all clients
export let getAllClients = 'admin/actions/users';
export let getClientDetail = 'admin/user/';

//Admin Doc Upload
export let adminUploadDoc = 'admin/actions/uploadDocToUser/{user_id}';

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

//User Doc Upload
export let userUploadDoc = 'user/actions/uploadDocToUser/{admin_id}';
