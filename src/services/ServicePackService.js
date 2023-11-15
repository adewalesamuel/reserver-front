import { Api } from './Api';

const  ENPOINTS = {
    ServicePack: 'servicepacks',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.ServicePack}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.ServicePack}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.ServicePack, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.ServicePack}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.ServicePack}/${id}`, signal)
}

export const ServicePackService = {
    getAll,
    getById,
    create,
    update,
    destroy
}