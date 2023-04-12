import IStudent from '../interfaces/student.interface'
import Student from '../models/student.model'

class StudentRepository {
  getAll() {
    return Student.find()
  }

  getByDocument(document: string) {
    return Student.findOne({ document: document })
  }
  getByEmail(email: string) {
    return Student.findOne({ email })
  }

  create(student: IStudent) {
    return Student.create(student)
  }

  update(document: string, student: Partial<IStudent>) {
    return Student.updateOne({ document: document }, { $set: student })
  }
  remove(document: string) {
    return Student.deleteOne({ document: document })
  }
}

export default new StudentRepository()
