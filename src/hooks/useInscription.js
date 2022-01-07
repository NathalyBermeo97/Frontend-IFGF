import React, { useEffect, useState } from "react";
import Inscriptions from "../api/incriptions";

export const useInscription = () => {
    const [inscriptions, setInscriptions] = useState([])
    const [allInscriptions, setAllInscriptions] = useState([])

  useEffect(() => {
    const getInscriptions = async () => {
        try{
            const inscriptions = await Inscriptions.get();
            setInscriptions(inscriptions)
        }catch(e){
            console.log('something went wrong', e)
        }
    };
    getInscriptions();
  }, []);

  useEffect(() => {
    const getAllInscriptions = async () => {
        try{
            const allInscriptions = await Inscriptions.getAll();
            setAllInscriptions(allInscriptions)
        }catch(e){
            console.log('something went wrong', e)
        }
    };
    getAllInscriptions();
  }, []);

  const createInscription = async (newInscription) => {
    try {
      console.log({newInscription})
      const response = await Inscriptions.create(newInscription);
      return response;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  return { inscriptions, allInscriptions, createInscription };
};
