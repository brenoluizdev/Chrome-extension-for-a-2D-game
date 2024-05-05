// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', init);
else init();


function init() {

    let github = "%cGitHub: https://github.com/brenoluizdev/";
    console.log("%cBONKTOOLS", "font-family: 'Bebas Neue'; color: #FFF; font-size:3rem;");
    console.log("%cBLACKBL", "font-family: 'Bebas Neue'; color: #000; font-size:3rem;");
    console.log(github, "font-family: 'Bebas Neue'; color: #fb0000; font-size:1.5rem;");

    
    /* console.log(`BodyLenght: ${body.children.length}`);
    console.log("BtnTagName: " + body.children[4].tagName); 
    let children = document.querySelector('body').children.length;
    console.log(`Childrens Iframe = ${children}, ${body}`); */

    try {
        let body = document.querySelector("body");
        let header = document.querySelector("#bonkioheader");
        let description = document.querySelector("#descriptioncontainer");

        var button = document.createElement('button');
        button.setAttribute('id', "showDescriptionAndHeader");
        button.innerHTML = 'SHOW';
        
        var verticalBar = document.querySelector("#adboxverticalleftCurse");

        button.addEventListener('click', function () {
            if(header.style.display == 'none' && description.style.display == 'none') {
                header.style.display = 'block'
                description.style.display = 'block';
            } else {
                header.style.display = 'none';
                description.style.display = 'none';
            }
        });

        header.style.display = 'none';
        description.style.display = 'none';

        verticalBar.appendChild(button);

    } catch (err) {
        console.log(err);
    };
};
