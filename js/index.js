    $(function(){
    $('#dowebok').fullpage({
        // 设置每一屏的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#000'],
        //滚动到某一屏后的回调函数
        afterLoad:function(link,index){
            console.log(index);
        }
    });
});