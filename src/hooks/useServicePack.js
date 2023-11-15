import { useState } from 'react';
import { Services } from '../services';

export const useServicePack = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [features, setFeatures] = useState('');
	const [description, setDescription] = useState('');
	const [icon_img_url, setIcon_img_url] = useState('');
	const [price, setPrice] = useState('');
	const [duration, setDuration] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getServicePack = (servicepackId, signal) => {        
        return Services.ServicePackService.getById(servicepackId, signal)
        .then(response => {
            fillServicePack(response.servicepack);
            setIsDisabled(false);
        });
    }

    const createServicePack = signal => {
        const payload = {
            name,
			slug,
			features,
			description,
			icon_img_url,
			price,
			duration,
			
        };

        return Services.ServicePackService.create(JSON.stringify(payload), signal);
    }
    const updateServicePack = (servicepackId, signal) => {
        const payload = {
            name,
			slug,
			features,
			description,
			icon_img_url,
			price,
			duration,
			
        };

        return Services.ServicePackService.update(servicepackId, JSON.stringify(payload), signal);
    }
    const deleteServicePack = (servicepackId, signal) => {
        return Services.ServicePackService.destroy(servicepackId, signal);
    }
    const fillServicePack = (servicepack) => {
        setId(servicepack.id);
        setName(servicepack.name ?? '');
		setSlug(servicepack.slug ?? '');
		setFeatures(servicepack.features ?? '');
		setDescription(servicepack.description ?? '');
		setIcon_img_url(servicepack.icon_img_url ?? '');
		setPrice(servicepack.price ?? '');
		setDuration(servicepack.duration ?? '');
		
    }
    const emptyServicePack = () => {
        setId('');
        setName('');
		setSlug('');
		setFeatures('');
		setDescription('');
		setIcon_img_url('');
		setPrice('');
		setDuration('');
		
    }

    return {
        id,
        name,
			slug,
			features,
			description,
			icon_img_url,
			price,
			duration,
			
        errors,
        isDisabled,
        setName,
		setSlug,
		setFeatures,
		setDescription,
		setIcon_img_url,
		setPrice,
		setDuration,
		
        setId,
        setErrors,
        setIsDisabled,
        getServicePack,
        createServicePack,
        updateServicePack,
        deleteServicePack,
        fillServicePack,
        emptyServicePack
    };
}