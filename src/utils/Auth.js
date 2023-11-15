const getSessionToken = () => {
    return localStorage.getItem('sessionToken');
}

const isLoggedIn = () => {
    if (getSessionToken() === '' || !getSessionToken())
        return false;
    return true;
}

const setSessionToken = token => {
    localStorage.setItem('sessionToken', token)
}

const setUser = user => {
    localStorage.setItem('user', JSON.stringify(user))
}

const removeSessionToken = () => {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('user');
}

const redirectIfSessionExpired = (err, history) => {
    if (!err) return;
    
    if (err.status && err.status === 'Token is Expired') {
        removeSessionToken();
        history.push('/auth/login');
    }
}

const getUser = () => {
    const user = localStorage.getItem('user');
    
    if (user === 'undefined' || !user) {
        removeSessionToken();
        return {};
    }

    return {
        ...JSON.parse(user)
    }
}

export const Auth = {
    isLoggedIn,
    getSessionToken,
    setSessionToken,
    removeSessionToken,
    redirectIfSessionExpired,
    getUser,
    setUser
}
