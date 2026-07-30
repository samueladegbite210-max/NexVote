// NexVote Version 1.0

let elections = JSON.parse(localStorage.getItem("elections")) || [];

function createElection() {

    const name = document.getElementById("electionName").value;
    const type = document.getElementById("electionType").value;

    if(name === "" || type === ""){
        alert("Please complete all fields.");
        return;
    }

    const election = {
        name: name,
        type: type
    };

    elections.push(election);

    localStorage.setItem(
        "elections",
        JSON.stringify(elections)
    );

    alert("Election Created Successfully!");

    window.location.href="dashboard.html";

}
