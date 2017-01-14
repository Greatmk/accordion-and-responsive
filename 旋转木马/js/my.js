/**
 * Created by HUCC on 2016/10/19.
 */

var config = [
    {
        "width": 400,
        "top": 20,
        "left": 50,
        "opacity": 0.2,
        "zIndex": 2
    },//0
    {
        "width": 600,
        "top": 70,
        "left": 0,
        "opacity": 0.8,
        "zIndex": 3
    },//1
    {
        "width": 800,
        "top": 100,
        "left": 200,
        "opacity": 1,
        "zIndex": 4
    },//2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        "width": 400,
        "top": 20,
        "left": 750,
        "opacity": 0.2,
        "zIndex": 2
    }];
window.onload = function () {
    //1. 找对象
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    var flag = true;//现在开关是开着的

//2. 页面加载的时候，各就各位
    assign();
    function assign() {
        for (var i = 0; i < config.length; i++) {
            animate(lis[i], config[i], function () {
                //代表分配完了位置
                flag = true;
            });
        }
    }

//3. 当鼠标经过盒子的时候，让小箭头显示
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    }
//4. 当鼠标离开盒子的时候，让小箭头隐藏
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }
//5. 点击右箭头
    arrRight.onclick = function () {
        if (flag) {//进来的时候，先看下能不能进
            //5.1 修改配置单
            config.unshift(config.pop());
            //5.2 重新分配位置
            assign();
            flag = false;//我进行来，我执行动画，我把门关了，不让其他人进来
        }

    }
//6. 点击左箭头
    arrLeft.onclick = function () {
        config.push(config.shift());
        assign();
    }

//7. 节流阀：

}
