import Axios from "axios";

const {
    API_FINANCE_WALLETS
} = process.env;

const api = {

    apiFinanceWallets: Axios.create({
        baseURL: 'http://localhost:8080/wallets/v1',
        timeout: 5000
    })
}

export default api;



