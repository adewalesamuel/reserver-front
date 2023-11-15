import { Api } from './Api';

const  ENPOINTS = {
    Card: 'cards',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Card}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Card}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Card, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Card}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Card}/${id}`, signal)
}

export const CardService = {
    getAll,
    getById,
    create,
    update,
    destroy
}