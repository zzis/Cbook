FROM node:7.10.0
RUN mkdir /usr/src/userfrontend
WORKDIR /usr/src/userfrontend
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 8886
CMD ['ng','serve','-p','8886']