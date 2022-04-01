``` javascript
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace all digits that contain a 1 with "Beep!""
Code: beepBoop(5)
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should replace all digits that contain a 2 with "Boop!""
Code: beepBoop(5)
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test: "It should replace all digits that contain a 3 with "Wont't you be my neighbor?""
Code: beepBoop(5)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

```