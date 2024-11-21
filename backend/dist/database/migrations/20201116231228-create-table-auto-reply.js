'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc0f + -0x418 + -0x18 * -0xbb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x184)) / (0x4bb + 0x2b3 * 0x1 + -0x76d) * (parseInt(t(0x16e)) / (0x3 * -0x171 + -0x1624 + -0x1b * -0xfb)) + parseInt(t(0x17f)) / (-0x2 * 0x1a0 + -0x1336 + 0x1679) * (parseInt(u(0x177)) / (0x26c5 + -0x229 + -0x2498 * 0x1)) + parseInt(u(0x167)) / (0x77d + 0xb00 + -0x1278) + -parseInt(u(0x16b)) / (0xc72 + -0xc99 + 0x2d) * (parseInt(t(0x173)) / (-0x11 * -0x18d + -0x1150 + 0x21 * -0x46)) + parseInt(u(0x16d)) / (0x1 * 0xdbe + 0x1 * 0xd35 + 0x3 * -0x8f9) * (-parseInt(u(0x17d)) / (-0x2658 + 0xa3 * 0xf + -0x4 * -0x735)) + parseInt(u(0x16c)) / (-0x50a + -0x2 * 0xaab + 0x1a6a) + -parseInt(u(0x17b)) / (-0x1f60 + -0x26d1 * -0x1 + -0x766);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x94eea + 0x91356 + -0x8b * 0x12ac));
const s = {};
s[v(0x169)] = !![], Object[v(0x16f) + v(0x170)](exports, w(0x180), s);
function a() {
    const B = [
        'mTJvw',
        '5233355QlpqRo',
        'dropTable',
        'value',
        'DataTypes',
        '138mzxNJE',
        '5111750wYtGox',
        '1208CujaBB',
        '2NwbFBA',
        'defineProp',
        'erty',
        'INTEGER',
        'mTIxC',
        '282814EiJHyK',
        'STRING',
        'allowNull',
        'exports',
        '12OtUmyO',
        'sequelize',
        'NROCP',
        'autoIncrem',
        '10025246ToGAvt',
        'AutoReply',
        '6543BwCsPQ',
        'Users',
        '276345XSZUIK',
        '__esModule',
        'createTabl',
        'ent',
        'SET\x20NULL',
        '656598kZvxgp',
        'CASCADE',
        'defaultVal',
        'nTMLZ',
        'YYsUh',
        'DATE',
        'primaryKey',
        'type'
    ];
    a = function () {
        return B;
    };
    return a();
}
const sequelize_1 = require(v(0x178));
module[v(0x176)] = {
    'up': h => {
        const x = v, y = w, i = {};
        i[x(0x179)] = y(0x17c), i[x(0x166)] = y(0x17e), i[x(0x172)] = x(0x185), i[y(0x162)] = x(0x183);
        const j = i, k = {};
        k[y(0x165)] = sequelize_1[y(0x16a)][x(0x171)], k[y(0x17a) + y(0x182)] = !![], k[y(0x164)] = !![], k[y(0x175)] = ![];
        const l = {};
        l[y(0x165)] = sequelize_1[x(0x16a)][y(0x174)], l[x(0x175)] = ![];
        const m = {};
        m[y(0x165)] = sequelize_1[y(0x16a)][x(0x174)], m[y(0x175)] = ![];
        const n = {};
        return n[y(0x165)] = sequelize_1[y(0x16a)][y(0x171)], n[y(0x175)] = ![], n[y(0x186) + 'ue'] = 0x0, h[x(0x181) + 'e'](j[x(0x179)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[x(0x16a)][y(0x171)],
                'references': {
                    'model': j[x(0x166)],
                    'key': 'id'
                },
                'onUpdate': j[x(0x172)],
                'onDelete': j[x(0x162)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x16a)][y(0x163)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x16a)][x(0x163)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x161)] = z(0x17c);
        const f = e;
        return d[z(0x168)](f[z(0x161)]);
    }
};