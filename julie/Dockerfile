FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Captainjacksparrow0433/LXR-v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/farhan-dqz/media
RUN npm install -g node-bin-gen
CMD ["node", "bot.js"]
