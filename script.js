window.onload = function(){
    const savedBuzzes = JSON.parse(localStorage.getItem("buzzes")) ||[];
    savedBuzzes.forEach(showBuzz);
}

function postBuzz(){
    const input = document.getElementById("buzzInput");
    const buzzText = input.value.trim();

    if (buzzText=== ""){
        alert("Buzz cannot be empty!");
        return;
    }
    const buzzObj = {
        text:buzzText,
        timestamp: new Date().toISOString()
    };

    //Get existing buzzes
    const buzzes = JSON.parse(localStorage.getItem("buzzes"))||[];

    //Add new buzz to the top
    buzzes.unshift(buzzObj);

    //Save updated buzzes to localStorage
    localStorage.setItem("buzzes",JSON.stringify(buzzes));

    //Show the buzz on screen
    showBuzz(buzzObj);

    //Clear the input box
    input.value="";

}

//Display a buzz in the feed
function showBuzz(buzzObj){
    const buzzFeed = document.getElementById("BuzzFeed");

    const buzz = document.createElement("article");
    buzz.className = "buzz";

    const time = new Date(buzzObj.timestamp).toLocaleString();

    buzz.innerHTML = `
    <p>${buzzObj.text}</p>
    <small>${time}</small>
    `;
    buzzFeed.prepend(buzz);//add to top
}
