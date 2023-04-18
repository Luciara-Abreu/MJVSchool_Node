import Handlebars from 'handlebars'
import { IParseMailTemplate } from 'src/interfaces/email.interface'
import fs from 'fs'

//Em vez de fazer um parse de uma string, agora fará um parde de um arquivo que está sendo enviado por paramentro 

class HandlebarTemplate {
  public async parse({ file, variables }: IParseMailTemplate): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    })

    const parseTemplate = Handlebars.compile(templateFileContent)
    return parseTemplate(variables)
  }
}

export default new HandlebarTemplate()

// Esse arquivo eu tenho que estudar de outras formas para aprender mais. Ficou um pouco confuso