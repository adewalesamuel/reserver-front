import { useState } from 'react';
import { Services } from '../services';

export const useSubscription = () => {
    const [id, setId] = useState('');
	const [price, setPrice] = useState('');
	const [status, setStatus] = useState('');
	const [duration, setDuration] = useState('');
	const [service_pack_id, setService_pack_id] = useState('');
	const [user_id, setUser_id] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSubscription = (subscriptionId, signal) => {        
        return Services.SubscriptionService.getById(subscriptionId, signal)
        .then(response => {
            fillSubscription(response.subscription);
            setIsDisabled(false);
        });
    }

    const createSubscription = signal => {
        const payload = {
            price,
			status,
			duration,
			service_pack_id,
			user_id,
			
        };

        return Services.SubscriptionService.create(JSON.stringify(payload), signal);
    }
    const updateSubscription = (subscriptionId, signal) => {
        const payload = {
            price,
			status,
			duration,
			service_pack_id,
			user_id,
			
        };

        return Services.SubscriptionService.update(subscriptionId, JSON.stringify(payload), signal);
    }
    const deleteSubscription = (subscriptionId, signal) => {
        return Services.SubscriptionService.destroy(subscriptionId, signal);
    }
    const fillSubscription = (subscription) => {
        setId(subscription.id);
        setPrice(subscription.price ?? '');
		setStatus(subscription.status ?? '');
		setDuration(subscription.duration ?? '');
		setService_pack_id(subscription.service_pack_id ?? '');
		setUser_id(subscription.user_id ?? '');
		
    }
    const emptySubscription = () => {
        setId('');
        setPrice('');
		setStatus('');
		setDuration('');
		setService_pack_id('');
		setUser_id('');
		
    }

    return {
        id,
        price,
			status,
			duration,
			service_pack_id,
			user_id,
			
        errors,
        isDisabled,
        setPrice,
		setStatus,
		setDuration,
		setService_pack_id,
		setUser_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getSubscription,
        createSubscription,
        updateSubscription,
        deleteSubscription,
        fillSubscription,
        emptySubscription
    };
}