## Mr. Roboger's Neighborhood

### Contributors:

Dylan Peterson

### Description

A webpage in which a user inputs a number and is given a string up to that value with select numbers being replaced with a string of text.

### Technologies Used:

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery

#### Programs used:
- Visual Code Studio
- Git Bash 
- GitHub

 ### Setup & Installation:

1. Through the terminal like [GitBash](https://git-scm.com/downloads)

1. Open the terminal and navigate to where you would like the new project to be using `cd` commands. Its also recommended that you make a new directory using `mkdir *directory-name*`.

2. Clone the repository using the command `git clone https://github.com/DyPeterson/roboger-neighborhood.git`

3. After cloning the directory it will appear in the directory that your terminal is set to. So make sure you are in the directory that you want this project copied to.

4. Once this project is cloned you can navigate to that folder within your file explorer and double-click `index.html` to launch the webpage within your browser.

2. Through github.com

1. Go to the project's directory page **[HERE](https://github.com/DyPeterson/roboger-neighborhood)**

2. Click the green `code` button to open the drop-down menu.

3. At the bottom of the menu will have *Download Zip*. Go ahead and click it to download the project.

4. Once downloaded find the `.zip` file and right-click it to bring up the menu. Within that menu click `Extract Here` to extract it in the current folder or click `Extract Files...`to select which folder you would like the project in.

5. Once the project has been extracted, locate the folder and open it. Once there double-click `index.html` to launch the webpage in your default browser.
 
### Link to project on GitHub

[https://github.com/DyPeterson/roboger-neighborhood.git](https://github.com/DyPeterson/roboger-neighborhood.git)

### Details

This project was made for a independent code review at [Epicodus](https://www.epicodus.com/). It's intention is to show what I have learned in the past week and to demonstrate it to an instructor. This week we were asked to use JavaScript and to meet the following objectives

1. Our JavaScript code must have a seperate business logic and user interface sections.

2. Within our `README.md` include tests to demonstrate TDD (Test-Driven Development). 

3. Implement a JavaScript loop and have it work as expected.

4. Have it so the user can reuse the application and receive new results.

5. A clean code with it being refactored and easy-to-read. Along with making sure we use 'lowerCamelCase' for variables.

Thank you for checking out my project. If you would like to contact me, you can do so by emailing me at <dylan.peterson17@gmail.com>

### Known Bugs
At this time there is no known bugs.

### Tests:
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

### Copyright 2022 Dylan Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.