// criar um arquivo index.js nesta pasta e substituir 'secret' do process.env.SECRET e a URL

module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "secret",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.com.br" : "http://localhost:3000",
    loja:  process.env.NODE_ENV === "production" ? "https://loja-teste.com.br" : "http://localhost:8000",
}