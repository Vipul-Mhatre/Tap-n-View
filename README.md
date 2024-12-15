# TapnView

TapnView is a React Native app that fetches and displays user data with added features for enhanced user interaction. It allows users to search, sort, and paginate through a list of users and view detailed profiles.

---

## Features

1. **User List**: Displays a list of users with their names and emails.
2. **Search Bar**: Search users by name in real-time.
3. **Pagination (Infinite Scroll)**: Load additional users as you scroll to the bottom of the list.
4. **Sort Users**: Sort the user list by name or email.
5. **User Profile Picture**: Display a placeholder image for each user.
6. **User Details Screen**: View detailed information about a selected user, including their address, phone, company, and website.

---

## Project Setup

### Prerequisites

- Node.js (v16.x recommended)
- npm or yarn
- Expo CLI (Local CLI)

### Steps to Run the App

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Vipul-Mhatre/Tap-n-View.git
   cd tapnview
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npx expo start
   ```

4. **Run on a Device or Emulator**:
   - Scan the QR code from the Expo Go app (available on iOS and Android).
   - Or, run on an Android emulator/iOS simulator via the Expo CLI.

## Folder Structure

```
.
├── assets                # Icons, splash screens, and images
├── components            # Reusable UI components
├── screens               # Main screens (UserList, UserDetails)
├── navigation            # App navigation configuration
├── App.js                # Main app entry point
├── app.json              # Expo configuration
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## Author

TapnView is developed by **Vipul Mhatre**.