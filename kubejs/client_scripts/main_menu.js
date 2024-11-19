events.listen("ui.main_menu", (event) => {
    event.replace((ui) => {
        ui.panorama("ftbacademy:textures/menu/background/panorama");
        ui.widgetTexture = "ftbacademy:textures/menu/widgets.png";

        const textColor = 0xffffff;
        const textHoverColor = 0xffffff;

        // If MT is loaded
        if (Platform.mods.minetogether.id) {
            //MineTogether friends list
            ui.button((b) => {
                b.name = Text.translate("minetogether.multiplayer.friends");
                b.color = textColor;
                b.hoverColor = textHoverColor;
                b.width = 70;
                b.x = ui.width - b.width - 5;
                b.y = 5;
                b.action = "minetogether:friends_list";
                b.shadow = false;
            });

            //MineTogether chat
            ui.imageButton((b) => {
                b.width = 20;
                b.x = ui.width - b.width - 77;
                b.y = 5;
                b.action = "minetogether:chat";
                b.texture = "ftbacademy:textures/menu/chat.png";
            });

            //MineTogether order server
            ui.imageButton((b) => {
                b.width = 20;
                b.x = ui.width - b.width - 5;
                b.y = ui.height - b.height - 5;
                b.action = "minetogether:order";
                b.texture = "ftbacademy:textures/menu/creeper.png";
            });
        }

        //Singleplayer
        ui.button((b) => {
            b.name = Text.translate("menu.singleplayer");
            b.color = textColor;
            b.hoverColor = textHoverColor;
            b.width = 90;
            b.x = ui.width / 2 - b.width / 2 - b.width - 2;
            b.y = ui.height - b.height - 60;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
        });

        //multiplayer
        ui.button((b) => {
            b.name = Text.translate("menu.multiplayer");
            b.color = textColor;
            b.hoverColor = textHoverColor;
            b.width = 90;
            b.x = ui.width / 2 - b.width / 2 - b.width - 2;
            b.y = ui.height - b.height - 38;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
        });

        //Mods
        ui.button((b) => {
            b.name = Text.translate("fml.menu.mods");
            b.color = textColor;
            b.hoverColor = textHoverColor;
            b.width = 90;
            b.x = ui.width / 2 - b.width / 2;
            b.y = ui.height - b.height - 60;
            b.action = "forge:mod_list";
            b.shadow = false;
        });

        //Support
        ui.button((b) => {
            b.name = Text.of("Support");
            b.color = textColor;
            b.hoverColor = textHoverColor;
            b.width = 90;
            b.x = ui.width / 2 - b.width / 2;
            b.y = ui.height - b.height - 38;
            b.action = "https://www.feed-the-beast.com/support";
            b.shadow = false;
        });

        //Options
        ui.button((b) => {
            b.name = Text.translate("menu.options");
            b.color = textColor;
            b.hoverColor = textHoverColor;
            b.width = 90;
            // b.x = ui.width / 2 - b.width * 2 - 36;
            b.x = ui.width / 2 + b.width / 2 + 2;
            b.y = ui.height - b.height - 60;
            b.action = "minecraft:options";
            b.shadow = false;
        });

        //Quit
        ui.button((b) => {
            b.name = Text.of("Quit");
            b.color = textColor;
            b.hoverColor = textHoverColor;
            b.width = 90;
            // b.x = ui.width / 2 - b.width - 35;
            b.x = ui.width / 2 + b.width / 2 + 2;
            b.y = ui.height - b.height - 38;
            b.action = "minecraft:quit";
            b.shadow = false;
        });

        //Pack logo
        ui.image((i) => {
            i.height = 1024 * 0.165;
            i.width = 1024 * 0.165;
            i.x = ui.width / 2 - i.width / 2;
            i.y = ui.height / 2 - i.height / 2 - 44;
            i.texture = "ftbacademy:textures/menu/logo.png";
        });

        //Discord link
        ui.imageButton((b) => {
            b.width = 20;
            b.x = ui.width - b.width - 27;
            b.y = ui.height - b.height - 5;
            b.action = "https://ftb.team/discord";
            b.texture = "ftbacademy:textures/menu/discord_hover.png";
            b.hoverTexture = "ftbacademy:textures/menu/discord_hover.png";
        });

        //Aux
        ui.imageButton((b) => {
            b.width = 20;
            b.x = ui.width - b.width - 49;
            b.y = ui.height - b.height - 5;
            b.action = "ftbauxilium:opt_out";
            b.texture = "ftbacademy:textures/menu/auxilium.png";
        });

        //Mojang
        ui.label((l) => {
            l.height = 10;
            l.name = "Copyright Mojang AB. Do not distribute!";
            l.x = 5;
            l.y = ui.height - 14;
        });
    });
});
