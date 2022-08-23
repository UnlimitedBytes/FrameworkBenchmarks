FROM jarredsumner/bun:edge

ARG TFB_TEST_NAME

ENV TFB_TEST_NAME=$TFB_TEST_NAME

WORKDIR /app

COPY ./ ./

RUN bun install

EXPOSE 8080

CMD ["bun", "src/server.js"]
