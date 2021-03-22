import { Node } from "../../utils/single-linked-list";

export const deleteMiddleNode = (node: Node) => {
  if (node === null || node.next === null) {
    return false;
  }

  const newNode = node.next;
  node = newNode;
  node.next = newNode.next;

  return true;
};
