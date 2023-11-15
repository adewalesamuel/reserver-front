import { useState } from 'react';
import { Services } from '../services';

export const useGuest = () => {
    const [id, setId] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [phone_number, setPhone_number] = useState('');
	const [event_id, setEvent_id] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getGuest = (guestId, signal) => {        
        return Services.GuestService.getById(guestId, signal)
        .then(response => {
            fillGuest(response.guest);
            setIsDisabled(false);
        });
    }

    const createGuest = signal => {
        const payload = {
            firstname,
			lastname,
			email,
			phone_number,
			event_id,
			
        };

        return Services.GuestService.create(JSON.stringify(payload), signal);
    }
    const updateGuest = (guestId, signal) => {
        const payload = {
            firstname,
			lastname,
			email,
			phone_number,
			event_id,
			
        };

        return Services.GuestService.update(guestId, JSON.stringify(payload), signal);
    }
    const deleteGuest = (guestId, signal) => {
        return Services.GuestService.destroy(guestId, signal);
    }
    const fillGuest = (guest) => {
        setId(guest.id);
        setFirstname(guest.firstname ?? '');
		setLastname(guest.lastname ?? '');
		setEmail(guest.email ?? '');
		setPhone_number(guest.phone_number ?? '');
		setEvent_id(guest.event_id ?? '');
		
    }
    const emptyGuest = () => {
        setId('');
        setFirstname('');
		setLastname('');
		setEmail('');
		setPhone_number('');
		setEvent_id('');
		
    }

    return {
        id,
        firstname,
			lastname,
			email,
			phone_number,
			event_id,
			
        errors,
        isDisabled,
        setFirstname,
		setLastname,
		setEmail,
		setPhone_number,
		setEvent_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getGuest,
        createGuest,
        updateGuest,
        deleteGuest,
        fillGuest,
        emptyGuest
    };
}