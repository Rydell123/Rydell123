const destination = "100005954550355"; // your uid

module.exports = {
  config: {
    name: "catch",
    version: 1.0,
    author: "LiANE",
    countDown: 5,
    role: 2,
    shortDescription: { en: "sends stuffs to specific destination" },
    longDescription: { en: "sends stuffs to specific destination" },
    category: "owner",
    guide: { en: "{pn}" }
  },
  onStart: async function ({ api, args, message, event, usersData }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    message.reply(`⚠ 𝑐𝑜𝑚𝑚𝑎𝑛𝑑 𝑎𝑙𝑒𝑟𝑡:
How to use? Open the code file, and change the id destination to your userID, once the changes have been made, I can assure that this command will work correctly.`);
  },
  onChat: async function ({ api, args, message, usersData, threadsData, event }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    const thread = await threadsData.get(event.threadID);
    const threadName = thread.threadName;

    const chat = event.body;
    if (chat.includes(`onStart:`)) {
      api.sendMessage(`⚠ 𝑐𝑜𝑚𝑚𝑎𝑛𝑑 𝑎𝑙𝑒𝑟𝑡:
» From: ${name}
» UID: ${event.senderID}
» Thread: ${threadName}
» GCID: ${event.threadID}
🔖 Content:
${event.body}`, destination);
    }
  }
};