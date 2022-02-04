const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES  
    ]
});
const prefix = "$";

Client.on("ready", () => {
    console.log("Bot activé");
});

//status
Client.on("ready", () => {
    function randomStatus() {
        let status = ["En développement !"]
        let rstatus = Math.floor(Math.random() * status.length);
        Client.user.setActivity(status[rstatus], {type: "PLAYING", url: "https://www.twitch.tv/mister_63"});
    }; setInterval(randomStatus, 5000)
});

Client.on("messageCreate", message => {
    if(message.member.permissions.has("ADMINISTRATOR")){
        //$Staff
        if(message.content === prefix + "Staff"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#ffffff")
                .setAuthor("Staff Aromencia RP!")
                .addField(":crown: **Fondateur :**", "\n\n<@680759710131290255> \n<@693496867232809001> \n<@450033906826084352>")
                .addField(":face_with_symbols_over_mouth: **Modérateur :**", "\n\n<@433280268606898198> \n<@650359253147713538>")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$modif
        if(message.content === prefix + "modif"){
            const embed = new Discord.MessageEmbed()
                .setColor("#008000")
                .setDescription(":tools: **__FIX__** :tools:\n\n●");

            message.channel.send({ embeds: [embed]});
        }
        if(message.content === prefix + "modif"){
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setDescription(":tada: **__MODIFICATIONS__** :tada:\n\n●")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$liste
        if(message.content === prefix + "liste"){
            message.delete()
           const embed = new Discord.MessageEmbed()
                .setColor("#889999")
                .setAuthor("Liste des tâches a faire !")
                .setDescription("")
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]}); 
            console.log("Commande Reçu");  
        }

        //$WLopen
        if(message.content === prefix + "WLopen"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#008000")
                .setAuthor("Bienvenue sur la WhiteList de AromenciaRP")
                .setDescription("Tous d'abord je t'invite à créer ton dossier (les prérequis sont dans <#915184047037247539>) et de l'envoyer dans <#915184047037247539> !\nMaintenant que tu as remplit les conditions va dans le vocal <#915185100243730442> !\n\nAlors bonne chance à toi !:tada:")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            message.channel.send("https://media.discordapp.net/attachments/889560485979119666/931519646664888360/standard.gif")
            message.channel.send("<@&915184056864473088>")
            console.log("Commande Reçu");
        }

        //$WLclose
        if(message.content === prefix + "WLclose"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setAuthor("Bienvenue sur la WhiteList de AromenciaRP")
                .setDescription("Malheureusement les Whitelistes sont Fermé mais je t'invite tous de même à créer ton dossier (les prérequis sont dans <#915184047037247539>) et de l'envoyer dans <#915184047037247539> !\n\nSur ce à bientôt !:sob:")
                .setTimestamp()
                .setFooter("By Mister");
    
            message.channel.send({ embeds: [embed]});
            message.channel.send("https://media.discordapp.net/attachments/889560485979119666/931519646664888360/standard.gif")
            console.log("Commande Reçu");
        }

        //$Daccepté
        if(message.content === prefix + "Daccepté"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#1BC700")
                .setAuthor("Réponse Dossier !")
                .setDescription("Bonjour/Bonsoir !\n\nSuite à la demande éffectué,\n nous somme en mesure de te dire que ton dossier est accepté !\nJe t'invite donc à nous partager une pub pour ton entreprise,\n d'içi peu pour que nous puissions te l'afficher dans <#915202089288876063>!\n\nSi tu n'as pas d'autre question je t'invite à fermer ce ticket! Félicitation!\nL'équipe du staff d'Aromencia")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$Drefusé
        if(message.content === prefix + "Drefusé"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#C70000")
                .setAuthor("Réponse Dossier !")
                .setDescription("Bonjour/Bonsoir !\n\nSuite à la demande éffectué,\n nous somme malheureusement désolé de te dire que ton dossier est refusé !\nJe t'invite donc à revoir ton dossier et de l'améliorer pour te donner une seconde chance.\nSi tu ne souhaite pas retanter je t'invite a aller voir dans <#915202089288876063> une entreprise qui pourrait te plaire !\n\nSi tu n'as pas d'autre question je t'invite à fermer ce ticket!\nL'équipe du staff d'Aromencia")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$Edossier
        if(message.content === prefix + "Edossier"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#0C00C7")
                .setAuthor("Dossier Entreprise !")
                .setDescription("Bonjour/Bonsoir !\n\nAvant de créer ton dossier je t'invite à regardé dans <#933006592562040842> si l'Entreprise que tu souhaite reprendre est toujours disponible !\n\nTous d'abord ton dossier doit être sous Google Doc.\n\nMaintenant que tu est prêt voici les pré-requis qui doivent impérativement figuré sur ton dossier :\n- Présentation de l'entreprise (Présentation, Objectifs, Hiérarchie, Véhicules, Tenues, ...)\n- L'emplacement et le mapping souhaité.\n- Des propositions d'événements (légaux/illégaux).\n- Les véhicule que ton entreprise aurra\n- Les activités de ton entreprise.\n\nSi tu n'as pas d'autre question je t'invite à fermer ce ticket!\nL'équipe du staff d'Aromencia")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$Gdossier
        if(message.content === prefix + "Gdossier"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#C71200")
                .setAuthor("Dossier Groupe !")
                .setDescription("Bonjour/Bonsoir !\n\nAvant de créer ton dossier je t'invite à regardé dans <#933006592562040842> si le Groupe que tu souhaite reprendre est toujours disponible !\n\nTous d'abord ton dossier doit être sous Google Doc.\n\nMaintenant que tu est prêt voici les pré-requis qui doivent impérativement figuré sur ton dossier :\n- Présentation du groupe (Histoire, Origines, Hiérarchie, Style Vestimentaire...)\n- L'emplacement et le mapping souhaité.\n- Des propositions d'événements (légaux/illégaux).\n- Les véhicule que ton groupe aurra (pour vérifier que la cohérence RP est présente)\n- Les activités de ton groupe.\n\nSi tu n'as pas d'autre question je t'invite à fermer ce ticket!\nL'équipe du staff d'Aromencia")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$Ecmd
        if(message.content === prefix + "Ecmd"){
            message.channel.send("Bonjour/Bonsoir chère citoyen !\n\nVoici les entreprises et groupes disponibles sur le serveur !\nPour les entreprises et groupes, ceci :x: Signifie que l'entreprise à déja un patron ,\nalors que ceci :white_check_mark: signifie que l'entreprise est libre et prête à être reprise !\n(c'est la même chose pour les groupes)\nMaintenant parlons des formats des dossier ils doivent être sous Gdoc et doivent avoir les informations suivantes:\n\nPour les groupes :\n- Présentation du groupe (Histoire, Origines, Hiérarchie, Style Vestimentaire...)\n- L'emplacement et le mapping souhaité.\n- Des propositions d'événements (légaux/illégaux).\n- Les véhicule que ton groupe aurra (pour vérifier que la cohérence RP est présente)\n- Les activités de ton groupe.\n\nPour les entreprises :\n- Présentation de l'entreprise (Présentation, Objectifs, Hiérarchie, Véhicules, Tenues, ...)\n- L'emplacement et le mapping souhaité.\n- Des propositions d'événements (légaux/illégaux).\n- Les véhicule que ton entreprise aurra\n- Les activités de ton entreprise.\n\nVoici maintenant la liste des Entreprises et Grouves avec leur disponiblités")
            const embed = new Discord.MessageEmbed()
                .setColor("#0C00C7")
                .setAuthor("Entreprises !")
                .setDescription(":ambulance: - EMS :white_check_mark:\n:police_car: - LSPD :x:\n:red_car: - Concessionnaire Voiture :x:\n:motorcycle: - Concessionnaire Moto :x:\n:tools: - Benny's :x:\n:taxi: - Taxi :white_check_mark:\n:movie_camera: - Weazel News :white_check_mark:\n:hamburger: - Burger Shot :white_check_mark:\n ")

            message.channel.send({ embeds: [embed]});
        }
        if(message.content === prefix + "Ecmd"){
            message.delete()
            const embed = new Discord.MessageEmbed()
                .setColor("#C71200")
                .setAuthor("Groupes !")
                .setDescription(":purple_circle: - Ballas :white_check_mark:\n:green_circle: - Famillies :white_check_mark:\n:yellow_circle: - Vagos :white_check_mark:\n:red_circle: - SPSE :x:")
                .setTimestamp()
                .setFooter("By Mister");

            message.channel.send({ embeds: [embed]});
            console.log("Commande Reçu");
        }

        //$test
        if(message.content === prefix + "test"){
            message.delete()
            member.roles.add("915181919099047936")
            console.log("TEST");
        }
    }
});

Client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("Nombre de message incorrect ou trop petit !");
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message incorrect ou trop petit !"); 
                }
                else{
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Suppression de " + messages.size + " messages réussi !");
                    }).catch(err => {
                        console.log("Erreur de clear : " + err);
                    });
                }
            }
        }
    }
});

Client.login(process.env.TOKEN);

//"OTMxOTQ0NjYxMzQ0NDYwOTAx.YeLzGQ.ZFsU98lj8S27M-VdDdnIqCzYHl4"