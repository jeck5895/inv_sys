const parseError = error => {
    let obj = error.response;
    let keys = Object.keys(obj.data.errors);
    let response = [];

    response = [];

    if (keys.length > 0) {
        keys.forEach(e => {
            obj.data.errors[e].forEach(d => {
                response.push(d);
            });
        });

        return response;
    }
    return;
}

export default parseError;
