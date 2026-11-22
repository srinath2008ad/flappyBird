const hasBirdReachedGround = function (birdY, birdHeight, groundY) {
    return (birdY + birdHeight) > groundY;
}

const pullBird = function (bird, gravity, dt, ground) {
    if (!hasBirdReachedGround(bird.y, bird.height, ground.y)) {
        bird.x += gravity.x * dt;
        bird.y += gravity.y * dt;
    }
}

module.exports = {
    pullBird
}