import { ENV } from '../types';
import { GlobalFunctions } from './GlobalFunctions';

export function GetCurrentEnv(): ENV {
  return GlobalFunctions.IsInToolsMode() ? 'DEV' : 'PROD';
}
