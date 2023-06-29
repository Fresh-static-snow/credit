import { database } from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const submittedCollectionName = "submitted";
const companyCollectionName = "company";

export const useService = () => {
  const addUser = (userInfo) => {
    return addDoc(collection(database, submittedCollectionName), userInfo);
  };

  const addCompany = async (company) => {
    const companies = await getDocs(collection(database, companyCollectionName));
    const existingCompany = companies.docs.find(
      (doc) => doc.data().name === company.name
    );
    if (!existingCompany) {
      return addDoc(collection(database, companyCollectionName), company);
    } else return null;
    // return addDoc(collection(database, companyCollectionName), company);
  };

  const getCompanies = async () => {
    return await getDocs(collection(database, companyCollectionName));
  };

  return { addUser, addCompany, getCompanies };
};
