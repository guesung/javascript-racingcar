import { run } from '../src/index.js';
import readline from 'readline';
import { mockRandom, mockRandoms } from './CarModel.js';

const mockQuestions = inputs => {
  readline.createInterface = jest.fn().mockImplementation(() => ({
    question: (query, callback) => {
      callback(inputs.shift());
    },
    close: () => {},
  }));
};

describe('애플리케이션 테스트', () => {
  test('우승자가 한명일때', async () => {
    const inputs = ['a,b,c', '1'];
    const randomNumbers = [1, 1, 9];

    mockQuestions(inputs);
    mockRandoms(randomNumbers);

    const consoleSpy = jest.spyOn(console, 'log');

    await run();

    expect(consoleSpy).toHaveBeenCalledWith('\n실행 결과');
    expect(consoleSpy).toHaveBeenCalledWith('a : ');
    expect(consoleSpy).toHaveBeenCalledWith('b : ');
    expect(consoleSpy).toHaveBeenCalledWith('c : -');
  });
  // test('우승자가 두명일때', () => {});
});
