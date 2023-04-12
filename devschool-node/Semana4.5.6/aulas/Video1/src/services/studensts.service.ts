import IStudent from '../interfaces/student.interface'
import StudentRepository from '../repositories/students.repository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import studentsRepository from '../repositories/students.repository'

dotenv.config()
const secretJWT = process.env.JWT_SECRET_KEY || ''

class StudentsService {
  getAll() {
    return StudentRepository.getAll()
  }

  async getByDocument(document: string) {
    const studentIndex = await StudentRepository.getByDocument(document)
    if (!studentIndex) {
      throw new Error('Estudante não encontrado')
    }
    return StudentRepository.getByDocument(document)
  }

  async create(document: string, student: IStudent) {
    if (student.password) {
      student.password = await bcrypt.hash(student.password, 10)
    }
    const studentIndex = await StudentRepository.getByDocument(document)
    if (!studentIndex) {
      return StudentRepository.create(student)
    }
    throw new Error('Estudante já cadastrado')
  }

  async update(document: string, email: string, student: Partial<IStudent>) {
    const emailExist = await studentsRepository.getByEmail(email)
    const studentIndex = await StudentRepository.getByDocument(document)
    if (!studentIndex) {
      throw new Error('Estudante não encontrado')
    }
    if (emailExist && emailExist?.document != studentIndex.document) {
      throw new Error('Este email já está em uso!!')
    }
    if (emailExist) {
      throw new Error('Email já cadastrado no banco para esse usuário!!')
    }
    return await StudentRepository.update(document, student)
  }

  remove(document: string) {
    const studentIndex = StudentRepository.getByDocument(document)
    if (!studentIndex) {
      throw new Error('Estudante não encontrado')
    }
    return StudentRepository.remove(document)
  }

  async authorization(document: string, password: string) {
    const student = await StudentRepository.getByDocument(document)
    if (!student) {
      throw new Error('Estudante não encontrado')
    }
    const result = await bcrypt.compare(password, student.password)
    if (result) {
      return jwt.sign({ document: student.document, id: student.id }, secretJWT, {
        expiresIn: '1d',
      })
    }
    throw new Error('Falha na autenticação!')
  }
}

export default new StudentsService()
