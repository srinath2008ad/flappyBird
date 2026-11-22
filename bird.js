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

// const startJumping = function (dino) {

//     if (dino.isJumping) return;

//     dino.isJumping = true;

//     dino.velocity.x += dino.initialVelocity.x;
//     dino.velocity.y += dino.initialVelocity.y;
// }

// const jumpDino = function (dino, gravity, dt) {

//     dino.x += dino.velocity.x * dt
//     dino.y -= dino.velocity.y * dt;

//     dino.velocity.x += gravity.x * dt;
//     dino.velocity.y -= gravity.y * dt;

// }

// const updateDino = function (dino, gravity, dt) {
//     jumpDino(dino, gravity, dt);

//     if (hasDinoReachedGround(dino.y, dino.initialPosition)) {
//         resetDino(dino);
//     }
// }