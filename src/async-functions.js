function giveItBackLater(value, callback){
    function wait() {
        callback(value)
    }
    setTimeout(wait, 100)
}
function promiseToGiveItBackLater(value){
    const giveItBack = new Promise((resolve) => {
        giveItBackLater(value, resolve)
    })
    return giveItBack
}
function addSomePromises(somePromise) {
    let promise = new Promise((resolve, reject) => {
        promiseToGiveItBackLater(resolve)
        promiseToGiveItBackLater(reject)
    })
    promise.then((resolve) => {
        return resolve * 2
    })
    promise.then((reject) => {
        return reject * 3
    })
    return new Promise((resolve) => {
        return resolve(somePromise)
    })

}


module.exports.giveItBackLater = giveItBackLater
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
module.exports.addSomePromises = addSomePromises