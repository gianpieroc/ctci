import LinkedList, { Node } from "../../utils/single-linked-list";

export const kthToLast = (listNode: Node, startFrom: number) => {
  let pointer1: Node = listNode;
  let result = [];

  if (listNode === null) {
    return 0;
  }

  for (let i = 0; i < startFrom; i++) {
    pointer1 = pointer1.next;
  }

  while (pointer1 !== null) {
    if (pointer1?.value) {
      result = [...result, pointer1?.value];
    }

    pointer1 = pointer1.next;
  }

  return result;
};
