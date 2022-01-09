
(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");


    btnAddFolder.addEventListener("click",addFolder);
    btnAddTextFile.addEventListener("click",AddTextFile);

    function addFolder(){
        let fname = prompt("Enter Folder's name");
        
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate,true);

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete=divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view");
        let divName = divFolder.querySelector("[purpose=name");

        spanRename.addEventListener("click",renameFolder);
        spanDelete.addEventListener("click",deleteFolder);
        spanView.addEventListener("click",viewFolder);

        divName.innerHTML=fname;

        divContainer.appendChild(divFolder); 
    }

    function AddTextFile(){
        let tfname = prompt("Enter new text file name");
        console.log(tfname);
    }

    function deleteFolder(){
        console.log("IN delete")
    }

    function deleteTextFile(){

    }

    function renameFolder(){
        console.log("IN rename");
    }

    function renameTextFile(){

    }

    function viewFolder(){
        console.log("in view");
    }

    function viewTextFile(){

    }

    function saveToStorage(){

    }

    function loadFromStorage(){

    }
    loadFromStorage();
})(); // to prevent namespace pollution