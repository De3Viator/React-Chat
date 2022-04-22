import { profileReducer } from '../store/profileReducer';

test('reducers', () => {
  const state = profileReducer(
    { check: false },
    { type: 'PRFOILE::CHANGE_CHECK' }
  );
  expect(state).toEqual({ check: true });
});
