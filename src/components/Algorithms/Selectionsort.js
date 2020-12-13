function SelectionSort(data){
    let steps = [];

    let n = data.length;

    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let smallestInt = i;
        for(let j = i+1; j < n; j++){
            if(data[j] < data[smallestInt]) {
                smallestInt=j;
            }
        }
        if (smallestInt != i) {
            let tmp = data[i];
            data[i] = data[smallestInt];
            data[smallestInt] = tmp;
            steps.push([...data]);
        }
    }
    return steps;
}export default SelectionSort;

//https://www.geeksforgeeks.org/selection-sort/