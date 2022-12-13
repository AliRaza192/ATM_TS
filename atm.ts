import inquirer from "inquirer"

type accounts = {
    userID: string,
    userPIN: number,
    userAcc: string,
    balanceOpions: string,
    cashAmount: number,
}


let Input: accounts = await inquirer.prompt([
    {
        name: "userID",
        type: "string",
        message: "Enter Your User ID:",
    },

    {
        name: "userPIN",
        type: "number",
        message: "Enter Your PIN Code:",
        when(answers) {
            return answers.userID
        },
    },

    {
        name: "userAcc",
        type: "list",
        choices: ["Current Account", "Saving Account"],
        message: "Enter Your Account Type:",
        when(answers) {
            return answers.userPIN
        },

    },

    {
        name: "balanceOpions",
        type: "list",
        choices: ["Fast Cash", "Cash Withdraw"],
        message: "Choose Given Below:",
        when(answers) {
            return answers.userAcc
        },
    },

    {
        name: "cashAmount",
        type: "list",
        choices: [1000, 3000, 5000, 10000],
        message: "Choose Amount: ",
        when(answers) {
            return answers.balanceOpions === "Fast Cash"
        },
    },

    {
        name: "cashAmount",
        type: "number",
        message: "Enter Amount: ",
        when(answers) {
            return answers.balanceOpions === "Cash Withdraw"
        },
    }
])


// console.log(Input.userID, Input.userPIN, Input.userAcc, Input.balanceOpions);

const { userID, userPIN, userAcc, balanceOpions, cashAmount } = Input;

const Balance = Math.floor(Math.random() * 100000);
if (userID && userPIN && cashAmount) {
    console.log(`Your Totel Balance is: ${Balance}`);
    if (Balance > cashAmount) {
        let CurrentBalance = Balance - cashAmount;
        console.log(`Transection Sucsess.! \nYour Current Balance is: ${CurrentBalance}`);

    }
    else {
        console.log("Insuficient Balance");

    }

}
