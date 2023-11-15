import { Api } from './Api';

const  ENPOINTS = {
    Country: 'countrys',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Country}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Country}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Country, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Country}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Country}/${id}`, signal)
}

export const CountryService = {
    getAll,
    getById,
    create,
    update,
    destroy
}