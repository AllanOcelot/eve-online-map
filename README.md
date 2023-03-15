# Eve Online Star Map <!-- omit from toc -->

---

## Table of Contents <!-- omit from toc -->

- [Overview](#overview)
- [Introduction](#introduction)
  - [File Overview](#file-overview)
  - [File Structure](#file-structure)

---

## Overview

---

## Introduction

Project summary goes here

### File Overview

- `index.html` is the main HTML file that will be served to the user's browser. It will contain the basic structure of the page, including the canvas element that the WebGL map will be rendered onto.
- `styles.css` contains the styling rules for the HTML elements on the page.
- `main.js` is the main JavaScript file that will handle user interaction and communication with the server.
- `map.js` contains the code that will handle the rendering of the map using WebGL.
- `search.js` contains the code that will handle the search functionality, allowing users to find specific systems on the map.
- `data.json` contains the data about the stars that will be rendered on the map.

### File Structure

```bash
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── map.js
│   └── search.js
└── data/
    ├── star-map.json
    └── sde_data.json
```
