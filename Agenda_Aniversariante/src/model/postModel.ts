import IPostType from "../interfaces/IPost"

class PostModel {
  
  constructor({id, title, content, userID}: IPostType){
    id = id
    title = title   
    content = content
    userID = userID
  }
}

export default PostModel