export const host = 'https://chat-app-be-three.vercel.app';

export const registerRoute = `${host}/user/register`;
export const avatarRoute = `${host}/upload`;
export const loginRoute = `${host}/user/login`;
export const refreshTokenRoute = `${host}/refresh_token`;
export const getUserRoute = `${host}/user`;
export const changeInfoRoute = `${host}/user/change-info`;
export const getAllContacts = `${host}/user/get-contacts`;
export const getFriendList = `${host}/user/get-friendlist`;

export const sendOTPRoute = `${host}/otp/send`;
export const resendOTPRoute = `${host}/otp/resend`;
export const confirmOTPRoute = `${host}/otp/confirm`;

export const searchUserByPhoneRoute = `${host}/search/phone`;
export const searchUserByFullnameRoute = `${host}/search/fullname`;

export const sendRequestRoute = `${host}/invite/send/`;
export const getRequestRoute = `${host}/invite`;
export const getRequestSendedRoute = `${host}/invite/me-send`;
export const acceptRequestRoute = `${host}/invite/accept`;
export const cancelledRequestRoute = `${host}/invite/cancelled`;

export const getMessagesRoute = `${host}/message`;
export const addMessageRoute = `${host}/message/add`;

export const createChatroomRoute = `${host}/chatroom/create`;

export const allUsersRoute = `${host}/user/allusers`;
export const getAllMessageRoute = `${host}/api/messages/getmsg`;
