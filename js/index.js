    $(function(){
    $('#dowebok').fullpage({
        // 设置每一屏的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#000'],
        //滚动到某一屏后的回调函数
        afterLoad:function(link,index){
            console.log(index);/*索引从1开始*/
            // 排它,把current当做一个开关,哪一屏有current,这一屏就做动画
            $('.section').removeClass('current');
            //让动画延迟100ms执行
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100)

        }
    });
});