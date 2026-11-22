const r = require("raylib");
const b = require("./bird.js");
const o = require("./obstacle.js");

function running() {
    return !r.WindowShouldClose();
}

function setup() {

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(1200, 800, "Flappy Bird");
    r.SetTargetFPS(220);

    const bird = {
        x: 100,
        y: 350,
        width: 40,
        height: 30,
        color: { r: 213, g: 182, b: 10, a: 255 },
        initialFlyVelocity: { x: 0, y: 0.4 * 60 * 60 },
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

    const obstaclesGap = 300;
    const obstacles = [
        {
            x: 800,
            y: 0,
            width: 100,
            height: 300,
            gap: 200,
            color: r.RED
        }
    ]

    obstacles.push(o.getRandomObstacle(obstacles.at(-1), obstaclesGap))
    obstacles.push(o.getRandomObstacle(obstacles.at(-1), obstaclesGap))
    obstacles.push(o.getRandomObstacle(obstacles.at(-1), obstaclesGap))
    obstacles.push(o.getRandomObstacle(obstacles.at(-1), obstaclesGap))

    const obstacleVelocity = 0.05 * 60 * 60;
    const gravity = { x: 0, y: 0.3 * 60 * 60 };

    return { sky, ground, bird, gravity, obstacles, obstacleVelocity };
}

function isKeyPressed() {
    return r.IsKeyPressed(r.KEY_SPACE);
}

function update({ bird, gravity, ground, obstacles, obstacleVelocity }) {

    const dt = r.GetFrameTime();

    if (isKeyPressed()) {
        b.startFlying(bird);
    }

    b.flyBird(bird, gravity, dt);
    b.pullBird(bird, gravity, dt, ground);

    o.moveObstacles(obstacles, obstacleVelocity, dt);
}

function draw({ bird, sky, ground, obstacles }) {

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangleGradientV(sky.x, sky.y, sky.width, sky.height, sky.color, r.WHITE);
    r.DrawRectangleRec(ground, ground.color);
    r.DrawRectangleRec(bird, bird.color);
    o.drawObstacle(obstacles, ground.y);

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