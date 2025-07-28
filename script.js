//Task 1 Day 1
let rbtn = document.getElementById('rbtn');

const reverseString = () => {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let reversed = "";
    let inputValue = first.value
    for (let i = inputValue.length - 1; i >= 0; i--) {
        reversed += inputValue[i];
    }
    second.value = reversed;
}

rbtn.addEventListener('click', reverseString);

//Task 2 Day 1
let arr = [45, 65, 98, 67, 3, 67, 45, 28, 9, 87, 345, 456, 99, 266, 344, 454, 455];
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max;
}
console.log(findMax(arr));


//Micro Project Day 1

let submitbtn = document.getElementById("submitbtn");
const validate = (e) => {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let Alert = document.getElementById('Alert');
    if (name.value == "") {
        Alert.innerHTML = `Name can't be empty !!  `
    } else if (email.value.length == 0) {
        Alert.innerHTML = `Insert your Email Adrress !!`
    }
    else if (!(email.value.includes('@') && email.value.includes('.'))) {
        Alert.innerHTML = `Correct your Email Adrress !!`
    } else if (password.value.length < 6) {
        Alert.innerHTML = `Password must be at least 6 characters long !!`
    } else {
        Alert.innerHTML = `Congratulations! Form Submitted.`
        Alert.style.color = 'green'
        name.value = "";
        email.value = "";
        password.value = "";
    }
}
submitbtn.addEventListener('click', validate)


//Task 1 Day 2
let a = "madgam";
const isPalindrome = (string) => {
    let temp = '';
    for (let i = string.length - 1; i >= 0; i--) {
        temp += string[i];
    }
    if (temp == string) {
        console.log("This is a Palindrome !!")
    } else {
        console.log("This is NOT a Palindrome !!")
    }
}
isPalindrome(a);



//Task 2 Day 2
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [56, 87, 98, 34]

const sumOfArray = (arr) => {
    if (Array.isArray(arr)) {
        let sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log("Sum of Array " + arr + " is " + sum)
    }
}
sumOfArray(arr1)
sumOfArray(arr2)


//Micro Project Day 2
let display = document.getElementById("count");
let btn = document.querySelectorAll('.counter button')
let count = 0;
const updateDisplay = () => {
    display.innerHTML = `${count}`
}
const changeCount = (e) => {
    let sign = e.target.getAttribute('data-value')
    console.log(sign);
    if (sign == '+') {
        count += 1;
        updateDisplay();
    } else if (sign == '-') {
        count -= 1;
        updateDisplay();
    } else if (sign == '&') {
        count = 0;
        display.innerHTML = null;
    }
}
btn.forEach(button => button.addEventListener('click', changeCount))



//Task 1 Day 3
let factbtn = document.getElementById('factbtn');
const findFactorial = () => {
    let value = Number(document.getElementById('factvalue').value);
    let factanswer = document.getElementById('factanswer');
    if (value == '0' || value == '1') {
        factanswer.value = `1`;
        return;
    } else if (value < 0) {
        alert("Enter a positive value !!");
        return;
    } else {
        let factorial = 1;
        for (let i = 1; i <= value; i++) {
            factorial *= i;
        }
        factanswer.value = `${factorial}`
    }
}
factbtn.addEventListener('click', findFactorial)

// Task 2 Day 3
let findsecond = document.getElementById('findsecond');

const findSecondLargest = () => {
    let input = document.getElementById('numarray').value;
    let result = document.getElementById('secondresult');

    let arr = input.split(',').map(Number);

    if (arr.length < 2) {
        result.innerHTML = "Enter at least two numbers.";
        result.style.color = 'red';
        return;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        result.innerHTML = "No second largest found.";
        result.style.color = 'red';
    } else {
        result.innerHTML = `Second largest number is ${secondLargest}`;
        result.style.color = 'green';
    }
}
findsecond.addEventListener('click', findSecondLargest);

//Micro Project Day 3
let bmibtn = document.getElementById('bmibtn');

