'use strict';

var hoursOpenPerDay = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var businesses = [];
var salesByHour = [];
var totalAllLocationsSales = 0;
var newLocations = document.getElementById('business_info');
var tableDataDisplay =

document.getElementById('businesses_reporting_js');
var Stores = function(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, location) {
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.location = location;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.calcCustomersPerHour();
  this.calcCookiesSoldPerHour();
  businesses.push(this);

};

Stores.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  }
};

Stores.prototype.calcCookiesSoldPerHour = function() {
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
  }
};

Stores.prototype.renderTableBody = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (var a = 0; a < hoursOpenPerDay.length; a++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHour[a];

    trEl.appendChild(tdEl);  location[i] row
  }
  tdEl = document.createElement('td'); usiness[i] location
  tdEl.textContent = this.totalDailyCookiesSold;
  trEl.appendChild(tdEl);
  tableDataDisplay.appendChild(trEl);
};

new Stores(23, 65, 6.3, 'First and Pike');
new Stores(3, 24, 1.2, 'SeaTac Airport');
new Stores(11, 38, 3.7, 'Seattle Center');
new Stores(20, 38, 2.3, 'Capitol Hill');
new Stores(2, 16, 4.6, 'Alki Beach');

function renderBusinesses() {
  tableDataDisplay.innerHTML = '';
  salesByHour = [];
  totalAllLocationsSales = 0;
  renderTableHeader();
  for (var i = 0; i < businesses.length; i++) {
    businesses[i].renderTableBody();
  }
  totalSalesCalc();
  renderTableFooter();
}
function addLocations (event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCustomersPerHour = parseInt(event.target.min_customers.value);
  var maxCustomersPerHour = parseInt(event.target.max_customers.value);
  var avgCookiesPerCustomer = parseFloat(event.target.avg_cookies.value);
  new Stores(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, location);
  event.target.location.value = null;
  event.target.min_customers.value = null;
  event.target.max_customers.value = null;
  event.target.avg_cookies.value = null;

  renderBusinesses();
}
function renderTableHeader() {
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOpenPerDay[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);
  theadEl.appendChild(trEl);
  tableDataDisplay.appendChild(theadEl);
}
function renderTableFooter() {
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var a = 0; a < hoursOpenPerDay.length; a++) {
    tdEl = document.createElement('td');
    tdEl.textContent = salesByHour[a];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalAllLocationsSales;
  trEl.appendChild(tdEl);
  tfootEl.appendChild(trEl);
  tableDataDisplay.appendChild(tfootEl);
}
function totalSalesCalc() {
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    var hourlyCookieSales = 0;
    for (var z = 0; z < businesses.length; z++) {
      hourlyCookieSales += businesses[z].cookiesSoldPerHour[i];
    }
    salesByHour.push(hourlyCookieSales); array
  }
  for (var y = 0; y < businesses.length; y++) {
    totalAllLocationsSales += businesses[y].totalDailyCookiesSold;
  }
}
newLocations.addEventListener('submit', addLocations);
renderBusinesses();

makerHeaderRow();
renderallLocation();
makeFooterRow();
