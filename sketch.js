const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(1200, 800, "Flappy Bird");
    r.SetTargetFPS(60);

}

function update() {
    // change the state
}

function draw() {
    const skyColor = { r: 135, g: 206, b: 235, a: 255 };
    const grassColor = { r: 52, g: 140, b: 49, a: 255 };

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(0, 0, 1200, 700, skyColor);//sky
    r.DrawRectangle(0, 700, 1200, 100, grassColor)//ground

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};