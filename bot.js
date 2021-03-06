const { WebClient } = require("@slack/web-api");

require("dotenv").config();

main();

// Via https://slack.dev/node-slack-sdk/getting-started
// NOTE: Don't forget to invite your bot into your channels.
async function main() {
  const web = new WebClient(process.env.SLACK_TOKEN);

  try {
    await web.chat.postMessage({
      channel: "#general",
      type: "mrkdwn",
      text: `The current time is ${new Date().toTimeString()} <http://github.com/rpappalax|rpappalax on GitHub>`,
    });
    console.log("Message posted!");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}
