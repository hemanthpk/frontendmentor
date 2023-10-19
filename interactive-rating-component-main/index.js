const ratingstate = document.querySelector("#ratingState")
const thankyoustate = document.querySelector("#thankYouState")

function submitFunction() {
	var ele = document.getElementsByName("rating")
	x = true;
	for (i=0;i<ele.length;i++)  {
		if(ele[i].checked) {   
			ratingstate.style.display = "none"
			thankyoustate.style.display = "flex"
			document.getElementById("givenrating").innerText=ele[i].value
			x = false
			break
		}
	}
	if(x)
	{
		window.alert("Please give rating")
	}
}