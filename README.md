# BookMark_Manager

# Bookmark Manager Application

A full-stack bookmark management application with REST API backend and React frontend.

## Features

- Create, read, update, and delete bookmarks
- Tag bookmarks for organization
- Filter bookmarks by tags
- Search bookmarks by title or URL
- Real-time form validation
- Responsive design

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: React, JavaScript
- **Data Storage**: JSON file-based storage
- **Additional Libraries**: 
  - UUID for unique IDs
  - CORS for cross-origin requests
  - Concurrently for running both servers

## AI Tools Used

- **Claude (Anthropic)**: Assisted with code structure, component design, and debugging
- **GitHub Copilot**: Provided code suggestions and autocompletion

Time spent: Approximately 1 hour 45 minutes

## Assumptions Made

1. Tags are stored as lowercase strings for consistent filtering
2. Maximum of 5 tags per bookmark
3. Description is optional with 500 character limit
4. Title is required with 200 character limit
5. URL must be valid and accessible
6. In-memory JSON file storage is sufficient for demonstration
7. Bookmarks are sorted by creation date (newest first in display)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
git clone https://github.com/SinghDivyanshu12/bookmark-manager.git

2. Navigate to projectfolder
 cd bookmark-manager

4. Install dependencies
npm install

5. Run the deployment server
 npm run build

Live Project Link
https://dainty-queijadas-9e2a49.netlify.app/


