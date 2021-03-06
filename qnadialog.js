'use strict';

let request = require('request');

module.exports = (session, args, next) => {
    session.sendTyping();
    let question = session.message.text;
    let bodyText = JSON.stringify({question: question});
    let uri = `https://westus.api.cognitive.microsoft.com/qnamaker/v1.0/knowledgebases/${process.env.KBID}/generateAnswer`;
    console.log(uri);

    request.post(uri, { body: bodyText }, (err, code, body) => {
        if(err) {
            console.log(err);
            session.endConversation('Sorry, something went wrong.');
        } else {
            let response = JSON.parse(body);
            console.log(response);
            if(response.score > 50) {
                session.endConversation(response.answer);
            } else if (response.score > 0) {
                session.send(`I'm not sure if this is right...`);
                session.endConversation(response.answer);
            } else {
                session.endConversation(`I don't have that answer.`);
            }
        }
    }).setHeader('Ocp-Apim-Subscription-Key', process.env.SUBSCRIPTION_KEY);
};