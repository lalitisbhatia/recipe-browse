FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
# Copy app files
COPY . ./
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
# RUN npm run build

EXPOSE 3000
CMD [ "npm", "start"]

# Build the Docker image for the current folder and tag it with `recipe-browse`
#### docker build . -t recipe-browse

# run the docker image
### docker run -p 3000:3000 -d recipe-browse
# Check the image was created
#docker images | grep recipe-brwse