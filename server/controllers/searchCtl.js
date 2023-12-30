const axios = require('axios');
const cheerio = require('cheerio');
const searchCtl = {}
const Constant=require('../constants.js')


searchCtl.countTrailUrls = async (req, res) => {
    const { startUrl, maxSteps } = req.body;

    try {
        const totalTrails = await countTrailsToPhilosophy(startUrl, maxSteps);
        res.json({ totalTrails });
    } catch (error) {
        console.error(error);
        res.status(Constant.SERVER_ERROR).json(error.message || Constant.REQUEST_SERVER_ERROR);
    }
}

async function countTrailsToPhilosophy(startUrl, maxSteps = 30) {
    let currentUrl = startUrl;
    const visitedUrls = new Set();

    for (let step = 0; step < maxSteps; step++) {
        console.log(visitedUrls)


        try {
            if (visitedUrls.has(currentUrl)) {
                throw new Error('Loop detected. Exiting.');
            }

            visitedUrls.add(currentUrl);
            const response = await axios.get(currentUrl);
            if (!response.data) {
                throw new Error('Empty response. Exiting.');
            }

            const $ = cheerio.load(response.data);

            const firstLink = $('#mw-content-text p a').first();

            if (!firstLink || !firstLink.length || !firstLink.attr('href')) {
                throw new Error('No valid link found. Exiting.');
            }

            currentUrl = `https://en.wikipedia.org${firstLink.attr('href')}`;

            if (currentUrl === 'https://en.wikipedia.org/wiki/Philosophy') {
                visitedUrls.add(currentUrl);
                return { count: visitedUrls.size, urls: [...visitedUrls]} ;
            }
        } catch (error) {
            throw new Error(error.message || 'Error processing the response. Exiting.');
        }
    }

    throw new Error('Maximum steps reached without reaching Philosophy.');
}


module.exports = searchCtl