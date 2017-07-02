FROM node:7.10.0
RUN mkdir /usr/src/adminfrontend
WORKDIR /usr/src/adminfrontend
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 8888
CMD ['ng','serve','-p','8888']