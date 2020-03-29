//轮播图
window.addEventListener('load',function() {
        var re = document.querySelector('.re');
        var btn_l = document.querySelector('.fs-2-1l');//左按钮
        var btn_r = document.querySelector('.fs-2-1r');//右按钮
        var lbt_ul = document.querySelector('.lbt');//lbt ul
        var ol = document.querySelector('.fs-2-1b').querySelector('ul');//  小圆圈ul 
        //鼠标经过显示左右按钮
        
        function forer(arg) {//ol 排他函数
            for( var i =0;i < arg;i++) {
                ol.children[i].className= '';
            }
        }
        re.addEventListener('mouseenter', function() {
            btn_l.style.display = 'block';
            btn_r.style.display = 'block';
            clearInterval(timer);
            timer = null;
        })
        //鼠标经过隐藏左右按钮
        re.addEventListener('mouseleave', function() {
            btn_l.style.display = 'none';
            btn_r.style.display = 'none';
            timer = setInterval(function(){//定时器实现自动点击。
                btn_r.click();//时间一到便是自动点击一次
                console.log('time');
                
            } ,2000)
        })
        var index = 0;
        var num = index;
        var circle = 0;
        var flag = 1;//节流阀，先赋值为true，执行一次后改为false，然后等回调函数完成在改为true
        for(let i =0;i < lbt_ul.children.length;i++) {//根据轮播图个数动态添加li的个数
            var li_ol = document.createElement('li');
            li_ol.setAttribute('data-index',i);
            ol.appendChild(li_ol);
            li_ol.addEventListener('click',function() {//添加绑定点击变色事件
               if(flag) {
                   flag= 0;
                    forer(ol.children.length);
                    this.className= 'current';//给当前li添加红色
                    op(lbt_ul)
                    move2(lbt_ul,-590 * this.getAttribute('data-index'),function(){
                        flag = 1;
                    })//点击li发生滚动
                    index = this.getAttribute('data-index') ;
                    console.log('indexnei' + this.getAttribute('data-index'));
                    num =index;
                    circle = index
                }
                
            })
            ol.children[0].className= 'current';//给第一个li添加红色
        }
        
        
        console.log('num' +num);
        console.log('index'+ index);

        
        var li_clone = lbt_ul.children[0].cloneNode(true);//克隆第一个轮播图li
        lbt_ul.appendChild(li_clone);//添加到父元素
        
        btn_r.addEventListener('click',function() {//右按钮滚动
            if(flag){
                flag = 0;
                num++;
                    if(num == ol.children.length + 1){//重复轮播
                        lbt_ul.style.left = 0;
                        num =1;
                    }
                op(lbt_ul)

                move2(lbt_ul,-num*590,function(){
                    flag = 1;
                })
                
    
                forer(ol.children.length);//li排他
                circle++;
                if(circle == ol.children.length){
                    circle =0;
                }
                ol.children[circle].className= 'current';//给当前li添加红色
            }
        })

            var timer;
            var timer2;
        btn_l.addEventListener('click',function() {//左按钮滚动
            
                    if(num == 0){//重复轮播
                        num =ol.children.length;
                        lbt_ul.style.left = - num * 590 + 'px';
                        
                    }
                op(lbt_ul)
                move2(lbt_ul,-(num - 1)*590)
                num--;
                console.log(num +'nei');//0
                
                
    
                forer(ol.children.length);//li排他
                circle = num;
                if(circle == ol.children.length){
                    circle =0;
                }
                ol.children[circle].className= 'current';//给当前li添加红色
            })

            var timer = setInterval(function(){//定时器实现自动点击。
                btn_r.click();//时间一到便是自动点击一次
                console.log('外time');
                
            } ,2000)

            








})