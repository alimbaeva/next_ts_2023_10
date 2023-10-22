# Используем Node.js в качестве базового образа
FROM node:16-alpine

# Установка директории приложения
WORKDIR /app

# Копируем зависимости и исходный код
COPY package.json ./package.json
COPY tsconfig.json ./tsconfig.json
COPY next.config.js ./next.config.js
COPY tailwind.config.ts ./tailwind.config.ts
COPY components/ ./components

# Устанавливаем зависимости
RUN npm install

# Сборка приложения
RUN npm run build

# Определяем команду для запуска приложения
CMD [ "npm", "start" ]