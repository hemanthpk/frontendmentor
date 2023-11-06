const ratingstate = document.querySelector("#ratingState")
const thankyoustate = document.querySelector("#thankYouState")
const buttonControl = document.getElementById("submitButton")
const ele = document.getElementsByClassName("rating-value")

function checkRadio() {
	for(i=0;i<ele.length;i++){
		if(ele[i].checked)	{
			buttonControl.disabled = false;
		}
	}
}

for(i=0;i<ele.length;i++)
	ele[i].addEventListener("change",checkRadio)

function submitFunction() {
	x = true;
	for (i=0;i<ele.length;i++)  {
		if(ele[i].checked) {   
			ratingstate.style.display = "none"
			thankyoustate.style.display = "flex"
			document.getElementById("givenrating").innerText=ele[i].value
			break
		}
	}
}