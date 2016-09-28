
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shops = [];
var tbl;

function CookieShop(name, minCustomer, maxCustomer, avgCustomer){
  this.name = name
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.id = name.replace(' ', '').toLowerCase();
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  shops.push(this);

  this.generateHourly();
  renderStore(tbl, this);
}

CookieShop.prototype.gererateRandom = function(min, max) {
  return Math.random() * (max - min) + min;
}
//var firstAndPike = {
//this.locationName = 'First and Pike',
//this.minCustPerHour = 23,
//this.maxCustPerHour = 65,
//this.avgCookiesPerCust = 6.3,
//this.randomCustPerHour = [],
//this.totalCookiesSoldEachHour = [],
//this.totalDailyCookieSales = 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    // return console.log('Random hourly customers have been calculated');
  },
  //trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.dailyCookies;
document.getElementById('new-store').addEventListener('submit', function(event)
{
event.preventDefault();
var exists = false;
var store = event.target.store.value;
var min = parseint (event.target.min.value);
var max = parseint (event.target.max.value);
var avg = parseint (event.target.avg.value);

for (var i = 0; i < shops.length; i++) {
  if (shops[i].id === stor.replace (' ', '').toLowerCase())
  exists = true;
  break;
}
}

if (exists === true) {
  renderUpdate(shops[i], min, max, avg);
} else {
event.target.store.value = null;
event.target.min.value = null;
event.target.max.value = null;
event.target.avg.avg.value = null;
}
  var firstAndPike = new CookieShop{'Pike Place',23,65,6.3};
  var seaTac = new CookieShop {'SeaTac Airport',3,24,1.2};
  var southCenter = new CookieShop{'Southcenter Mall',11,38,3.7};
  var bellevue = new CookieShop{'Bellevue Square',20,38,2.3};
  var alki = new CookieShop{'Alki',2,16,4.6};

  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  },
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var firstAndPikeUL = document.getElementById('firstandpikeUL');
    for (var i = 0; i < hours.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
      // append it to the DOM
      firstAndPikeUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Total: 657 cookies
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    firstAndPikeUL.appendChild(liEl);
  }
};

firstAndPike.render();
SeaTac Airport.render();
Southcenter Mall.render();
Bellevue Square.render();
Alki.render();
