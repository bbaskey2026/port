function Add(a,b){
    return a+b;


};




setTimeout( function() {
    const result = Add(5, 3);
    console.log("Result:", result);
}, 5000);