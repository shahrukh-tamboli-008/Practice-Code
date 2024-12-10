// const profile =
// {
//     userName : ("Shahrukh"),
//     followers :("600"),
//     following :("300"),
//     post:("30")
// }
// console.log (profile);

// let num=
// prompt("Enter a number")

// if(num % 5===0)
// {
//     console.log(num," is multiple by 5");
// }
// else
// {
//     console.log(num," is NOT multiple by 5");

// }

function isMultipleof5 (n)
{
    while (n > 0)
        n = n - 5;
 
    if (n == 0)
        return true;
 
    return false;
}
 
// Driver Code
    let n = prompt("enter the number");
    if (isMultipleof5(n) == true)
        document.write(n + " is multiple of 5\n");
    else
        document.write(n + " is not a multiple of 5\n");