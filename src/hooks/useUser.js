import { useState } from 'react';
import { Services } from '../services';

export const useUser = () => {
    const [id, setId] = useState('');
	const [publicId, setPublicId] = useState('');
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [phone_number, setPhone_number] = useState('');
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirm_password] = useState('');
	const [profil_image_url, setProfil_image_url] = useState('');
	const [birth_date, setBirth_date] = useState('');
	const [gender, setGender] = useState('');
	const [is_active, setIs_active] = useState('');
	const [country_id, setCountry_id] = useState('');
	const [condition, setCondition] = useState(false);
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUser = (userId, signal) => {        
        return Services.UserService.getById(userId, signal)
        .then(response => {
            fillUser(response.user);
            setIsDisabled(false);
        });
    }

    const createUser = signal => {
        const payload = {
            publicId,
			fullname,
			email,
			phone_number,
			password,
			profil_image_url,
			birth_date,
			gender,
			is_active,
			country_id,
			
        };

        return Services.UserService.create(JSON.stringify(payload), signal);
    }
    const updateUser = (userId, signal) => {
        const payload = {
            publicId,
			fullname,
			email,
			phone_number,
			password,
			profil_image_url,
			birth_date,
			gender,
			is_active,
			country_id,
			
        };

        return Services.UserService.update(userId, JSON.stringify(payload), signal);
    }
    const deleteUser = (userId, signal) => {
        return Services.UserService.destroy(userId, signal);
    }
    const fillUser = (user) => {
        setId(user.id);
        setPublicId(user.publicId ?? '');
		setFullname(user.fullname ?? '');
		setEmail(user.email ?? '');
		setPhone_number(user.phone_number ?? '');
		setPassword(user.password ?? '');
		setProfil_image_url(user.profil_image_url ?? '');
		setBirth_date(user.birth_date ?? '');
		setGender(user.gender ?? '');
		setIs_active(user.is_active ?? '');
		setCountry_id(user.country_id ?? '');
		
    }
    const emptyUser = () => {
        setId('');
        setPublicId('');
		setFullname('');
		setEmail('');
		setPhone_number('');
		setPassword('');
		setProfil_image_url('');
		setBirth_date('');
		setGender('');
		setIs_active('');
		setCountry_id('');
		
    }

    return {
        id,
        publicId,
		fullname,
		email,
		phone_number,
		password,
		profil_image_url,
		birth_date,
		gender,
		is_active,
		country_id,
		confirm_password,
		condition,
			
        errors,
        isDisabled,
        setPublicId,
		setFullname,
		setEmail,
		setPhone_number,
		setPassword,
		setConfirm_password,
		setProfil_image_url,
		setBirth_date,
		setGender,
		setIs_active,
		setCountry_id,
		setCondition,
		
        setId,
        setErrors,
        setIsDisabled,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        fillUser,
        emptyUser
    };
}