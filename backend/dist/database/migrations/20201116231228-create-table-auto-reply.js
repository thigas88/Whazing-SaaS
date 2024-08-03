'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x7c)) / (0x1 * 0xa25 + 0xf87 + -0x19ab) * (-parseInt(u(0x86)) / (-0x99 * -0x9 + 0x2 * -0x1099 + 0x1bd3)) + -parseInt(u(0x91)) / (-0x1f4b + -0x3 * -0x91b + 0x3fd) * (parseInt(u(0x95)) / (-0x8c6 * -0x3 + 0x4 * -0xa4 + -0x17be)) + -parseInt(u(0x83)) / (0x25ec + 0x1b * 0x16a + -0x4c15) * (-parseInt(t(0x9a)) / (0x1 * 0x23e9 + -0x1 * 0x6d9 + 0x19d * -0x12)) + parseInt(t(0x9b)) / (-0x1 * -0x1f9 + -0x1196 + 0xfa4) + parseInt(t(0x8a)) / (-0x25e4 + 0x1 * -0x11c + 0x2708) + parseInt(u(0x96)) / (-0x4 * 0x7a2 + 0x3 * -0xc07 + 0x42a6) * (parseInt(u(0x9d)) / (0x4 * -0x821 + -0xd * -0x1da + -0x1 * -0x87c)) + -parseInt(u(0x93)) / (0x19c8 + 0x2333 + -0x1450 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x758a0 + -0x250c7 * -0x5 + -0xae1f7));
const s = {};
s[v(0x82)] = !![], Object[v(0xa0) + w(0x99)](exports, v(0x92), s);
function a() {
    const B = [
        'UGrDa',
        'dropTable',
        'defineProp',
        'Users',
        '240277GKDcff',
        'DATE',
        'DataTypes',
        'EjBrA',
        'exports',
        'sequelize',
        'value',
        '5Meqqfm',
        'SET\x20NULL',
        'STRING',
        '2XOBdHp',
        'CASCADE',
        'defaultVal',
        'INTEGER',
        '5907592SZbtPx',
        'primaryKey',
        'AutoReply',
        'ZIzRu',
        'ent',
        'NQDPs',
        'type',
        '51369buWrVn',
        '__esModule',
        '25188669GibFuk',
        'autoIncrem',
        '32GdHPdP',
        '1323xYnLOD',
        'PUXGW',
        'createTabl',
        'erty',
        '5047338JsrhsD',
        '3326365QViLhL',
        'allowNull',
        '44810phAxGb'
    ];
    a = function () {
        return B;
    };
    return a();
}
const sequelize_1 = require(v(0x81));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * 0x39a + -0xe59 + 0x2 * 0x15d2);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[v(0x80)] = {
    'up': h => {
        const x = w, y = v, i = {};
        i[x(0x8d)] = y(0x8c), i[y(0x97)] = x(0x7b), i[y(0x7f)] = x(0x87), i[y(0x8f)] = y(0x84);
        const j = i, k = {};
        k[y(0x90)] = sequelize_1[x(0x7e)][y(0x89)], k[y(0x94) + x(0x8e)] = !![], k[x(0x8b)] = !![], k[x(0x9c)] = ![];
        const l = {};
        l[y(0x90)] = sequelize_1[y(0x7e)][x(0x85)], l[y(0x9c)] = ![];
        const m = {};
        m[x(0x90)] = sequelize_1[x(0x7e)][x(0x85)], m[y(0x9c)] = ![];
        const n = {};
        return n[x(0x90)] = sequelize_1[y(0x7e)][x(0x89)], n[y(0x9c)] = ![], n[y(0x88) + 'ue'] = 0x0, h[x(0x98) + 'e'](j[y(0x8d)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[x(0x7e)][y(0x89)],
                'references': {
                    'model': j[x(0x97)],
                    'key': 'id'
                },
                'onUpdate': j[y(0x7f)],
                'onDelete': j[y(0x8f)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x7e)][x(0x7d)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x7e)][x(0x7d)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x9e)] = z(0x8c);
        const f = e;
        return d[A(0x9f)](f[z(0x9e)]);
    }
};