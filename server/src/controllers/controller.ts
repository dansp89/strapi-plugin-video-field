import { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('video-field')
            .service('video-field')
            .getWelcomeMessage();
    },

    getBunnyConfig(ctx) {
        ctx.body = {
            apiKey: process.env.BUNNY_STREAM_API_KEY,
            libraryId: process.env.BUNNY_STREAM_LIBRARY_ID,
        };
    },
});
