let Parser = require('rss-parser');
let parser = new Parser();
const readline = require('readline');


(async () => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    try {
         rl.question('Digite a URL: ', async (answer) => {

            rl.close();
            let feed = await parser.parseURL(answer);
            console.log(feed.title);

            feed.items.forEach(item => {
                console.log(item.title + ':' + item.link)
            });
        });
    } catch (err) {
        console.log(err);
    }
})();