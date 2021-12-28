import api from "./api";

const Donation = {
    create: (data) => {
        return api.post("api/donations", data);
    },
};

export default Donation;