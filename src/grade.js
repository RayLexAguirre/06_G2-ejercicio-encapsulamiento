export default class Grade {
    constructor(subject, partials){
        this._subject = subject;
        this._partials = partials;
        this._initGrades();
    }

    setSubject(subject){
        this._subject = subject;
    }

    getPartials(partials) {
        return this._partials
    }

    _initGrades() {
        this._grades = new Array();

        for(let i = 0; i < this._partials; i++) {
            this._grades.push(-1);
        }
    }

    setGrade(partial, grade) {
        if(partial < 0 || partial > this._partials || grade < 0 || grade > 10){
            return false;
        }

        this._grades[partial-1] = grade;

        return true;
    }

    getAverage(){
        let sumGrades = 0;
        let contGrades = 0;

        this._grades.forEach((grade) => {
            if(this._isValidGrade(grade)){
                sumGrades = sumGrades + grade;
                contGrades = contGrades + 1;
            }
        })

        return sumGrades/contGrades;
    }

    _isValidGrade(grade) {
        if(grade >= 0 && grade <= 10) {
            return true;
        } else {
            return false
        }
    }

    getAsString(){
        return `${this._subject} ${this.getAverage()}`;
    }
}