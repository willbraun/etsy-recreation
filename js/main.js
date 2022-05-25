import { data } from './data.js';

const source = document.querySelector('#result-template').innerHTML;
const template = Handlebars.compile(source);
const $resultsArea = document.querySelector('.results-list');

$resultsArea.innerHTML = template(data);


const $sortBy = document.querySelector('.sort-by');
$sortBy.addEventListener('change', function(e) {
    if (e.target.value === "1") {
        data.results.sort((a, b) => Number(a.price) < Number(b.price));
        
        console.log(data.results.map(x => x.price));
        $resultsArea.innerHTML = template(data);
    }
    
});