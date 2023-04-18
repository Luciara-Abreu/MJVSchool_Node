import Handlebars from 'handlebars'
import { IParseMailTemplate } from 'src/interfaces/email.interface'
import fs from 'fs'
/**
 * https://handlebarsjs.com/guide/#installation
 * Handlebars é uma linguagem de programação utilizada para trabalhar com templates. 
 * Ele usa um modelo e um objeto de entrada para gerar HTML ou outros formatos de texto. 
 * Os modelos Handlebars se parecem com texto normal com expressões Handlebars incorporadas.
 */


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

