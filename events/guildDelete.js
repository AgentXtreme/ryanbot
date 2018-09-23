const discord = require("discord.js")
const send = require('quick.hook')

module.exports = async (client, guild) => {
    const rbnleave = client.channels.get("449130097136369664"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
    let rbnembed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(guild.iconURL)
    .setTitle(`RyanBot Has stopped serving **${guild.name}**`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Lost**: ${guild.memberCount}`)
    rbnleave.send(rbnembed)
}
