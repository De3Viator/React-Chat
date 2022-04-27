import { profileReducer } from '../store/profileReducer';

test('profile reducer', () => {
  const state = profileReducer(
    { check: false },
    { type: 'PRFOILE::CHANGE_CHECK' }
  );
  expect(state).toEqual({ check: true });
});
