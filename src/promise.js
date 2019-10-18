const basicPromise = new Promise(function(resolve, reject) {
    resolve('basicPromise');
});

const funcPromise = () => {
    return new Promise(function(resolve, reject) {
        resolve('funcPromise');
    })
};
const chainedPromise = prom => {
    return new Promise(function(resolve, reject) {
        resolve();
    }).then(prom);
};
const rejectedPromise = () => {
    return new Promise(function(resolve, reject) {
        let error = 'rejectedPromise'
        reject(new Error('rejectedPromise'));
    })
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
