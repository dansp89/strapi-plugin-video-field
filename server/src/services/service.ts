import type { Core } from '@strapi/strapi';

interface VideoInfo {
    provider: string;
    providerUid: string;
    url: string;
}

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
    getWelcomeMessage() {
        return 'Welcome to Strapi 🚀';
    },

    parseVideoUrl(url: string): VideoInfo | null {
        if (!url) return null;

        // Bunny Stream
        if (url.includes('bunny')) {
            const regExp = /^.*(?:bunny\.net|b-cdn\.net)\/(.+?)(?:\/|\?|$)/;
            const match = url.match(regExp);
            if (match && match[1]) {
                return {
                    provider: 'bunny',
                    providerUid: match[1],
                    url,
                };
            }
        }

        // Vimeo
        if (url.includes('vimeo')) {
            const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
            const match = url.match(regExp);
            if (match && match[5]) {
                return {
                    provider: 'vimeo',
                    providerUid: match[5],
                    url,
                };
            }
        }

        // YouTube
        if (url.includes('youtube')) {
            const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\/)|(\?v=|\&v=))([^#\&\?]*).*/;
            const match = url.match(regExp);
            if (match && match[8].length == 11) {
                return {
                    provider: 'youtube',
                    providerUid: match[8],
                    url,
                };
            }
        }

        // Facebook
        if (url.includes('facebook')) {
            return {
                provider: 'facebook',
                providerUid: url,
                url,
            };
        }

        return null;
    },
});

export default service;
