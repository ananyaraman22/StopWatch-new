FROM ubuntu 
RUN apt-get update 
RUN apt install -y apache2
ENTRYPOINT ["service","apache2","start"]
