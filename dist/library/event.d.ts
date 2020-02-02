export var player: {
    break: (listener: (player?: any, block?: any, instance?: any, event?: any) => any) => void;
    chat: (listener: (player?: any, message?: string, instance?: any, event?: any) => any) => void;
    click: (listener: (player?: any, inventory?: any, instance?: any, item?: any, cursor?: any, event?: any) => any) => void;
    close: (listener: (player?: any, inventory?: any, instance?: any, event?: any) => any) => void;
    craft: (listener: (player?: any, recipe?: string, result?: any, inventory?: any, event?: any) => any) => void;
    command: (listener: (player?: any, command?: string, instance?: any, event?: any) => any) => void;
    hunger: (listener: (player?: any, level?: number, instance?: any, event?: any) => any) => void;
    join: (listener: (player?: any, instance?: any, event?: any) => any) => void;
    interact: (listener: (type?: "block" | "entity" | "none", player?: any, target?: any, instance?: any, event?: any) => any) => void;
    mode: (listener: (player?: any, to?: "ADVENTURE" | "CREATIVE" | "SPECTATOR" | "SURVIVAL", instance?: any, from?: "ADVENTURE" | "CREATIVE" | "SPECTATOR" | "SURVIVAL", event?: any) => any) => void;
    move: (listener: (player?: any, location?: any, instance?: any, event?: any) => any) => void;
    open: (listener: (player?: any, inventory?: any, instance?: any, event?: any) => any) => void;
    place: (listener: (player?: any, block?: any, instance?: any, event?: any) => any) => void;
    quit: (listener: (player?: any, instance?: any, event?: any) => any) => void;
    sleep: (listener: (player?: any, instance?: any, event?: any) => any) => void;
    teleport: (listener: (cause?: "chorus_fruit" | "command" | "end_gateway" | "end_portal" | "ender_pearl" | "nether_portal" | "plugin" | "spectate" | "unknown", player?: any, instance?: any, event?: any) => any) => void;
    wake: (listener: (player?: any, instance?: any, event?: any) => any) => void;
};
export var entity: {
    damage: (listener: (cause?: "block_explosion" | "contact" | "cramming" | "custom" | "dragon_breath" | "drowning" | "dryout" | "entity_attack" | "entity_explosion" | "entity_sweep_attack" | "fall" | "falling_block" | "fire" | "fire_tick" | "fly_into_wall" | "hot_floor" | "lava" | "lightning" | "magic" | "melting" | "poison" | "projectile" | "starvation" | "suffocation" | "suicide" | "thorns" | "void" | "wither", damagee?: any, damager?: any, damage?: number, event?: any) => any) => void;
    heal: (listener: (cause?: "block_explosion" | "contact" | "cramming" | "custom" | "dragon_breath" | "drowning" | "dryout" | "entity_attack" | "entity_explosion" | "entity_sweep_attack" | "fall" | "falling_block" | "fire" | "fire_tick" | "fly_into_wall" | "hot_floor" | "lava" | "lightning" | "magic" | "melting" | "poison" | "projectile" | "starvation" | "suffocation" | "suicide" | "thorns" | "void" | "wither", damagee?: any, damager?: any, damage?: number, event?: any) => any) => void;
    spawn: (listener: (entity?: any, location?: any, event?: any) => any) => void;
    target: (listener: (reason?: "unknown" | "custom" | "closest_entity" | "closest_player" | "collision" | "defend_village" | "follow_leader" | "forgot_target" | "owner_attacked_target" | "random_target" | "reinforcement_target" | "target_attacked_entity" | "target_attacked_nearby_entity" | "target_attacked_owner" | "target_died" | "tempt", entity?: any, target?: any, event?: any) => any) => void;
    transform: (listener: (reason?: "split" | "lightning" | "cured" | "drowned" | "infection" | "power" | "sheared", entity?: any, transformees?: any[], event?: any) => any) => void;
};
export declare const store: never[];
export declare function on(event: string, listener: Function): number;
export declare function fire(event: string, data: any): any[];
