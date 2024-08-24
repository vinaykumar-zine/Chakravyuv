function war(p, enemies, skipCount, rechargeCount) {
    let n = enemies.length;
    let regeneratedEnemy3 = 0;
    let regeneratEnemy7 = 0;

    for (let i = 0; i < n; i++) {
        let currentEnemyPower = enemies[i];

        // for k3 and k7 enemis
        if (i === 2) {  
            if (p > currentEnemyPower) {
                p -= currentEnemyPower;  
                regeneratedEnemy3
         = Math.floor(currentEnemyPower / 2);
            } else if (skipCount > 0) {
                skipCount--;  
                regeneratedEnemy3
         = Math.floor(currentEnemyPower / 2);  
                continue;
            } else if (rechargeCount > 0) {
                rechargeCount--;
                p += currentEnemyPower;  
                p -= currentEnemyPower;
                regeneratedEnemy3
         = Math.floor(currentEnemyPower / 2);  
            } else {
                return false; 
            }
        } else if (i === 6) {  // k7 enemy
            if (p > currentEnemyPower) {
                p -= currentEnemyPower; 
                regeneratEnemy7 = Math.floor(currentEnemyPower / 2); 
            } else if (skipCount > 0) {
                skipCount--; 
                regeneratEnemy7 = Math.floor(currentEnemyPower / 2); 
                continue;
            } else if (rechargeCount > 0) {
                rechargeCount--;
                p += currentEnemyPower; 
                p -= currentEnemyPower;
                regeneratEnemy7 = Math.floor(currentEnemyPower / 2); 
            } else {
                return false;  
            }
        } else {
            // Checking for back attack from k3 or k7
            if (i === 3 && regeneratedEnemy3
         > 0) {
                if (p >= currentEnemyPower + regeneratedEnemy3
            
                ) {
                    p -= currentEnemyPower + regeneratedEnemy3
            ;  
                    regeneratedEnemy3
             = 0;  
                } else if (skipCount > 0) {
                    skipCount--;  
                    continue;
                } else if (rechargeCount > 0) {
                    rechargeCount--;
                    p += currentEnemyPower + regeneratedEnemy3
            ;  
                    p -= currentEnemyPower + regeneratedEnemy3
            ;
                    regeneratedEnemy3
             = 0;
                } else {
                    return false; 
                }
            } else if (i === 7 && regeneratEnemy7 > 0) {
                if (p >= currentEnemyPower + regeneratEnemy7) {
                    p -= currentEnemyPower + regeneratEnemy7;  
                    regeneratEnemy7 = 0;  
                } else if (skipCount > 0) {
                    skipCount--;  
                    continue;
                } else if (rechargeCount > 0) {
                    rechargeCount--;
                    p += currentEnemyPower + regeneratEnemy7; 
                    p -= currentEnemyPower + regeneratEnemy7;
                    regeneratEnemy7 = 0;
                } else {
                    return false;
                }
            } else {
                // Normal battle without back attack
                if (p >= currentEnemyPower) {
                    p -= currentEnemyPower;
                } else if (skipCount > 0) {
                    skipCount--;
                } else if (rechargeCount > 0) {
                    rechargeCount--;
                    p += currentEnemyPower;
                    p -= currentEnemyPower;
                } else {
                    return false;  
                }
            }
        }
    }

    return true;  // Abhimanyu successfully crosses all circles
}

// Test Cases
let enemies1 = [2, 3, 1, 5, 1, 7, 1, 1, 1, 1, 2];
let enemies2 = [5, 3, 7, 2, 6, 8, 4, 10, 9, 12, 11];

console.log(war(15, enemies1, 1, 2)); // Expected Output: true
console.log(war(20, enemies2, 0, 1)); // Expected Output: false
