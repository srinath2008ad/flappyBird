# 1. Introduction

In this assignment, you are going to build a simple Flappy Bird-inspired game using JavaScript and Raylib.

Don't worry about creating an actual bird or realistic pipes. We'll use simple geometric shapes, just like your Dino Run assignment.

Your game will have:

- A small rectangle representing the player.
- A gravity-based falling movement.
- A jumping/flapping action.
- Rectangular obstacles with gaps.
- A continuously moving environment.
- Collision detection.
- A score counter.
  The objective is simple:

Keep the player alive for as long as possible by navigating through the gaps between obstacles.

# 2. Assignment Breakdown

Complete the following stages in order. Each stage introduces a new part of the game.
Stage 1 — Setting up the world

Create the basic game environment.

Requirements:

- Create a game window.
- Set a suitable window width and height.
- Set the target FPS to 60.
- Create a background with a sky-like colour.
- Create a ground at the bottom of the window.
  Your task:

1. Decide the dimensions of your game window.
2. Draw the background.
3. Draw the ground.
4. Keep the background and ground visible throughout the game.
   Things to observe:

- Does the ground occupy too much screen space?
- Is there enough room for obstacles?
