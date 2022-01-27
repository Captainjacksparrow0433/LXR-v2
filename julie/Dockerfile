FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Captainjacksparrow0433/LXR-v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install -g npm@8.3.2
RUN yarn install --no-audit
RUN git clone https://github.com/farhan-dqz/media

CMD ["node", "bot.js"]
