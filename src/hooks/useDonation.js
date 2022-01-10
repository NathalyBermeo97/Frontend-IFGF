
import Donations from "../api/donations";

export const useDonation = () => {

    const createDonation = async (newDonation) => {
        try{
            const response = await Donations.create(newDonation)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    return {createDonation};
};