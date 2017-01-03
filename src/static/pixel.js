(function() {
    __inline('./device.js');

    var dpr, rem, scale, width;
    var html = document.documentElement;
    var base = html.getAttribute('data-base') || 750;
    var meta = document.querySelector('meta[name="viewport"]');
    dpr = window.devicePixelRatio || 1;
    scale = 1 / dpr;

    window.EVENTTYPE = {};
    var flag=true;
    if (device.mobile()) {
        html.setAttribute('class', (html.getAttribute('class') || '' + ' mobile').trim());
        EVENTTYPE.TAP = 'tap';
    }
    if (device.desktop()) {
        flag=false;
        if(html.getAttribute('data-layout')=="rem"){
            html.setAttribute('class', (html.getAttribute('class') || '' + ' desktop').trim());
            html.style.fontSize = '100px';
        }else{
            html.setAttribute('class', (html.getAttribute('class') || '' + ' desktop').trim());
            // html.style.fontSize = '16px';
        }
        EVENTTYPE.TAP = 'click';
    }
    if (device.tablet()) {
        html.setAttribute('class', (html.getAttribute('class') || '' + ' tablet').trim());
        EVENTTYPE.TAP = 'tap';
    }



    // 设置viewport，进行缩放，达到高清效果
    meta.setAttribute('content', 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');


    width = html.getBoundingClientRect().width;

    rem = width / base * 100;

    // 设置data-dpr以及font-size属性，留作的css hack之用
    html.setAttribute('data-dpr', dpr);
    flag&&html.setAttribute('style', "font-size:" + rem + 'px');


    window.dpr = dpr;
    window.rem = rem;
})();