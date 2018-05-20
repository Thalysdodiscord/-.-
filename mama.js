const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const http = require('http');
const https = require('https');
let prefix = "!";
var status_chk = true;
const ms = require("ms");
const fs = require('fs');
const ytdl = require('ytdl-core');
const moment = require('moment');
const dateFormat = require('dateformat');
const Eris = require("eris");
const jimp = require('jimp')
const h = require('h')
var bufchan;
var lastSender = null;
var time = 60;//here is how often you want reminded in minutes
var atime =  new Number();
var lastchecked;
var totalTime = time - atime;
setInterval(function(){ atime++; }, 1000);




client.on('message', message => {
    if(message.content == '!server') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗  online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**   📕  Não pertube:      **__${message.guild.members.filter(m=>m.presence.status == 'Não pertube').size}__
 
**   📙  Ausente:     **__${message.guild.members.filter(m=>m.presence.status == 'Ausente').size} __  
 
**   📓   offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**   🔖   Total: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });



	
	

client.on('ready', () => {
    console.log(`BOT INICIADO COM SUCESSO , ATUALMENTE  ${client.users.size} USUÁRIOS, EM ${client.channels.size} CANAIS DE ${client.guilds.size} guilds.`);   
});

client.on("guildDelete", guild => {
    console.log(`Eu fui Removido dos seguintes canais: ${guild.name} (id: ${guild.id})`);
    client.user.setGame(`on ${client.guilds.size} servers`);
  });

//

client.on('ready', function() {
    client.user.setUsername("ᗰᖇ.ᖇ〇ᙖ〇Ƭ");

})

client.on('message', message => {



  if(message.author.id !== "447234275289464842") return;
  const prefix = "!";
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval")) {
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

client.on('message', message => {
		if (message.content.split(" ")[0] == "!ccdodrake") {
            message.channel.send("", {
                file: "https://resources.stuff.co.nz/content/dam/images/1/8/3/a/m/s/image.related.StuffLandscapeSixteenByNine.620x349.1ckg95.png/1467166850222.jpg" // Or replace with FileOptions object
            });
}
	
    if (message.content === 'thalys fdp') {
        message.reply('você não pode xingar meu dono :angry: !').then(msg => {
            msg.react('👆').then((msgreaction) => msgreaction.message.edit('o Thalys é muito Lindo 😍 '));
        })
    }
})

client.on('message', message => {
		if (message.content.split(" ")[0] == "!ccdothe") {
            message.channel.send("", {
                file: "https://resources.stuff.co.nz/content/dam/images/1/8/3/a/m/s/image.related.StuffLandscapeSixteenByNine.620x349.1ckg95.png/1467166850222.jpg" // Or replace with FileOptions object
            });
}
	
    if (message.content === 'thalys fdp') {
        message.reply('você não pode xingar meu dono :angry: !').then(msg => {
            msg.react('👆').then((msgreaction) => msgreaction.message.edit('o Thalys é muito Lindo 😍 '));
        })
    }
})

client.on('message', message => {
    if (message.content === '!cpf') {
        message.reply('**é viado 👬**?').then(msg => {
            msg.react('👍').then((msgreaction) => msgreaction.message(''));
            msg.react('👎').then((msgreaction) => msgreaction.message(''));
			
			
        })
    }
})  

client.on('message', message => {
    if (message.content === '**THALYS PRETO FUDIDO**') {
        message.reply('**é viado**?').then(msg => {
            msg.react('👍').then((msgreaction) => msgreaction.message(''));
            msg.react('👎').then((msgreaction) => msgreaction.message(''));
        })
    }
})  

client.on('message', message => {
    if (message.content === '**THALYS FUDIDO**') {
        message.reply('**é viado**?').then(msg => {
            msg.react('👍').then((msgreaction) => msgreaction.message(''));
            msg.react('👎').then((msgreaction) => msgreaction.message(''));
        })
    }
})  

client.on('message', message => {
	
	

    if (message.content === 'HulkDusVidros meu ovo @everyone') {
        message.reply('**é viado**?').then(msg => {
            msg.react('👍').then((msgreaction) => msgreaction.message(''));
            msg.react('👎').then((msgreaction) => msgreaction.message(''));
        })
    }
})  



client.on('message', message => {
    if (message.content === 'HULKDUSVIDIO MEU OVO') {
        message.reply('**é viado**?').then(msg => {
            msg.react('👍').then((msgreaction) => msgreaction.message(''));
            msg.react('👎').then((msgreaction) => msgreaction.message(''));
        })
    }
})  

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: "By: Thalys", type: 0} });
});
// Mensagem de boas vindas
client.on('guildMemberAdd', member => {
    member.send("Olá Seja bem vindo ao servidor, divirta-se!");

 }); 
