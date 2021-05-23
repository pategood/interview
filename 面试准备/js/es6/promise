class Promise {
  constructor(executor) {
    // 添加属性
    this.PromiseState ='pending';
    this.PromiseResult=null;
    this.callbacks=[];
    const self =this;

    function resolve(data) {
      // 状态只能修改一次
      if (self.PromiseState !== 'pending') return;
      self.PromiseState= 'fulfilled';//resolved
      self.PromiseResult =data;
      // 调用成功的回调函数
      setTimeout(()=>{
        self.callbacks.forEach(item =>{
          item.onResolved(data);
        })
      })
    }

    // reject 
    function reject(data) {
      //状态只能修改一次
      if(self.PromiseState !== 'pending') return;
      //修改对象状态
      self.PromiseState= 'rejected';

      self.PromiseResult =data;
      // 执行回调
      setTimeout (()=>{
        self.callbacks.foreach(item=> {
          item.onRejected(data);
        })
      })
    }

    try {
      //同步调用[执行器函数]
      executor(resolve,reject)
    } catch (e){
      //修改promise对象状态为失败
      reject(e);
    }
  }

  //then方法
  then(onResolved,onRejected) {
    const self =this;
    //判断回调函数参数
    if (typeof onRejected !== 'function') {
      onRejected =reason => {
        throw reason
      }
    }
    if (typeof onResolved !== 'function'){
      onResolved = value =>value;
    }
    return new Promise((resolve,reject)=>{
      //封装函数
      function callback(type) {
        try {
          let result =type(self.PromiseResult);
          if(result instanceof Promise) {
            result.then(v=>{
              resolve(v)
            },r=>{
              reject(r)
            })
          }else {
            resolve(result)
          }
        } catch(e){
          reject(e)
        }
      }
    })
  }
  
}