
interface IMailContact {
name: string
email:string
}

export interface ISendMail{
  to: IMailContact
  from?: IMailContact
  subject: string
  templateData: IParseMailTemplate
}

interface ITemplateVariable{
  [key: string]: string | number | undefined
}
export interface IParseMailTemplate{
  file: string
  variables: string | ITemplateVariable
}
