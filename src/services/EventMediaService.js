import { Api } from './Api';

const  ENPOINTS = {
    EventMedia: 'eventmedias',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.EventMedia}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.EventMedia}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.EventMedia, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.EventMedia}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.EventMedia}/${id}`, signal)
}

export const EventMediaService = {
    getAll,
    getById,
    create,
    update,
    destroy
}