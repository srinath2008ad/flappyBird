const hasBirdReachedGround = function (birdY, birdHeight, groundY) {
    return (birdY + birdHeight) > groundY;
}

const pullBird = function (bird, gravity, dt, ground) {
    if (!hasBirdReachedGround(bird.y, bird.height, ground.y)) {
        bird.x += gravity.x * dt;
        bird.y += gravity.y * dt;
    }
    else {
        resetBird(bird)
    }
}

const startFlying = function (bird) {
    bird.isFlying = true;

    bird.flyVelocity.x = bird.initialFlyVelocity.x;
    bird.flyVelocity.y = bird.initialFlyVelocity.y;
}

const resetBird = function (bird) {
    bird.flyVelocity.x = 0;
    bird.flyVelocity.y = 0;
    bird.isFlying = false;
}

const flyBird = function (bird, gravity, dt) {
    bird.x -= bird.flyVelocity.x * dt
    bird.y -= bird.flyVelocity.y * dt;

    bird.flyVelocity.x -= gravity.x * dt;
    bird.flyVelocity.y -= gravity.y * dt;

    if (bird.flyVelocity.y < 0) {
        resetBird(bird)
    }
}

const isWithinRange = function (point, start, range) {
    return (point > start) && (point < start + range);
}

const checkCollisionRecs = function (rec1, rec2, pillar2) {
    const horizontalCollision = isWithinRange(rec1.x, rec2.x, rec2.width)
        || isWithinRange(rec1.x + rec1.width, rec2.x, rec2.width);

    const pillar1Collision = isWithinRange(rec1.y, rec2.y, rec2.height) ||
        isWithinRange(rec1.y + rec1.height, rec2.y, rec2.height);

    const pillar2Collision = isWithinRange(rec1.y, pillar2.y, pillar2.height) ||
        isWithinRange(rec1.y + rec1.height, pillar2.y, pillar2.height);

    const verticalCollison = pillar1Collision || pillar2Collision;

    return horizontalCollision && verticalCollison;
}

const checkCollision = function (bird, obstacles, groundY) {
    for (const obstacle of obstacles) {

        const bottomPillar = {
            x: obstacle.x,
            y: obstacle.y + obstacle.height + obstacle.gap,
            width: obstacle.width
        }

        bottomPillar.height = groundY - bottomPillar.y

        if (checkCollisionRecs(bird, obstacle, bottomPillar)) {
            return true;
        }
    }
}

const hasTouchedGround = function (bird, groundY) {
    return (bird.y + bird.height) > groundY
}

const hasCrossedPillar = function (bird, obstacle) {
    if (!obstacle.birdCrossed && bird.x > obstacle.x + obstacle.width) {
        obstacle.birdCrossed = true;
        return true;
    }
    return false;
}

module.exports = {
    pullBird,
    startFlying,
    flyBird,
    checkCollision,
    hasTouchedGround,
    hasCrossedPillar
}   