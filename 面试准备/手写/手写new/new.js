function _New(fun) {
    //首先会创建一个新的空对象
    var obj = {};
    //然后新的空对象的_proto_指向构造函数的prototype成员对象
    obj._proto_ = fun.prototype;
    //创建一个引用对象,并且把构造函数（fun）的this指向引用对象
    var res = fun.call(obj);
    //判断构造函数执行完的结果返回的是不是一个对象，如果是就返回这个对象；如果不是，就返回新创建的对象（obj）
    if (res && typeof (res) == 'object' || typeof (res) == 'function') {
        return res;
    } else {
        return obj;
    }
}


// 创建一个空对象,修改原型指向   this指向,  类型判断  返回对象

// //为什么要进行对象判断?
// //因为如果构造函数设置了return,如果return的是对象,则该对象就是构造函数的返回值
// //如果无设置return或者return一个非对象,则return的值会被抛弃,返回new里面创建的对象