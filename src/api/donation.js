import api from "./api";

const Donation = {
    create: (data) => {
        return api.post("/donations", data);
    },
};

export default Donation;