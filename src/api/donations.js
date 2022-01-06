import api from "./api";

const Donations = {
    create: (newDonationsItem) => {
        return api.post('/donation', newDonationsItem)
    }
};

export default Donations;