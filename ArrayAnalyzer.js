function analyzeArray(arr) {
    let max = arr[0];
    let min = arr[0];
    let avg = 0;
    let sum = 0;
    let evenArr = [];
    
    // Find Maximum
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    
    // Find Minimum
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    
    // Find Average
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        avg = sum / arr.length;
    }
    
    // Find Even Array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    
    console.log(`The maximum of the array is ${max}`);
    console.log(`The minimum of the array is ${min}`);
    console.log(`The average of the array is ${avg}`);
    console.log(`The even numbers of the array is ${evenArr}`);
    
}
 
 