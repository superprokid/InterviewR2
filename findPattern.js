const n = 3 
const Arr = ["a","b","c","c","a","b","b","c","a"]
const Arr2 = ["aca","bca","bcc"]
var findPattern = function (Arr1,Arr2,size) {
    let result = []
    let visited = []
    for(let i=0;i<size;i++){
        visited[i] = []
        for(let j=0;j<size;j++){
            visited[i][j] = false
        }
    }
    let count = 0 //Go to Each Value of Arr
    Arr2.forEach((value) => {
        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++){
                check(visited, Arr1, i, j, count, value,size,0,result);
                visited[i][j] = false;
            }
        }
    })
    console.log(result)
};
function convertArr(arr,n){ //convert 1D Array to 2D Array
    let count = 0
    let newArr = []
    let row = []
    for(let i =0;i<n;i++){
        row = []
        for(let j=0;j<n;j++){
            row.push(arr[count])
            count++
        }
        newArr.push(row)
    }
    return newArr
}
function check(visited,Arr1,i,j,count,value,size,total,result){
    visited[i][j] = true; // Not Visited Twice
    let nextIndex = count + 1; //Next index  to be compared
    let R = size -1,C = size -1
    let nextRow, nextCol;

    //Down
    if (i + 1 >= 0 && j >= 0 && i + 1 <= R && j <= C && !visited[i + 1][j] && Arr1[i + 1][j] == value[nextIndex]) {
        nextRow = i + 1;
        nextCol = j;
        check(visited, Arr1, nextRow, nextCol, nextIndex, value,size,total,result);
        //Every time we are done with the next character in the 2D Array we mark it visited
        visited[nextRow][nextCol] = false;
    }
    //Right
    if (i >= 0 && j + 1 >= 0 && i <= R && j + 1 <= C && !visited[i][j + 1] && Arr1[i][j + 1] == value[nextIndex]) {
        nextRow = i;
        nextCol = j + 1;
        check(visited, Arr1, nextRow, nextCol, nextIndex, value,size,total,result);
        visited[nextRow][nextCol] = false;
    }
    //Left
    if (i >= 0 && j - 1 >= 0 && i <= R && j - 1 <= C && !visited[i][j - 1] && Arr1[i][j - 1] == value[nextIndex]) {
        nextRow = i;
        nextCol = j - 1;
        check(visited, Arr1, nextRow, nextCol, nextIndex, value,size,total,result);
        visited[nextRow][nextCol] = false;
    }
    //Up
    if (i - 1 >= 0 && j >= 0 && i - 1 <= R && j <= C && !visited[i - 1][j] && Arr1[i - 1][j] == value[nextIndex]) {
        nextRow = i - 1;
        nextCol = j;
        check(visited, Arr1, nextRow, nextCol, nextIndex, value,size,total,result);
        visited[nextRow][nextCol] = false;
    }
}
//To Do: Return No,Yes
const arrFinal = convertArr(Arr,n)
findPattern(arrFinal,Arr2,n)