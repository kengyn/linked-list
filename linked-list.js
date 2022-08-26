const linkedNode = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const linkedList = () => {
  let head = null;

  const append = (value) => {
    const node = new linkedNode(value);
    if (head === null) {
      head = node;
    } else {
      let curr = head;

      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }

      curr.nextNode = node;
    }
    return head;
  };

  const prepend = (value) => {
    const node = new linkedNode(value);
    if (head === null) {
      head = node;
    } else {
      node.nextNode = head;
    }
    return node;
  };

  const size = () => {
    let count = 0;
    let curr = head;
    while (curr !== null) {
      curr.nextNode;
      count++;
    }
    return count;
  };

  const tail = () => {
    let curr = head;
    while (curr.nextNode !== null) {
      curr.nextNode;
    }
    return curr;
  };

  const at = (index) => {
    let count = 0;
    let curr = head;
    while (count !== index || curr !== null) {
      count++;
      curr = curr.nextNode;

      if (count === index) {
        return curr;
      }
    }
  };

  const pop = () => {
    let curr = head;
    let popNode = curr.nextNode;

    while (curr !== null) {
      curr = curr.nextNode;
      popNode = popNode.nextNode;
      if (popNode.nextNode === null) {
        popNode = null;
      }
    }
    return curr;
  };

  const contains = (value) => {
    let curr = head;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let curr = head;
    let count = 0;
    while (curr !== null) {
      if (curr.value === value) {
        return count;
      }
      curr = curr.nextNode;
      count++;
    }
    return null;
  };

  const toString = () => {
    let curr = head;
    let nodeString = "";
    while (curr !== null) {
      nodeString += `${curr.value} -> `;
      curr = curr.nextNode;
    }
    nodeString + "null";
    return nodeString;
  };
};
