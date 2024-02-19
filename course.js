export default class Course {
    #nameOfCourse
    #dataOfCourse
    #classOfIcon
    getName(){
        return this.#nameOfCourse
    }
    setName(name){
        this.#nameOfCourse = name
    }
    getData(){
        return this.#dataOfCourse
    } 
    setData(data){
        this.#dataOfCourse = data
    }
    getIcon(){
        return this.#classOfIcon
    } 
    setIcon(classIcon){
        this.#classOfIcon = classIcon
    }
}