//  >

client.on(`message`, message => {
	
					if(message.content.split(" ")[0] == "!avatar"){
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if(message.mentions.users.first() !== undefined){
        	message.channel.sendMessage(':frame_photo: | O link para o avatar de **' + message.mentions.users.first().username + '** é: **' + message.mentions.users.first().avatarURL + '**.')
        } else if (parts[1] === 'server') {
        	message.channel.sendMessage(':frame_photo: | O link para o avatar deste server é: **' + message.guild.iconURL + '**.')
        } else if (parts[1] === 'me') {
        	message.channel.sendMessage(':frame_photo: | O link para o seu avatar é: **' + message.author.avatarURL + '**.')
        } else {
        	message.channel.sendMessage('<:vpRedTick:409865500101967875> | Você não deu argumentos corretos. Digite `!avatar` para ver exemplos.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}

//

    if (message.content.split(" ")[0] == "!status") {
        var msg = message;
        if (msg.member.hasPermission("FUNDADOR")) {
            var jogo = message.content.replace("!status ","");
            client.user.setPresence({ game: { name: jogo, type: 0 } });
            message.channel.send(" **O status foi alterado para:** "+jogo);
        }
    }
}
);

client.on(`message`, message => {

	
	
    if (message.content.split(" ")[0] == "!statusoff") {
        var msg = message;
        if (msg.member.hasPermission("FUNDADOR")) {
            var jogo = message.content.replace("!status ","");
            client.user.setPresence({ stats: { name: "By: Thalys", type: 0} });
            message.channel.send(" O status foi reestabelecido");
        }
    }
}
);

client.on(`message`, message => {
	
	

  var argssim = message.content.substring(prefix.length).split("bot");


    if (message.content.startsWith(prefix + "bot")) {
    if (!argssim[1]){
  
      message.reply("Tem algo de errado ai.")
    }else{
      
      http.get('http://api.simsimi.com/request.p?key=f985f0f1-71e9-49ae-bd5b-16a6499831a8&lc=pt&ft=1.0&text='+ argssim[1] +'', (resp) => {
            let data = '';
          
            resp.on('data', (chunk) => {
              data += chunk;
            });
          
            resp.on('end', () => {
                  var msg1 = JSON.parse(data).response

                  message.reply(""+ msg1 +"")
    
                
                });
              
              });
      
    }
      
    }
	
  if (message.content === '!gate') {
	    var embed = new Discord.RichEmbed();
        embed.setColor(0x00ff00);
        embed.setAuthor(message.author.username, message.author.avatarURL)
        embed.setDescription("INFORMAÇÕES DO GATE : **ATIVO!** \nBANDEIRAS: **VISA/MASTERCARD/AMEX** \nFORMATO: **5491670431471502|06|2024|294**");
	    embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Emojione_2611.svg/1024px-Emojione_2611.svg.png")
        embed.setFooter("ᗰᖇ.ᖇ〇ᙖ〇Ƭ", "http://tfwiki.net/mediawiki/images2/d/d7/RescueUnderzinhos_symbol.png");
        embed.setTimestamp () 
        message.channel.send({ embed })
  }
}); 


      // Comandos do chat
    
client.on('message',async  (msg) => {
    var is_PM = msg.channel.type == "dm";
    var message = msg;
    if(is_PM && msg.author.id != "447234275289464842"){
        if(message.content.split(" ")[0] == "!chk")
        return message.reply("eai carai para com essa porra mermão nao pode usar o !chk aqui nao!", {file: "http://www.manhuntdaily.com/files/Trevor-Knight-gay-porn-star-beard-big-cock-4.jpg" });


        
    }

    if(msg.content.split(" ")[0].indexOf("!") < 0){
        return;
    }
    var cmd = msg.content.split(" ")[0];

    if(cmd == "!on"){
        msg.channel.send("Estou sim");
    }

			if(message.content.split(" ")[0] == "!get"){
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    let usermentioned = message.mentions.users.first();
        if (usermentioned === undefined) {
            message.channel.sendMessage(':no_entry_sign:  409865500101967875> | O usuário mencionado não é um BOT. (ou ninguém foi mencionado)').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
        } else if (usermentioned.BOT) {
            message.channel.sendMessage(':white_check_mark: 409865500101967875> | O link de convite para o BOT **' + usermentioned.username + '** é: **<https://discordapp.com/oauth2/authorize?&client_id=' + usermentioned.id + '&scope=BOT>**.');
        } else {
            message.channel.sendMessage(':no_entry_sign: 409865500101967875> | O usuário mencionado não é um BOT. (ou ninguém foi mencionado)').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
        }
}     

			if(message.content.split(" ")[0] == "!ping"){
		     message.channel.sendMessage(':alarm_clock: | Ping...').then(message => {
		     message.edit(':alarm_clock: | O ping é de ' + (Date.now() - message.createdTimestamp) + 'ms.')
	})
}
//
	
	
// Anti !chk no chat
  if(msg.content.split(" ")[0].indexOf("!") < 0){
        return;
    }
    var cmd = msg.content.split(" ")[0];

    if(cmd == "!on"){
        msg.channel.send("Estou sim");
    }

    //
    if (cmd == "!viado") {
        var usuario = msg.guild.member(msg.mentions.users.first());
        if (!usuario) {
            return;
        }
        if (msg.member.hasPermission("FUNDADOR")) {
            msg.channel.send(" O " + usuario + " é muito viadão!");
        }
    }

    /*if(cmd == "!on"){
        msg.channel.send("Estou sim");
    }*/
    if(cmd == "!status_chk"){
		var msg = message;
        if (msg.member.hasPermission("FUNDADOR"))
        if(status_chk == true){
        status_chk = false;
        msg.reply("**COMANDO DESATIVADO!.**");
        } else {
        status_chk = true
        msg.reply("**COMANDO ATIVADO!.**");
        }
    }
	//
	
	    // Voteban e Votekick - >
    var voteban = false;
    var vote_sim = 0;
    var vote_nao = 0;

    client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name === "👍") {
            vote_sim++;
        }
        if(reaction.emoji.name === "👎") {
            vote_nao++;
        }
    });

    if (cmd == "!voteban") {
        let modRole = msg.guild.roles.find("name", "FUNDADOR");
        if(msg.member.roles.has(modRole.id)) {
        if (!voteban) {
            voteban = true;
            vote_sim = 0;
            vote_nao = 0;

            var usuario = msg.guild.member(msg.mentions.users.first());

            var embed = new Discord.RichEmbed();
            embed.setColor(0x1aa8fd);
            embed.setAuthor(msg.author.username, msg.author.avatarURL);
            embed.setTimestamp();
            embed.setDescription("**Uma votação foi iniciada contra:** " + usuario);
            msg.channel.send({embed})
                    .then(function (message) {
                        message.react("👍");
                        message.react("👎");
                        
                    });

            setTimeout(function () {
                msg.channel.send("Faltam 15 segundos para encerrar a votação.");
                setTimeout(function () {

                    if ((vote_nao + vote_sim) > 2) {

                        var porcent_ban = (vote_sim * 100) / (vote_nao + vote_sim);
                        if (porcent_ban > 50) {
                            var embed = new Discord.RichEmbed();
                            embed.setColor(0x00ff00);
                            embed.setAuthor(msg.author.username, msg.author.avatarURL);
                            embed.setTimestamp();
                            embed.setDescription("Votação finalizada\nResultado: **Aprovado**");
                            console.log("Usuario: "+message.username+" foi banido com "+vote_sim+" votos positivos e "+vote_nao+" votos negativos!");
                            msg.channel.send({embed});
                            msg.guild.member(usuario).ban();
                            vote_sim = 0;
                            vote_nao = 0;
                        } else {
                            var embed = new Discord.RichEmbed();
                           embed.setColor(0xff0000);
                            embed.setAuthor(msg.author.username, msg.author.avatarURL);
                            embed.setTimestamp();
                            embed.setDescription("Votação finalizada\nResultado: **Negado**");
                            msg.channel.send({embed});
                            vote_sim = 0;
                            vote_nao = 0;
                        }
                    } else {
                        msg.channel.send("**Votação encerrada por falta de votos!**");
                        vote_sim = 0;
                        vote_nao = 0;
                    }

                }, 1000 * 15);
            }, 1000 * 15);

        } else {
            msg.reply("**Já tem uma votação em andamento!**");
        }
    }
}

    var votekick = false;
    var vote_sim1 = 0;
    var vote_nao2 = 0;

    client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name === "👍") {
            vote_sim1++;
        }
        if(reaction.emoji.name === "👎") {
            vote_nao2++;
        }
    });

    if (cmd == "!votekick") {
        let modRole = msg.guild.roles.find("name", "FUNDADOR");
        if(msg.member.roles.has(modRole.id)) {
        if (!voteban) {
            votekick = true;
            vote_sim1 = 0;
            vote_nao2 = 0;

            var usuario = msg.guild.member(msg.mentions.users.first());

            var embed = new Discord.RichEmbed();
            embed.setColor(0x1aa8fd);
            embed.setAuthor(msg.author.username, msg.author.avatarURL);
            embed.setTimestamp();
            embed.setDescription("**Uma votação foi iniciada contra:** " + usuario);
            msg.channel.send({embed})
                    .then(function (message) {
                        message.react("👍");
                        message.react("👎");
                        
                    });

            setTimeout(function () {
                msg.channel.send("Faltam 15 segundos para encerrar a votação.");
                setTimeout(function () {

                    if ((vote_nao + vote_sim) > 2) {

                        var porcent_kick = (vote_sim * 100) / (vote_nao2 + vote_sim1);
                        if (porcent_kick > 50) {
                            var embed = new Discord.RichEmbed();
                            embed.setColor(0x00ff00);
                            embed.setAuthor(msg.author.username, msg.author.avatarURL);
                            embed.setTimestamp();
                            embed.setDescription("Votação finalizada\nResultado: **Aprovado**");
                            console.log("O usuario: "+message.users+" foi kickado com "+vote_sim1+" votos positivos e "+vote_nao2+ "votos negativos!");
                            msg.channel.send({embed});
                            msg.guild.member(usuario).kick();
                            vote_sim = 0;
                            vote_nao = 0;
                        } else {
                            var embed = new Discord.RichEmbed();
                           embed.setColor(0xff0000);
                            embed.setAuthor(msg.author.username, msg.author.avatarURL);
                            embed.setTimestamp();
                            embed.setDescription("Votação finalizada\nResultado: **Negado**");
                            msg.channel.send({embed});
                            vote_sim = 0;
                            vote_nao = 0;
                        }
                    } else {
                        msg.channel.send("**Votação encerrada por falta de votos!**");
                        vote_sim = 1;
                        vote_nao = 2;
                    }

                }, 1000 * 15);
            }, 1000 * 15);

        } else {
            msg.reply("**Já tem uma votação em andamento!**");
        }
    }
}
       // Voteban e Votekick - >


    //Ban/Kick
    if(cmd == "!ban") {
        let modRole = msg.guild.roles.find("name", "FUNDADOR");
        if(msg.member.roles.has(modRole.id)) { 
          let banMember = msg.guild.member(msg.mentions.users.first());
          msg.guild.member(banMember).ban();
          msg.channel.sendMessage("**Membro banido com sucesso!**");
        } else {
          return msg.reply("**Você não tem permisão para banir membros.**");
        }
      }

      if(cmd == "!kick") {
        let modRole = msg.guild.roles.find("name", "FUNDADOR");
        if(msg.member.roles.has(modRole.id)) { 
          let banMember = msg.guild.member(msg.mentions.users.first());
          msg.guild.member(banMember).kick();
          msg.channel.sendMessage("**Membro kickado com sucesso!**");
        } else {
          return msg.reply("**Você não tem permisão para kickar membros.**");
        }
      }
      //Ban/Kick

      // Comandos do chat
      if(cmd == "!comandos"){
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("A lista de comandos")
        .addField("!on", "Irá verifica se o BOT está online")
        .addField("!gate", "Irá listar as informações do gate.")
        .addField("!chk", "Irá testar sua chk.")
        .addField("!votekick ou !voteban", "irá iniciar uma votação.")
        .addField("!BOT", "Comando utilizado para conversar com o Underzinho.")
        .addField("!Underzinho", "Comando utilizado para conversar com o Underzinho.")
        .addField("!avatar", "Comando utilizado para pegar avatar de um usuário.")
        .addField("!comandos", "Irá listar os comandos atuais.")
         message.channel.send({embed});
}
// >
	
	
    //Checker de cc
	
          if(message.content.split(" ")[0] == "!chk"){
            if(!status_chk) {
                return message.reply("**COMANDO DESABILITADO PELO ADMINISTRADOR!.**");
                }
            if(message.content.split(" ")[1]){
            var chk = message.content.split(" ")[1];
            message.reply("TESTE INICIADO!...");
            var url = "http://transforsf.esy.es/thalys/api.php?copianaocomedia="+chk;
            var msg = message.content;
            var chk = msg.replace("!chk ", "").split("\n");
   
            var lives = "";
            var dies = "";
            var i = 0;
            var t = 0;
    
            if(chk.length > 1){
                return message.reply("Apenas 5 chk's por vez!");
            }
            chk.forEach(function (value) {
                t++;
                setTimeout(function () {
                    request("http://transforsf.esy.es/thalys/api.php?copianaocomedia="+value, function (error, response, body) {
                        if (body.indexOf("**#APROVADA**") > -1) {
                            lives += body + "\n\n" ;
                        } else {
                            dies += body + "\n\n" ;
                        }
                        i++;
                        console.log(i + "/" + chk.length + " = " + body+" "+message.author.username);
                        if (i >= chk.length) {
              if(lives){
                                var embed = new Discord.RichEmbed();
                                embed.setColor(0x09ff00);
                                embed.setAuthor(message.author.username, message.author.avatarURL)
                                embed.setDescription(lives);
                                embed.setTimestamp();
                                embed.setFooter("ᗰᖇ.ᖇ〇ᙖ〇Ƭ", "https://cdn2.iconfinder.com/data/icons/people-3-2/128/Secret-Agent-Detective-Man-Spy-Inspector-512.png");
                                message.channel.send({embed});
                            }
              
                            if (dies) {
                                var embed = new Discord.RichEmbed();
                                embed.setColor(0xff00ce);
                                embed.setAuthor(message.author.username, message.author.avatarURL)
                                embed.setTimestamp();
                                if (dies.length > 1900) {
      
                                } else {
                                    embed.setDescription(dies);
                                }
                                message.channel.send({embed});
                            } 
                        }
                    });
                }, t * 200);
            });
    
        }
		
	//

	
    //	
		
    }else if(message.content.split(" ")[0] == "!on?"){
    var myArray = ['Toma karen toma', 'Fala', 'Pois, não?', 'tô', 'maséclaro', 'vtnc', 'não não to off'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    msg.channel.send(rand+' '+message.author);
  }else if(message.content.split(" ")[0] == "!limpar"){
    if (message.member.hasPermission("FUNDADOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
  }
  
  
      

});

//



    //Checker de chk

client.login('NDQ3MjM0Mjc1Mjg5NDY0ODQy.DeEm6g.RjzQ8rPR2oxv0JxQBsXObN9MP-w');
