const str="cat dog cow"
const caps=str.split(' ').map(w=>w[0].toUpperCase()+w.substring(1).toLowerCase()).join(' ');
console.log(caps)

