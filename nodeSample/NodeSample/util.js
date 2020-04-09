//외부에서 들어온 conn과 내부를 일치화
module.exports.setConn = function(conn) {
    this.conn = conn;
};

module.exports.getConn = function() {
    return this.conn;
};