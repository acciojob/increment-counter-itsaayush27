//your JS code here. If required.
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", ()=>{
	let currentValue = parseInt(counterElement.textContent);
	alert("Current Value: " + currentValue);

      // Increment the value and update counter
      counterElement.textContent = currentValue + 1;
    });
})