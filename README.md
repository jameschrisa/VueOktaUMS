# VueOkta_UMS (User Management System)

VueOkta_UMS is a Vue.js-based user management system that integrates Okta for authentication. It provides a simple and secure way to manage user authentication in your Vue.js applications.

## Features

- Vue 3 with Composition API
- Vite for fast development and building
- Okta integration for secure authentication
- Tailwind CSS for responsive and customizable UI
- Protected routes with Vue Router
- Environment variable configuration

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- An Okta developer account and application set up

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/VueOkta_UMS.git
   cd VueOkta_UMS
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Okta credentials:
   ```
   VITE_OKTA_DOMAIN=your-okta-domain
   VITE_OKTA_CLIENT_ID=your-okta-client-id
   ```

## Usage

To run the development server:

```
npm run dev
```

To build for production:

```
npm run build
```

## Project Structure

```
vueokta-ums/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Home.vue
│   │   └── Login.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Okta Configuration

1. Sign up for an Okta Developer account at https://developer.okta.com/
2. Create a new application in Okta:
   - Application type: Single-Page App (SPA)
   - Login redirect URIs: http://localhost:5173/login/callback
   - Logout redirect URIs: http://localhost:5173
3. Copy the Client ID and Okta domain from your application
4. Update the `.env` file with these credentials

## Contributing

Contributions to VueOkta_UMS are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you want to contact me, you can reach me at `your-email@example.com`.

## Acknowledgements

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Okta](https://developer.okta.com/)
- [Tailwind CSS](https://tailwindcss.com/)
