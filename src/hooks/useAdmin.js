import { useState } from 'react';
import { Services } from '../services';

export const useAdmin = () => {
    const [id, setId] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [permissions, setPermissions] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [profil_img_url, setProfil_img_url] = useState('');
	const [is_active, setIs_active] = useState('');
	const [role_id, setRole_id] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getAdmin = (adminId, signal) => {        
        return Services.AdminService.getById(adminId, signal)
        .then(response => {
            fillAdmin(response.admin);
            setIsDisabled(false);
        });
    }

    const createAdmin = signal => {
        const payload = {
            firstname,
			lastname,
			permissions,
			email,
			password,
			profil_img_url,
			is_active,
			role_id,
			
        };

        return Services.AdminService.create(JSON.stringify(payload), signal);
    }
    const updateAdmin = (adminId, signal) => {
        const payload = {
            firstname,
			lastname,
			permissions,
			email,
			password,
			profil_img_url,
			is_active,
			role_id,
			
        };

        return Services.AdminService.update(adminId, JSON.stringify(payload), signal);
    }
    const deleteAdmin = (adminId, signal) => {
        return Services.AdminService.destroy(adminId, signal);
    }
    const fillAdmin = (admin) => {
        setId(admin.id);
        setFirstname(admin.firstname ?? '');
		setLastname(admin.lastname ?? '');
		setPermissions(admin.permissions ?? '');
		setEmail(admin.email ?? '');
		setPassword(admin.password ?? '');
		setProfil_img_url(admin.profil_img_url ?? '');
		setIs_active(admin.is_active ?? '');
		setRole_id(admin.role_id ?? '');
		
    }
    const emptyAdmin = () => {
        setId('');
        setFirstname('');
		setLastname('');
		setPermissions('');
		setEmail('');
		setPassword('');
		setProfil_img_url('');
		setIs_active('');
		setRole_id('');
		
    }

    return {
        id,
        firstname,
			lastname,
			permissions,
			email,
			password,
			profil_img_url,
			is_active,
			role_id,
			
        errors,
        isDisabled,
        setFirstname,
		setLastname,
		setPermissions,
		setEmail,
		setPassword,
		setProfil_img_url,
		setIs_active,
		setRole_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getAdmin,
        createAdmin,
        updateAdmin,
        deleteAdmin,
        fillAdmin,
        emptyAdmin
    };
}