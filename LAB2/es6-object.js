let person = {
    name : "Golf",
    age: 21,
    eyeColor:"black",
    profile: function(){
        return `${this.name} : ${this.age} years`;
    },
};

person.age = 23;
const x = person;
x.age = 21;

console.log(person);
console.log(x.profile());

const numbers = [10, 20, 30, 40,];
const comNumA = [numbers,numbers];
const comNumS = [...numbers, ...numbers];
console.log(comNumS);

const sum = (...numS) =>{
    total = 0;
    for(let num of numS) total += num;
    return total;
};
console.log(sum(...comNumS));

//destucturring
const [a,b] = [10, 20, 30];
console.log(a);

const {name:Rname,age} = person;
console.log(Rname);