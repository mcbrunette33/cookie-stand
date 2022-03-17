'use strict';

let storesArray = [];
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allTheCookies = 0;
// let today;
// let cookiesPerToday = today[Math.floor(Math.random() * today.length)];

let table = document.getElementById('Cookie-sales');
// reference for the table. No longer a section

let myform = document.getElementById('NewStoreForm');

function cookiesByHour(index) {
  let total = 0;
  for (let i = 0; i < storesArray.length; i++) {
    total += storesArray[i].cookiesPerHour[index];
  }
  allTheCookies += total;
  return total;
}

// constructor always cap first letter
let Stores = function (storeName, minCust, maxCust, avgCookiebought) {
  this.storeName = storeName;
  this.minCust = parseInt(minCust);
  this.maxCust = parseInt(maxCust);
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.avgCookiebought = avgCookiebought;
  this.totalCookies = 0;
  storesArray.push(this);

};

let storeOne = new Stores('seattle', 23, 65, 6.3);
let storeTwo = new Stores('tokyo', 3, 24, 1.2);
let storeThree = new Stores('dubai', 11, 38, 3.7);
let storeFour = new Stores('lima', 2, 16, 4.6);
// console.log(storesArray);

Stores.prototype.createCustomerNumber = function () {
  for (let i = 0; i < hoursArray.length; i++) {
    let customers = Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.customersPerHour.push(customers);

  }

};

Stores.prototype.createHourlyCookies = function () {
  this.createCustomerNumber();
  for (let i = 0; i < hoursArray.length; i++) {
    let hourlyCookies = Math.ceil(this.customersPerHour[i] * this.avgCookiebought);
    this.cookiesPerHour.push(hourlyCookies);

  }


};

// creating tables ---
Stores.prototype.createTable = function () {
  this.createHourlyCookies();
  const row = document.createElement('tr');
  let tabledata = document.createElement('td');
  tabledata.textContent = this.storeName;
  row.appendChild(tabledata);
  table.appendChild(row);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    tabledata = document.createElement('td');
    tabledata.textContent = this.cookiesPerHour[i];
    row.appendChild(tabledata);

  }
};
storeOne.createTable();
storeTwo.createTable();
storeThree.createTable();
storeFour.createTable();

// // use tfoot for footer of grand totals
// //use td for header of store hours

function headerRow() {
  let tableHeader = document.createElement('thead');
  table.appendChild(tableHeader);

  let row1 = document.createElement('tr');
  tableHeader.appendChild(row1);

  let blankCell = document.createElement('td');
  row1.appendChild(blankCell);

  for (let i = 0; i < hoursArray.length; i++) {
    let timeElem = document.createElement('th');
    timeElem.textContent = `${hoursArray[i]}`;
    row1.appendChild(timeElem);
  }
  let totalCell = document.createElement('th');
  totalCell.textContent = 'Daily Location Totals';
  row1.appendChild(totalCell);
}

function footerRow() {
  let tableFooter = document.createElement('tfoot');
  table.appendChild(tableFooter);
  let tr = document.createElement('tr');
  let th = document.createElement('th');

  tableFooter.appendChild(tr);
  tableFooter.appendChild(th);

  th.textContent = 'Totals';
  tr.appendChild(th);

  let td;
  for (let i = 0; i < hoursArray.length; i++) {
    td = document.createElement('td');
    td.textContent = `${cookiesByHour(i)}`;
    console.log(td);
    tr.appendChild(td);
  }
  tr.appendChild(td);
  table.appendChild(tr);

}

function NewStoreLocations(event) {
  event.preventDefault();
  // console.log('submit')
  let location = event.target.inputLocation.value;
  let MinimumCustomers = +event.target.inputMinCust.value;
  let MaximumCustomers = +event.target.inputMaxCust.value;
  let AvgCookiesbought = +event.target.inputAvgCookies.value;
  let NewStorezz = new Stores(location, MinimumCustomers, MaximumCustomers, AvgCookiesbought);
  NewStorezz.createTable();
}

footerRow();
headerRow();
myform.addEventListener('submit', NewStoreLocations);
