
import Donations from "../api/donations";


export const useDonations = () => {

    const createDonationsItem = async (newDonationsItem) => {
        try{
            const response = await Donations.create(newDonationsItem)
            return response.data.message
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    return {createDonationsItem};
};