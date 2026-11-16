# BIC21203 Web Development — Lab #4a

- **Name:** YALINIYAN A/L BHUVANESWARAN
- **Student ID:** CI250114

## Overview
This repository contains client-side JavaScript solutions for Lab #4a, demonstrating DOM manipulation, event handling with `addEventListener()`, user input validation, and dynamic HTML list generation.

## How to Run
1. Clone or download this repository and open the project folder in VS Code.
2. Launch the `index.html` file inside `q1/`, `q2/`, or `q3/` using **Live Server** (or open it directly in a modern desktop browser).

### Question 1 — Interactive Text Changer (`q1/index.html`)
- **Initial Page State:** The page displays the paragraph `"Welcome to my website!"` alongside a **Change Message** button.
- **Action:** Press the **Change Message** button.
- **Expected Result:** The paragraph text immediately updates to `"Hello there!"`.

### Question 2 — Smart Number Validator (`q2/index.html`)
- **Initial Page State:** The page displays a text input box labeled **Enter a number:** and a **Check** button, with a blank result area below them.
- **Action:** Type a value into the input box (test with `5`, `10`, `15`, `10.5`, `abc`, or leave it empty) and press the **Check** button.
- **Expected Result:** A validation message appears below the input:
  - Entering `5` displays `"The number is lower than 10"`.
  - Entering `10` displays `"The number is equal to 10"`.
  - Entering `15` or `10.5` displays `"The number is higher than 10"`.
  - Entering `abc` or leaving the box empty displays `"Please enter a valid number!"`.

### Question 3 — Dynamic Number Generator (`q3/index.html`)
- **Initial Page State:** The page displays a single **Generate** button with an empty area below it.
- **Action:** Press the **Generate** button (and try pressing it multiple times).
- **Expected Result:** A numbered list appears displaying `"The number is 1"` through `"The number is 5"`. Pressing **Generate** again refreshes the list cleanly without duplicating items.

## Output Screenshots
### Question 1 — Interactive Text Changer
<img width="903" height="345" alt="image" src="https://github.com/user-attachments/assets/15b9d880-977b-45ba-9bfc-b0cb8b481ab9" />


### Question 2 — Smart Number Validator
![Q2 Output](path/to/q2-screenshot.png)

### Question 3 — Dynamic Number Generator
![Q3 Output](path/to/q3-screenshot.png)
