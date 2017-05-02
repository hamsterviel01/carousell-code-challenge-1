FROM ubuntu:14.04
MAINTAINER NGUYEN TUAN ANH
ENV APP_VERSION 0.1.0-SNAPSHOT

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y  software-properties-common && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer && \
    apt-get clean

WORKDIR /usr/local/carousell-code-challenge/
COPY carousell-code-challenge-${APP_VERSION}.war /usr/local/carousell-code-challenge/carousell-code-challenge-${APP_VERSION}.war
COPY run.sh /usr/local/carousell-code-challenge/

VOLUME /tmp
EXPOSE 8080 8080

CMD ./run.sh $APP_VERSION