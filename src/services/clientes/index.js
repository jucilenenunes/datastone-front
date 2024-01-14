import api from '../../helpers/api';

const getClientes = async () => {
    const {
        data
    } = await api.get('/clientes');
    return data;
}

export { getClientes }