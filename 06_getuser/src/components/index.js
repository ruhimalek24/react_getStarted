const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/', {
        method: 'GET'
    });
    return response.json();
}

export default getRandomUser;