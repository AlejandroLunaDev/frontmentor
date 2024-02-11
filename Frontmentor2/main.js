const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const cartBody = document.querySelectorAll('.body-1');

const arrNombre = ['Work','Play','Study','Exercise','Social','Self-Care'];

document.querySelectorAll('span').forEach((s, index) => {
    s.textContent = arrNombre[index];
});

const info = async () => {
    try {
        const res = await fetch('data.json');  
        const data = await res.json();
        return data;  
    } catch(error) {
        console.error('No se obtuvo datos del JSON:', error);
        return null;
    }
};

const getInfo = async () => {
    const data = await info();

        setDailyData(data);


    daily.addEventListener('click', () => {
       cartBody.forEach((h, index) => {
            const h3 = h.querySelector('h3');
            const small = h.querySelector('small');
            const current = data[index]?.timeframes?.daily?.current;
            const previous = data[index]?.timeframes?.daily?.previous;
            h3.textContent = current ? `${current}hrs` : '';
            small.textContent = previous ? `Last Daily ${previous}hrs` : '';
       });
    });

    weekly.addEventListener('click', () => {
        cartBody.forEach((h, index) => {
            const h3 = h.querySelector('h3');
            const small = h.querySelector('small');
            const current = data[index]?.timeframes?.weekly?.current;
            const previous = data[index]?.timeframes?.weekly?.previous;
            h3.textContent = current ? `${current}hrs` : '';
            small.textContent = previous ? `Last Weekly ${previous}hrs` : ''; 
        });
    });
    
    monthly.addEventListener('click', () => {
        cartBody.forEach((h, index) => {
            const h3 = h.querySelector('h3');
            const small = h.querySelector('small');
            const current = data[index]?.timeframes?.monthly?.current;
            const previous = data[index]?.timeframes?.monthly?.previous;
            h3.textContent = current ? `${current}hrs` : '';
            small.textContent = previous ? `Last Monthly ${previous}hrs` : ''; 
        });
    });
    

    function setDailyData(data) {
        cartBody.forEach((h, index) => {
            const h3 = h.querySelector('h3');
            const small = h.querySelector('small');
            const current = data[index]?.timeframes?.daily?.current;
            const previous = data[index]?.timeframes?.daily?.previous;
            h3.textContent = current ? `${current}hrs` : '';
            small.textContent = previous ? `Last Daily ${previous}hrs` : '';
        });
    }


};

document.addEventListener('DOMContentLoaded', () => {
    const dailyButton = document.getElementById('daily');
    dailyButton.focus();
});


getInfo();
