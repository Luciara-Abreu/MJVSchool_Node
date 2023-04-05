import IStudent from '../interfaces/student.interface'
import Student from '../models/student.model'

class StudentRepository {
  getAll() {
    return Student.find()
  }

  getByDocument(document: string) {
    return Student.findOne({ document: document })
  }

  create(student: typeof Student){
    return Student.create(student)
  }

 /* create({name, email, document, password, age, fone}: IStudent) {
    const newStudent = Student.create({name, email, document, password, age, fone})
   return newStudent
  }*/

  update(document: string, student: Partial<typeof Student>) {
    return Student.updateOne({ document: document }, { $set: student })
  }
  remove(document: string) {
    return Student.deleteOne({ document: document })
  }
}

export default new StudentRepository()
