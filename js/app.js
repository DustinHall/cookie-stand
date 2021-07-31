'use strict';


let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSold: 6.3,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  avgCookiesPurchased: function () {
    return Math.ceil(this.getRandomCustomer() * this.avgSold);
  },

  calcCookiePerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomer();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avgSold);
      this.avgCookiesSoldEachHourArray.push(`${hours[i]}: ${cookiesSoldThisHour} cookies sold`);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },

  render: function() {
    this.calcCookiePerHour();
    let seattleStore = document.getElementById('seattleStore');
    for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++) {
      let li = document.createElement('li'); 
      li.textContent = this.avgCookiesSoldEachHourArray[i];
      seattleStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total ${(this.dailyTotal)} cookies sold`;
    seattleStore.appendChild(liTotal);
  },
};

seattle.render();

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSold: 1.2,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  avgCookiesPurchased: function () {
    return Math.ceil(this.getRandomCustomer() * this.avgSold);
  },

  calcCookiePerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomer();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avgSold);
      this.avgCookiesSoldEachHourArray.push(`${hours[i]}: ${cookiesSoldThisHour} cookies sold`);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },

  render: function() {
    this.calcCookiePerHour();
    let tokyoStore = document.getElementById('tokyoStore');
    for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++) {
      let li = document.createElement('li'); 
      li.textContent = this.avgCookiesSoldEachHourArray[i];
      tokyoStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total ${(this.dailyTotal)} cookies sold`;
    tokyoStore.appendChild(liTotal);
  },
};

tokyo.render();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSold: 3.7,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  avgCookiesPurchased: function () {
    return Math.ceil(this.getRandomCustomer() * this.avgSold);
  },

  calcCookiePerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomer();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avgSold);
      this.avgCookiesSoldEachHourArray.push(`${hours[i]}: ${cookiesSoldThisHour} cookies sold`);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },

  render: function() {
    this.calcCookiePerHour();
    let dubaiStore = document.getElementById('dubaiStore');
    for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++) {
      let li = document.createElement('li'); 
      li.textContent = this.avgCookiesSoldEachHourArray[i];
      dubaiStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total ${(this.dailyTotal)} cookies sold`;
    dubaiStore.appendChild(liTotal);
  },
};

dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSold: 2.3,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  avgCookiesPurchased: function () {
    return Math.ceil(this.getRandomCustomer() * this.avgSold);
  },

  calcCookiePerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomer();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avgSold);
      this.avgCookiesSoldEachHourArray.push(`${hours[i]}: ${cookiesSoldThisHour} cookies sold`);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },

  render: function() {
    this.calcCookiePerHour();
    let parisStore = document.getElementById('parisStore');
    for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++) {
      let li = document.createElement('li'); 
      li.textContent = this.avgCookiesSoldEachHourArray[i];
      parisStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total ${(this.dailyTotal)} cookies sold`;
    parisStore.appendChild(liTotal);
  },
};

paris.render();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSold: 4.6,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  avgCookiesPurchased: function () {
    return Math.ceil(this.getRandomCustomer() * this.avgSold);
  },

  calcCookiePerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let custThisHour = this.getRandomCustomer();
      let cookiesSoldThisHour = Math.ceil(custThisHour * this.avgSold);
      this.avgCookiesSoldEachHourArray.push(`${hours[i]}: ${cookiesSoldThisHour} cookies sold`);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },

  render: function() {
    this.calcCookiePerHour();
    let limaStore = document.getElementById('limaStore');
    for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++) {
      let li = document.createElement('li'); 
      li.textContent = this.avgCookiesSoldEachHourArray[i];
      limaStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total ${(this.dailyTotal)} cookies sold`;
    limaStore.appendChild(liTotal);
  },
};

lima.render();
