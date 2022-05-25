import { data } from './data.js';

const source = document.querySelector('#result-template').innerHTML;
const template = Handlebars.compile(source);
const $resultsArea = document.querySelector('.results-list');

$resultsArea.innerHTML = template(data);


const $sortBy = document.querySelector('.sort-by');
$sortBy.addEventListener('change', function(e) {
    if (e.target.value === "1") {
        data.results.sort((a, b) => Number(a.price) - Number(b.price));
        $resultsArea.innerHTML = template(data);
        return;
    }
    else if (e.target.value === "2") {
        data.results.sort((a, b) => Number(b.price) - Number(a.price));
        $resultsArea.innerHTML = template(data);
        return;
    }
    else if (e.target.value === "3") {
        data.results.sort((a, b) => a.quantity - b.quantity);
        $resultsArea.innerHTML = template(data);
        console.log(data.results.map(x => x.quantity));
        return;
    }

    
});

