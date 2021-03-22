import LinkedList from "../../utils/single-linked-list";
import { kthToLast } from "./2.2-kth-to-last";

describe("remove duplicates", () => {
  it("remove duplicates", () => {
    let list = new LinkedList();
    for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
      list.append(elem);
    }

    const expected = [6, 8, 8, 8, 8];
    const result = kthToLast(list.head, 5);
    expect(result).toEqual(expected);
  });
});
