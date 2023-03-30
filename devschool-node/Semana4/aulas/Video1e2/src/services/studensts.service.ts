import { studentModel } from '../models/student.model'
import studentsMock from '../bd.Mock/students.mock'

class StudentsService {
  getAll() {
    return studentsMock
  }

  getByDocument(document: string) {
    const student = studentsMock.find(student => student.document === document)
    return student
  }
  create(student: studentModel) {
    const newStudent = studentsMock.push(student)
    return newStudent
  }
  remove(document: string) {
    const studentIndex = studentsMock.findIndex(student => student.document === document)
    if (studentIndex === -1) {
      throw new Error('Estudante não encontrado')
    }
    studentsMock.splice(studentIndex, 1)
  }

  update(document: string, student: studentModel) {
    const studentIndex = studentsMock.findIndex(student => student.document === document)
    if (studentIndex === -1) {
      throw new Error('Estudante não encontrado')
    }
    studentsMock[studentIndex] = student
  }
}

export default new StudentsService()
