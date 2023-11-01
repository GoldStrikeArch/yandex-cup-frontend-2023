function drawTree(startY, angle, level = 0) {
    const startX = canvas.width / 2;
    const len = length * Math.pow(depth, level);

    console.log('len is', len)
    console.log('len is2', -len)
    
    ctx.beginPath();
    ctx.save();

    ctx.translate(level ? 0 : startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);

    ctx.strokeStyle = computeColor(level);

    // console.log(computeColor.toString())
    ctx.lineWidth = computeWidth(level);

    ctx.stroke();

    if (len < 10) {
        console.log('here')
        ctx.restore();
        return;
    }

    
    const newLevel = level + 1;
    // console.log(len, angle, angleOffset, newLevel)
    // console.log(ctx)

    drawTree(-len, angle + angleOffset, newLevel);
    drawTree(-len, angle - angleOffset, newLevel);

    ctx.restore();
};

// function drawTree(startY, angle, level = 0) {
//     const startX = canvas.width / 2;
//     let y = startY
//     let len = length * Math.pow(depth, level)
//     let newLevel = level;

//     let counter = 0;
//     while (counter <= 1000) {
        
//         ctx.beginPath();
//         ctx.save();
        
//         ctx.translate(newLevel ? 0 : startX, y);
//         ctx.rotate(angle * Math.PI / 180);
//         ctx.moveTo(0, 0);
//         ctx.lineTo(0, -len);
        
//         ctx.strokeStyle = computeColor(newLevel);
        
//         // console.log(computeColor.toString())
//         ctx.lineWidth = computeWidth(newLevel);
        
//         ctx.stroke();
//         console.log('here' ,counter, len)
//         newLevel = level + 1;
//         len = length * Math.pow(depth, newLevel);
//         ctx.restore()
//         counter++;
//     }

    
  
//     console.log('here')
//     ctx.restore();
// };