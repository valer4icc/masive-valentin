const books = [
  { title: 'JS Basics', pages: 120, tags: ['js', 'beginner'] },
  { title: 'Advanced JS', pages: 350, tags: ['js', 'advanced'] },
  { title: 'CSS Mastery', pages: 200, tags: ['css'] },
  { title: 'HTML & CSS', pages: 150, tags: ['html', 'css', 'beginner'] }
];

function searchBooks(bookList, { minPages, hasTag }) {
  return bookList.filter(book => {
    const matchesMinPages = minPages ? book.pages >= minPages : true;
    const matchesTag = hasTag ? book.tags.includes(hasTag) : true;
    return matchesMinPages && matchesTag;
  });
}

const results1 = searchBooks(books, { minPages: 150, hasTag: 'css' });
console.log('Results for minPages: 150, hasTag: "css":', results1);

const results2 = searchBooks(books, { hasTag: 'js' });
console.log('Results for hasTag: "js":', results2);