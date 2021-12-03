import api from "./api";

const User = {
    register: (userData) => {
        return api.post("/register", userData);
    },
    login: (data) => {
        return api.post("/login", data);
    },
    logout: () => {
        return api.post("/logout");
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
    getAuthenticatedUser: () => {
        return api.get("/user");
    },
};

export default User;