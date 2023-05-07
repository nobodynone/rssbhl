module.exports = function (router) {
    router.get('/vinews/:type?', require('./vinews'));
    router.get('/news/:type?', require('./news'));
};
