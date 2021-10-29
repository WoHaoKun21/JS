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


    // 将函数挂到window下
    $.addEvent=addEvent;
    window.$=$;
})()