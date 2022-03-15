
function ValidaCpf(cpf) {
Object.defineProperty(this, "cpf", {
    enumerable: true,
    configurable: false,
    get: function () {
        return cpf;
    },
    set: function (valor) {
        cpf = valor;
    }
    
});

Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    configurable: false,
    get: function () {
        return  cpf.replace(/\D+/g, ""); ;
    },   
});
Object.defineProperty(this, "cpf_sem_ultimos_digitos", {
    enumerable: true,
    configurable: false,
    get: function () {
        return  cpf.slice(0,-2); ;
    },   
});
}
ValidaCpf.prototype.validar = function () {
let digitoum = this.digito(10);
let digitodois = this.digito(11);
console.log(digitoum,digitodois);
let FormadoCpf = this.cpf_sem_ultimos_digitos.concat(digitoum,digitodois);
console.log(FormadoCpf);
return FormadoCpf === this.cpf;
}

ValidaCpf.prototype.digito = function (valor) {

let soma = Array.from(this.cpfLimpo).reduce((acumulador, item) => {

if(valor >= 2) {
acumulador +=  Number(item) * valor;
}
valor--;
return acumulador;
},0);
let encontrarDigito = 11 - (soma % 11);
return encontrarDigito > 9 ? "0" : encontrarDigito.toString();
}
var cpfclasse = new ValidaCpf("483.270.518.06");
console.log(cpfclasse.validar());