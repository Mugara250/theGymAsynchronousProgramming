function delayed(ms) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise resolved after ${ms} milliseconds`);
    }, ms)
   })
}

delayed(5000)
.then(response => {
    console.log(response);
})

