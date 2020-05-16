'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const helmet = require('helmet');

class ApiServer extends http.Server {
    //동적으로 환경설정을 읽어오기
    constructor(config) {
        const app = express();
        super(app);
        this.config = config;
        //다른메소드에서 사용할수있도록 this할당
        this.app = app;
        //커넥션 관리
        this.currentConns = new Set();
        //무중단배포환경에서 사용중인 상태등을 관리하기위해
        this.busy = new WeakSet();
        //무중단으로 서버되는 과정중에 중단되어지는 과정인가
        this.stopping = false;
    }

    async start() {
        this.app.use(helmet());
        this.app.use(cookieParser());
        this.app.use(bodyParser());

        // 커스텀 미들웨어 원하는작업을 임의로 생성하기
        this.app.use((error, req, res, next) => {
            console.error(`Internal error `, error);
            if (req) {
                console.log(req);
            }
            if (res) {
                console.log(res);
            }
            next();
        });
    }
}

//서버 초기화하는 과정
const init = async(config = {}) => {
    const server = new ApiServer(config);
    return server.start();
};