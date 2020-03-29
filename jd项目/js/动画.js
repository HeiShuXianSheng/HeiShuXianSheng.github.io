function move(obj, instance,callback) {
            clearInterval(obj.name)
            obj.name = setInterval(function(){
                    obj.style.left = obj.offsetLeft;
                    var step = (instance - obj.offsetLeft)/ 50;
                    step = step > 0 ?Math.ceil(step):Math.floor(step); //取整，避免小数
                    obj.style.left = obj.offsetLeft + step + 'px';
                    if(instance == obj.offsetLeft) {
                        clearInterval(obj.name);
                        /* if(callback){//判断存在callback回调函数便执行
                            callback();
                        } */
                        callback && callback();//等价于if判断
                    } 
             
            }, 1)
}
function move2(obj, instance,callback) {
            
            obj.style.left = instance + 'px';
            if(callback){//判断存在callback回调函数便执行
                callback();
            }

}
function op(obj) {
    clearInterval(obj.name2);
    var opacity =0.3;
     obj.name2 = setInterval(function() {
         opacity = opacity + 0.01;
         obj.style.opacity = opacity;
         if( opacity >= 1) {
            clearInterval(obj.name2);
            
        }
    },1)
}