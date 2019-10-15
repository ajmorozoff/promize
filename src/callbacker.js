function syncCallbacker(first, then) {
    if (arguments.length < 2) {
        throw('must pass at least two arguments');
    }
    let _args = [...arguments];
    let callbk = _args.shift();
    if (typeof callbk != 'function') {
        throw('arguments must be functions');
    }
    let result = callbk();

    while (_args.length > 0) {
        let nextFunc = _args.shift();
        if (typeof nextFunc != 'function') {
            throw('arguments must be functions');
        }
        result = nextFunc(result);
    }
    return result;
}

function asyncCallbacker(first, then) {
    if (arguments.length < 2) {
        throw('must pass at least two arguments');
    }
    if (typeof first != 'function' || typeof then != 'function') {
        throw('arguments must be functions');
    }
    //let data = '';
    first(undefined, function(data) {
        then(data, function(data) {
            return data;
        });
    })
}


module.exports = { syncCallbacker, asyncCallbacker };
