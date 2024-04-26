# Event Management Platform
Welcome to the Event Management Platform! This web application allow users to browse upcoming events, book tickets, and manage their bookings. Administrators have access to an admin dashboard for event management

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Licence](#licence)

## Features
- **User Features:**
  - Browse upcoming events
  - Book tockets for events
  - Manage bookings

- **Admin Features:**
  - Add, edit, and delete events
  - View bookings and attendees
  - Manage user accounts

 ## Technologies Used
  - Node.js
  - Express.js
  - Sequelize (ORM)
  - MySQL
  - Nodemon (Node.js utility tool for development purpose)

## Installation
1. Clone the repo
   ```bash
   git clone https://github.com/ely-pro/event-management-platform-etite.git
   cd event-management-platform
   
2. Install dependencies
   ```bash
   npm install
   (This will install all the dependencies and the development dependencies in the package.json file)

3. Set up MySQL database
   - Createa a MySQL database for the application
   - Update the database configuration in `config/database.js` with your database credentials.

4. Start the server
   ```bash
   npm run emp-server

## Usage
  - User can browse upcoming events, book tickets, and manage bookings
  - Admin can add, edit, and delete events, view bookings and attendees, and manage user accounts

## Contributing
Contributions are welcome! Feel free to submit bug reports, features requests, or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
