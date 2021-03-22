import LinkedList from "../../utils/single-linked-list";
import { removeDuplicates } from "./2.1-remove-dups";

describe("remove duplicates", () => {
  it("remove duplicates", () => {
    let list = new LinkedList();
    for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
      list.append(elem);
    }

    const expected = [1, 5, 6, 8];
    removeDuplicates(list);
    expect(list._toArray()).toEqual(expected);
  });
});
