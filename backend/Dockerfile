# Utilisez une image de Node.js en tant que base
FROM node:14

# Créez le répertoire de travail de l'application
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel l'application s'exécute
EXPOSE 8080

# Commande par défaut pour exécuter l'application
CMD ["node", "server.js"]
