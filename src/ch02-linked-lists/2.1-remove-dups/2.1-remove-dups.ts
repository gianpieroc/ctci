import LinkedList from "../../utils/single-linked-list";

export const removeDuplicates = (list: LinkedList) => {
  const listMap = new Set();
  let cur = list.head;
  let prev = null;

  while (cur) {
    if (listMap.has(cur.value)) {
      let elem = cur;
      prev.next = cur.next;
      cur = cur.next;
      elem.next = null;
    } else {
      listMap.add(cur.value);
      prev = cur;
      cur = cur.next;
    }
  }

  return list;
};
