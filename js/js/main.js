//配置模块
        //1个参数 配置项
require.config({
    baseUrl:'js/',
    paths:{
        //配置各个模块
        'query':'lib/jquery-1.11.3.min',
        'aExp' : 'js/a',
        'bExp' : 'js/b',
        'cExp' : 'js/c',
    }
})
require(['aExp','bExp','cExp'],(a1,b2,c3)=>{
    a1.init();
    b2.init();
    c3.init();
})