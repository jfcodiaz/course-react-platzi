FROM node:16

WORKDIR /home/node/app
RUN npm install -g npm@7.13.0

WORKDIR "/home/node/repository/code"

EXPOSE 3000
ENTRYPOINT ["tail", "-f", "/dev/null"]