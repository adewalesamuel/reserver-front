import { Api } from './Api';

const  ENPOINTS = {
    Guest: 'guests',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Guest}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Guest}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Guest, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Guest}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Guest}/${id}`, signal)
}

export const GuestService = {
    getAll,
    getById,
    create,
    update,
    destroy
}