import IStudent from '../interfaces/student.interface'
import Student from '../models/student.model'
import StudentRepository from '../repositories/students.repository'

class StudentsService {
  getAll() {
    return StudentRepository.getAll()
  }

  getByDocument(document: string) {
    const studentIndex = StudentRepository.getByDocument(document)
    if (!studentIndex) {
      throw new Error('Estudante não encontrado')
    }
    return StudentRepository.getByDocument(document)
  }

  async create(document: string, student: typeof Student) {
    const studentIndex = await StudentRepository.getByDocument(document)
    if (!studentIndex) {
      return StudentRepository.create(student)
    }
    throw new Error('Estudante já cadastrado')
  }

  async update(document: string, student: Partial<typeof Student>) {
    const studentIndex = await StudentRepository.getByDocument(document)
    if (!studentIndex) {
      throw new Error('Estudante não encontrado')
    }
    return StudentRepository.update(document, student)
  }

  remove(document: string) {
    const studentIndex = StudentRepository.getByDocument(document)
    if (!studentIndex) {
      throw new Error('Estudante não encontrado')
    }
    return StudentRepository.remove(document)
  }
}

export default new StudentsService()
