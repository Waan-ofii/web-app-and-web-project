'use strict'
//Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2025-05-08T14:11:59.604Z',
    '2025-08-26T17:01:17.194Z',
    '2025-08-27T23:36:17.929Z',
    '2025-08-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2025-04-10T14:43:26.374Z',
    '2025-07-25T18:49:59.371Z',
    '2025-08-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2020-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2025-06-25T18:49:59.371Z',
    '2025-08-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2024-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2025-06-25T14:18:46.235Z',
    '2025-08-05T16:33:06.386Z',
  ],
  currency: 'USD',
  locale: 'ar-SY',
};

const accounts = [account1, account2, account3, account4];

//Element
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//function

const formattedDate = function(date,locale){

  const calcDaysPassed =function(date1,date2){
  return Math.trunc(Math.abs((date2-date1)/(1000*60*60*24)));
}
const daysPassed = calcDaysPassed(new Date(),date);

if(daysPassed === 0) return 'Today';
if(daysPassed === 1) return 'Yesterday';
if(daysPassed <= 7) return `${daysPassed} days ago`;
else{
  return  Intl.DateTimeFormat(locale).format(date);
}
};

const  formatCur = function(value,locale,currency){
return new Intl.NumberFormat(locale,
  {
    style: 'currency',
    currency : currency
  }).format(value);
};

const displayMovements = function(acc, sort= false){
 containerMovements.innerHTML = '';
const movs =sort? acc.movements.slice().sort((a,b) => a-b):acc.movements;

 movs.forEach(function(mov,i ){
const type = mov > 0? 'deposit':'withdrawal';

const date = new Date(acc.movementsDates[i]);
const displayDate = formattedDate(date,acc.locale);

const html = `<div class="movements__row">
        <div class="movements__type  movements__type--${type}">${type}${i+1}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCur(mov,acc.locale,acc.currency)}</div>
    </div>`
 containerMovements.insertAdjacentHTML('afterbegin' ,html);
 });    
};

const displayBalance =  function(acc){
  acc.balance = acc.movements.reduce((acc,mov) =>acc + mov,0);
  labelBalance.textContent = formatCur(acc.balance,acc.locale,acc.currency);

};

const displaySummary = function(acc){
const income = acc.movements.filter(mov => mov > 0).reduce((acc, mov)=> acc + mov,0);
labelSumIn.textContent = formatCur(income,acc.locale,acc.currency);

const out = acc.movements.filter(mov => mov < 0).reduce((acc,mov)=>acc + mov,0);
labelSumOut.textContent=formatCur(Math.abs(out),acc.locale,acc.currency);

const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
     labelSumInterest.textContent = formatCur(interest,acc.locale,acc.currency);
}

const createUsernames = function(accs){
  const username = accs.forEach((acc)=>{
        acc.username = acc.owner.toLowerCase()
        .split(' ')
        .map(name =>name[0]).join('');
    });
}
createUsernames(accounts);

const updateUI = function(acc){
  displayMovements(acc);
   displayBalance(acc);
   displaySummary(acc);
};

const startLogOutTimer = function(){
  //set time to 5minute
  let time = 300;
const tick =  function(){
    const min = String(Math.trunc(time/60)).padStart(2,0);
    const scond =String(time%60).padStart(2,0);
  
labelTimer.textContent = `${min} : ${scond}`;

if(time === 0) {clearInterval(timer);
labelWelcome.textContent = 'Log in to get started';
containerApp.style.opacity = 0;
  }
time--;
  };
  timer= setInterval(tick,1000); 
 return timer; 
}

let currentAccount, timer;

btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    
    currentAccount = accounts.find( acc=>
    acc.username === inputLoginUsername.value
    );
 if(currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

//current date 
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
       };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);


    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

if(timer) clearInterval(timer);
timer =startLogOutTimer();

updateUI(currentAccount);
 }

});

btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const recevierAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';
    if(amount > 0 && 
        recevierAcc && 
        currentAccount.balance >= amount &&
         recevierAcc?.username !== currentAccount.username){

        currentAccount.movements.push(-amount);
        recevierAcc.movements.push(amount);

        currentAccount.movementsDates.push(new Date().toISOString());
        recevierAcc.movementsDates.push(new Date().toISOString());
clearInterval(timer);
    timer =startLogOutTimer();
   updateUI(currentAccount);
   
    }
});

btnLoan.addEventListener('click',function(e){
    e.preventDefault();
const amount =Number(inputLoanAmount.value);

if(amount >0 && currentAccount.movements.some(mov =>mov >= amount * 0.1)){
    setTimeout(function (){
    // Add movement
    currentAccount.movements.push(amount);
     currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    clearInterval(timer);
    timer =startLogOutTimer();
    updateUI(currentAccount);

    
   },2500);
}
inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
