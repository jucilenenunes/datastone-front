import api from '../../helpers/api';

const getProdutos = async () => {
    const {
        data
    } = await api.get('/produtos');
    return data;
}

export { getProdutos }