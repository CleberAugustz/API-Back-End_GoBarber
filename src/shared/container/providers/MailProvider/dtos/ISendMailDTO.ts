
import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO'

interface IMailContact {
    name: string;
    emaiL: string;
}

export default interface ISendMailDTO {
    to: IMailContact;
    from ?: IMailContact;
    subject: string;
    template: IParseMailTemplateDTO;
}
