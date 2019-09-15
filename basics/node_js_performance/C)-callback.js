function longRunningRequest(callback) {
    setTimeout(callback, 3000);
}

function userClicked() {
    console.log('starting a long operation...');
    longRunningRequest(function () {
        console.log('ending the long operation');
    });
}

userClicked();
