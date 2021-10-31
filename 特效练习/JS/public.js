// 对ajax、事件监听器、获取DOM进行封装
(function(){
    var $={};// 创建一个对象用来存放封装好的函数
    // 事件监听器封装
    function addEvent(elem,eventType,fun){
        // 进行监控
        try {
            if(elem && typeof elem == "object"){
                // 绑定事件监听
                if(window.addEventListener){
                    elem.addEventListener(eventType,fun);
                }else{
                    elem.attachEvent("on"+eventType,fun);
                }
            }else{
                throw new Error("传入的元素为空，或者不是对象");
            }
        } catch (e) {
            alert(e.message);
        }
    }
    // 事件监听器封装结束

    // ajax请求过程事件封装
    // 传入的值：
    param = {
        url: "发送的地址",
        type: "GET/POST",
        data: "发送的数据",
        contentType: "发送的数据类型编码",
        dataType:"返回的数据类型",
        success:"数据发送成功后的回调函数",
        error:"数据错误后的回调函数",
        completed:"数据接收完毕后的回调函数"
    }
    function ajax(param){
        // 检测传进来的参数是否为空、是否是对象
        if(param && typeof param=="object"){
            // 一、创建ajax对象
            var xmlHttp=new XMLHttpRequest();// 创建ajax对象
            // 二、设置发送数据：和窜入得对象里面已经有要发送的数据了，所以不需要再重新创建
            // 三、设置请求数据的方法
            //  3.1 GET方法或POST方法都可用
            xmlHttp.open(param.type,param.url);// 发送数据的方法已及目标地址
            //  3.2 GET方法带数据
            if(param.type=="GET" && param.data){// 如果为GET方法并且有数据
                xmlHttp.open(param.type,param.url+"?"+param.data);
            }
            // 四、设置发送数据的编码格式
            if(param.type=="GET" && param.data){// 地址?变量名=值&变量名=值
                // 设置编码格式为：urlencoded格式
                xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
            }
            //  4.1POST方法：两种情况 1.urlencoded；2.json
            // 使用直到型循环
            switch(param.contentType){
                case "urlencoded":// 当用户传入的值为ulrencoded时
                    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
                    break;
                case "json":// 当用户传入的值为JSON时：执行下面的语句
                    xmlHttp.setRequestHeader("content-type","application/json");
                    break;
            }
            // 五、监控ajax的请求过程
            xmlHttp.onreadystatechange=function(){
                if(xmlHttp.readyState==4 && xmlHttp.status==200){// 数据发送成功
                    // 对传回来的数据类型进行检测，并进行操作
                    var data=null;// 不用每一次检测都创建
                    switch(param.dataType){
                        case "html":
                            data = xmlHttp.responseText;
                            break;
                        case "json":
                            try {
                                data=JSON.parse(xmlHttp.responseText);
                            } catch (e) {
                                alert("json格式不正确");
                            }
                            break;
                        case "xml":
                            data=xmlHttp.responseXML;
                            break;
                        default:
                            data=xmlHttp.responseText;
                    }
                    // 将获得到，并可能进行转换后的数据传送到成功后的回调函数里面
                    // 调用成功的回调函数
                    param.success(data);
                }
            }
            // 开始发送数据
            if(param.type=="POST"&&param.data){
                xmlHttp.send(param.data);
            }else{
                xmlHttp.send();// 包括了GET带/不带参数、POST不带参数
            }
        }else{
            throw new Error("传进来的参数不正确");
        }
    }
    // 获得DOM对象封装
    function getId(id){
        return document.getElementById(id);
    }

    // 将函数挂到window下
    $.addEvent=addEvent;
    $.ajax=ajax;
    $.getId=getId;
    window.$=$;
})()