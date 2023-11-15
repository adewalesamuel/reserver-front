import { Api } from './Api';

const  ENPOINTS = {
    Event: 'events',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Event}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Event}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Event, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Event}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Event}/${id}`, signal)
}

export const EventService = {
    getAll,
    getById,
    create,
    update,
    destroy
}