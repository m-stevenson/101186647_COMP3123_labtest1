// Given the script file callbacks.js, write a script that does the following:
// Create a method resolvedPromise that is similar to
// delayedSuccess and resolves a message after a timeout of 500ms.

// Create a method rejectedPromise that is similar to
// delayedException and rejects an error message after a timeout of 500ms.

// Call both promises separately and handle the resolved and reject
// results and then output to the console


const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message' : 'delayed success!'});
        }, 500);
    });
}

const delayedException = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
}

resolvedPromise().then((message) => console.log(message));
delayedException().catch((error) => console.log(error.message));