window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var w = el.dataset.predW ?? 200;
            var h = el.dataset.predH ?? 100;
            el.outerHTML = "<div style = \"width:" + w + "px; height: "+ h; "px; background: #CCCCCC; \"></div>";
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                    var headerTitle = el.dataset.headerTitle;
                    if (headerTitle) {
                        var titleDiv = document.querySelector('.header > .name');
                        titleDiv.innerHTML = headerTitle;
                    }
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

