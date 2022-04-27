import { ProfileAction } from './type';

export const CHANGE_CHECK = 'PRFOILE::CHANGE_CHECK';

export const toggleCheck: ProfileAction = () => ({
  type: CHANGE_CHECK,
});
