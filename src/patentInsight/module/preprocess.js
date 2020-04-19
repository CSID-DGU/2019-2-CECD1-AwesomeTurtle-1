var fs = require('fs');

module.exports = {
    readToCsv: async (path) => {

        // 동기방식의 파일읽기. 파일을 읽은 후 data 변수에 저장
        var data = fs.readFileSync(path, 'utf-8');
        data = data.replace(/,/g,"");

        var num = 0;
        var csvdata = "";

        //<CLAIM ORDER='0'>
        var sidx = data.indexOf("<CLAIM ORDER=")
        var eidx = data.indexOf("</CLAIM>", sidx)

        while ( true ){
            sidx = data.indexOf("<CLAIM ORDER=", eidx)
            eidx = data.indexOf("</CLAIM>", sidx)

            if(sidx < 0 ) break;

            num += 1;
            csvdata += `2,${data.substr(sidx + 2*num.toString().length + 19, eidx - sidx - 2*num.toString().length - 20)}\r\n`;
        }

        var csvpath = path+".csv";
        fs.writeFileSync(csvpath, csvdata, 'utf8');
        return csvpath
    },

    getDependent: async (str, csvpath) => {
        var data = fs.readFileSync(csvpath, 'utf-8').toString().split("\n");
        var result = [];

        for( var i = 0; i < str.length; i++){

            if(str[i] === "1"){
                var idx = data[i].indexOf("claim ")
                result.push(parseInt(data[i].substr(idx + 6, data[i].indexOf(" ",idx + 6) - idx - 6), 10));
            } else {
                result.push(0)
            }
        }
        return result;
    }
}
