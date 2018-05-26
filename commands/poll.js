const Discord = require("discord.js")

exports.run = async (bot, message, args, tools) => {
  
  if (!message.member.hasPermission('MANAGE_SERVER') && message.author.id !== '292936070603997185') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 10000}));
  
  const embed = new Discord.RichEmbed()
    .setTitle(args.join(' '))
    .setFooter('Vote now!')
    .setTimestamp()
    .setColor('RANDOM')
    const pollTitle = await message.channel.send({ embed });
      await pollTitle.react(`👍`);
      await pollTitle.react(`👎`);
  
    const filter = (reaction) => reaction.emoji.name === '👍';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
    const filter1 = (reaction) => reaction.emoji.name === '👎';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
};

exports.help = {
  name: 'poll',
  description: 'Description coming soon',
  usage: 'poll <text>'
};