const calculateBMI = () => {
    let weight = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('height').value);
    let result = document.getElementById('bmiresult');

    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        result.innerHTML = "Please enter valid positive numbers!";
        result.style.color = 'red';
        return;
    }

    let bmi = weight / (height * height);
    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${status})`;
    result.style.color = 'green';
}

bmibtn.addEventListener('click', calculateBMI);


//Task 2 Day 4
let nums = [5, 8, 9, 3, 5, 6, 4, 5, 6, 2, 3, 0, 1, 3, 6, 2, 8, 4, 6, 3, 8,];
const findDuplicates = (arr) => {
    const counts = {};
    const duplicates = {};

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const num in counts) {
        if (counts[num] > 1) {
            duplicates[num] = counts[num];
        }
    }

    console.log("Duplicate numbers and their counts:", duplicates);
    return duplicates;
}
findDuplicates(nums)

//Project Day 4



let screen = document.getElementById('display');
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');
let h = 0, m = 0, s = 0;
let startInterval;
const updatescreen = (h, m, s) => {
    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;
    let seconds = s < 10 ? "0" + s : s;
    screen.innerHTML = `${hours}:${minutes}:${seconds}`;
}
const startfunc = () => {
    if (startInterval) clearInterval(startInterval);
    startInterval = setInterval(function () {
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
        updatescreen(h, m, s)
    }, 1000)
}
const stopfunc = () => {
    clearInterval(startInterval);
}
const resetfunc = () => {
    clearInterval(startInterval);
    h = 0;
    m = 0;
    s = 0;
    updatescreen(h, m, s);
}
startbtn.addEventListener('click', startfunc)
stopbtn.addEventListener('click', stopfunc)
resetbtn.addEventListener('click', resetfunc)


//Task 2 Day 5
let array1 = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    console.log("Original Array:", arr);
    console.log("Reversed Array:", reversedArray);
    return reversedArray;
}

reverseArray(array1);


//poject day 5

const convertbtn = document.getElementById('convertBtn');
const convertTemp = () => {
    const tempInput = document.getElementById('tempInput');
    const tempoutput = document.getElementById('tempoutput');
    const scale = document.getElementById('conversionType').value;
    let temp = parseFloat(tempInput.value);
    let Toutput = null;

    if (isNaN(temp)) {
        tempoutput.value = "Enter valid number";

        return;
    }
    if (scale == "CtoF") {
        Toutput = (temp * (9 / 5)) + 32;
        tempoutput.value = `${temp.toFixed(2)}°C = ${Toutput.toFixed(2)}°F`;
    } else {
        Toutput = (temp - 32) * (5 / 9);
        tempoutput.value = `${temp.toFixed(2)}°F = ${Toutput.toFixed(2)}°C`;
    }
    tempoutput.value = `${Toutput}`
}
convertbtn.addEventListener('click', convertTemp)

// Task 1 Day 6
let sentbtn = document.getElementById('sentbtn')
const findLargest = () => {
    let sentence = document.getElementById('sentInput').value;
    let sentOutput = document.getElementById('sentOutput');
    let arr = sentence.split(" ");
    let largest = arr[0];
    for (let i of arr) {
        if (i.length > largest.length) {
            largest = i;
        }
    }
    sentOutput.value = `${largest}`
}
sentbtn.addEventListener('click', findLargest)

// Task 2 Day 6


let arrDbtn = document.getElementById('arrDbtn')
const removeduplicates = () => {
    let arrDinput = document.getElementById('arrDInput').value;
    let arrDoutput = document.getElementById('arrDOutput');
    if (arrDinput.trim() === "") {
        arrDoutput.value = "Enter values separated by commas";
        return;
    }
    let arr = arrDinput.split(",");
    let uniqueArray = [];
    for (let i of arr) {
        if (!(uniqueArray.includes(i))) {
            uniqueArray.push(i);
        }
    }
    uniqueArray.sort((a, b) => a - b);
    arrDoutput.value = uniqueArray.join(",")
}
arrDbtn.addEventListener('click', removeduplicates)


//Task 1 Day 7
let vowelbtn = document.getElementById('vowelbtn');
const findVowels = () => {
    let string = document.getElementById('vowelInput').value.trim();
    let output = document.getElementById('vowelOutput');
    let arr = string.toLowerCase().split("");
    let count = 0;
    for (let i of arr) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count++;
        }
    }
    output.innerHTML = `${count} Vowel(s) in The string.`;
}
vowelbtn.addEventListener('click', findVowels)

//Task 2 Day 7
let numSumbtn = document.getElementById('numSumbtn');
const findnumSum = () => {
    let input = document.getElementById('numSumInput').value.trim();
    let output = document.getElementById('numSumOutput');
    if (isNaN(input) || input === "") {
        output.innerHTML = "Please enter a valid number.";
        return;
    }
    let num = parseInt(input);
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    output.innerHTML = `Sum of digits is: ${sum}`;
}
numSumbtn.addEventListener('click', findnumSum);


//Micro project Day 7
let dobbtn = document.getElementById('dobbtn');

const findAge = () => {
    let today = new Date();
    let input = document.getElementById('dobInput').value;
    let output = document.getElementById('dobOutput');
    let birthDate = new Date(input);
    if (!input || birthDate > today) {
        output.innerHTML = `Please enter your date of birth!`;
        return;
    }
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    output.innerHTML = `Your Age is: ${years} years, ${months} months, ${days} days.`;
}
dobbtn.addEventListener('click', findAge);

// let d = new Date();
// let t = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate() - d.getDate()

//Task 1 Day 8
const armstrong = (num) => {
    return Math.pow(parseInt(num), 3)
}
let ArmStrongbtn = document.getElementById('ArmStrongbtn');
const checkArmStrong = () => {
    let input = document.getElementById('ArmStrongInput').value.trim();
    let output = document.getElementById('ArmStrongOutput');
    if (isNaN(input) || input === "" || input.length > 3 || input.length < 3) {
        output.innerHTML = "Please enter a valid number.";
        return;
    }
    let arr = input.split("");
    let arr2 = arr.map(armstrong)
    let sum = arr2.reduce((acc, curr) => acc + curr, 0);
    if (sum === input) {
        output.innerHTML = `${input} is an ArmStrong number`
    } else {
        output.innerHTML = `${input} is NOT an ArmStrong number`
    }
}
ArmStrongbtn.addEventListener('click', checkArmStrong);



// Task 2 Day 8
let countbtn = document.getElementById('countbtn');
const countCharacters = () => {
    let input = document.getElementById('countInput').value.trim();
    let output = document.getElementById('countOutput');
    let arr = input.split("");
    let counts = {};
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    let result = "";
    for (let key in counts) {
        result += `${key}: ${counts[key]}, `;
    }
    output.innerHTML = result;
}
countbtn.addEventListener('click', countCharacters);


//Project Day 8 
const quizData = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Quetta"],
        correct: "Islamabad"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats"
        ],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        correct: "Bill Gates"
    },
    {
        question: "Which year was JavaScript launched?",
        options: ["1996", "1995", "1994", "1993"],
        correct: "1995"
    }
];


let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

const loadQuiz = () => {
    let q = quizData[current];
    questionEl.innerHTML = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(opt => {
        optionsEl.innerHTML += `
      <label>
        <input type="radio" name="option" value="${opt}"> ${opt}
      </label><br>`;
    });
};
loadQuiz();
submitBtn.addEventListener('click', () => {
    let selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        if (selected.value == quizData[current].correct) {
            score++;
        }
        current++;
        if (current < quizData.length) {
            loadQuiz();
        } else {
            resultEl.innerHTML = `Quiz completed. Your score is ${score}/${quizData.length}.`;
            submitBtn.disabled = true;
        }
    } else {
        alert("Please select an option.");
    }
});

//Task 1 Day 9
const findgcd = (a, b) => {
    let gcd = 1;
    let min = Math.min(a, b);
    for (let i = 1; i <= min; i++) {
        if (a % i === 0 || b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

//Task 2 Day 9
const firstUniqueChar = (str) => {
    let counts = {};

    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (let char of str) {
        if (counts[char] === 1) {
            return char;
        }
    }

    return "No unique character";
}

//Project Day 9
let calculateBtn = document.getElementById('calculateBtn');
const calculateSI = () => {
    let principal = document.getElementById('principal').value.trim();
    let rate = document.getElementById('rate').value.trim();
    let time = document.getElementById('time').value.trim();
    let output = document.getElementById('siOutput');
    if (principal === "" || rate === "" || time === "") {
        output.innerHTML = "Please fill all fields.";
        return;
    }
    let si = (parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100;
    output.innerHTML = `Simple Interest is: ${si}`;
}
calculateBtn.addEventListener('click', calculateSI);

//Task 1 Day 10
let numsodd = [2, 5, 6, 4, 6, 5, 7, 5, 4, 3, 2, 3, 4, 5, 45, 98, 77, 66, 55, 33, 22, 1];
const odds = (arr) => {
    let newArr = [];
    for (let num of arr) {
        if (num % 2 !== 0) {
            newArr.push(num);
        }
    }
    newArr.sort((a, b) => a - b);
    for (let i of newArr) {
        console.log(i);
    }
}
odds(numsodd);


//Task 2 Day 10
let numsdouble = [2, 5, 6, 4, 6, 5, 7, 5, 4, 3, 2, 3, 4, 5, 45, 98, 77, 66, 55, 33, 22, 1];
const doublenums = (arr) => {
    let newArr = [];
    for (let num of arr) {
        newArr.push(num * 2)
    }
    newArr.sort((a, b) => a - b);
    for (let i of newArr) {
        console.log(i);
    }
}
doublenums(numsdouble)

//Project Day 10
const calcBtn = document.getElementById('calcBtn');
const calculatePercentage = () => {
    let obtained = document.getElementById('obtainedMarks').value;
    let total = document.getElementById('totalMarks').value;
    let output = document.getElementById('percentageOutput');
    if (obtained === "" || total === "" || total == 0) {
        output.innerHTML = "Please enter valid marks.";
        return;
    }
    let percent = (obtained / total) * 100;
    let result = percent >= 33 ? "Pass" : "Fail";

    output.innerHTML = `Percentage: ${percent.toFixed(2)}% - ${result}`;
}
calcBtn.addEventListener('click', calculatePercentage);


//Task 1 Day 11
const filterGreaterThan50 = (arr) => {
    let filtered = arr.filter(num => num > 50);
    console.log("Original:", arr);
    console.log("Filtered (>50):", filtered);
}

filterGreaterThan50([23, 55, 78, 12, 67, 45, 99, 10, 2]);

//Task 1 Day 11
let students = {
    "Ali": 78,
    "Sara": 85,
    "John": 92,
    "Mehak": 67,
    "Bilal": 88
};
const Astudents = (arr) => {
    let newArr = [];
    for (let name in arr) {
        if (arr[name] > 80)
            newArr.push(name);
    }
    console.log(`Students who scored more than 80 marks are: ${newArr}`)
}
Astudents(students)

//Project Day 11
let candidates = {};

document.getElementById('addBtn').addEventListener('click', () => {
    let name = document.getElementById('studentName').value.trim();
    let marks = parseInt(document.getElementById('studentMarks').value.trim());
    let outputAll = document.getElementById('allStudents');
    let outputTop = document.getElementById('topStudents');

    if(name == ""){
        alert("Enter Name of student !!");
    } else if(isNaN(marks)){
        alert("Enter a number in marks field !!");
    } else {
        candidates[name] = marks;
        alert(`${name} added.`);
        outputAll.innerHTML = "";
        outputTop.innerHTML = "";
    }
});

let showAllBtn = document.getElementById('showAllBtn');
showAllBtn.addEventListener('click', () => {
    if(Object.keys(candidates).length < 1){
        alert("No Record Found");
        return;
    }
    let output = "";
    for (let s in candidates) {
        output += `${s}: ${candidates[s]}<br>`;
    }
    document.getElementById('allStudents').innerHTML = output;
});

document.getElementById('showTopBtn').addEventListener('click', () => {
    if(Object.keys(candidates).length < 1){
        alert("No Record Found");
        return;
    }
    let output = "";
    for (let s in candidates) {
        if (candidates[s] > 80) {
            output += `${s}: ${candidates[s]}<br>`;
        }
    }
    document.getElementById('topStudents').innerHTML = output || "No student scored more than 80.";
});

//Task 1 Day 12
const checkAnagram = (str1, str2) => {

    let s1 = str1.replace(/\s/g, '').toLowerCase();
    let s2 = str2.replace(/\s/g, '').toLowerCase();

    if(s1.length !== s2.length){
        console.log(`${str1} and ${str2} are NOT anagrams.`);
        return false;
    }

    let sorted1 = s1.split('').sort().join('');
    let sorted2 = s2.split('').sort().join('');

    if(sorted1 === sorted2){
        console.log(`${str1} and ${str2} are anagrams.`);
        return true;
    } else {
        console.log(`${str1} and ${str2} are NOT anagrams.`);
        return false;
    }
}
checkAnagram("listen", "silent");
checkAnagram("hello", "world");
checkAnagram("Dormitory", "dirty room");

//Task 2 Day 12
const capitalizeWords = (sentence) => {
    let words = sentence.split(" ");
    let capitalizedWords = [];

    for (let word of words) {
        if(word.length > 0){
            let capitalized = word[0].toUpperCase() + word.slice(1);
            capitalizedWords.push(capitalized);
        }
    }

    return capitalizedWords.join(" ");
}

console.log(capitalizeWords("i am learning javascript"));
console.log(capitalizeWords("hello world"));

//Project Day 12
window.onload = function () {
  // Add a new todo
  const addTodos = () => {
    const todoId = prompt("Enter your Todo name:");
    const todoDesc = prompt("Enter description of your Todo:");

    if (todoId && todoDesc) {
      localStorage.setItem(todoId, todoDesc);
      showTodo(todoId);
    }
  };

  // Show a single todo in the DOM
  const showTodo = (id) => {
    const text = localStorage.getItem(id);
    const container = document.getElementById("boxMid");

    container.innerHTML += `
      <div class="todopart">
        <input type="checkbox" />
        <span class="todoDesc">${id} : ${text}</span>
        <button class="deltodo">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    setupDeleteListeners();
  };

  // Set up delete buttons for each todo item
  const setupDeleteListeners = () => {
    const deleteButtons = document.getElementsByClassName("deltodo");

    for (let btn of deleteButtons) {
      btn.onclick = function () {
        const todoItem = btn.parentElement;
        const todoText = todoItem.querySelector(".todoDesc").innerText;
        const todoId = todoText.split(":")[0].trim();

        localStorage.removeItem(todoId);
        todoItem.remove();
      };
    }
  };

  // Load existing todos from localStorage
  const loadExistingTodos = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      showTodo(key);
    }
  };

  // Clear all todos
  const clearTodos = () => {
    localStorage.clear();
    document.getElementById("boxMid").innerHTML = "";
    console.log("All todos cleared!");
  };

  // Attach event listeners
  document.getElementById("addtodobtn").onclick = addTodos;
  document.getElementById("cleartodobtn").onclick = clearTodos;

  // Initial load
  loadExistingTodos();
};

