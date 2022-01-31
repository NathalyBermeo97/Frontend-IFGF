import { useEffect, useState } from "react";
import Donations from "../api/donations";
import { useAuth } from "../context/AuthContext";

export const useDonation = () => {
  const { currentUser } = useAuth();
  const [donations, setDonations] = useState([]);
  const [userDonations, setUserDonations] = useState([]);
  console.log({ donations });

  useEffect(() => {
    const userDonations = donations.filter(
      (donation) => donation?.user.user_id === currentUser?._id
    );
    setUserDonations(userDonations);
  }, [donations, currentUser]);

  useEffect(() => {
    const getDonations = async () => {
      const donations = await Donations.get();
      
      setDonations(donations);
    };
    getDonations();
  }, []);

  const createDonation = async (newDonation) => {
    try {
      const response = await Donations.create(newDonation);
      return response.data;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const updateDonation = async (id, newDonation) => {
    try {
      const response = await Donations.update(id, newDonation);
      return response.data;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  return {
    donations,
    setDonations,
    createDonation,
    updateDonation,
    userDonations,
  };
};
