// accesing every pawn element
let arr_pawn = [51, 52, 53, 54, 55, 56, 49, 50, 9, 10, 11, 12, 13, 14, 15, 16];
pawn_position = function() {for (let i of arr_pawn) {
    const pawn = document.getElementById(i);
    pawn.addEventListener("click", () => {
        const ele1 = document.getElementById(i + 8);
        const ele2 = document.getElementById(i + 16);

        ele1.addEventListener("click", () => {
            // identifying remove index
            for (let ind = 0; ind < arr_pawn.length; ind++) {
                if (arr_pawn[ind + 1] === i) {
                    delete arr_pawn[ind + 1];
                }
            }
            arr_pawn.push(i + 8);

            ele1.id = (i);
            pawn.id = (i + 8);
            const pic = pawn.innerHTML;
            pawn.innerHTML = ele1.innerHTML;
            ele1.innerHTML = pic;
            for (let ind = 0; ind < arr_pawn.length; ind++) {
                console.log(arr_pawn[ind]);
            }
            console.log("hell");
        });
        ele2.addEventListener("click", () => {
            // identifying remove index
            for (let ind = 0; ind < arr_pawn.length; ind++) {
                if (arr_pawn[ind + 1] === i) {
                    delete arr_pawn[ind + 1];
                }
            }
            arr_pawn.push(i + 16);
            ele1.id = (i);
            pawn.id = (i + 16);
            const pic = pawn.innerHTML;
            pawn.innerHTML = ele2.innerHTML;
            ele2.innerHTML = pic;
            for (let ind = 0; ind < arr_pawn.length; ind++) {
                console.log(arr_pawn[ind]);
            }
            console.log("hell");
        });

    });
}
};
setTimeout(pawn_position, 2000);