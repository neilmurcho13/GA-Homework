const removedAdded = (previous = [], current = []) => {
  const remove = previous.filter((prev) => !current.include(prev));
  const added = current.filter((curr) => !previous.includes(curr));
  return [removed, added];
};

export { removedAdded };
