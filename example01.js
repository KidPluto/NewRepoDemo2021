let myPromise = new Promise((resolve, reject) => {
    let total = 1 + 1
    if (total == 2) {
        resolve('Total is 2')
    } else {
        reject('Total is not 2')
    }
})

myPromise.then((message) => {
    console.log('Result is: ' + message)
}).catch((message) => {
    console.log('Exception is: ' + message)
})