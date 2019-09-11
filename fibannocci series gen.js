// Initial step is to declare a varialble
var output = [];
function fibonacciGenerator (n) {
    for(var i=0; i<n; i++){
// First two entities can't be calculated, hence they can be assigned and also their value equals to their corresponding position no.
        if (i === 0 || i == 1){
            output[i] = i;
        }
// Fabonocci logic can now be applied to the rest of the entities, if applicable
        else{
            output[i] = output[i-2] + output[i-1];
        }
    }
    return output;
}