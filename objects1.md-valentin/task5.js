const library = [
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        readingStatus: true
    },
    {
        author: 'Homer',
        title: 'The Odyssey',
        readingStatus: true
    },
    {
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        readingStatus: false
    }
];

for (const book of library) {
    let statusMessage;
    if (book.readingStatus === true) {
        statusMessage = "Already read";
    } else {
        statusMessage = "You still need to read";
    }

    const output = `${statusMessage} ${book.title} by ${book.author}.`;
    console.log(output);
}
