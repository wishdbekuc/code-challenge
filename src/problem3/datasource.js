// your code here:
class Datasource {
    
    constructor() {
    }

    async getPrices() {
        let prices = [];        
        await fetch('https://static.ngnrs.io/test/prices') //fetch data from data endpoint
        .then((response) => response.json()) //convert data into object
        .then((data) => { 
            //for each instance in data.data.prices, add the methods, .mid() and .quote() to the instance
            //add the instance to an array
            data.data.prices.forEach((row) => { 
                row.mid = () => ((row.buy + row.sell) / 2) / 100;
                row.quote = () => row.pair.slice(row.pair.length - 3);
                prices.push(row);
                }   
            )
        })
        .catch((error) => console.log(error));

        //return an new promise. resolve returns the price array, reject returns an error message
        return new Promise((resolve, reject) => {
            resolve(prices);
            reject('error!');
        })

    }
        
}
