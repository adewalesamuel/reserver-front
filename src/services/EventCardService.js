import { Api } from './Api';

const  ENPOINTS = {
    EventCard: 'eventcards',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.EventCard}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.EventCard}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.EventCard, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.EventCard}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.EventCard}/${id}`, signal)
}

export const EventCardService = {
    getAll,
    getById,
    create,
    update,
    destroy
}