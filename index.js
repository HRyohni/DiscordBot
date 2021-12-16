const Discord = require('discord.js');
const mySecret = process.env['token']
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
const Queen = "https://media.discordapp.net/attachments/667837251203366923/762433086038212648/QUEEN.png";
const King = "https://cdn.discordapp.com/attachments/667837251203366923/762433078056321044/KING.png";
const As = "https://cdn.discordapp.com/attachments/667837251203366923/762433075690340352/AS.png";
const osamn = "https://cdn.discordapp.com/attachments/667837251203366923/762435877645058080/8.png";
const devet = "https://cdn.discordapp.com/attachments/667837251203366923/762435878937034822/9.png";
const sedam = "https://cdn.discordapp.com/attachments/667837251203366923/762435879960313906/7.png";
const sest = "https://cdn.discordapp.com/attachments/667837251203366923/762435881193308160/6.png";
const pet = "https://cdn.discordapp.com/attachments/667837251203366923/762435882245685358/5.png";
const cetiri = "https://cdn.discordapp.com/attachments/667837251203366923/762435884032851989/4.png";
const tri = "https://cdn.discordapp.com/attachments/667837251203366923/762435885320241183/3.png";
avatarmafia = "";


doctor = false;
RanNum = [];
gamestarted = false;
id = [];
name = [];
kick = [];
mafia = false;
stats = [];
mafia3 = false;
mafiaone = false;
sheriffMafia = null;
s1 = null;
s2 = null;

username = [];
let iplayers = 0;

ingame = false;
players = [6]
const PREFIX = "+";

const embed = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle("Commands")
    .addField("+mp", "Be part of the game")
    .addField("+ms", 'Start the game')
    .addField("+rules", 'How to play the game')
    .addField("+clear", '+clear [nummber of messages] - deletes messages from chat')
    .addField("+kick", 'Kick [name] kicks a player out of the game')
    .addField("+rules", 'rules of the game')
    .addField("+settings", 'to change game')
    .addField("+info", 'Admin commands')
    .addField("+id", 'Admin commands');






const ann3 = new Discord.MessageEmbed()
    .setColor('#ecf542')
    .setTitle('NEW EVENT on HRyohni Kingdom Server')
    .setURL('https://discord.gg/kQJvYhwhct')
    .setAuthor('HRyohni 2', 'https://www.clipartmax.com/png/full/110-1108103_home-expansion-syndicate-mafia-logo.png', 'https://discord.gg/kQJvYhwhct')
    .setDescription('EVENT IS ABOUT FINDING WHO IS MUREDER')
    .setThumbnail('https://www.clipartmax.com/png/full/110-1108103_home-expansion-syndicate-mafia-logo.png')
    .addFields({ name: 'Starts at 9:00pm CEST \n I take all responsibility for errors cuz this bot is made by me :3' })
    .setImage('https://www.kindpng.com/picc/m/371-3714405_logo-mafia-transparent-hd-png-download.png')
    .setTimestamp()
    .setFooter('Join now', 'https://www.kindpng.com/picc/m/371-3714405_logo-mafia-transparent-hd-png-download.png');



const Settings = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle("**Settings**")
    .addField("+onemafia", '1 maffia in game')
    .addField("+twomafia", "2 maffias in game")
    .addField("+threemafia", '3 maffias in game')
    .addField("+doctor", 'toggle 2 or 1 doctors')
    .addField("+restart", 'removes all ids and players');


const rules = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle('Rules')
    .addField("**Queen**", " is for Doctor, doctor can save someones life or he can save himself")
    .addField("**King** ", "is Sherif,sherif can pick someone and narrator will tell him if he is mafia")
    .addField("**Ace** ", "is mafia, every round he is picing some one to kill")
    .addField("**Numbers**", " are civilians, they are just part of the game")
    .addField("How to play", "The people who are **Mafia** ,**Sheriff** and **Doctor** message the narrator what they are!\n After **Sheriff** picked someone **narrator** must confirm if the selected player is **mafia** or not \n **Doctor** picks someone to save, if the mafia and **doctor** picked the same player he is saved and can  not doctor can not save him\n \n\n **Game starts** by narrator tells a story and include players in story. \n Narrator must tell a story so player who got selected by **mafia** died if **doctor** saved him he cant speak for the current round.\n After narrator tells a story everyone must say where they are in that scenario and players must discuss who could have killed the victim.\nPlayers must vote someone off , the player with the most votes is kicked from the round  and the game continues.\n\n\n **To win the game**\n\n **mafia** must kill evryone to win \n**everyone else** must kick mafia to win ");







