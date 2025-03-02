const day=parseInt(prompt("Enter the day: "));
const month=parseInt(prompt("Enter the month: "));
 if (
            (month === 3 && day >= 20) ||  // March 20 se aage
            (month > 3 && month < 6) ||   // April aur May
            (month === 6 && day <= 20)    // June 20 tak
        ) {
            console.log(true);
        } else {
            console.log(false);
        }
        

