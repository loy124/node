'use strict';

// 캐시를 관리하기위해
//캐시매니저 혹은 db매니저를 관리하기위해 주로 class를 사용한다.
class cacheManager {
    //생성자
    //비동기 문법을 사용할 수 없다
    constructor() {
        this.config = [];
    }

    addConfig(obj = {}) {
        this.config.push(obj);
    }

    getConfig() {
        return this.config;
    }
}

module.exports = cacheManager;