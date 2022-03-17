import api from "./api";

const User = {
    register: (userData) => {
        return api.post("/auth/register", userData);
    },
    login: (data) => {
        return api.post("/auth/login", data);
    },
    logout: () => {
        return api.get("/auth/logout");
    },
    sendPasswordResetEmail: (email) => {
        return api.post("/password-reset", { email });
    },
    confirmPasswordReset: (userId, newPassword) => {
        return api.post(`/password-reset/${userId}`, {
            password: newPassword,
        });
    },
    getAuthenticatedUser: () => {
        return api.get(`/auth/user`).then(response => {console.log('response', response); return response.data.user});
    },
    getUsers: () => {
        return api.get('/users').then(res => res.data)
    }
};

export default User;