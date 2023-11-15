import { useState } from 'react';
import { Services } from '../services';

export const useEventMedia = () => {
    const [id, setId] = useState('');
	const [event_id, setEvent_id] = useState('');
	const [media_id, setMedia_id] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getEventMedia = (eventmediaId, signal) => {        
        return Services.EventMediaService.getById(eventmediaId, signal)
        .then(response => {
            fillEventMedia(response.eventmedia);
            setIsDisabled(false);
        });
    }

    const createEventMedia = signal => {
        const payload = {
            event_id,
			media_id,
			
        };

        return Services.EventMediaService.create(JSON.stringify(payload), signal);
    }
    const updateEventMedia = (eventmediaId, signal) => {
        const payload = {
            event_id,
			media_id,
			
        };

        return Services.EventMediaService.update(eventmediaId, JSON.stringify(payload), signal);
    }
    const deleteEventMedia = (eventmediaId, signal) => {
        return Services.EventMediaService.destroy(eventmediaId, signal);
    }
    const fillEventMedia = (eventmedia) => {
        setId(eventmedia.id);
        setEvent_id(eventmedia.event_id ?? '');
		setMedia_id(eventmedia.media_id ?? '');
		
    }
    const emptyEventMedia = () => {
        setId('');
        setEvent_id('');
		setMedia_id('');
		
    }

    return {
        id,
        event_id,
			media_id,
			
        errors,
        isDisabled,
        setEvent_id,
		setMedia_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getEventMedia,
        createEventMedia,
        updateEventMedia,
        deleteEventMedia,
        fillEventMedia,
        emptyEventMedia
    };
}