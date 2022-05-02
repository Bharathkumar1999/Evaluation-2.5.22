// write js code here corresponding to favourites.html
var schArr = JSON.parse(localStorage.getItem("favourites"))

    displayData(schArr);

    function displayData(data){
      data.forEach(function(elem,index){
       
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText=elem.matchNum

        var td2 = document.createElement("td");
        td2.innerText=elem.matchTeamA

        var td3 = document.createElement("td");
        td3.innerText=elem.matchTeamB

        var td4 = document.createElement("td");
        td4.innerText=elem.matchDate

        var td5 = document.createElement("td");
        td5.innerText=elem.matchVenue

        var td6 = document.createElement("td");
        td6.innerText="Delete";
        td6.setAttribute("class","deleteText");
        td6.addEventListener("click",function(){
          deleteItem(elem,index);
        });

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);

      });
      
    }

    function deleteItem(elem,index){
      schArr.splice(index,1);
      localStorage.setItem("favourites",JSON.stringify(schArr));
      window.location.reload();
      
    }

    

    var arr =[
      {
        matchNum: 1,
        matchTeamA: "Vikings",
        matchTeamB: "Ninja",
        matchDate: "02-05-2022",
        matchVenue: "Mumbai"
      },
      {
        matchNum: 2,
        matchTeamA: "Spartans",
        matchTeamB: "Apache",
        matchDate: "05-05-2022",
        matchVenue: "Delhi"
      },
      {
        matchNum: 3,
        matchTeamA: "Samurai",
        matchTeamB: "Titans",
        matchDate: "07-05-2022",
        matchVenue: "Bangalore"
      },
    ];

    arr.splice(arr[1],1)
