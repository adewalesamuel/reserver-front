import { useState } from 'react';
import { Services } from '../services';

export const useMedia = () => {
    const [id, setId] = useState('');
	const [type, setType] = useState('');
	const [name, setName] = useState('');
	const [alt, setAlt] = useState('');
	const [title, setTitle] = useState('');
	const [file_url, setFile_url] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getMedia = (mediaId, signal) => {        
        return Services.MediaService.getById(mediaId, signal)
        .then(response => {
            fillMedia(response.media);
            setIsDisabled(false);
        });
    }

    const createMedia = signal => {
        const payload = {
            type,
			name,
			alt,
			title,
			file_url,
			
        };

        return Services.MediaService.create(JSON.stringify(payload), signal);
    }
    const updateMedia = (mediaId, signal) => {
        const payload = {
            type,
			name,
			alt,
			title,
			file_url,
			
        };

        return Services.MediaService.update(mediaId, JSON.stringify(payload), signal);
    }
    const deleteMedia = (mediaId, signal) => {
        return Services.MediaService.destroy(mediaId, signal);
    }
    const fillMedia = (media) => {
        setId(media.id);
        setType(media.type ?? '');
		setName(media.name ?? '');
		setAlt(media.alt ?? '');
		setTitle(media.title ?? '');
		setFile_url(media.file_url ?? '');
		
    }
    const emptyMedia = () => {
        setId('');
        setType('');
		setName('');
		setAlt('');
		setTitle('');
		setFile_url('');
		
    }

    return {
        id,
        type,
			name,
			alt,
			title,
			file_url,
			
        errors,
        isDisabled,
        setType,
		setName,
		setAlt,
		setTitle,
		setFile_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getMedia,
        createMedia,
        updateMedia,
        deleteMedia,
        fillMedia,
        emptyMedia
    };
}