FROM mysql

EXPOSE 3306

RUN echo test

COPY ./testdump.sql /docker-entrypoint-initdb.d/
