import { readRecordFetching } from "./readRecord.js";

import { createRecord } from "./createRecord.js";
export const mainModule = () => {
  readRecordFetching();
  createRecord();
};
