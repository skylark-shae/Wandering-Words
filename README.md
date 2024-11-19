<a id="title"></a>
# Wandering Words

## Table of Contents
- [Title](#title)
- [Description](#description)
- [Badges and Resources Used](#badges)
- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contact the Developers](#contact)
- [Future Development](#development)
- [Contributing](#contributing)
- [Authors and Acknowledgment](#acknowledgment)
- [License](#license)
- [Project Status](#status)

<a id="description"></a>
## Description
An intelligent blog platform leveraging AI to assist users in creating and editing blog posts. This project integrates a grammar-checking API and OpenAI's content generation capabilities to enhance the blogging experience.


**Features**
Grammar Checking: Ensures that blog posts are grammatically correct and polished.
Content Creation Assistance: OpenAI integration for drafting ideas, generating content, and editing.
User-Friendly Interface: Built with React for a seamless user experience.

**KEY USES:**
1. **Enhanced Productivity for Writers:**
    - Quick Content Drafting: Writers can generate initial drafts based on a topic or prompt, saving time.
    - Streamlined Editing: Automated grammar and style suggestions make editing faster and more efficient.
    - Idea Generation: AI helps brainstorm topics, headlines, or creative angles.

2. **Accessibility for Non-Writers:**
    - Democratized Blogging: Individuals with limited writing skills can still create high-quality content.
    - Language Support: AI can assist non-native speakers by improving clarity and grammar.

3. **Content Optimization:**
    - SEO Recommendations: AI could suggest keywords or optimize for search engine performance (this could be a future feature).
    - Readability Improvements: Automated analysis ensures content is engaging and easy to read.

4. **Business Applications:**
    - Content Marketing: Small businesses can create blogs to drive traffic without needing a dedicated content team.
    - Personal Branding: Professionals can use the platform to establish expertise in their field.
    - Social Media Integration: Generate blog posts that can be easily adapted for social platforms.

5. **Education and Learning:**
    - Learning Tool: New writers can learn from AI feedback and grammar corrections.
    - Academic Use: Students can polish essays or develop structured articles.

6. **Streamlined Collaboration:**
    - Team Blogging: Multiple users can collaborate by sharing AI-generated drafts or edited content.
    - Version Control: AI can suggest improvements while keeping track of iterations.

7. **Creative Exploration:**
    - Creative Writing: Writers can experiment with AI for poetry, stories, or unique formats.
    - New Perspectives: AI-generated content can offer new ideas or alternative approaches to a subject.

**CORE FUNCTIONS:**
1. **Blog Creation:**
    - AI Content Drafting: Users can generate drafts based on provided prompts or keywords, making it easy to start writing.
    - Topic Suggestions: AI offers suggestions for blog topics, headlines, or sections based on user input.

2. **Content Editing:**
    - Grammar and Spell Checking: Real-time grammar and spelling suggestions using the grammar-checking API.
    - Style and Clarity Improvements: AI provides recommendations for improving tone, structure, and readability.

3. **AI Assistance:**
    - Expanding Ideas: Users can highlight a section to get detailed expansions or alternate phrasing suggestions.
    - Keyword Integration: AI helps incorporate specific keywords seamlessly for better SEO performance.

4. **User Management:**
    - Draft Saving: Save blog drafts and retrieve them for later editing or publishing.
    - Version History: Track changes to blog posts with versioning support.

5. **Publishing:**
    - Preview Mode: See how the blog will appear when published.
    - Content Export: Export final content to various formats or directly publish it to CMS platforms.

6. **Search and Insights (Future Enhancements):**
    - SEO Recommendations:
    - Get suggestions on optimizing content for search engines.
    - Content Analytics: Insights into readability scores, estimated engagement, and word count.


<a id="badges"></a>
## Badges, API's, and Resources Used

### License
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Built With
[![React](https://img.shields.io/badge/Frontend-React-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)
[![HTML](https://img.shields.io/badge/Markup-HTML5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/Styles-CSS3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-43853d.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Framework-Express-000000.svg)](https://expressjs.com/)

### API Integrations
[![OpenAI](https://img.shields.io/badge/AI-OpenAI-00A68A.svg)](https://openai.com/)
[![Grammar API](https://img.shields.io/badge/API-Grammar-red.svg)](https://example.com/) <!-- Replace example.com with the grammar API link -->

### Development
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-43853d.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/Package%20Manager-npm-CB3837.svg)](https://www.npmjs.com/)
[![Visual Studio Code](https://img.shields.io/badge/Editor-VS%20Code-blue.svg)](https://code.visualstudio.com/)
[![Webpack](https://img.shields.io/badge/Bundler-Webpack-8DD6F9.svg)](https://webpack.js.org/)
[![Babel](https://img.shields.io/badge/Compiler-Babel-F9DC3E.svg)](https://babeljs.io/)
[![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3.svg)](https://eslint.org/)


<a id="installation"></a>
## Installation
You will need your own API keys in order for the site to function. The API's used are listed above.

1. **Clone the Repository** Clone repo from github.
2. **Install Dependancies** Once cloned install all dependancies.
3. **Set Up Environment Variables:** To use the OpenAI and Grammar APIs, you'll need to set up environment variables to store your API keys securely.
    - In the project root directory, create a .env file (if it doesn’t already exist).
    - Add the following to the .env file:
    ```
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    REACT_APP_GRAMMAR_API_KEY=your_grammar_api_key
    ```
    -Replace your_openai_api_key and your_grammar_api_key with your actual API keys.

4. **Run the Development Server:** Once everything is set up, you can start the development server to view the project locally:
    ````
    npm run test/buid/start
    ````
This will launch the application at http://localhost:3000 in your browser.

5. **Test the Application:** Ensure that your OpenAI and Grammar APIs are integrated correctly by testing the content generation and grammar checking functionalities.
    - Content Creation: Enter a prompt and check if the AI generates content as expected.
    - Grammar Checking: Paste a blog draft and check if the grammar suggestions appear.

<a id="usage"></a>
## Usage
Website it deployed at [FILL LINK]

<a id="Visuals"></a>
## Visuals
FILL

<a id="tests"></a>
## Tests
FILL

<a id="contact"></a>
## Contact the Developers
If you have any questions about the contents please feel free to reach out to our team at:

Michael Kelly
 - Email: [mgkelly18@gmail.com](mailto:mgkelly18@gmail.com)
 - GitHub: [samvs-tech](https://github.com/samvs-tech)

Ty Jensen 
 - Email: [tyannejensen@gmail.com](mailto:tyannejensen@gmail.com)
 - GitHub: [tyannejensen](https://github.com/tyannejensen)

Skylar Kline
 - Email: [skylarkline16@gmail.com](mailto:skylarkline16@gmail.com)
 - GitHub: [skylark-shae](https://github.com/skylark-shae)

Ricardo Shade
 - Email: [richi.shade@gmail.com](mailto:richi.shade@gmail.com)
 - GitHub: [ricardoshade](https://github.com/ricardoshade)

<a id="development"></a>
## Future Development

[Google Doc](https://docs.google.com/document/d/1ol6ijrawWwCEvmWFz3Pm9QBDXgyqPqCGQ61TIVFbjxM/edit?tab=t.0)

<a id="contributing"></a>
## Contributing
Contributions are welcome. If you have contributions you would like to make, please follow these guidelines.

1. **Fork the Repository**: Click "Fork" on the top right corner of the repository page on GitHub.

2. **Make Your Changes**: Implement your changes and commit them with a clear message:
   ```bash
   git checkout -b feature/YourFeature

3. **Make Your Changes**: Implement your changes and commit them with a clear message:
   ```bash
   git commit -m "Add your feature description"

4. **Push to Your Fork**: Push your changes to your forked repository:
   ```bash
   git push origin feature/YourFeature

5. **Submit a Pull Request**: Navigate to the original repository and submit a pull request with a description of your changes.

<a id="acknowledgment"></a>
## Authors and Acknowledgment
FILL

<a id="license"></a>
## License
MIT License © 2024 Skylark
Please refer to this link, [License: MIT](https://opensource.org/licenses/MIT) for more information.

  ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)  

<a id="status"></a>
## Project Status
In progress

[back to top](#title)
