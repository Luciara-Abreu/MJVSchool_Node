import { PostMock } from '../../config/postMocks'

class ListAllPostsService {
  public execute() {
    if (PostMock === null) {
      throw new Error('não existe produtos na lista 👻')
    }
    return PostMock
  }
}

export default new ListAllPostsService()
