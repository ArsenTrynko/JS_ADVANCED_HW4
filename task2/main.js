class MyString{
    constructor(str){
        this.str = str
    }
    reverse(str){
      return str.split("").reverse().join("");
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }
}


const str = new MyString();

console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));

