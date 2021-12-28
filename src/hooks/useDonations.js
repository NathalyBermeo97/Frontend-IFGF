import { useEffect } from "react";
import { useState } from "react";
import Donation from "../api/donation";


export const useDonations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const postDonations = () => {
            Donation.create()
                .then(response => setDonations(response.data));
        };
        postDonations();
    }, []);
    return donations;
};