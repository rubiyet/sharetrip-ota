## Project Overview

The goal of this project was to demonstrate proficiency in HTML and CSS by converting a Figma design into a functional React/Next.js application. The design includes multiple components and layout structures, showcasing skills in modern web development practices. The task was part of the initial stage of the interview process for ShareTrip Limited [ShareTrip Ltd](https://sharetrip.net/ "https://sharetrip.net/").


## About ShareTrip

[ShareTrip](https://sharetrip.net/ "https://sharetrip.net/") is Bangladesh's leading online travel aggregator, dedicated to making travel easier for people of all ages. With an innovative mobile app, ShareTrip offers seamless booking of flights, hotels, and holiday packages, along with exciting games and real rewards like free trips and air tickets. With over 250 experts, ShareTrip ensures the best travel rates and exclusive deals, fulfilling your travel needs efficiently.


### Live Demo

You can view the live demo of this project [here](https://sharetrip-ota.vercel.app/ "https://sharetrip-ota.vercel.app/").


## Technologies Used

- React.js
- Next.js
- Tailwind CSS
- Material UI (MUI)
- Vercel (for deployment)
- Figma (for design reference)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/rubiyet/sharetrip-ota.git
cd sharetrip-ota
```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be available at http://localhost:3000.


## Project Structure

├── app
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── assets
│   └── images
│       └── icon.png
├── components
│   ├── booking
│   │   ├── filters
│   │   │   └── index.js
│   │   ├── flight-details
│   │   │   ├── flight-details-card
│   │   │   │   ├── FlightDetailsFirstCol.js
│   │   │   │   ├── FlightDetailsRow.js
│   │   │   │   └── FlightDetailsSecondCol.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── common
│   │   ├── layout
│   │   │   └── navbar
│   │   │       └── index.js
│   │   └── others
│   │       └── breadcrumbs.js
└── json
    ├── flight-details.json
    └── index.js


## Deployment

The project is deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
