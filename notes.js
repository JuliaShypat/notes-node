console.log('Starting node.js');

module.exports.age = 25;
// module.exports = notes;
module.exports.addNote = () => {
  console.log('Add node');
  return 'New note!';
};

module.exports.add = (a, b) => {
  return a + b;
};
