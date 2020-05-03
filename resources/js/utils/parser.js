const parseError = response => {
    // let obj = error.response;
    let keys = Object.keys(response.data.errors);
    let errors = [];

    errors = [];

    if (keys.length > 0) {
        keys.forEach(e => {
            response.data.errors[e].forEach(d => {
                errors.push(d);
            });
        });

        return errors;
    }
    return;
}

export default parseError;
