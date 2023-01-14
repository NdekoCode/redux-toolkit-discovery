async function sendItem(url, data, params = {}) {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(data),
        ...params
    }
    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.log(error);
    }

}
export function postItem(url, data) {
    return sendItem(url, data);
}
export function putItem(url, data) {
    const params = {
        method: "PUT",
    }
    return sendItem(url, data, params);
}