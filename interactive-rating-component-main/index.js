const ratingState = document.querySelector("#ratingState")
const thankyouState = document.querySelector("#thankYouState")

function submitFunction() {
	var ele = document.getElementsByName("rating")
	for (i=0;i<ele.length;i++)  {
		if(ele[i].checked) {   
			rs.style.display = "none";
			ts.style.display = "block";
			document.getElementById("givenrating").innerText=ele(i).value
		}
		else{
			//display Please give rating
		}
	}
}

