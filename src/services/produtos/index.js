import api from '../../helpers/api';

export default async () => {
    const {
        data
    } = await api.get('/produtos');
    return data;
}