var button = document.getElementById("insert")
button.addEventListener("click", addTask)

function addTask(){

	if(button && input.value){

		var taskProgress = document.getElementById("progress")
		var item = document.createElement("li")

		item.innerHTML = "<p>" + input.value + "</p>";
		taskProgress.appendChild(item)
		

		for(var i = 0; i < 3; i++){
			
			var buttonType = ["Complete", "Change", "Delete"];
			var createButton = document.createElement("button");
			
			createButton.innerHTML = buttonType[i];
			createButton.setAttribute("class", buttonType[i]);
			
			item.appendChild(createButton);
		}

		item.childNodes[1].addEventListener("click", completeTask);
		item.childNodes[2].addEventListener("click", changeTask);
		item.childNodes[3].addEventListener("click", removeTask);
		input.value = "";
		
	}
}

function completeTask(){

	if(this.parentNode.childNodes[2].classList[1] != 'is-active'){	
		var taskComplete = document.getElementById("complete");
		taskComplete.appendChild(this.parentNode);
		this.parentNode.childNodes[2].remove(this);
		this.parentNode.childNodes[1].remove(this);
	}
}

function changeTask(){
	var parent = this.parentNode.firstChild;
	this.classList.toggle('is-active');

	if(this.classList[1] == 'is-active'){
		parent.contentEditable = "true";
		this.parentNode.firstChild.style.backgroundColor = "pink";
		this.style.backgroundColor = "pink";

	}else if(this.classList[1] != 'is-active' && this.parentNode.childNodes[0].innerHTML != ""){
		parent.contentEditable = "false";
		this.parentNode.firstChild.style.backgroundColor = "white";
		this.style.backgroundColor = "#ddd";
	}
}

function removeTask(){
	this.parentNode.remove(this);
}