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

module.exports = {
    pullBird,
    startFlying,
    flyBird
}   