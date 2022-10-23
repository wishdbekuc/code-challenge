var sum_to_n_a = function(n) {
    // your code here
    //iterative method
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};

var sum_to_n_b = function(n) {
    // your code here
    //recursive method
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_b(n-1);
};

var sum_to_n_c = function(n) {
    // your code here
    //math formula method
    return (n/2) * (n + 1);
};
