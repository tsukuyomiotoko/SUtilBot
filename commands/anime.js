
const { Client, Message, MessageEmbed } = require("discord.js");
const { searchAnime } = require("@freezegold/anime.js");



 
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.reply("Please type a name of an anime!");
    const anime = await searchAnime(query, 1).then((res) => {
      return res[0];
    });
    function trim(input) {
      return input.length > 1024 ? `${input.slice(0, 1015)} [...]` : input;
    }

    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setAuthor(
        anime.titles.english,
        "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
      )
      .setTitle("Anime")
      .addFields(
        {
          name: "Titles: ",
          value: anime.titles.english
            ? `➥ English: ${anime.titles.english}\n`
            : "➥ English: ❌\n" +
              `➥ Romaji: ${anime.titles.romaji}\n` +
              `➥ Japanese: ${anime.titles.japanese}`,
          inline: true,
        },
        {
          name: "Ratings: ",
          value:
            `➥ Watchers: ${anime.userCount}\n` +
            `➥ Favourites: ${anime.favoritesCount}\n` +
            `➥ Ratings: ${anime.averageRating} ⭐`,
          inline: true,
        },
        {
          name: "Synopsis: ",
          value: trim(anime.synopsis),
          inline: false,
        }
      )
      .setThumbnail(anime.posterImage.original)
      .setTimestamp();

    message.reply(embed);
  },
  module.exports.help = {
    name: "anime",

    };