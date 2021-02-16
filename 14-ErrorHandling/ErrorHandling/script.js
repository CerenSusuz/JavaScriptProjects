// try {
//     // console.log(myFunction());
// } catch (e) {
//     console.log(e);
//     // ReferenceError: myFunction is not defined
//     console.log(e.message);
//     // myFunction is not defined
//     console.log(e.name);
//     // ReferenceError
//     console.log(e instanceof ReferenceError);
//     // true
//     console.log(e instanceof TypeError);
//     // false
//     console.log(typeof e);
//     // object
// }

var user = {
    name: 'Ceren Susuz',
}
try {
    if (!user.email) {
        throw new SyntaxError('User has no email');
    }
    console.log(user.email);
} catch (e) {
    console.log(e);
} finally {
    console.log('Has Error or Has NOT Error finally { ... } ALWAYS WORK');
}