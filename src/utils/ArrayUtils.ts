const groupBy = <T>(list: T[], keyGutter: (item: T) => string) => {
  const obj: any = {};
  list.forEach(item => {
    const key = keyGutter(item);
    const collection: T[] = obj[key];
    if (!collection) {
      obj[key] = [item];
    } else {
      collection.push(item);
    }
  });
  return obj;
}

export {
  groupBy
};
