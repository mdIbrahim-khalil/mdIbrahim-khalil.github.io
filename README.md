# Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases professional experience, projects, skills, and provides a way to contact the owner.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v16.0.0 or higher)
*   yarn

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/mdibrahim-khalil/Ibrahim_khalil.git
    cd Ibrahim_khalil
    ```

2.  **Install dependencies**
    ```sh
    yarn install
    ```

3.  **Start the development server**
    ```sh
    yarn dev
    ```

    The application should now be running at `http://localhost:5173`.

## 🛠 Project Structure

*   `components/`: Reusable React components (Hero, Experience, Projects, etc.).
*   `constants.ts`: Centralized data file. **Edit this file to update the portfolio content** (Name, Experience, Skills, Projects, etc.) without touching the UI code.
*   `types.ts`: TypeScript interfaces for the data models.
*   `index.tsx` & `App.tsx`: Application entry points.

## 📝 Customization

### Updating Content

All personal information is stored in `constants.ts`. You can easily update your:

*   **Personal Info**: Name, role, summary, contact details.
*   **Resume**: Ensure you place your PDF resume in the `public` folder and name it `resume.pdf` (or update the path in `constants.ts`).
*   **Experience**: Add or remove job positions.
*   **Projects**: Update your portfolio projects.
*   **Skills**: Modify your technical skills list.

### Adding Your Resume

1.  Place your resume PDF file in the root directory (or `public/` folder if using a standard Vite/Create React App structure).
2.  Rename it to `resume.pdf`.
3.  If you change the filename, update the `resume` field in `PERSONAL_INFO` within `constants.ts`.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.