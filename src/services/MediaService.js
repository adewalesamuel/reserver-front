import { Api } from './Api';

const  ENPOINTS = {
    Media: 'medias',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Media}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Media}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Media, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Media}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Media}/${id}`, signal)
}

export const MediaService = {
    getAll,
    getById,
    create,
    update,
    destroy
}