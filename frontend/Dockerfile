FROM ubuntu:20.04 as global-deps-stage

WORKDIR /app

RUN apt-get update && apt upgrade -y && apt-get install -y gnupg2 && \
  apt-key update && \
  apt update \
  && apt install -y wget gnupg nano ffmpeg \
  && apt install -y ffmpeg fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
  libxss1 apt-transport-https ca-certificates software-properties-common curl libgbm-dev wget unzip fontconfig \
  locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 \
  libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
  libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 \
  libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release \
  xdg-utils build-essential python2-minimal libxshmfence-dev


ENV NODE_ENV=dev

RUN adduser deploy
RUN usermod -aG sudo deploy

RUN chown -R deploy:root .

RUN apt install sudo

RUN su deploy

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN sudo apt-get install -y git nodejs

COPY . .

RUN npm install

RUN npm install http-graceful-shutdown

RUN npm install pm2@latest -g

ENV NODE_ENV=production

# ENTRYPOINT ["npm", "run", "start"]
