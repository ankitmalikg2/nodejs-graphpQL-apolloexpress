let studentData = [
    {
        id:1,
        firstName:"ankit",
        lastName:"malik",
        password:"pass",
        collegeId:10
     },
     {
        id:2,
        firstName:"ram",
        lastName:"singh",
        password:"pass",
        collegeId:11
     },
     {
        id:3,
        firstName:"gaurav",
        lastName:"chauhan",
        password:"pass",
        collegeId:10
     }
]

let collegeData =[
    {
        id: 10,
        Name: "Chandigarh University",
        Address: "Gharuan, Mohali",
        Rating:2
    },
    {
        id: 11,
        Name: "Thapar University",
        Address: "Patiala, Punjab",
        Rating:1
    },
    {
        id: 12,
        Name: "Chitkara University",
        Address: "Chandigarh",
        Rating:3
    }

]

const studentById = (id)=>{
    let student = null
    studentData.every(function(val){
        if(val.id == id){
            student = val
            return false
        }else{
            return true
        }
    });
    return student
}

const collegeById = (id) =>{
    let college = null
    collegeData.every((val)=>{
        if(val.id == id){
            college = val
            return false
        }else{
            return true
        }
    });
    return college
}

const addStudent = (studentObject) => {
    return studentData.push(studentObject)
}


module.exports = {
    studentData,
    collegeData,
    studentById,
    collegeById,
    addStudent
}