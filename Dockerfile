# Use a imagem oficial do Node.js como base
FROM node:14

# Crie o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e o arquivo package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do aplicativo
COPY . .

# Porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "node", "server.js" ]
