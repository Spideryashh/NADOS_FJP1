
(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let resources = [];
    let cfid = -1; // initially we are at root (which has id = -1)
    let rid = 0;

    btnAddFolder.addEventListener("click",addFolder);
    btnAddTextFile.addEventListener("click",AddTextFile);

    //validation - unique,non-blank
    //persist - ram, storage
    function addFolder(){
        let rname = prompt("Enter Folder's name");
        let pid = cfid;
        rid++;
        addFolderHTML(rname,rid,pid);
         resources.push({
             rid: rid,
             rname: rname,
             rtype: "folder",
             pid: cfid 
         });
         saveToStorage();
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

        let nrname = prompt("Enter folder's name");
        if(nrname != null){
            nrname = nrname.trim();
        }

        if(!nrname){ //empty name validation
            alert("Empty name is not allowed");
            return;
        }
        let spanRename = this;
        let divFolder = spanRename.parentNode;
        let divName = divFolder.querySelector("purpose=name");
        let orname = divName.innerHTML;
        let ridTBU = parseInt(divFolder.getAttribute("rid"));
        if(nrname == orname){
            alert("Please enter a new name");
            return;
        }
        let alreadyExists = resources.some(r=> r.name == nrname && r.pid == cfid);
        if(alreadyExists == true){
            alert(nrname + "already exists.");
            return;
        }
        // change html
        divName.innerHTML = nrname;

        // change ram
        let resource = resources.find(r => r.rid == ridTBU);
        resource.rname = nrname;

        //change storage 
        saveToStorage();
    }

    function renameTextFile(){

    }

    function viewFolder(){
        let spanView = this;
        let divFolder = spanView.parentNode;
        let divName = divFolder.querySelector("[purpose='name");

        let fname = divName.innerHTML;
        let fid = parseInt(divFolder.getAttribute("rid"));

        let aPathTemplate = templates.content.querySelector("a[purpose='path']");
        let aPath = 
    }

    function viewTextFile(){

    }
    function addFolderHTML(rname, rid, pid){
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate,true);

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete=divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view");
        let divName = divFolder.querySelector("[purpose=name");

        spanRename.addEventListener("click",renameFolder);
        spanDelete.addEventListener("click",deleteFolder);
        spanView.addEventListener("click",viewFolder);

        divName.innerHTML=rname;
        divFolder.setAttribute("rid", rid);
        divFolder.setAttribute("pid", pid);

        divContainer.appendChild(divFolder);
    }

    function saveToStorage(){
        let rjson = JSON.stringify(resources); //used to convert jso into json
        localStorage.setItem("data", rjson);
    }

    function loadFromStorage(){
        let rjson = localStorage.getItem("data");
        if(!!rjson){
            resources = JSON.parse(rjson);
            for(let i=0;i<resources.length;i++){
                if(resources[i].pid == cfid){
                    addFolderHTML(resources[i].rname,resources[i].rid,resources[i].pid);
                }

                if(resources[i].rid> rid){
                    rid = resources[i].rid;
                }
            }
        }
    }
    loadFromStorage();
})(); // to prevent namespace pollution