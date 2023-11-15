import { useState } from 'react';
import { Services } from '../services';

export const useCategory = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [descripiton, setDescripiton] = useState('');
	const [icon_url, setIcon_url] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCategory = (categoryId, signal) => {        
        return Services.CategoryService.getById(categoryId, signal)
        .then(response => {
            fillCategory(response.category);
            setIsDisabled(false);
        });
    }

    const createCategory = signal => {
        const payload = {
            name,
			slug,
			descripiton,
			icon_url,
			
        };

        return Services.CategoryService.create(JSON.stringify(payload), signal);
    }
    const updateCategory = (categoryId, signal) => {
        const payload = {
            name,
			slug,
			descripiton,
			icon_url,
			
        };

        return Services.CategoryService.update(categoryId, JSON.stringify(payload), signal);
    }
    const deleteCategory = (categoryId, signal) => {
        return Services.CategoryService.destroy(categoryId, signal);
    }
    const fillCategory = (category) => {
        setId(category.id);
        setName(category.name ?? '');
		setSlug(category.slug ?? '');
		setDescripiton(category.descripiton ?? '');
		setIcon_url(category.icon_url ?? '');
		
    }
    const emptyCategory = () => {
        setId('');
        setName('');
		setSlug('');
		setDescripiton('');
		setIcon_url('');
		
    }

    return {
        id,
        name,
			slug,
			descripiton,
			icon_url,
			
        errors,
        isDisabled,
        setName,
		setSlug,
		setDescripiton,
		setIcon_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getCategory,
        createCategory,
        updateCategory,
        deleteCategory,
        fillCategory,
        emptyCategory
    };
}