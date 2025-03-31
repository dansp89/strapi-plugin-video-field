const getVideoProviderAndUid = (url: string) => {
    if (url.includes("vimeo")) {
        const regExp =
            /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
        const match = url.match(regExp);
        if (match && match[5]) {
            return {
                provider: "vimeo",
                providerUid: match[5],
            };
        }
    }
    if (url.includes("youtube")) {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\/)|(\?v=|\&v=))([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[8].length == 11) {
            return {
                provider: "youtube",
                providerUid: match[8],
            };
        }
    }
    if (url.includes("facebook")) {
        return {
            provider: "facebook",
            providerUid: url,
        };
    }
    if (url.includes("bunny") || url.includes("mediadelivery")) {
        console.log('video::dsp:: bunny url', url);
        const regExp = /^.*(?:bunny\.net|b-cdn\.net|mediadelivery\.net)\/embed\/\d+\/([a-f0-9-]+)/;
        const match = url.match(regExp);
        // console.log('video::dsp:: bunny match', match);
        if (match && match[1]) {
            console.log('video::dsp:: bunny providerUid', match[1]);
            return {
                provider: "bunny",
                providerUid: match[1],
            };
        }
    }
};

export { getVideoProviderAndUid };
