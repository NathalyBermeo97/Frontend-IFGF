import {useState, useEffect} from 'react'
import Questionnaires from '../api/questionnaires'

export const useQuestionnaire = () => {
  const [questionnaires, setQuestionnaires] = useState();
  
  useEffect(() => {
    const getQ = async () => {
      const res = await Questionnaires.get()
      const q = await res.data;
      setQuestionnaires(q);
    };
    getQ();
  }, []);
  
  return {questionnaires};
};
