function reverse(s){
    return s.split("").reverse().join("");
}

function decode_and_show(str){
    str = reverse(str);
    alert(atob(str));
}