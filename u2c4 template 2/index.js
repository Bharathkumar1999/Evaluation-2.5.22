// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",favSubmit);
    var schArr= JSON.parse(localStorage.getItem("schedule")) || [];

    function favSubmit(){
      event.preventDefault();

      var schObj={
        matchNum:masaiForm.matchNum.value,
        matchTeamA:masaiForm.teamA.value,
        matchTeamB:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVenue:masaiForm.venue.value,
      };
      schArr.push(schObj);
      console.log(schArr);
      localStorage.setItem("schedule",JSON.stringify(schArr));
      
      window.location.href="matches.html"
    }
