##Aquí van los comandos de docker para implementar la relación con el proyecto 
##antes es necesario tener la imagen creada? 

# Establecer la imagen base
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos al directorio de trabajo
COPY . .

# Compilar la aplicación Angular en modo de producción
RUN npm run build

# Configurar el servidor web para servir la aplicación
FROM nginx:alpine
COPY --from=0 /app/dist/app-formulario /usr/share/nginx/html
