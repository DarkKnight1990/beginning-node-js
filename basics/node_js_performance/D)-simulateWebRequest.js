function longRunningOperation(callback) {
    setTimeout(callback, 3000);
}

function webRequest(request) {
    console.log('starting long operation for request id: ', request.id);
    longRunningOperation(function () {
        console.log('ending long operation for request id: ', request.id);
    });
}

webRequest({ id: 1 });
webRequest({ id: 2 });
