// === 图片懒加载 ===
var imgs = document.querySelectorAll('img');

// offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getTop(e) {
    let T = e.offsetTop;
    while(e = e.offsetParent) {
        T += e.offsetTop;
   }
   return T;
}

function lazyLoad(imgs) {
    let H = document.documentElement.clientHeight;   // 获取可视区域高度
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