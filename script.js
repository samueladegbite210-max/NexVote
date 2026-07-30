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
function loadElections() {

    const electionList = document.getElementById("electionList");

    if (!electionList) return;

    const elections =
        JSON.parse(localStorage.getItem("elections")) || [];

    if (elections.length === 0) {
        electionList.innerHTML =
            "<p>No elections created yet.</p>";
        return;
    }

    electionList.innerHTML = "";

    elections.forEach(function(election) {

        electionList.innerHTML += `
        <div class="card">
            <h2>${election.name}</h2>
            <p>${election.type}</p>
        </div>
        `;

    });

}

loadElections();
