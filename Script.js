
    // Initialize scores
    let userScore = 0;
    let cpuScore = 0;
    let highScore = 10; // Variable to track the high score

    function startGame() {
      let user = document.getElementById('userInput').value.toUpperCase();
      let cpuI = Math.floor(Math.random() * 3);
      let cpu = ["S", "W", "G"][cpuI];

      const match = (cpu, user) => {
        if (cpu === user) {
          return "Nobody wins, it's a tie!";
        } else if ((cpu === "S" && user === "W") || (cpu === "G" && user === "S") || (cpu === "W" && user === "G")) {
          return "CPU wins!";
        } else if ((cpu === "W" && user === "S") || (cpu === "S" && user === "G") || (cpu === "G" && user === "W")) {
          return "User wins!";
        } else {
          return "Invalid input! Please enter S, W, or G.";
        }
      };

      let result = match(cpu, user);

      // Update scores based on the result
      if (result === "User wins!") {
        userScore++;
      } else if (result === "CPU wins!") {
        cpuScore++;
      }

      // Update the HTML with the result and the new scores
      document.getElementById('result').innerHTML = `CPU: ${cpu} <br> User: ${user} <br> Result: ${result}`;
      document.getElementById('userScore').innerText = userScore;
      document.getElementById('cpuScore').innerText = cpuScore;

      // Check if the user score is higher than the current high score
      if (userScore > highScore) {
        highScore = userScore; // Update high score
        document.getElementById('highScore').innerText = highScore; // Update the displayed high score

        // Show an alert for the new high score
        alert(`New High Score: ${highScore}!`);
      }
    }