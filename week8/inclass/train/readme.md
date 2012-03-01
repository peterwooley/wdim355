# TDDathon Train Details
Your task is to create a Train object constructor that fulfills the following requirements using Test-driven Development.

# Steps
1. Read the requirements of the Train object constructor below.
2. Write at least 6 unit tests (in test/train.js) for the Train. These should fail.
4. Implement the methods you referenced for one of your unit tests (in src/train.js).
5. Run the unit test again until it succeeds.
6. Repeat steps 4-5 until all of your unit tests pass.

## Requirements
The train object constructor should:
* Provide a way fro the train's horn to be blown.
* Be able to move forward and move background by a number of feet.

## API Sketch
The API might look like:

Train
+ blowHorn(): returns horn sound
+ moveFoward(feet): Moves the train forward by so many feet
+ moveBackward(feet): Moves the train backward by so many feet
+ getDistance(): Returns how many feet the train has moved.
