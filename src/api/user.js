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
        return api.get(`/auth/user`).then(response => {console.log(response); return response.data.user});
    },
    getUsers: () => {
        return api.get('/users').then(res => res.data)
    }
};

export default User;