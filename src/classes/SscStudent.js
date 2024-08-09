class SscStudent{

    constructor(name,gender){
        console.log(name,gender);
        console.log("Inside SscStudent Constuctor");
        this.name = name;
        this.gender = gender;
        this.age = 0;
    }

    calculateResult =()=>{
       console.log("Calculate Result");

    };
}

export default SscStudent;