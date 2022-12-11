'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//creating function for html class
const rendercountry = function (data) {
  const { flags, name, region, population, languages, currencies } = data;
  const population1 = function (population) {
    const actual =
      population >= 1000000000
        ? `${(+population / 1000000000).toFixed(3)} Billion`
        : `${(+population / 1000000).toFixed(3)} Million`;
    return actual;
  };
  const html = `<article class="country">
          <img class="country__img" src=${flags[Object.keys(flags)[0]]} />
          <div class="country__data">
            <h3 class="country__name">${name.common}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>
              ${population1(population)}</p>
            <p class="country__row"><span>🗣️</span>${
              languages[Object.keys(languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              currencies[Object.keys(currencies)[0]].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//1.getting data from API using XMLHttp

/*const getcountrydata1 = function (countryname) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryname}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //console.log(data.currencies[Object.keys(data.currencies)[0]].name);
    const html = `<article class="country">
          <img class="country__img" src=${data.flags.png} />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>
              ${(+data.population / 10000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getcountrydata1('india');
getcountrydata1('usa');*/

//2.fetching an data using promise
/*const Country = function (countryname) {
  fetch(`https://restcountries.com/v3.1/name/${countryname}`)
    .then(response => response.json())
    .then(data => rendercountry(data[0]))
    .catch(err => alert(err));
};
Country('india');
Country('china');

//promise practise
/*const lotterypromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('you win');
    } else {
      reject(new Error('you lose'));
    }
  }, 2000);
});
lotterypromise.then(res => console.log(res)).catch(err => console.log(err));*/

//geolocation
/*navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);*/

/*const getposition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getposition().then(pos => console.log(pos));*/

///3.async as synchronous

const where = async function (countryname) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryname}`);
  const data2 = await res.json();
  rendercountry(data2[0]);
};
where('india');
where('usa');
where('japan');
where('pakistan');

/*try {
  let x = 20;
  const y = 30;
  y = 60;
  console.log(y);
} catch (err) {
  alert(err);
}
*/
// running promises parallely
// promise.all
/*const get3countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3countries('india', 'japan', 'china');*/
//promise.race
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('it takes too long'));
    }, sec * 1000);
  });
};
/*Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/india`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));*/

//promsie .any
Promise.any([
  Promise.reject('reject1'),
  Promise.resolve('Sucess'),
  Promise.reject('rejected'),
  Promise.resolve('suceed'),
]).then(result => console.log(result));

console.log('git practised here');
