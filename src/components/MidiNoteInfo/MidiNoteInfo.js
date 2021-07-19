import { detect } from "@tonaljs/chord-detect";
import { KeyValueTable } from "components";
import React from "react";
import { noteUtils } from "utils";

const MidiNoteInfo = ({ activeNotes, activeNotesReal, target }) => {
  const infoData = [
    { key: "Target Midi Id", value: target },
    { key: "Target Note", value: noteUtils.convertMidiIdToNote(target) },
    {
      key: "Selected Notes (Midi)",
      value: activeNotesReal.length > 0 ? activeNotesReal.toString() : "n/a",
    },
    {
      key: "Selected Notes",
      value:
        activeNotesReal.length > 0
          ? activeNotesReal
              .map((item) => noteUtils.convertMidiIdToNote(item))
              .toString()
          : "n/a",
    },
    {
      key: "Chord possibilities",
      value:
        activeNotesReal.length > 2
          ? detect(
              activeNotesReal.map((item) => {
                return noteUtils.convertMidiIdToNoteName(item);
              })
            ).toString()
          : "n/a",
    },
    {
      key: "Intervallic Distances",
      value:
        activeNotesReal.length > 1
          ? noteUtils
              .extractDistances(noteUtils.extractNotes(activeNotes))
              .toString()
          : "n/a",
    },
    {
      key: "Root Note",
      value:
        activeNotesReal.length > 0
          ? noteUtils.convertMidiIdToNote(
              noteUtils.extractRoot(activeNotesReal)[0]
            )
          : "n/a",
    },
  ];

  return false && <KeyValueTable data={infoData} />;
};

export default MidiNoteInfo;
