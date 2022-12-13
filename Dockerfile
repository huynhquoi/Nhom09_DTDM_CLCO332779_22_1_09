FROM ubuntu:latest

# install enviroment dependencies G++ python3 nodejs npm 
RUN apt update && \
    apt install curl wget -y &&\
    curl -sL https://deb.nodesource.com/setup_14.x &&\
    apt -y install gcc g++ python3 python3-pip nodejs npm && \
    pip3 install numpy 

# install enviroment dependencies java jdk-17
RUN wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.deb &&\
    apt install ./jdk-17_linux-x64_bin.deb -y &&\ 
    update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk-17/bin/java" 1 &&\
    update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk-17/bin/javac" 1 &&\
    apt remove wget curl -y && \
    rm ./jdk-17_linux-x64_bin.deb 
# install enviroment dependencies c#
RUN apt update &&\
    apt install -y dirmngr gnupg apt-transport-https ca-certificates software-properties-common &&\
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF &&\
    apt-add-repository 'deb https://download.mono-project.com/repo/ubuntu stable-focal main' &&\
    apt install -y mono-complete


RUN apt autoremove -y &&\
    rm -rf /var/lib/apt/lists/*


WORKDIR /usr/src/app




COPY package*.json ./
RUN npm install


COPY . .
EXPOSE 8080

CMD ["node index","npm", "run"]
