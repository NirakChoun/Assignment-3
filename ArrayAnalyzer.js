function analyzeArray(arr) {
    if (arr.length === 0) {
        console.log("The array is empty");
        return;
    }

    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let evenArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Find Maximum
        if (arr[i] > max) {
            max = arr[i];
        }
        
        // Find Minimum
        if (arr[i] < min) {
            min = arr[i];
        }
        
        sum += arr[i];

        // Find Even Numbers
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }

    // Find Average
    let avg = sum / arr.length;

    console.log(`The maximum of the array is ${max}`);
    console.log(`The minimum of the array is ${min}`);
    console.log(`The average of the array is ${avg}`);
    console.log(`The even numbers of the array are ${evenArr}`);
}
