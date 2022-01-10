import api from "./api";

const Donations = {
    get: () => {
        return api.get('/donations').then(res => res.data)
    },
    create: (newDonation) => {
        return api.post('/donations', newDonation)
    },
    update: (id, newDonation) => {
        return api.put(`/donations/${id}`, newDonation)
    }
};

export default Donations;