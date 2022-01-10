
import { useEffect, useState } from "react";
import Donations from "../api/donations";

export const useDonation = () => {

    const [donations, setDonations] = useState([])

    useEffect(() => {
        const getDonations = async () => {
            const donations = await Donations.get()
            setDonations(donations)
        }
        getDonations()
    }, [])

    const createDonation = async (newDonation) => {
        try{
            const response = await Donations.create(newDonation)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }

    const updateDonation = async (id, newDonation) => {
        try{
            const response = await Donations.update(id, newDonation)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }

    return {donations, setDonations, createDonation, updateDonation};
};