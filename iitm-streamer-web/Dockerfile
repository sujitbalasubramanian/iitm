FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
# RUN chmod a+x /app/node_modules/.bin/react-scripts
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# docker build . -t <img_name>
# docker run --name <container_name> -d -p 8081:80 <img_name>
