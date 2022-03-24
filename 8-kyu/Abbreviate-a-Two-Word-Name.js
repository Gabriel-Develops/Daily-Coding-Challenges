/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){

    let firstAndLast = name.split(' ')
    
    let initials = ''
    initials += firstAndLast[0][0] + '.'
    initials += firstAndLast[1][0]

    return initials.toUpperCase()
}

//  lines 18-22 can be placed in one line as I saw in the other solutions

// return (firstAndLast[0][0] + '.' firstAndLast[1][0]).toUpperCase()

// It's beatiful, I wish I thought of it