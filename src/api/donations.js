import api from "./api";

const Donations = {
    create: (newDonationsItem) => {
        return api.post('/donations', newDonationsItem)
    }
};

export default Donations;