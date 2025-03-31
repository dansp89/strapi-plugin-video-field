# Strapi plugin Video Field (Bunny Stream Fork)

<p align="center">Adds custom video field to your Strapi application with Bunny Stream support</p>

<p align="center">
  <img src="assets/video-field.png" alt="Image of Video Field" align="center">
</p>

## 👋 Intro

This is a fork of [@sklinet/strapi-plugin-video-field](https://github.com/sklinet/strapi-plugin-video-field) that adds support for [Bunny Stream](https://bunny.net/stream).

-   [Features](#features)
-   [Installation](#installation)
-   [Requirements](#requirements)

## <a id="features"></a>✨ Key feature

-   **Video field:** This plugin adds custom video field into your Strapi application! Plugin supports YouTube, Vimeo, and Bunny Stream videos.
-   **Bunny Stream Integration:** Direct integration with Bunny Stream CDN for efficient video delivery and streaming.

## <a id="installation"></a>🔧 Installation

Inside your Strapi app, add the package:

With `npm`:

```bash
npm install @dansp/strapi-plugin-video-field
```

With `yarn`:

```bash
yarn add @dansp/strapi-plugin-video-field
```

In `config/plugins.js` file add:

```js
"video-field": {
    enabled: true,
    config: {
        providers: ['youtube', 'vimeo', 'bunny'],
        defaultProvider: 'bunny',
        bunnyStream: {
            apiKey: process.env.BUNNY_STREAM_API_KEY,
            libraryId: process.env.BUNNY_STREAM_LIBRARY_ID,
        },
    },
}
```

Add these environment variables to your `.env`:

```env
BUNNY_STREAM_API_KEY=your-api-key
BUNNY_STREAM_LIBRARY_ID=your-library-id
```

In `config/middlewares.js` file extend "strapi::security" middleware:

```js
{
    name: "strapi::security",
    config: {
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                "frame-src": [
                    "'self'",
                    "youtube.com",
                    "www.youtube.com",
                    "vimeo.com",
                    "*.vimeo.com",
                    "*.mediadelivery.net", // Required for Bunny Stream
                ],
            },
        },
    },
}
```

Then run build:

```bash
npm run build
```

or

```bash
yarn build
```

All done! You're now able to use video-field plugin with Bunny Stream support! After installation, you will find the video field at the custom fields section of the content-type builder.

This plugin returns value in JSON format. Your video-field will return data like this:

```js
{
    provider: "bunny", // Provider of the video (youtube, vimeo, or bunny)
    providerUid: "RANDOMUID", // UID of the video
    url: "https://iframe.mediadelivery.net/embed/libraryId/RANDOMUID" // the whole URL of the video
}
```

## <a id="requirements"></a>⚠️ Requirements

Strapi **v5.x.x+**
Node **>= v20.x.x**
Tested on **v5.1.1**

## Credits

Original plugin by [@sklinet](https://github.com/sklinet)
Bunny Stream integration by [@dansp89](https://github.com/dansp89)
