# Witty

!(https://placehold.co/100x100/123456/FFF?text=Witty)
🎯 Project Overview

Witty is a web application designed to provide a platform for entertainment, engagement, and connection. Built with modern technologies, Witty aims to deliver a fluid and intuitive user experience while being easily maintainable and extensible. The application is fully internationalized, allowing it to support multiple languages effortlessly.
🚀 Key Features

    Responsive User Interface: Design optimized for a seamless experience on all devices, from mobile phones to desktops.

    Internationalization (i18n): Supports multiple languages using next-intl, with flexible message management.

    High-Performance Navigation: Uses Next.js App Router for fast loading and efficient navigation between pages.

    Fluid Animations: Utilizes tw-animate-css for modern and attractive visual effects.

🛠️ Technologies Used

    Next.js 14 (App Router): The React framework for building the application.

    TypeScript: Ensures a robust and type-safe codebase.

    Tailwind CSS: A utility-first CSS framework for rapid and custom styling.

    next-intl: The internationalization library for Next.js App Router.

    tw-animate-css: A Tailwind plugin for powerful CSS animations.

    Manrope: The font used for typography.

📂 Project Structure

The project structure follows Next.js App Router conventions, with dedicated folders for pages, components, and internationalization.

/
├── app/                  # Main App Router directory
│   ├── [locale]/         # Route group for internationalization
│   │   ├── (main)/       # (Awaiting specific routes)
│   │   ├── layout.tsx    # Layout for internationalized routes
│   │   └── page.tsx      # Project home page
│   ├── layout.tsx        # Main RootLayout of the application
│   └── globals.css       # Global CSS files
├── components/           # Reusable components
├── styles/               # Additional CSS styles
├── messages/             # Folder for translation files (e.g., fr.json)
├── public/               # Static assets (images, fonts, etc.)
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependency management file
└── ...

⚙️ Installation and Setup

To install and run the Witty project locally, follow these steps:
Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed on your machine.
Instructions

    Clone the repository:

    git clone https://github.com/georgesnoe/Witty.git
    cd Witty

    Install dependencies:

    npm install

    Start the development server:

    npm run dev

The application will be accessible at http://localhost:3000.
🌍 Internationalization

The project uses next-intl for language management.

    Translation Files: Translation messages are stored in the messages/ folder as JSON files (e.g., fr.json, en.json).

    Add a new language: To add a new language, simply create a new JSON file in the messages folder (e.g., es.json for Spanish) and populate it with the necessary translation keys.

🤝 Contribution

We welcome contributions to this project! To contribute, please follow these steps:

    Fork the project.

    Create a new branch for your feature (git checkout -b feature/my-new-feature).

    Commit your changes (git commit -m 'feat: add a new feature').

    Push to the branch (git push origin feature/my-new-feature).

    Open a Pull Request.

📄 License

This project is licensed under the MIT License. For more information, see the LICENSE file in the repository.
