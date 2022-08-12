function echoFunc(input) {
    let count;
    for (let i = 1; i <= input.length; i++) {
        count = i;
    }
    console.log(count + '\n' + input);

}
echoFunc('Hello, JavaScript!')