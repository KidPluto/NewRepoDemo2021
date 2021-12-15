
const userHasLeft = false
const userStillHere = false

function watchTutorial () {
    return new Promise ((resolve, reject) => {
        if (userHasLeft) {
            reject({
                name: 'UserGoneException',
                message: 'The user is no longer on this web page'})
        } else if(userStillHere) {
            reject({
                name: 'UserNotDoneException',
                message: 'The user is still watching the tutorial'})
        } else {
            resolve('Good')
        }
    })
}

watchTutorial().then((message) => {
    console.log('Success ' + message)
}).catch((exceptionAndErrorMsg) => {
    console.log('Failed ', exceptionAndErrorMsg)
})