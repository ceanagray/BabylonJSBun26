// index.ts
var CanvasName = "renderCanvas";
var canvas = document.createElement("canvas");
canvas.id = CanvasName;
canvas.width = 800;
canvas.height = 400;
canvas.classList.add("background-canvas");
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";
document.body.appendChild(canvas);
var eng = new Engine(canvas, true, {}, true);
var startScene = createStartScene(eng);
