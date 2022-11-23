export default interface IDadosEmpresa {
    nome: string, 
    resumo: {title: string, description: string},
    contato: {title: string, email: string, cellphone: string, addres: string},
    ["redes-sociais"]: {title: string, socialMediaOne: string, socialMediaTwo: string, socialMediaThree: string},
    quotesBanner: {frase: string, autor: string},
    quotesFooter: {frase: string, autor: string},
    // navegacaoLinks: [titulo: string, direcionamento: string],
    navegacaoLinks: [{titulo: string, direcionamento: string}],
    especificacoes: [tipo: string]
}