function receivesAFunction (callback) {
    callback();
    return;
}

function returnsANamedFunction () {
    return (function namedFunction() {});
}