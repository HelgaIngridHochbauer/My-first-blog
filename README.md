# Blog Project

Welcome to the My Blog ! This is a multi-page website developed as a first-year university project. The site is built using Django for the backend and incorporates HTML, CSS, and JavaScript for the frontend. The blog includes features such as posts, reviews, a chatbox, and more. The admin has the ability to add posts, which are formatted to match the site's design.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Features

- **Posts**: Users can read blog posts created by the admin.
- **Reviews**: Users can leave and read reviews on posts.
- **Chatbox**: A real-time chatbox for user interactions.
- **Admin Panel**: Admin can add and manage posts easily.
- **Responsive Design**: The site is designed to be responsive and user-friendly across different devices.


## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/university-blog.git
    cd university-blog
    ```

2. **Create a virtual environment:**
    ```bash
    python -m venv env
    source env/bin/activate   # On Windows use `env\Scripts\activate`
    ```

3. **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Apply migrations:**
    ```bash
    python manage.py migrate
    ```

5. **Create a superuser:**
    ```bash
    python manage.py createsuperuser
    ```

6. **Run the development server:**
    ```bash
    python manage.py runserver
    ```

7. **Access the site:**
    Open your browser and go to `http://127.0.0.1:8000/`

## Usage

- **Admin Access**: To access the admin panel, go to `http://127.0.0.1:8000/admin` and log in with your superuser credentials.
- **Adding Posts**: Use the admin panel to add, edit, or delete posts.

## Technologies Used

- **Django**: Backend framework for building the web application.
- **HTML/CSS**: Markup and styling for the frontend.
- **JavaScript**: For dynamic functionality on the frontend.

