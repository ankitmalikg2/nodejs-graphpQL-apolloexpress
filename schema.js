const {makeExecutableSchema} = require('graphql-tools')
const db = require("./db")

const typeDefinition = `
type Query {
    greeting:String
    students:[Student]
    colleges:[College]
    studentById(id:ID!):Student
 }

 type Mutation {
     addStudent(id:ID,firstName:String,lastName:String, password:String,collegeId:ID):String
 }
 
 type Student {
    id:ID!
    firstName:String
    lastName:String
    password:String
    fullName:String
    collegeId:ID
    college: College
 }

 type College{
     id:ID!,
     Name: String
     Address:String
     Rating:Int
 }
`


const  resolverObject = {
   Query : {
      greeting: () => 'Hello GraphQL  From TutorialsPoint !!',
      students: () => db.studentData,
      colleges: ()=> db.collegeData,
      studentById: (root,args)=>{
        return db.studentById(args.id)
      }
   },
   Student : {
    fullName : (root,args) =>{
        return root.firstName+ " "+root.lastName
    },
    college : (root)=>{
        console.log(root.collegeId)

        return db.collegeById(root.collegeId)
    }
   },
   Mutation : {
       addStudent : (root, args) => {
           console.log(args)
            return db.addStudent({
                id: args.id,
                firstName: args.firstName,
                lastName: args.lastName,
                password: args.password,
                collegeId: args.collegeId
            });

       }
   }

}

const schema = makeExecutableSchema({typeDefs:typeDefinition, resolvers:resolverObject})


module.exports = schema