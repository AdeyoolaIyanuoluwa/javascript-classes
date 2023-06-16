// var chicken = {eyes:2,legs:2,name:"Peter"}
// console.log(chicken.legs)
// var person = {
//     height:"6ft",complexion:"chocolate",firstName:"Oluwaseyi",lastName:"Zhey",middleName:"Raymond",
//     noOfDimples:1,
//     age:709,
//     jump:function(){
//         console.log("I am jumping in the Lord.")
//     }
// }
// console.log("My name is "+ person.lastName + " " + person.firstName)
// person.jump()

//1 - store the details into an object and console it for me.
// var chicken = {eyes:2,legs:2,name:"Peter"}
// chicken.age = 304
// console.log(chicken)

var allStudents = []
function addStudent(){
    // var firstName = firstname.value
    // var lastName = lastname.value
    // var email = useremail.value
    // var password = userpassword.value

    // var newStudent = {}
    // newStudent.firstName = firstName
    // newStudent.lastName = lastName
    // newStudent.email = email
    // newStudent.password = password
    
    var newStudent = {
        firstName : firstname.value,
        lastName: lastname.value,
        email:useremail.value,
        password:userpassword.value
    }   
    allStudents.push(newStudent)
    console.log(allStudents[0])
}

