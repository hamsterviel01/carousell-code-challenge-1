#!/bin/bash

mvn clean install
cp target/carousell-code-challenge-0.1.0-SNAPSHOT.war docker/carousell-code-challenge-0.1.0-SNAPSHOT.war
docker build -t carousell-code-challenge ./docker/
rm docker/carousell-code-challenge-0.1.0-SNAPSHOT.war
export PATH=~/Library/Python/2.7/bin:$PATH
aws ecr get-login --region ap-southeast-1 >> docker-login.sh
chmod +x docker-login.sh
./docker-login.sh
rm docker-login.sh
docker tag carousell-code-challenge:latest 201979099574.dkr.ecr.ap-southeast-1.amazonaws.com/carousell-code-challenge:latest
docker push 201979099574.dkr.ecr.ap-southeast-1.amazonaws.com/carousell-code-challenge:latest

# chmod 0400 ~/Desktop/aws-key-sample-php-app.pem
# ssh -i ~/Desktop/aws-key-sample-php-app.pem ec2-user@ec2-54-255-180-156.ap-southeast-1.compute.amazonaws.com
# docker pull 201979099574.dkr.ecr.ap-southeast-1.amazonaws.com/carousell-code-challenge:latest
# docker rm -f ecs-carousell-code-challenge-task-definition-2-carousell-code-challenge-container-name-dad6e5f7bcebe3a11d00