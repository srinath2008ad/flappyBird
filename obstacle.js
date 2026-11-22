const r = require("raylib");
const g = require("./math.js")

const getRandomObstacle = function (lastObstacle, obstacleGap) {
    const obstacle = {
        x: lastObstacle.x + obstacleGap,
        y: 0,
        width: 100,
        height: g.getRandom(200, 500),
        gap: 200,
        color: { r: 186, g: 140, b: 99, a: 255 },
        birdCrossed: false
    }

    return obstacle;
}

const drawObstacle = function (obstacles, groundY) {
    for (const obstacle of obstacles) {
        const bottom = {
            x: obstacle.x,
            y: obstacle.y + obstacle.height + obstacle.gap,
            width: obstacle.width
        }
        bottom.height = groundY - bottom.y

        r.DrawRectangleRounded(obstacle, 0.2, 10, obstacle.color)
        r.DrawRectangleRounded(bottom, 0.2, 10, obstacle.color)

        const woodColor = { r: 126, g: 72, b: 51, a: 255 };
        r.DrawRectangleRoundedLines(obstacle, 0.2, 10, 3, woodColor)
        r.DrawRectangleRoundedLines(bottom, 0.2, 10, 3, woodColor)
    }
}

const moveObstacles = function (obstacles, velocity, dt) {
    for (const obstacle of obstacles) {
        obstacle.x -= velocity * dt;

        if (obstacle.x + obstacle.width < 0) {
            obstacles.shift();
            obstacles.push(getRandomObstacle(obstacles.at(-1), 300));
        }
    }
}



module.exports = {
    drawObstacle,
    moveObstacles,
    getRandomObstacle
}