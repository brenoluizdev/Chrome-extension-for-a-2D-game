// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', BlackEWhite);
else BlackEWhite();

function BlackEWhite() {
    var BlackEWhite = document.querySelector('#buttonTheme1');

    var roomList = document.querySelector('#roomlist');
    var roomListTopBar = document.querySelector('#roomlisttopbar');
    var roomListTableHeader = document.querySelector('#roomlisttableheadercontainer');
    var roomListTableHover = document.querySelector('.HOVERSELECTED');
    var roomListTableHoverCss = '.HOVERSELECTED:hover {background-color: white !important; color: black !important; cursor: pointer;}';
    var roomListJoined = document.querySelector('.roomlisttablejoined');
    var roomListTableTr = document.querySelector('#roomlisttable tr:nth-child(odd)');
    var roomListTableTh = document.querySelector('#roomlisttable th');
    var roomListTableTd = document.querySelector('#roomlisttable td');
    var roomListTableTdTh = document.querySelector('#roomlisttable tr.SELECTED td');

    var saveTema = localStorage.getItem('Tema');

    el.style.cssText =
    'color: blue;' +
    'background-color: yellow;' +
    'border: 1px solid magenta';

    BlackEWhite.addEventListener('click', function () {
        localStorage.setItem('Tema', 'BlackEWhite');

        roomList.style = 'background-color: black !important; color: white !important;';
        roomListTopBar.style = 'background-color: black !important; color: white !important; background-color: #344150; box-shadow: inset 0 7px 16px -7px rgb(96 195 239 / 0.11);';
        roomListTableHeader.style = 'background-color: white !important; color: black !important;';
        roomListTableHover.styleSheet.cssText = roomListTableHoverCss;
        roomListJoined.style = 'color: green !important; font-weight: bold;';
        roomListTableTr.style = 'background-color:  black !important; color: white !important;';
        roomListTableTh.style = 'color: white !important;';
        roomListTableTd.style = 'color: white !important;';
        roomListTableTdTh.style = 'color: red !important; font-weight: bold;';
    });

    if (saveTema == 'BlackEWhite') {
        localStorage.setItem('Tema', 'BlackEWhite');

        roomList.style = 'background-color: black !important; color: white !important;';
        roomListTopBar.style = 'background-color: black !important; color: white !important; background-color: #344150; box-shadow: inset 0 7px 16px -7px rgb(96 195 239 / 0.11);';
        roomListTableHeader.style = 'background-color: white !important; color: black !important;';
        roomListTableHover.styleSheet.cssText = roomListTableHoverCss;
        roomListJoined.style = 'color: green !important; font-weight: bold;';
        roomListTableTr.style = 'background-color:  black !important; color: white !important;';
        roomListTableTh.style = 'color: white !important;';
        roomListTableTd.style = 'color: white !important;';
        roomListTableTdTh.style = 'color: red !important; font-weight: bold;';
    }
};