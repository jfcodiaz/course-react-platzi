FROM node:16

WORKDIR /home/node/app
RUN npm install -g npm@7.13.0

RUN echo "#!/bin/sh \n\
    echo "fs.inotify.max_user_watches before update" \n\
    cat /etc/sysctl.conf\n\
    echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p \n\
    echo "updated value is" \n\
    cat /etc/sysctl.conf | grep fs.inotify \n\
    tail -f /dev/null \n\
    " >> /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR "/home/node/repository/code"

EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]