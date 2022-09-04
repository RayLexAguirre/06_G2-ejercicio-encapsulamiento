
const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

export default class Student {
    constructor(name, id, birthDate) {
        this.setName(name);
        this._id = id;
        this._birthDate = birthDate;
    }

    //metodos de acceso de lectura
    getName() {
        return this._name;
    }

    getBirthDate() {
        let day = this._birthDate.getDate();
        let month = MONTHS[this._birthDate.getMonth()];
        let year = this._birthDate.getFullYear().toString();
        year = year.substr(2);

        return `${day}/${month}/${year}`;
    }

    //metosos de acceso a escritura 
    setName(name) {
        this._name = this._capitalizeName(name);
    }

    setId(id) {
        this._id = id;
    }

    _capitalizeName(name){
        let words = name.split(" ");
        let newName = "";

        words.forEach((word) => {
            newName = newName + this._capitalizeWord(word) + " ";
        });

        return newName.trim();
    }

    _capitalizeWord(word){
        word = word.toLowerCase();
        let newWord = word[0].toUpperCase();
        newWord = newWord + word.substr(1);

        return newWord;
    }

}