//Project Day 15
let result = document.getElementById("result");
//Function For getting Input Values
const getValues = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
};
//Add Button
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", () => {
    let { num1, num2 } = getValues();
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers!";
        return;
    } else {
        let sum = num1 + num2;
        result.innerHTML = `Result: ${sum}`;
    }
});
//Subtract button 
let subtractbtn = document.getElementById("subtractbtn");
subtractbtn.addEventListener("click", () => {
    let { num1, num2 } = getValues();
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers!";
        return;
    } else {
        let minus = num1 - num2;
        result.innerHTML = `Result: ${minus}`;
    }
});
//Multiply Button
let multiplybtn = document.getElementById("multiplybtn");
multiplybtn.addEventListener("click", () => {
    let { num1, num2 } = getValues();
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers!";
        return;
    } else {
        let product = num1 * num2;
        result.innerHTML = `Result: ${product}`;
    }
});
//Divide Button
let dividebtn = document.getElementById("dividebtn");
dividebtn.addEventListener("click", () => {
    let { num1, num2 } = getValues();
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers!";
        return;
    } else {
        let quotient = num1 / num2;
        result.innerHTML = `Result: ${quotient}`;
    }
});
//clear Button
let clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener("click", () => {
    num1.value = '';
    num2.value = '';
    result.innerHTML = "Result will Shown Here"
})