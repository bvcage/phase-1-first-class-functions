function receivesAFunction (callback) {
    callback();
    return;
}

function returnsANamedFunction () {
    return (function namedFunction() {});
}

function returnsAnAnonymousFunction() {
    return (function () {});
}