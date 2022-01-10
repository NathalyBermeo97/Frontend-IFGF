import api from "./api";

const Donations = {
    create: (newDonation) => {
        return api.post('/donations', newDonation)
    }
};

export default Donations;