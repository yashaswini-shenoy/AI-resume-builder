# AI Resume Builder

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
<!-- - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license) -->
- [Contact](#contact)

## Project Overview

The AI Resume Builder is a web application designed to assist users in creating professional resumes with the help of AI. Users can add, edit, delete, share, and download their resumes. The application provides AI-generated suggestions for job descriptions, education details, and summaries based on the user's input, ensuring crisp and effective wording.

## Features

- **Add New Resumes**: Users can create new resumes.
- **Edit Existing Resumes**: Modify any section of an existing resume.
- **Delete Resumes**: Remove any resume that is no longer needed.
- **Share and Download**: Share resumes via a link or download them as a PDF.
- **Theme Customization**: Users can choose and edit the resume theme.
- **AI Suggestions**: Get AI-generated suggestions for job descriptions, education details, and summaries.
- **Resume Sections**:
  - Personal Info
  - Skills
  - Education
  - Experience
  - Summary

## Technologies Used

- **Frontend**: React, Tailwind
- **Backend**: Strapi CMS, Postgres
- **Deployment**: Render.com

## Installation

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Steps

<!-- 1. **Clone the repository**: -->

1. **Backend Setup**:

   - Clone the frontend repository

     ```bash
     git clone https://github.com/yashaswini-shenoy/AI-resume-builder-strapi-backend.git
     cd ai-resume-builder
     ```

   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure the environment variables in `.env` file:
     ```env
      ADMIN_JWT_SECRET=admin_jwt_token
      API_TOKEN_SALT=api_token_salt
      APP_KEYS=app_keys
      DATABASE_CLIENT=databse_client
      DATABASE_FILENAME=.tmp/data.db
      HOST=db_host
      JWT_SECRET=jwt_secret
      PORT=db_port
      TRANSFER_TOKEN_SALT=transfer_token_salt
     ```
   - Start the backend server:

   ````bash
   npm run dev
   ```

   ````

2. **Frontend Setup**:

   - Clone the frontend repository
     ```bash
     git clone https://github.com/your-username/ai-resume-builder.git
     cd ai-resume-builder
     ```

   ````

     <!-- - Navigate to the frontend directory:
       ```bash
       cd frontend
       ``` -->

   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure the environment variables in `.env` file:
     ```env
     VITE_API_BASE_URL=api_local_base_url
     VITE_BASE_URL=frontend_local_base_url
     VITE_CLERK_PUBLISHABLE_KEY=clerk_publishable_key
     VITE_GOOGLE_AI_API_KEY=google_api_key
     VITE_STRAPI_API_KEY=strapi_api_key
     ```
   - Start the frontend server:

   ```bash
   npm run dev
   ```
   ````

## Usage

1. **Create an Account**: Sign up to start creating resumes.
2. **Add Personal Info**: Fill in your personal details.
3. **Add Skills**: List your skills.
4. **Add Education**: Provide your educational background.
5. **Add Experience**: Detail your work experience.
6. **Add Summary**: Write a summary of your qualifications and objectives.
7. **AI Suggestions**: Use the AI feature to get suggestions for descriptions.
8. **Customize Theme**: Choose and customize the resume theme.
9. **Download or Share**: Download your resume as a PDF or share it via a link.

<!-- ## API Endpoints

### Authentication

- `POST /auth/local/register`: Register a new user.
- `POST /auth/local`: Login a user.

### Resumes

- `GET /resumes`: Get all resumes for the authenticated user.
- `POST /resumes`: Create a new resume.
- `PUT /resumes/:id`: Update an existing resume.
- `DELETE /resumes/:id`: Delete a resume.

### Sections

- `GET /sections`: Get all sections of a resume.
- `POST /sections`: Create a new section in a resume.
- `PUT /sections/:id`: Update an existing section.
- `DELETE /sections/:id`: Delete a section. -->

## Contact

For any inquiries or feedback, please reach out to:

- Name: [U Yashaswini Shenoy]
- Email: [yashushenoy98@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/yashaswinishenoy/]

```

```
