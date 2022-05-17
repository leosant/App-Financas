import Axios from '../Axios';

export async function listAllWallets() {

    try 
    {
        return await Axios.apiFinanceWallets.get('/find');
    }
    catch (err)
    {
        console.error(err);
    } 

}