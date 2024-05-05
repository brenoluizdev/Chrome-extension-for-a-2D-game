// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

"use strict"

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Search);
else Search();

function Search() {
  "use strict"

  var roomlist = document.querySelector("#roomlistscrollbox");

  var divBasicSearch = document.createElement('div');
  divBasicSearch.setAttribute('class', "basic-search");

  var inputField = document.createElement('div');
  inputField.setAttribute('class', "input-field");

  var input = document.createElement('input');
  input.setAttribute('type', "text");
  input.setAttribute('id', "searchInput");
  input.setAttribute('placeholder', "Procurar sala");

  var iconWrap = document.createElement('div');
  iconWrap.setAttribute('class', "icon-wrap");

  var semSalas = document.createElement('div');
  semSalas.setAttribute('class', "semSalas");
  semSalas.setAttribute('id', "semSalas");
  semSalas.style.display = 'none';

  if (roomlist) {
    var SemSalasSpan = document.createElement('span');
    SemSalasSpan.setAttribute('class', "SemSalasSpan");
    SemSalasSpan.setAttribute('id', "SemSalasSpann");
    SemSalasSpan.innerHTML = 'Nenhuma sala encontrada...';
    semSalas.appendChild(SemSalasSpan);

    document.querySelector("#roomlisttopbar").appendChild(divBasicSearch);
    divBasicSearch.appendChild(inputField);
    inputField.appendChild(input);
    input.appendChild(iconWrap);
    roomlist.appendChild(semSalas);

    document.querySelector("#searchInput").style = 'text-transform: uppercase';

    document.querySelector('#searchInput').addEventListener('keyup', function (e) {
      let namesLI = document.getElementsByClassName('HOVERUNSELECTED');
      let searchQuery = searchInput.value.toLowerCase();

      var t = document.querySelector("#roomlisttable > tbody > tr");
      var semSalasDiv = document.querySelector("#semSalas");

      if (t.style.display == "none") {
        semSalasDiv.style = 'display: inherit;';
      } else {
        semSalasDiv.style = 'display: none;';
      }

      for (let index = 0; index < namesLI.length; index++) {
        const name = namesLI[index].textContent.toLowerCase();

        if (name.includes(searchQuery)) {
          namesLI[index].style.display = '';
        } else {
          namesLI[index].style.display = 'none';
        }
      }
    });
  }
};