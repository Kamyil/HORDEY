import { reloadable as Reloadable } from './lib/tstl-utils';
import { GlobalFunctions } from './utils/GlobalFunctions';
import * as ENV_SETTINGS from './env.json';
import { ENV } from './types';
import { GetCurrentEnv } from './utils/GetCurrentEnv';

@Reloadable
export class GameSetup {
  public static init() {
    const currentEnv: ENV = GetCurrentEnv();

    // Players
    GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.GOODGUYS, 2);
    GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.BADGUYS, 0);

    // Time
    GameRules.EnableCustomGameSetupAutoLaunch(true);
    GameRules.SetCustomGameSetupAutoLaunchDelay(0);
    GameRules.SetPreGameTime(ENV_SETTINGS[currentEnv].DURATION_TIME.PRE_GAME);
    GameRules.SetShowcaseTime(ENV_SETTINGS[currentEnv].DURATION_TIME.SHOWCASE);
  }
}
