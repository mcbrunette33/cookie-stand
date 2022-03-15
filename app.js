'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let section = document.getElementById('Cookie-sales');
let seattle = {
  storeName: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiebought: 6.3,
  hourlySales : [],
  totalCookies: 0,
  randomGen: function () {
    for (let i = 0; i < hours.length; i++) {
      let CustomersperHour = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      this.hourlySales[i] = Math.ceil(CustomersperHour * this.avgCookiebought);
      this.totalCookies = this.totalCookies + this.hourlySales[i];
    }
    // return this.hourlySales;
  },
  render: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = this.storeName;
    section.appendChild(h2Element);
    let ulElement = document.createElement('ul');
    section.appendChild(ulElement);
    for (let i = 0; i < this.hourlySales.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `total ${this.totalCookies} cookies`;
    ulElement.appendChild(liElement);
  }
};
seattle.randomGen();
console.log(seattle);
console.log(Math.random());
seattle.render();

let tokyo = {
  storeName: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiebought: 1.2,
  hourlySales : [],
  totalCookies: 0,
  randomGen: function () {
    for (let i = 0; i < hours.length; i++) {
      let CustomersperHour = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      this.hourlySales[i] = Math.ceil(CustomersperHour * this.avgCookiebought);
      this.totalCookies = this.totalCookies + this.hourlySales[i];
    }
    // return this.hourlySales;
  },
  render: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = this.storeName;
    section.appendChild(h2Element);
    let ulElement = document.createElement('ul');
    section.appendChild(ulElement);
    for (let i = 0; i < this.hourlySales.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `total ${this.totalCookies} cookies`;
    ulElement.appendChild(liElement);
  }
};
tokyo.randomGen();
console.log(tokyo);
console.log(Math.random());
tokyo.render();

let dubai = {
  storeName: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiebought: 3.7,
  hourlySales : [],
  totalCookies: 0,
  randomGen: function () {
    for (let i = 0; i < hours.length; i++) {
      let CustomersperHour = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      this.hourlySales[i] = Math.ceil(CustomersperHour * this.avgCookiebought);
      this.totalCookies = this.totalCookies + this.hourlySales[i];
    }
    // return this.hourlySales;
  },
  render: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = this.storeName;
    section.appendChild(h2Element);
    let ulElement = document.createElement('ul');
    section.appendChild(ulElement);
    for (let i = 0; i < this.hourlySales.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `total ${this.totalCookies} cookies`;
    ulElement.appendChild(liElement);
  }
};
dubai.randomGen();
console.log(dubai);
console.log(Math.random());
dubai.render();

let lima = {
  storeName: 'lima',
  minCust: 2,
  maxCust: 16,
  avgCookiebought: 4.6,
  hourlySales : [],
  totalCookies: 0,
  randomGen: function () {
    for (let i = 0; i < hours.length; i++) {
      let CustomersperHour = (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      this.hourlySales[i] = Math.ceil(CustomersperHour * this.avgCookiebought);
      this.totalCookies = this.totalCookies + this.hourlySales[i];
    }
    // return this.hourlySales;
  },
  render: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = this.storeName;
    section.appendChild(h2Element);
    let ulElement = document.createElement('ul');
    section.appendChild(ulElement);
    for (let i = 0; i < this.hourlySales.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `total ${this.totalCookies} cookies`;
    ulElement.appendChild(liElement);
  }
};
lima.randomGen();
console.log(lima);
console.log(Math.random());
lima.render();








