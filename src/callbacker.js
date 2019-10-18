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
    let _args = [...arguments];
    let _first = _args.shift();
    const done = (data) => {
        if (_args.length > 0) {
            let callbk = _args.shift();
            callbk(data, done);
        }
        else {
            return data;
        }
    }
    _first(undefined, done);
}

module.exports = { syncCallbacker, asyncCallbacker };
