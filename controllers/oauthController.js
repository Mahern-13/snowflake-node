const { google } = require("googleapis");
const { googleClientId, googleClientSecret } = require("../config");

const access_token = async () => {
  const oauth2Client = new google.auth.OAuth2(
    googleClientId,
    googleClientSecret
  );

  const scopes = [
    "https://www.googleapis.com/auth/blogger",
    "https://www.googleapis.com/auth/calendar"
  ];

  const url = oauth2Client.generateAuthUrl({
    scope: scopes
  });

  const { tokens } = await oauth2Client.getToken(code);
  console.log("this is the token", tokens);
  oauth2Client.setCredentials(tokens);
};

module.exports = {
  access_token
};
