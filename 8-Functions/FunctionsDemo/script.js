var accountA = {
    firstName: 'Ceren',
    accountNum: '12345678',
    balance: 5000,
    additionalAccount: 10000
}

var accountB = {
    firstName: 'Asya',
    accountNum: '12345679',
    balance: 500,
    additionalAccount: 100000
}

function withdrawMoney(account, amount) {
    console.log(`Hello ${account.firstName}`);
    if (account.balance >= amount) {
        account.balance -= amount;
        console.log(`${amount} tl/$ has been withdrawn`)
    } else {
        var total = account.balance + account.additionalAccount;
        if (total >= amount) {
            if (confirm('Do you want to use your additional account?')) {
                console.log(`${amount} tl/$ has been withdrawn`);
                var balance = account.balance;
                var additionalAccount = account.additionalAccount;
                account.balance = 0;
                account.additionalAccount = account.additionalAccount - additionalAccount;
            } else {
                console.log(`${account.accountNum} has ${account.balance} tl/$`)
            }
        } else {
            console.log('insufficient balance');
        }
    }
}

// withdrawMoney(accountA, 10000);
withdrawMoney(accountB, 500);
withdrawMoney(accountB, 1500);