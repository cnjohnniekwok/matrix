var matrix = document.getElementById("matrix");
var matrixCtx = matrix.getContext("2d");

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
matrix.width = w;
matrix.height = h;
var fontSize = 15;
var cols = Math.floor(w / fontSize);
var drops = [];
var str = "01";
for (var i = 0; i < cols; i++) {
    drops.push(0);
}

function drawStr() {
    matrixCtx.fillStyle = "#0000000d"
    matrixCtx.fillRect(0, 0, w, h);

    matrixCtx.font = "600 " + fontSize;
    matrixCtx.fillStyle = "#00ff00";

    for (var i = 0; i < cols; i++) {
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        matrixCtx.fillText(str[Math.floor(Math.random() * str.length)], x, y);
        if (y > h && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }

}
setInterval(drawStr, 30);
