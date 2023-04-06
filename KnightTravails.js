function knightTravails(start, end) {
    const possibleMoves = [
        [2,1],
        [2,-1],
        [-2,1],
        [-2,-1],
        [1,2],
        [1, -2],
        [-1, 1],
        [-1, -1],
    ];

    let queue = [{ pos: start, moves: 0, path: [start] }]
    let visited = new Set();
    let minMoves = Infinity;

    while (queue.length) {

        let {pos, moves, path} = queue.shift();
        let [x,y] = pos;

        if (x ===end[0] && y === end[1] ){

            if (moves< minMoves){
                minMoves = moves;
                console.log(`You made it in ${minMoves} moves! Here's your path:`);
                console.log(path);
            }

            continue;
        }

    for (let i =0; i < possibleMoves.length; i++){

        let newX = x + possibleMoves[i][0]
        let newY = y + possibleMoves[i][1]

            if(newX >= 0 && newX < 8 && newY >= 0 && newY < 8){
                let newPos = [newX, newY];

                if(!visited.has(`${newX},${newY}`)) {
                    visited.add(`${newX},${newY}`);

                    queue.push({
                        pos: newPos,
                        moves: moves+1,
                        path: [...path, newPos],
                    });
                }
            }
        }
    }
    if (minMoves === Infinity) return 'no solution'
}


console.log(knightTravails([2, 1], [7, 2]));
