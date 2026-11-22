const r = require("raylib");
const g = require("./math.js")

const getRandomObstacle = function (lastObstacle, obstacleGap) {
    const obstacle = {
        x: lastObstacle.x + obstacleGap,
        y: 0,
        width: 100,
        height: g.getRandom(200, 500),
        gap: 200,
        color: r.RED
    }

    return obstacle;
}

const drawObstacle = function (obstacles) {
    for (const obstacle of obstacles) {
        const bottom = {
            x: obstacle.x,
            y: obstacle.y + obstacle.height + obstacle.gap,
            height: obstacle.height,
            width: obstacle.width
        }

        r.DrawRectangleRec(obstacle, obstacle.color);
        r.DrawRectangleRec(bottom, obstacle.color);
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