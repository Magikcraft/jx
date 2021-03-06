"use strict";
module.exports = function () {
    Object.keys(jx.api).forEach(function (key) {
        var enumeration = jx.api[key];
        jx.api[key] = {};
        jx.ar(enumeration.values()).forEach(function (value) {
            var vanilla = null;
            switch (key) {
                case 'attribute':
                    vanilla = value.name().toLowerCase().split('_').slice(1).join('_');
                    break;
                case 'entityType':
                    vanilla = value.name() === 'UNKNOWN' ? 'unknown' : value.key.key;
                    break;
                case 'equipmentSlot':
                case 'itemFlag':
                case 'operation':
                case 'soundCategory':
                    vanilla = value.name().toLowerCase();
                    break;
                case 'gameRule':
                    vanilla = value.name;
                    break;
                case 'material':
                    vanilla = value.name().startsWith('LEGACY') ? false : value.key.key;
                    break;
                case 'potionEffectType':
                    vanilla = value.handle.c().split('.')[2];
                    break;
                case 'sound':
                    vanilla = value.name().toLowerCase().split('_').join('.');
                    break;
                default:
                    vanilla = value.key.key;
                    break;
            }
            if (vanilla !== false) {
                var item = null;
                switch (key) {
                    case 'lootTables':
                        item = value.lootTable;
                        break;
                    default:
                        item = value;
                        break;
                }
                jx.api[key][vanilla] = item;
                var bukkit = null;
                switch (key) {
                    case 'gameRule':
                        bukkit = false;
                        break;
                    case 'material':
                        bukkit = value.name().startsWith('LEGACY') ? false : value.name();
                        break;
                    case 'enchantment':
                    case 'potionEffectType':
                        bukkit = value.name;
                        break;
                    default:
                        bukkit = value.name();
                        break;
                }
                if (bukkit !== false)
                    jx.api[key][bukkit] = vanilla;
                switch (key) {
                    case 'attribute':
                        var vanilla2 = value.name().toLowerCase().split('_');
                        jx.api[key][vanilla2[0] + '.' + jx.util.camel(vanilla2.slice(1).join(' '))] = value;
                        break;
                }
            }
        });
    });
    jx.event.player.click(function (x, inventory, instance, event) {
        var data = jx.data.server('interface');
        var hash = inventory.hashCode().toString();
        if (data[hash]) {
            event.setCancelled(true);
            var item = data[hash][event.slot];
            if (item.event) {
                jx.event.fire(item.event, instance);
            }
            if (item.command) {
                instance.chat(item.command);
            }
        }
    });
    jx.event.player.close(function (x, inventory) {
        var data = jx.data.server('interface');
        var hash = inventory.hashCode().toString();
        if (data[hash]) {
            data[hash] = void 0;
        }
    });
    jx.event.player.join(function (player, instance) {
        jx.data.server('players')[player.uuid] = instance.name;
        var perm = player.data('permission');
        Object.keys(perm).forEach(function (key) {
            jx.perm(instance, key, perm[key]);
        });
    });
    global._ = jx.wrappers._;
    global.$ = jx.wrappers.$;
};
