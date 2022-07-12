// haannn, hmmm un nom de variable très pertinent, hmmm..
const onsenfou = "Le js ne vas pas utilisée pour cette partie.\n Ils seras simplement illustrée.";

(function(text) {
    if(typeof(text) === 'string') {
        console.clear();
        console.log(text);
    } else {
        throw 'qué ke ta fée ??';
    }
})(onsenfou);