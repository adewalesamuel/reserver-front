import { useState } from 'react';
import { Services } from '../services';

export const useEvent = () => {
    const [id, setId] = useState('');
	const [publicId, setPublicId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [description, setDescription] = useState('');
	const [comment, setComment] = useState('');
	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [type, setType] = useState('');
	const [organizers, setOrganizers] = useState('');
	const [items, setItems] = useState('');
	const [guests, setGuests] = useState('');
	const [user_id, setUser_id] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getEvent = (eventId, signal) => {        
        return Services.EventService.getById(eventId, signal)
        .then(response => {
            fillEvent(response.event);
            setIsDisabled(false);
        });
    }

    const createEvent = signal => {
        const payload = {
            publicId,
			name,
			slug,
			date,
			time,
			description,
			comment,
			city,
			address,
			type,
			organizers,
			items,
			guests,
			user_id,
			
        };

        return Services.EventService.create(JSON.stringify(payload), signal);
    }
    const updateEvent = (eventId, signal) => {
        const payload = {
            publicId,
			name,
			slug,
			date,
			time,
			description,
			comment,
			city,
			address,
			type,
			organizers,
			items,
			guests,
			user_id,
			
        };

        return Services.EventService.update(eventId, JSON.stringify(payload), signal);
    }
    const deleteEvent = (eventId, signal) => {
        return Services.EventService.destroy(eventId, signal);
    }
    const fillEvent = (event) => {
        setId(event.id);
        setPublicId(event.publicId ?? '');
		setName(event.name ?? '');
		setSlug(event.slug ?? '');
		setDate(event.date ?? '');
		setTime(event.time ?? '');
		setDescription(event.description ?? '');
		setComment(event.comment ?? '');
		setCity(event.city ?? '');
		setAddress(event.address ?? '');
		setType(event.type ?? '');
		setOrganizers(event.organizers ?? '');
		setItems(event.items ?? '');
		setGuests(event.guests ?? '');
		setUser_id(event.user_id ?? '');
		
    }
    const emptyEvent = () => {
        setId('');
        setPublicId('');
		setName('');
		setSlug('');
		setDate('');
		setTime('');
		setDescription('');
		setComment('');
		setCity('');
		setAddress('');
		setType('');
		setOrganizers('');
		setItems('');
		setGuests('');
		setUser_id('');
		
    }

    return {
        id,
        publicId,
			name,
			slug,
			date,
			time,
			description,
			comment,
			city,
			address,
			type,
			organizers,
			items,
			guests,
			user_id,
			
        errors,
        isDisabled,
        setPublicId,
		setName,
		setSlug,
		setDate,
		setTime,
		setDescription,
		setComment,
		setCity,
		setAddress,
		setType,
		setOrganizers,
		setItems,
		setGuests,
		setUser_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getEvent,
        createEvent,
        updateEvent,
        deleteEvent,
        fillEvent,
        emptyEvent
    };
}