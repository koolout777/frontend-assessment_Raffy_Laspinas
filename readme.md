# Frontend Assessment

## Overview

`frontend-assessment` is a Vue 3 project set up using Vite. It demonstrates the use of Vue Router for navigation, Tailwind CSS for styling, and includes various Vue components like tabs and accordions with smooth transitions and animations.

## Project Setup

To get started with the project, follow the steps below:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:

  ```sh
    cd frontend-assessment
  ```
3. Install the dependencies:

  ```sh
    npm install
  ```
### Running the Project

```sh
  npm run dev
```
This will start a local development server with hot reloading. You can then open your browser and navigate to http://localhost:5173/ to view the application or depending on your machine.

###  Project Pages

- `http://localhost:5173/` : For exercise One
- `http://localhost:5173/exercise-two` : For exercise two

or

- `http://localhost:3000/ ` : For exercise One
- `http://localhost:3000/exercise-two` : For exercise two

### Available Scripts

1. **npm run dev**: Starts the development server with hot reloading.
2. **npm run build**: Builds the project for production.
3. **npm run preview**: Previews the production build locally.
4. **npm run lint**: Lints the code using ESLint and automatically fixes issues.
5. **npm run format**: Formats the code using Prettier.

### Project Structure

- `src/`: Contains the source code of the project.
  - `components/`: Vue components used in the application.
    - `ArticleCard.vue`: Displays individual articles with a title, content, and additional styling.
    - `HeroBanner.vue`: Displays a banner with an image and text.
    - `Tab.vue`: Implements a tabbed interface with transitions.
    - `Accordion.vue`: Implements an accordion component with smooth transitions.
  - `views/`: Vue components used as views for routing.
  - `assets/`: Static assets like images and styles.
  - `App.vue`: The root component of the application.
  - `main.js`: Entry point for the application.
  
### Dependencies
**Production Dependencies**
`vue`: The core Vue.js library.
`vue-router`: The official router for Vue.js.

### Development Dependencies

- `@rushstack/eslint-patch`: ESLint patch package.
- `@vitejs/plugin-vue`: Vite plugin for Vue.
- `@vue/eslint-config-prettier`: ESLint configuration for Prettier.
- `autoprefixer`: Autoprefixer for CSS.
- `eslint`: JavaScript linting utility.
- `eslint-plugin-vue`: ESLint plugin for Vue.js.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `prettier`: Code formatter.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Build tool for modern web projects.


### Components

`ArticleCard.vue`
  - Displays individual articles with a title, content, and styling.

`HeroBanner.vue`
  - Displays a banner with an image and text.
  - Props:
    - `bannerImage`: URL of the banner image.
    - `bannerText`: Main text of the banner.
    - `bannerSubText`: Subtitle text of the banner.
`Tab.vue`
  - Implements a tabbed interface.
  - Props:
    - Manages data for accordion sections including titles and content.
    - Transitions between open and closed states with animations.
    
### Contributing

Feel free to open issues or submit pull requests to contribute to this project.

### Contact

For any questions or inquiries, please contact [Raffy Laspinas](//https://github.com/koolout777/).