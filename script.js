const startButton = document.getElementById('startButton');
const endButton = document.getElementById('endButton');
const correctButton = document.getElementById('correctButton');
const numberDisplay = document.getElementById('numberDisplay');
const accuracyDisplay = document.getElementById('accuracyDisplay');

startButton.addEventListener('click', function() {
    const timeDisplay = document.getElementById('timeElapsed');
    timeDisplay.innerText = "";
    
    const numbers = [1, 5, 4, 2, 3, 2, 5, 8, 9, 7, 6, 5, 2, 4, 6, 9, 8, 7, 5, 4, 8, 4, 2, 1, 5, 2, 6, 7, 8, 9, 7, 4, 1, 5, 2, 3, 4, 5, 8, 9, 7, 4, 5, 2, 8, 9, 6, 4, 1, 7, 8, 9, 6, 5, 2,8, 5, 8, 9, 7, 4,1, 5, 4, 2, 3, 2, 5, 8, 9, 7, 6, 5, 2, 4, 6, 9, 8, 7, 5, 4, 8, 4, 2, 1, 5, 2, 6, 7, 8, 9, 7, 4, 1, 5, 2, 3, 4, 5, 8, 9, 7, 4, 5, 2,8, 9,6, 4, 1, 7, 8, 9,6, 5, 2,8, 5, 8, 9, 7, 4,1, 5, 4, 2, 3, 2, 5, 8, 9, 7, 6, 5, 2, 4, 6, 9, 8, 7, 5, 4, 8, 4, 2, 1, 5, 2, 6, 7, 8, 9, 7, 4, 1, 5, 2, 3, 4, 5, 8, 9, 7, 4, 5, 2,8, 9,6, 4, 1, 7, 8, 9,6, 5, 2,8, 5, 8, 9, 7, 4,1, 5, 4, 2, 3, 2, 5, 8, 9, 7, 6, 5, 2, 4, 6, 9, 8, 7, 5, 4, 8, 4, 2, 1, 5, 2, 6, 7, 8, 9, 7, 4, 1, 5, 2, 3, 4, 5, 8, 9, 7, 4, 5, 2,8, 9, 6, 4, 1, 7, 8, 9, 6, 5, 2, 8, 5, 8, 9, 7, 4];  
    let index = 0;
    let correctNum = 0;
    let accuracy = 0;

    // start 按了之後start按鍵不見，end按鍵出現
    endButton.style.display = "block";
    correctButton.style.display = "block"
    startButton.style.display = "none";
    accuracyDisplay.innerText = "";
    numberDisplay.innerText = numbers[0];
    const intervalId = setInterval(function() {
        if (index+1 < numbers.length) {
            numberDisplay.innerText = numbers[index+1];
            index++;
            accuracy = (correctNum/(index))*100;
        } else {
            clearInterval(intervalId);  // 當所有數字顯示完畢時，停止間隔
        }
    }, 3000); // 3000 毫秒間隔，即每隔三秒


    let timeElapsed = 0;
    

    // 更新显示时间的函数
    function updateTime() {
        timeElapsed++;
        timeDisplay.innerText = "";
    }

    // 每秒调用一次 updateTime 函数
    const TimeID = setInterval(updateTime, 1000);

    endButton.addEventListener('click', function() {
        clearInterval(TimeID);
        clearInterval(intervalId);
        this.style.display = "none";
        correctButton.style.display = "none";
        timeDisplay.innerText = `Final Time Elapsed: ${timeElapsed} seconds`;
        accuracyDisplay.innerText = `Accuracy: ${accuracy.toFixed(2)} %`;
        startButton.style.display = "block";
        index = 0;
    });

    
    correctButton.addEventListener('click', function() {
        correctNum++;
        accuracy = (correctNum/(index))*100;
    });
});

