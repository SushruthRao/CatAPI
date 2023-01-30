
const emojilist = ["🐈", "😻", "🤍"];

document.getElementById("Main").onclick = function getCat(){
let JSONreq = new XMLHttpRequest();
JSONreq.open('GET', "https://api.thecatapi.com/v1/images/search?size=med?api_key=live_bsI5VuUVyugz9fzvS6zjymYVd6jKtAnGC6DHgUVzZYRHNMUnSsEJaG1y4vTQuqDU");
JSONreq.send();
JSONreq.onreadystatechange = processJSON;
function processJSON(e) {
    console.log("yo");
    if (JSONreq.readyState == 4 && JSONreq.status == 200) {
        console.log("sucess !");
        let response = JSON.parse(JSONreq.responseText);
        
        let catimg = document.getElementById("yo");
      
       
        catimg.src = response[0].url;
       
        
    }
}
}
getCat();



