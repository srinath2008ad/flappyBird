const r = require("raylib");
const b = require("./bird.js");

function running() {
    return !r.WindowShouldClose();
}

function setup() {

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(1200, 800, "Flappy Bird");
    r.SetTargetFPS(120);

    const bird = {
        x: 100,
        y: 350,
        width: 40,
        height: 30,
        color: r.YELLOW,
        initialFlyVelocity: { x: 0, y: 0.3 * 60 * 60 },
        flyVelocity: { x: 0, y: 0 },
        isFlying: false
    }

    const sky = {
        x: 0,
        y: 0,
        width: 1200,
        height: 700,
        color: { r: 135, g: 206, b: 235, a: 255 }
    }

    const ground = {
        x: 0,
        y: 700,
        width: 1200,
        height: 100,
        color: { r: 52, g: 140, b: 49, a: 255 }
    }

    const gravity = { x: 0, y: 0.2 * 60 * 60 };

    return { sky, ground, bird, gravity };
}

function isKeyPressed() {
    return r.IsKeyPressed(r.KEY_SPACE);
}

function update({ bird, gravity, ground }) {

    const dt = r.GetFrameTime();

    if (isKeyPressed()) {
        b.startFlying(bird);
    }

    b.flyBird(bird, gravity, dt);
    b.pullBird(bird, gravity, dt, ground);

}

function draw({ bird, sky, ground }) {

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangleRec(sky, sky.color);
    r.DrawRectangleRec(ground, ground.color);
    r.DrawRectangleRec(bird, bird.color);

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