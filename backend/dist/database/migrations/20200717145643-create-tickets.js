'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x252 * -0x4 + 0x7ca + -0xb3 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'primaryKey',
        'SET\x20NULL',
        'DATE',
        '550SalaXG',
        'type',
        'defineProp',
        '__esModule',
        'erty',
        '174eJcgJQ',
        'kGmSO',
        'jlQMT',
        'INTEGER',
        'autoIncrem',
        'ent',
        'Tickets',
        '2927991UzAVfn',
        '14005888GiOiFI',
        'Contacts',
        'Tozzv',
        '675387YlXtHe',
        'pending',
        'STRING',
        'value',
        '4fVAVTz',
        'createTabl',
        'zlbFO',
        '4790535WrvAao',
        'JkJvx',
        'dropTable',
        'DataTypes',
        'tqsDR',
        'jyUcR',
        '341915gpzWXO',
        'CASCADE',
        '1565604oopueE',
        'sequelize',
        '2582920UgvIwj',
        'exports',
        'Users',
        'allowNull'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x151)) / (0x9c1 + 0xa77 * 0x2 + -0x1eae) + -parseInt(u(0x153)) / (-0x9 * 0x422 + -0x1 * -0x2047 + 0x4ed) + -parseInt(t(0x166)) / (0x826 + -0x2091 + -0xc37 * -0x2) * (parseInt(t(0x16e)) / (0x244f + 0x1 * 0x4ad + -0x6d4 * 0x6)) + parseInt(t(0x171)) / (-0x323 + -0x1 * -0x12dd + 0x1 * -0xfb5) + -parseInt(t(0x15f)) / (0x1 * 0x9e7 + -0xae7 * 0x1 + 0x106) * (-parseInt(u(0x14f)) / (-0xe74 * 0x1 + -0x1099 * 0x1 + 0x9 * 0x374)) + -parseInt(u(0x167)) / (0x90 * -0x3 + -0x1 * 0x1c9f + 0x1e57) + parseInt(t(0x16a)) / (0x1 * 0x4c7 + 0xa1 * 0x32 + -0x2430) * (parseInt(t(0x15a)) / (0xc3d * -0x1 + 0x69a + 0x5ad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x147dca + 0x2 * 0xb52dd + 0x3ca0 * -0x7b));
const s = {};
s[v(0x16d)] = !![], Object[w(0x15c) + w(0x15e)](exports, v(0x15d), s);
const sequelize_1 = require(w(0x152));
module[v(0x154)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x172)] = x(0x165), f[y(0x175)] = y(0x16b), f[y(0x170)] = y(0x168), f[x(0x169)] = x(0x150), f[y(0x14e)] = y(0x155), f[y(0x160)] = x(0x158);
        const g = f, h = {};
        return h[x(0x15b)] = sequelize_1[y(0x174)][y(0x162)], h[y(0x163) + y(0x164)] = !![], h[y(0x157)] = !![], h[x(0x156)] = ![], e[y(0x16f) + 'e'](g[x(0x172)], {
            'id': h,
            'status': {
                'type': sequelize_1[x(0x174)][x(0x16c)],
                'defaultValue': g[x(0x175)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0x174)][y(0x16c)] },
            'contactId': {
                'type': sequelize_1[y(0x174)][y(0x162)],
                'references': {
                    'model': g[y(0x170)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x169)],
                'onDelete': g[x(0x169)]
            },
            'userId': {
                'type': sequelize_1[x(0x174)][y(0x162)],
                'references': {
                    'model': g[y(0x14e)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x169)],
                'onDelete': g[y(0x160)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x174)][y(0x159)](0x1ad1 + -0xb16 + -0xfb5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x174)][y(0x159)](-0xd75 + -0x1d98 * -0x1 + 0x5 * -0x339),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x161)] = A(0x165);
        const f = e;
        return d[A(0x173)](f[z(0x161)]);
    }
};