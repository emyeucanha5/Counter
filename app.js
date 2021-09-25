const val = document.querySelector("#value");
let count = 0;

/*


const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
	btn.addEventListener("click", function(e){
		const styles = e.currentTarget.classList;
		if(styles.contains("dec")){
			count--;
		}
		else if(styles.contains("inc")){
			count++;
		}
		else{
			count = 0;
		}
		if(count>0){
			val.style.color = "green";
		}
		else if(count<0){
			val.style.color = "red";
		}
		else{
			val.style.color = "#222";
		}
		val.textContent = count;
	})
})

*/

const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.id;

    if(styles=="dec"){
      count--;
    }
    else if(styles=="inc"){
      count++;
    }
    else{
      count = 0;
    }
    if(count>0){
      val.style.color = "green";
    }
    else if(count<0){
      val.style.color = "red";
    }
    else{
      val.style.color = "#222";
    }
    val.textContent = count;
  })
})