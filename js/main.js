// === 图片懒加载 ===
var imgs = document.getElementsByClassName('lazyImg');

// offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getTop(e) {
    let T = e.offsetTop;
    while(e = e.offsetParent) {
        T += e.offsetTop;
   }
   return T;
}

function lazyLoad(imgs) {
    // 获取可视区域高度,乘2.3表示加载屏幕长度2.3倍范围内的图
    let H = document.documentElement.clientHeight * 2.3;
    let S = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < imgs.length; i++) {
        if (H + S > getTop(imgs[i])) {
            imgs[i].src = imgs[i].getAttribute('data-src');
        }
    }
}

window.onload = window.onscroll = function () { // onscroll()在滚动条滚动的时候触发
    lazyLoad(imgs);
}
// === end ===


// === 返回顶部按钮 ===
var btn = $('#toTopButton');

$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '500');
});
// === end ===


// === coming soon ===
function notAllowed() {
    alert("Coming soon!");
}
// === end ===