export async function postItem(url, data, params = {}) {
    const params = {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(data),
        ...params
    }
    try {
        const response = await fetch(url, params);
        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.log(error);
    }

}