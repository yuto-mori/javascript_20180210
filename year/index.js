
let d = new Date(2019,0,1,00,00,00,0);
const START_YEAR = 1970;
//const ONE_SECOND = 1000;
//const ONE_MINUTE = 60;
//const ONE_HOUR = 60;
//const ONE_DAY = 24;
const ONE_YEAR = 31556925168;

function year(d){
    return  d  / ONE_YEAR + START_YEAR;
}

console.log(year(d));
