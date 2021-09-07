var playerName = window.prompt("What's your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "keesparc";
var enemyHealth = 79; 
var enemyAttack = 100.01; 

// create fight function
var fight = function() {
    // alert player that they are starting the round
    window.alert("You have entered the Battlefield!" );

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the  value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    // check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " was decemated! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth =  playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaing." );
    
    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " was decemated! ");
    }
    else { 
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    };

// execute function
fight();




