export default interface IDadosEmpresa {
    nome: string, 
    logoEmpresa: string,
    resumo: {title: string, description: string},
    contato: {title: string, email: string, cellphone: string, addres: string},
    redesSociais: {
        title: string,
        plataforma: [
            {
                nome: string,
                logo: string,
                direcionamento: string
            }
        ]
    },
    quotesBanner: {frase: string, autor: string},
    quotesFooter: {frase: string, autor: string},
    // navegacaoLinks: [titulo: string, direcionamento: string],
    navegacaoLinks: [{titulo: string, direcionamento: string}],
    especificacoes: [tipo: string]
}