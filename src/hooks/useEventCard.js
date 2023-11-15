import { useState } from 'react';
import { Services } from '../services';

export const useEventCard = () => {
    const [id, setId] = useState('');
	const [event_id, setEvent_id] = useState('');
	const [card_id, setCard_id] = useState('');
	const [content, setContent] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getEventCard = (eventcardId, signal) => {        
        return Services.EventCardService.getById(eventcardId, signal)
        .then(response => {
            fillEventCard(response.eventcard);
            setIsDisabled(false);
        });
    }

    const createEventCard = signal => {
        const payload = {
            event_id,
			card_id,
			content,
			
        };

        return Services.EventCardService.create(JSON.stringify(payload), signal);
    }
    const updateEventCard = (eventcardId, signal) => {
        const payload = {
            event_id,
			card_id,
			content,
			
        };

        return Services.EventCardService.update(eventcardId, JSON.stringify(payload), signal);
    }
    const deleteEventCard = (eventcardId, signal) => {
        return Services.EventCardService.destroy(eventcardId, signal);
    }
    const fillEventCard = (eventcard) => {
        setId(eventcard.id);
        setEvent_id(eventcard.event_id ?? '');
		setCard_id(eventcard.card_id ?? '');
		setContent(eventcard.content ?? '');
		
    }
    const emptyEventCard = () => {
        setId('');
        setEvent_id('');
		setCard_id('');
		setContent('');
		
    }

    return {
        id,
        event_id,
			card_id,
			content,
			
        errors,
        isDisabled,
        setEvent_id,
		setCard_id,
		setContent,
		
        setId,
        setErrors,
        setIsDisabled,
        getEventCard,
        createEventCard,
        updateEventCard,
        deleteEventCard,
        fillEventCard,
        emptyEventCard
    };
}