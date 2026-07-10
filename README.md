# Javascript-Demo

A collection of small vanilla JavaScript projects built with HTML, CSS, and JavaScript. No frameworks or build tools required — open any project in your browser to run it.

## Counter

An interactive counter that lets you increase, decrease, and reset a number with a customizable step size.

### Features

- **Increase / Decrease** — Add or subtract using `+` and `-` buttons
- **Adjustable step size** — Change how much each click changes the count (minimum: 1)
- **Reset** — Set the count back to 0 and reset the step size to 1
- **Color feedback** — Green for positive numbers, red for negative, default for zero

### How to Run

1. Open the `Counter` folder
2. Double-click `index.html` or open it in any modern browser

### Project Structure

```
Counter/
├── index.html   # Page layout and buttons
├── style.css    # Styling and color states
└── script.js    # Counter logic and event handlers
```

### How It Works

- The current count is stored in a JavaScript variable and displayed on the page
- `getStep()` reads the step size from the input (defaults to 1 if invalid)
- `updateDisplay()` refreshes the number and applies positive/negative CSS classes

---

## To-do List

A task manager that separates active and completed tasks, with inline editing for items still in progress.

### Features

- **Add tasks** — Type a task and click Add or press Enter
- **Edit tasks** — Edit active tasks inline; click Save or press Enter to confirm
- **Mark as done** — Move a task to the Completed section
- **Delete tasks** — Remove tasks from either the active or completed list
- **Separate sections** — Active tasks and completed tasks are shown in their own lists

### How to Run

1. Open the `To-do List` folder
2. Double-click `index.html` or open it in any modern browser

### Project Structure

```
To-do List/
├── index.html   # Input area and task lists
├── style.css    # Layout and button styles
└── script.js    # Task creation, editing, and list management
```

### How It Works

- `addTask()` validates input and appends a new item to the active list
- `createTaskItem()` builds each task with the appropriate buttons:
  - **Active tasks** — Edit, Done, and Delete
  - **Completed tasks** — Delete only (with strikethrough styling)
- Clicking **Done** removes the task from the active list and recreates it in the completed list
- **Edit** toggles inline editing; Done is disabled while a task is being edited

---

## Requirements

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No installation or dependencies needed

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (DOM API, event listeners)
