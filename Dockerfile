# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
FROM node:latest

LABEL author="samuel"

COPY . ./app

# Node.js app lives here
WORKDIR /app

RUN npm install

ENV TOKEN_SECRET=krgjglerjtwpqierpsdinvl3ngogihownvon3goi
ENV PORT=5005
ENV ORIGIN=http://localhost:5173
ENV MONGODB_URI=mongodb+srv://rodlop06:ctDq2y75SdpuF5U3@cluster0.7s82gqz.mongodb.net/
ENV CLOUDINARY_NAME=depxadgb3
ENV CLOUDINARY_KEY=516952131158793
ENV CLOUDINARY_SECRET=WK2OgxMO5jROb8qFEJXB1YhAPgU

# Start the server by default, this can be overwritten at runtime
EXPOSE 5005
ENTRYPOINT [ "npm", "start" ]
