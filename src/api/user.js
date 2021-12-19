import api from "./api";

const User = {
    register: (userData) => {
        return api.post("/register", userData);
    },
    login: (data) => {
        return api.post("/auth/login", data);
    },
    logout: () => {
        return api.get("/auth/logout");
    },
    sendPasswordResetEmail: (email) => {
        return api.post("/forgot-password", { email });
    },
    confirmPasswordReset: ({ email, password,token }) => {
        return api.post("/reset-password", {
            email,
            password,
            token,
        });
    },
    getAuthenticatedUser: (token) => {
        return api.get(`auth/user/${token}`);
    },
};

export default User;