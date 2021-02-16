import * as fn from "./functions";

const activeNotes = [...Array(127).fill(false)];

activeNotes[40] = true;
activeNotes[45] = true;
activeNotes[49] = true;

test("extract active notes to an array of midi note IDs", () => {
  expect(fn.extractNotes(activeNotes)).toStrictEqual([40, 45, 49]);
});

test("extract root notes", () => {
  expect(fn.extractRoot(fn.extractNotes(activeNotes))).toStrictEqual([
    40,
    [45, 49],
  ]);
});

test("extract intervallic distances", () => {
  expect(fn.extractDistances(fn.extractNotes(activeNotes))).toStrictEqual([
    5,
    4,
  ]);
});
