<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Naorah/flashpass">
    <img src="https://raw.githubusercontent.com/Naorah/flashpass/refs/heads/main/static/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">FlashPass</h3>

  <p align="center">
    A secure P2P solution for sharing sensitive data without leaving traces
    <br />
    <a href="https://github.com/Naorah/flashpass/doc"><strong>Read the docs »</strong></a>
    <br />
    <br />
    <a href="https://flashpass.pelsy.net" class="demo-btn">Try Demo</a>
    &middot;
    <a href="https://github.com/Naorah/flashpass/issues">Report Bug</a>
    &middot;
    <a href="https://github.com/Naorah/flashpass/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#security">Security</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT -->
## About

FlashPass is a modern, secure solution for sharing sensitive information like passwords between users. Using peer-to-peer technology and end-to-end encryption, FlashPass ensures your data is transmitted directly between devices without being stored on any servers.

### Key Features

🔒 **End-to-End Encryption**
- All data is encrypted before transmission
- Only the recipient can decrypt the information

🔥 **One time reading**
- Once the link is opened once, the connexion is done.
- Password can only be red one time.

👥 **Peer-to-Peer Architecture**
- Direct device-to-device communication
- No intermediate servers storing your data

🌐 **Easy to Use**
- Clean, intuitive interface
- No account required
- Works in any modern browser

### Built With

- [![Nodejs][Nodejs]][Nodejs-url] - Global technology
- [![Svelte][Svelte]][Svelte-url] - Frontend framework
- [![Webcryptoapi][Webcryptoapi]][Webcryptoapi-url] - Encryption
- [![Webrtc][Webrtc]][Webrtc-url] - P2P communication
- [![Tailwind][Tailwind]][Tailwind-url] - Styling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To run FlashPass locally, follow these steps:

### Prerequisites

* Node.js (v16 or higher)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Naorah/flashpass.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Create a .env file based on .env.example
   ```sh
   cp .env.example .env
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Start the development P2P signaling server
   ```
   node src/lib/signaling.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

1. Open FlashPass in your browser
2. Enter the sensitive data you want to share
3. Share the generated link with the recipient
4. Data is automatically destroyed after being read

For detailed examples and API documentation, please refer to the [Documentation](https://github.com/Naorah/flashpass/doc)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SECURITY -->
## Security

FlashPass takes security seriously:

- All encryption/decryption happens in the browser
- Uses modern cryptographic standards
- No data persistence
- Open source for security auditing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Basic P2P password sharing
- [x] End-to-end encryption
- [x] One reader messages
- [x] Homepage
- [x] Contact page
- [x] Privacy page
- [ ] Mobile apps
- [ ] Enterprise features

See the [open issues](https://github.com/Naorah/flashpass/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Naorah - [@Naorah](https://github.com/Naorah)

Project Link: [https://github.com/Naorah/flashpass](https://github.com/Naorah/flashpass)

Discord: lov3box

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Naorah/flashpass.svg?style=for-the-badge
[contributors-url]: https://github.com/Naorah/flashpass/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Naorah/flashpass.svg?style=for-the-badge
[forks-url]: https://github.com/Naorah/flashpass/network/members
[stars-shield]: https://img.shields.io/github/stars/Naorah/flashpass.svg?style=for-the-badge
[stars-url]: https://github.com/Naorah/flashpass/stargazers
[issues-shield]: https://img.shields.io/github/issues/Naorah/flashpass.svg?style=for-the-badge
[issues-url]: https://github.com/Naorah/flashpass/issues
[license-shield]: https://img.shields.io/github/license/Naorah/flashpass.svg?style=for-the-badge
[license-url]: https://github.com/Naorah/flashpass/blob/main/LICENSE.txt
[Svelte]: https://minipills.pelsy.net/pill?premade=svelte
[Webcryptoapi]: https://minipills.pelsy.net/pill?1t=WebCrypto_Api
[Webrtc]: https://minipills.pelsy.net/pill?premade=webrtc
[Nodejs]: https://minipills.pelsy.net/pill?premade=nodedotjs
[TailWind]: https://minipills.pelsy.net/pill?premade=tailwindcss
[Svelte-url]: https://svelte.dev/
[Webcryptoapi-url]: https://developer.mozilla.org/fr/docs/Web/API/Web_Crypto_API
[Webrtc-url]: https://webrtc.org/
[Nodejs-url]: https://nodejs.org/en
[TailWind-url]: https://tailwindcss.com/