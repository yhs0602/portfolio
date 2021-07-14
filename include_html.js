window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var w = el.dataset.predW ?? "200px";
            var h = el.dataset.predH ?? "100px";
            var div = document.createElement("div");
            div.style.width = w;
            div.style.height = h;
            div.style.background = "#CCCCCC";
            el.parentNode.replaceChild(div, el);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var div2 = document.createElement('div');
                    div2.innerHTML = this.responseText;
                    div.parentNode.replaceChild(div2.firstChild, div);
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

