// function log(date, type, message) {
//   console.log(
//     `[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`
//   );
// }

// log(new Date(), "DEBUG", "查找轮播图的bug");
// log(new Date(), "DEBUG", "查询菜单的bug");
// log(new Date(), "DEBUG", "查询数据的bug");

// 柯里化的优化
var log2 = (date) => (type) => (message) =>
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`
  );

// 打印的时间都是当前时间——进行定制
var nowLog = log2(new Date());
nowLog("DEBUG")("查找轮播图的bug");
nowLog("FETURE")("新增了添加用户的功能");

var nowAndDebugLog = log2(new Date())("DEBUG");
nowAndDebugLog("查找轮播图的bug");
nowAndDebugLog("查找的bug");
