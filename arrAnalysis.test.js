const arrAnalysis = require('./arrAnalysis');


test("ARRAY ANALYSIS TEST 1", () => {
    expect(arrAnalysis([1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
  });
  
  test("ARRAY ANALYSIS TEST 2", () => {
    expect(arrAnalysis([1, 1, 1, 1, 1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 5,
    });
  });
  
  test("ARRAY ANALYSIS TEST 3", () => {
    expect(arrAnalysis([5, 1, 2, 3, 7, 1])).toEqual({
      average: 19 / 6,
      min: 1,
      max: 7,
      length: 6,
    });
  });
  
  test("ARRAY ANALYSIS TEST 4", () => {
    expect(arrAnalysis([0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 1,
    });
  });