
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video one has been completed')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video two has been completed')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video three has been completed')
})
Promise.all([
    recordVideoOne, recordVideoTwo, recordVideoThree
]).then ((messages) => {
    console.log('The videos which have been recorded: ', messages)
})
Promise.race([
    recordVideoOne, recordVideoTwo, recordVideoThree
]).then ((message) => {
    console.log('The video which completed first: ', message)
})

