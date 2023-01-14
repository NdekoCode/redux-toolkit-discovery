async function sendItem(url, data = null, params = {}) {
    let options = {
        method: "POST",
    }
    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(data),
        }
    }

    options = {
        ...options,
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
export function deleteItem(url) {
    const params = {
        method: "DELETE",
    }
    return sendItem(url, data, params);
}