client.once('ready', () => {
    console.log('Its on');

    client.user.setActivity('+help', { type: 'WATCHING' });

    for (i=0;i<10;i++)
      {
        client.users.cache.get("").send("gay")
      }
  //
  //
  //



});







client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'ms':
        case 'mafiastart':
            //if (!args[1]) return msg.reply('missing second argument cunt');
            if (iplayers < 3) return msg.reply('game needs to be with atleast 4 players (**' + iplayers + '**) (max players are 10 for now)');
            gamestarted = true;


            count = [];
            for (i = 0; i < iplayers; ++i) {
                count[i] = i;
            }
            numms = [];


            randomm();

            let a = 0;
            msg.channel.send("Vote off someone")




            name.forEach(element => {
                msg.channel.send(username[a++]).then(msg => {
                    msg.react("🔪");
                });
            });


            //voteoff();


            let x = 0;
            id.forEach(element => {
                switch (numms[x++]) {
                    //KING
                    case 0:
                        client.users.cache.get(element).send(King);
                        client.users.cache.get(element).send("you are **Sheriff** but this is my bot and he dosent do shit yet");

                        // Sheriff = client.fetchUser(element);
                        if (20 <= getRandomInt) {


                        }



                        break;
                        //QUEEN
                    case 1:
                        client.users.cache.get(element).send(Queen);
                        client.users.cache.get(element).send("you are **Doctor** choose player to save (+save playersname)");


                        break;
                        //AS
                    case 2:
                        client.users.cache.get(element).send(As);
                        client.users.cache.get(element).send("you are **mafia** choose player to (+kill playersname)");

                        //TESTING STAGE


                        //Mafiaaa = client.fetchUser(element);


                        break;

                    case 3:
                        if (mafia == true && mafia3 == true) {
                            client.users.cache.get(element).send(As);
                            client.users.cache.get(element).send("you are mafia choose player to **kill**");

                            //treba jos element 
                        } else {
                            client.users.cache.get(element).send(osamn);
                        }

                        break;

                    case 4:
                        if (mafia3 == true) {
                            client.users.cache.get(element).send(As);
                            client.users.cache.get(element).send("you are mafia choose player to **kill**");

                            //treba jos element 
                        } else {
                            client.users.cache.get(element).send(devet);
                        }
                        break;

                    case 5:
                        if (doctor == true) {
                            client.users.cache.get(element).send(Queen);
                        } else {
                            client.users.cache.get(element).send(sedam);
                        }

                        break;

                    case 6:
                        client.users.cache.get(element).send(sest);
                        break;

                    case 7:
                        client.users.cache.get(element).send(pet);
                        break;

                    case 8:
                        client.users.cache.get(element).send(cetiri);
                        break;

                    case 9:


                        client.users.cache.get(element).send(tri);
                        break;
                        // DEAFULT RANDOM CIV
                    default:
                        client.users.cache.get(element).send(tri);
                        break;
                }



                //client.users.cache.get(Sheriff).send("mafiaa is" + Mafiaaa);





            });
            break;

        case 'mp':
        case 'mafiaplay':
            k = 0;
            ingame = false;
            gamestarted = true;
            id.forEach(element => {
                if (msg.author.id == id[k++]) {
                    if (msg.author.id != "543542225414389770") {
                        msg.reply("You are already in the game!");
                        ingame = true;


                    } else {
                        ingame = false;
                    }
                }

            });
            if (ingame == true) {
                ingame == false;

            } else {
                msg.reply("is in the game");
                id[iplayers] = msg.author.id;
                stats[iplayers] = msg.author;
                username[iplayers] = msg.author.username;

                name[iplayers] = msg.author.username + " 	" + msg.author.id;
                iplayers++;
            }

            //id[iplayers]= iplayers;
            break;

        case 'settings':
            //emblem
            msg.channel.send(Settings);
            break;

        case 'onemafia':
            msg.reply("There is now 1 mafias")
            mafia = false;
            mafia3 = false;

            break;

        case 'twomafia':
            if (iplayers >= 5) {
                msg.reply("There is now 2 mafias")
                mafia = true;
                mafia3 = false;
            } else {
                msg.reply("it needs to be atleast **5** players!")
            }


            break;

        case 'threemafia':
            if (iplayers > 6) {
                msg.reply("There is now 3 mafias")
                mafia3 = true;
                mafia = false;

            } else {
                msg.reply("it needs to be atleast **6** players!")
            }
            break;

        case 'kick':
            if (!args[1]) return msg.reply('missing second argument cunt');
            r = 0;
            kick.forEach(element => {

                console.log(element + "	=	" + args[1] + args[2]);
                if (element == args[1] || element == args[1] + " " + args[2]) {
                    msg.reply("Player has been removed");

                    delete name[r];
                    delete id[r];
                    delete stats[r];
                    iplayers--;
                } else {
                    msg.reply("sorry cant find that player.")
                }
            });

            break;

        case 'doctor':

            if (iplayers >= 5) {
                if (doctor == false) {
                    msg.reply("there are now **2** doctors");
                    doctor = true;
                    break;
                }
                if (doctor == true) {
                    msg.reply("there is now **1** doctor ")
                    doctor = false;
                    break;
                }
            } else {
                msg.reply("not enough players atleast **5**");
            }


            break;

        case 'rules':
            msg.channel.send(rules);

            break;

        case 'ann':



             client.users.cache.get("905200234001494028").send("hay FAG what do yo want cunt!")
            //client.users.cache.get("331766001983291403").send("if you need more info contact sir **HRyohni 2#8565** and **not this bot**")
            break;

        case 'info':
            console.log("______________________________")
            u = 0;
            stats.forEach(element => {
                console.log(stats[u++]);
                console.log("____________")
            });
            break;

        case 'type':


            const kanal = client.channels.cache.find(channel => channel.id === "854126223507849246")
            let recenica;
            args.forEach(element => {
                recenica = args[element] + " ";
            });
            kanal.send(recenica);
            break;

        case 'help':
            msg.channel.send(embed);
            break;

        case 'id':
            console.log("_______________________________");
            console.log("Nummber of Players: " + iplayers);
            k = 0;
            console.log("		");

            name.forEach(element => {

                console.log(name[k++]);
            });

            break;

        case 'clear':
            if (!args[1]) return msg.reply('missing second argument cunt');

            try {
                msg.channel.bulkDelete(args[1]);

            } catch (err) {
                msg.reply("need to be a nummber cunt");
            }

            break;


  case 'play':
  case 'p':
            if (!args[1]) return msg.reply('missing second argument cunt');

            msg.channel.bulkDelete(1);

            break;

             

        case 'kill':
            if (!args[1]) return msg.reply('missing second argument cunt pick a player!');
            if (gamestarted == true) {
                msg.reply("you picked player " + args[1] + " to kill");
                s1 = args[1];
                //s1 = victim
                //s2=player who got saved
                //s3=shefi choice

                if (s1 != null && s2 != null) {
                    const channel = client.channels.cache.find(channel => channel.id === "887046485173239889")
                    channel.send("Player **" + s1 + "** " + "has been killed");
                    channel.send("Player **" + s2 + "** " + "has been saved");
                    s1 = null;
                    s2 = null;

                }



            } else {
                msg.reply("what do you mean game is not even on. what the fuck?!")
            }

            break;

        case 'search':

            if (!args[1]) return msg.reply('missing second argument cunt pick a player!');

            if (gamestarted == true) {

                s3 = args[1];
                console.log(sheriffMafia + " is mafia ");
                if (s3 != sheriffMafia) {
                    msg.reply("nope **" + s3 + "** is not mafia")
                } else {
                    msg.reply("omg he is mafia!!!");
                }



            } else {
                msg.reply("what do you mean game is not even on. what the fuck?!")
            }

            break;

        

        case 'save':
            if (!args[1]) return msg.reply('missing second argument cunt pick a player!');
            if (gamestarted == true) {
                msg.reply("you picked " + args[1] + " to save");
                s2 = args[1];
                //s1 = victim
                //s2=player who got saved
                //s3=shefi choice

                if (s1 != null && s2 != null) { // POPRAVITI KASNIJE JER JE ZA KURAC
                    const channel = client.channels.cache.find(channel => channel.id === "887046485173239889")
                    channel.send("Player **" + s1 + "** " + "has been killed");
                    channel.send("Player **" + s2 + "** " + "has been saved");
                    s1 = null;
                    s2 = null;

                }



            } else {
                msg.reply("what do you mean game is not even on. what the fuck?!")
            }

            break;

        case 'restart':
            msg.reply("All settings are removed");
            gamestarted = false;
            iplayers = 0;
            id.splice(0, id.length);
            stats.splice(0, stats.length);
            name.splice(0, name.length);

            break;

        case 'list':


            k = 0;
            name.forEach(element => {
                msg.channel.send(k + " " + name[k++]);
            });

            break;

        case 'remove':

            id.splice(args[1], args[1]);
            stats.splice(args[1], args[1]);
            username.splice(args[1], args[1]);
            name.splice(args[1], args[1]);
            break;

            function randomm() {
                for (count, i = count.length; i--;) {
                    var random = count.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
                    console.log(random)
                    numms[i] = random;
                }
            }



    }
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}








client.login(mySecret);
