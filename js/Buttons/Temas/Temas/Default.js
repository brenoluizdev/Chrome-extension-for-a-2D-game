// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Default);
else Default();

function Default() {
    var Default = document.querySelector('#buttonTheme2');

    var body = document.querySelector("body");
    var pageContainer = document.querySelector("#pagecontainer");
    var headerGame = document.querySelector("#pretty_top_bar");
    var headerText1 = document.querySelector("#pretty_top_playercount");
    var headerText2 = document.querySelector("#pretty_top_level");
    var headerText3 = document.querySelector("#pretty_top_replay_text");
    var headerText4 = document.querySelector("#pretty_top_replay_text > span:nth-child(2)");
    var headerText5 = document.querySelector("#pretty_top_replay_fav");
    var headerText6 = document.querySelector("#pretty_top_replay_back");
    var headerText7 = document.querySelector("#pretty_top_replay_next");
    var headerText8 = document.querySelector("#pretty_top_replay_report");
    var headerText9 = document.querySelector("#pretty_top_volume_music");
    var headerText10 = document.querySelector("#pretty_top_settings");
    var headerText11 = document.querySelector("#pretty_top_exit");

    var configBG = document.querySelector("#settingsContainer");
    var configText1 = document.querySelector("#settings_heading_controls");
    var configText2 = document.querySelector("#settings_heading_general");
    var configText3 = document.querySelector("#settings_heading_performance");
    var configText4 = document.querySelector("#settings_graphicsquality_label");
    var configText5 = document.querySelector("#settings_fps_label");
    var configText6 = document.querySelector("#settings_graphicsquality > option:nth-child(1)");
    var configText7 = document.querySelector("#settings_graphicsquality > option:nth-child(2)");
    var configText8 = document.querySelector("#settings_graphicsquality > option:nth-child(3)");
    var configText9 = document.querySelector("#settings_heading_account");
    var configText10 = document.querySelector("#redefineControls_table > tbody");
    var configText11 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(2)");
    var configText12 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(3)");
    var configText13 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(4)");
    var configText14 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(5)");
    var configText15 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(6)");
    var configText16 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(7)");
    var configText17 = document.querySelector("#redefineControls_table > tbody > tr:nth-child(8)");

    var bonkTooolsConfig = document.querySelector("#divButtons");
    var bonkToolsConfigTopBar = document.querySelector("#divButtons > div.windowTopBar.windowTopBar_classic");
    var CloseBonkTools = document.querySelector("#divButtons > div.windowCloseButton.brownButton.brownButton_classic.buttonShadow");
    var BonkToolsButtons = document.querySelector("#divButtons > div.containerButtons > button");

    var saveTema = localStorage.getItem('Tema');

    Default.addEventListener('click', function () {
        localStorage.setItem('Tema', 'Default');

        body.style = 'background-color: none;';
        pageContainer.style = 'background-color: none;';
        headerGame.style = 'background-color: none;';
        headerText1.style = 'background-color: none; color: none;';
        headerText2.style = 'background-color: none; color: none;';
        headerText3.style = 'background-color: none; color: none;';
        headerText4.style = 'background-color: none; color: none;';
        headerText5.style = 'background-color: none; color: none;';
        headerText6.style = 'background-color: none; color: none;';
        headerText7.style = 'background-color: none; color: none;';
        headerText8.style = 'background-color: none; color: none;';
        headerText9.style = 'background-color: none; color: none;';
        headerText10.style = 'background-color: none; color: none;';
        headerText11.style = 'background-color: none; color: none;';
        configBG.style = 'background-color: none; color: none;';
        configText1.style = 'background-color: none; color: none;';
        configText2.style = 'background-color: none; color: none;';
        configText3.style = 'background-color: none; color: none;';
        configText4.style = 'background-color: none; color: none;';
        configText5.style = 'background-color: none; color: none;';
        configText6.style = 'background-color: none; color: none;';
        configText7.style = 'background-color: none; color: none;';
        configText8.style = 'background-color: none; color: none;';
        configText9.style = 'background-color: none; color: none;';
        configText10.style = 'background-color: none; color: none;';
        configText11.style = 'background-color: none; color: none;';
        configText12.style = 'background-color: none; color: none;';
        configText13.style = 'background-color: none; color: none;';
        configText14.style = 'background-color: none; color: none;';
        configText15.style = 'background-color: none; color: none;';
        configText16.style = 'background-color: none; color: none;';
        configText17.style = 'background-color: none; color: none;';
        bonkTooolsConfig.style = 'background-color: none; color: none;';
        bonkToolsConfigTopBar.style = 'background-color: none; color: none;';
        CloseBonkTools.style = 'background-color: none; color: none;';
        BonkToolsButtons.style = 'background-color: none; color: none;';
    });

    if (saveTema == 'Default') {
        localStorage.setItem('Tema', 'Default');

        body.style = 'background-color: none;';
        pageContainer.style = 'background-color: none;';
        headerGame.style = 'background-color: none;';
        headerText1.style = 'background-color: none; color: none;';
        headerText2.style = 'background-color: none; color: none;';
        headerText3.style = 'background-color: none; color: none;';
        headerText4.style = 'background-color: none; color: none;';
        headerText5.style = 'background-color: none; color: none;';
        headerText6.style = 'background-color: none; color: none;';
        headerText7.style = 'background-color: none; color: none;';
        headerText8.style = 'background-color: none; color: none;';
        headerText9.style = 'background-color: none; color: none;';
        headerText10.style = 'background-color: none; color: none;';
        headerText11.style = 'background-color: none; color: none;';
        configBG.style = 'background-color: none; color: none;';
        configText1.style = 'background-color: none; color: none;';
        configText2.style = 'background-color: none; color: none;';
        configText3.style = 'background-color: none; color: none;';
        configText4.style = 'background-color: none; color: none;';
        configText5.style = 'background-color: none; color: none;';
        configText6.style = 'background-color: none; color: none;';
        configText7.style = 'background-color: none; color: none;';
        configText8.style = 'background-color: none; color: none;';
        configText9.style = 'background-color: none; color: none;';
        configText10.style = 'background-color: none; color: none;';
        configText11.style = 'background-color: none; color: none;';
        configText12.style = 'background-color: none; color: none;';
        configText13.style = 'background-color: none; color: none;';
        configText14.style = 'background-color: none; color: none;';
        configText15.style = 'background-color: none; color: none;';
        configText16.style = 'background-color: none; color: none;';
        configText17.style = 'background-color: none; color: none;';
        bonkTooolsConfig.style = 'background-color: none; color: none;';
        bonkToolsConfigTopBar.style = 'background-color: none; color: none;';
        CloseBonkTools.style = 'background-color: none; color: none;';
        BonkToolsButtons.style = 'background-color: none; color: none;';
    }
};