require("dotenv").config({ path: "./.env.local" });


const { Client } = require('discord.js-selfbot-v13');
const API_SECRET = process.env.API_SECRET

const bot_testground_1_id = '1072648595959988285'
const bot_testground_2_id = '1072686710279909477'
const dev_tickets_id = '935533054364094484'
const devdao_chat_id = '884852491475378267'

const client = new Client({
    // See other options here
    // https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
    // All partials are loaded automatically
});


client.login(API_SECRET);




function threehours_timestamp() {
    const currentTimestamp = Date.now();
    const threeHoursAgo = currentTimestamp - (16 * 24 * 60 * 60 * 1000);

    return threeHoursAgo;
}

function findFirstIssue(string) {

    string_lowercase = string.toLowerCase()
    // (string_lowercase.indexOf("assigned to") === -1 && 
    if (string_lowercase.indexOf("good first issue") !== -1) {
        return true
      } else {
        return false
      }

}

client.on('ready', async () => {

  console.log(`${client.user.username} is ready!`);

  //fetch UNIX timestamp from 3 hours ago
  const target_timestamp = threehours_timestamp();

  (async() => {

    // //Kwenta
    // const channel = await client.channels.fetch('935533054364094484')
    // const fetched_messages = await channel.messages.fetch({ limit: 50, cache: false })
    // .then(messages => messages.filter(m => m.createdTimestamp > target_timestamp))
    // .catch(console.error)

    // // console.log(fetched_messages)


    // const result = fetched_messages.map((e) => {console.log(findFirstIssue(e.content)); console.log(e.content)})

    //test server
    // const channel = await client.channels.fetch('1072648595959988285')

    // await channel.sendTyping();

    // channel.send('hello!')
    // .then(message => console.log(`Sent message: ${message.content}`))
    // .catch(console.error);

  



    // const channel = await client.channels.fetch('1072648595959988285')
 

 
 })();

});


client.on('messageCreate', async msg => {

    // const channel = await client.channels.fetch('1072648595959988285')

    const devdao_chat_channel = await client.channels.fetch(devdao_chat_id)

    //abort if message does not come from devtickets channel
    if (msg.channelId !== dev_tickets_id) return


    console.log(`New message in Dev-tickets - ${msg.content}`)

    if (findFirstIssue(msg.content) ) {

        setTimeout(function() {
            // code to be executed after the specified time

            (async() => {

                await devdao_chat_channel.sendTyping();

                devdao_chat_channel.send('Hey could I get the first issue ticket please? :)')

            })()

          }, 2000); // 2000 milliseconds = 2 seconds

        
      
    }
  });


