import { useState } from 'react';
import { Services } from '../services';

export const useCard = () => {
    const [id, setId] = useState('');
	const [publicId, setPublicId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [content, setContent] = useState('');
	const [category_id, setCategory_id] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCard = (cardId, signal) => {        
        return Services.CardService.getById(cardId, signal)
        .then(response => {
            fillCard(response.card);
            setIsDisabled(false);
        });
    }

    const createCard = signal => {
        const payload = {
            publicId,
			name,
			slug,
			content,
			category_id,
			
        };

        return Services.CardService.create(JSON.stringify(payload), signal);
    }
    const updateCard = (cardId, signal) => {
        const payload = {
            publicId,
			name,
			slug,
			content,
			category_id,
			
        };

        return Services.CardService.update(cardId, JSON.stringify(payload), signal);
    }
    const deleteCard = (cardId, signal) => {
        return Services.CardService.destroy(cardId, signal);
    }
    const fillCard = (card) => {
        setId(card.id);
        setPublicId(card.publicId ?? '');
		setName(card.name ?? '');
		setSlug(card.slug ?? '');
		setContent(card.content ?? '');
		setCategory_id(card.category_id ?? '');
		
    }
    const emptyCard = () => {
        setId('');
        setPublicId('');
		setName('');
		setSlug('');
		setContent('');
		setCategory_id('');
		
    }

    return {
        id,
        publicId,
			name,
			slug,
			content,
			category_id,
			
        errors,
        isDisabled,
        setPublicId,
		setName,
		setSlug,
		setContent,
		setCategory_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getCard,
        createCard,
        updateCard,
        deleteCard,
        fillCard,
        emptyCard
    };
}