# Kambaz Next.js Web Application

A full-stack web application built with Next.js, implementing a Learning Management System (LMS) inspired by popular educational platforms.

## Features

### Lab Exercises
- **Lab 1**: HTML Examples - Comprehensive HTML elements including headings, paragraphs, lists, tables, forms, images, and navigation
- **Lab 2**: CSS Basics - Placeholder for CSS styling fundamentals
- **Lab 3**: JavaScript Fundamentals - Placeholder for JavaScript programming basics

### Kambaz Application
- **Account Management**: Sign in, Sign up, and Profile screens with form validation
- **Dashboard**: Course listings with navigation to individual courses
- **Course Management**: 
  - Modules with learning objectives, readings, and slides
  - Assignments with due dates and grading
  - Assignment Editor for creating and editing assignments
  - Quizzes, Grades, People, Piazza, and Zoom integration
- **Navigation**: Comprehensive navigation system with sidebars and routing

## Project Structure

```
src/app/
├── (Kambaz)/                 # Main Kambaz application
│   ├── Account/              # Account management screens
│   ├── Dashboard/            # Course dashboard
│   ├── Courses/[cid]/        # Individual course pages
│   ├── Calendar/             # Calendar functionality
│   ├── Inbox/               # Messaging system
│   └── Navigation.tsx        # Main navigation component
├── Labs/                    # Lab exercises
│   ├── Lab1/                # HTML examples
│   ├── Lab2/                # CSS basics
│   ├── Lab3/                # JavaScript fundamentals
│   └── TOC.tsx              # Table of contents
└── layout.tsx               # Root layout
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Navigation

- **Root URL** (`/`): Redirects to Account Sign In
- **Labs** (`/Labs`): Lab exercises landing page
- **Account** (`/Account`): Account management (Sign In, Sign Up, Profile)
- **Dashboard** (`/Dashboard`): Course listings and navigation
- **Courses** (`/Courses/[cid]`): Individual course content

## Technologies Used

- **Next.js 15.5.3**: React framework with App Router
- **React 19.1.0**: UI library
- **TypeScript**: Type safety and development experience
- **HTML5**: Semantic markup and form elements
- **CSS**: Styling (commented out for raw HTML display)

## Author

Milan Srinivas
CS5610 Web Development

## GitHub Repository

[https://github.com/WATERMEONBOSS/kambaz-next-js](https://github.com/WATERMEONBOSS/kambaz-next-js)