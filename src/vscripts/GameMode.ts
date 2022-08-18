import { GameSetup } from './GameSetup';
import { reloadable as Reloadable } from './lib/tstl-utils';
import { modifier_panic } from './modifiers/modifier_panic';
import { GlobalFunctions } from './utils/GlobalFunctions';

declare global {
  interface CDOTAGameRules {
    Addon: GameMode;
  }
}

@Reloadable
export class GameMode {
  public static Precache(this: void, context: CScriptPrecacheContext) {
    // GlobalFunctions.PrecacheResource(
    //   'particle',
    //   'particles/units/heroes/hero_meepo/meepo_earthbind_projectile_fx.vpcf',
    //   context
    // );
    // GlobalFunctions.PrecacheResource(
    //   'soundfile',
    //   'soundevents/game_sounds_heroes/game_sounds_meepo.vsndevts',
    //   context
    // );
  }

  public static Activate(this: void) {
    // When the addon activates, create a new instance of this GameMode class.
    GameRules.Addon = new GameMode();
  }

  constructor() {
    GameSetup.init();
  }

  public OnStateChange(): void {}

  // Called on script_reload
  public Reload() {
    // Do some stuff here
  }

  private OnNpcSpawned(event: NpcSpawnedEvent) {}
}
