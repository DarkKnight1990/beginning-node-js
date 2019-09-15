console.log("*".repeat(10).concat(' Start of script ').concat("*".repeat(10)));

// To throw an exception we simply use the keyword 'throw'
// To catch an exception we use the keyword 'catch'

try {
    console.log('About to throw an error...');
    throw new Error('Error thrown');
}
catch (e) {
    console.log('I will execute if an error is thrown');
    console.log('Error caught: ', e.message);
}
finally {
    console.log('I will execute irrespective of an error thrown!');
}
console.log();
console.log('*'.repeat(10));
console.log();

// The catch section executes only if error is thrown. The finally section is 
// executed despite any errors is thrown within the try section. This method of
// error capturing is great for synchronous Javascript. However it wont work out
// async flow. 

try {
    setTimeout(function () {
        console.log('About to throw an error.');
        throw new Error('Error thrown!');
    }, 1000);
}
catch (e) {
    console.log('I am not executed');
}
finally {
    console.log('I am outside, without handling error');
}

console.log();
console.log('*'.repeat(10));
console.log();

function getConnection(callback) {
    var connection;
    try {
        // lets assume the connection fails
        throw new Error("Connection Failed!")
        // notify callback that connection succeeded
        callback(null, connection);
    }
    catch (e) {
        // notify callback that connection failed
        callback(e, null);
    }
}

// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log("Error: ", error.message);
    }
    else {
        console.log("Connection Succeeded: ", connection);
    }
});

console.log("*".repeat(10).concat(' End of script ').concat("*".repeat(10)));
