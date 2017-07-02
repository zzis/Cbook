# Indroduction
This is memo and document for the backend application.

BackEnd is a REST web api for both AdminFrontEnd, UserFrontEnd and android management application.

# Build
BackEnd use docker to managment the build and deploy process.
## How to build
Since there is more than one image dependency, you should use docker-compose to build the image,which command is `docker-compose build`.
However, in the production environemnt, you should change `volumes` to `copy` in docker-compose.yml, which will copy the source code into the image but not map the develop dir into the image. Or reference to [article](http://blog.cloud66.com/from-development-to-production-using-docker-compose-yml-and-cloud-66-service-yml/)

# Document
## API usage
### Json formate