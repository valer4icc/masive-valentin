function getUniqueSortedTags(posts) {
  const uniqueTags = new Set();
  posts.forEach(post => {
    post.tags.forEach(tag => {
      uniqueTags.add(tag);
    });
  });
  const sortedTags = Array.from(uniqueTags).sort();
  return sortedTags;
}
const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] }
];
const result = getUniqueSortedTags(posts);
console.log(result);

