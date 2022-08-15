import { where, query, getDocs, collection} from 'firebase/firestore';
import {dataBase} from '../service/firebase';


const dataBaseRequests = () => {

    const getAllProducts = async (offset) => {
        const data = [];
        const docSnap = await getDocs(collection(dataBase, 'products'));
        docSnap.forEach((doc) => {
            data.push(doc.data())
        })
        return data.slice(offset, offset + 6);
    };

    const getProductsByCountry = async(country) => {
        const data = [];
        const citieRef = collection(dataBase, 'products');
        const q = query(citieRef, where("country", "==", country))
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
            data.push(doc.data());
        })
        return data
    };

    const getProductById = async(id) =>  {
        const data = [];
        const citieRef = collection(dataBase, 'products');
        const q = query(citieRef, where("id", "==", id))
        const snapshot = await getDocs(q);
        snapshot.forEach(doc => data.push(doc.data()));
        return data;
    }

    return{getAllProducts, getProductsByCountry, getProductById}
};


export default dataBaseRequests;