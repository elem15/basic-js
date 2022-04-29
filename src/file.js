function renameFiles(names) {
    // throw new NotImplementedError('Not implemented');
    const result = [];
    if (!names.length) return result;
    const dict = {};
    for (const name of names) {
      if (dict[name] !== undefined) {
        dict[name] += 1;
        const newName = `${name}(${dict[name]})`;
        result.push(newName);
        dict[newName] = 0
      } else {
        dict[name] = 0;
        result.push(name);
      }
    }
    console.log(dict);
    return result;
}
  
console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])) // ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']