function timeConversion(time) {

    // making array to store time, splited on : 
    let timeArr = time.slice(0, -2).split(":");

    if (time[8] === 'A' && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (time[8] === 'P') {
        timeArr[0] = (timeArr[0] % 12) + 12
    }  
    let newTime = timeArr.join(":");
    console.log(newTime);
}
// Driver code
 
    var str = "02:05:45PM";
    timeConversion(str);