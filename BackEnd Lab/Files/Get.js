async function addIdToArray(newId) {
    const apiUrl = ' http://127.0.0.1:3000/ ';
    const data = { id: newId };
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Successfully added ID:', result);
        return result;
    } catch (error) {
        console.error('Error adding ID:', error);
    }
}
const myNewId = 'Akshit-132';
addIdToArray(myNewId);
