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
    console.log('Mounted')
  }, []);

  const createQuestionnaire = async (newQuestionnaire) => {
    try{
      const response = await Questionnaires.create(newQuestionnaire)
      return response.data
    }catch(e){
      console.log('something went wrong', e)
    }
  }
  const deleteQuestionnaire = async (newQuestionnaireItem) => {
    try{
      const response = await Questionnaires.delete(newQuestionnaireItem)
      return response.data
    }catch(e){
      console.log('something went wrong', e)
    }
  }
  return {questionnaires, createQuestionnaire, deleteQuestionnaire,setQuestionnaires};
};
