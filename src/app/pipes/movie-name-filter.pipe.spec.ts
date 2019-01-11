import { MovieNameFilterPipe } from './movie-name-filter.pipe';

describe('MovieNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieNameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
