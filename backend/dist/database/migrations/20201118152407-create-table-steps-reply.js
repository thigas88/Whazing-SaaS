'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x14e)) / (-0x1 * -0x215b + 0x2339 + -0xdb7 * 0x5) * (parseInt(v(0x15a)) / (0x9d * -0x14 + 0x1a63 + -0xe1d)) + -parseInt(w(0x14c)) / (-0x3 * -0xaa4 + 0xa04 * 0x3 + -0x3df5) + -parseInt(w(0x156)) / (-0x1929 + -0xdc + 0x9b * 0x2b) * (parseInt(v(0x154)) / (0x191 * 0x2 + -0x1f61 + 0x1c44 * 0x1)) + -parseInt(w(0x149)) / (-0x1 * -0x1205 + -0x899 + -0x966) + parseInt(w(0x15c)) / (0x1 * -0xd1f + 0x1120 + -0x3fa) + parseInt(v(0x162)) / (-0xa13 * 0x3 + 0x5bc + -0x1885 * -0x1) + -parseInt(w(0x147)) / (0x2b5 + -0x1 * 0x1f75 + 0x1cc9) * (-parseInt(w(0x160)) / (-0x8 * 0xa6 + -0xa7a + 0xfb4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa49b0 + 0xb3f1b + -0x48f56 * 0x2));
const u = {};
function a() {
    const D = [
        'primaryKey',
        'type',
        'FsAto',
        'autoIncrem',
        'exports',
        'defineProp',
        'ent',
        '828FTltsD',
        'dLJrh',
        '5308992JyqOJN',
        'value',
        'StepsReply',
        '4254573kkShjP',
        'dropTable',
        '4KXAnDV',
        'AutoReply',
        'Users',
        'INTEGER',
        'allowNull',
        'DataTypes',
        '470235UuTdEe',
        'erty',
        '12OZOxrX',
        'createTabl',
        'SEKPu',
        'ohiVd',
        '484324dqpUNZ',
        '__esModule',
        '861882ZwFVHx',
        'kTjYQ',
        'SET\x20NULL',
        'sequelize',
        '238410NkutPv',
        'DATE',
        '908936xmHhzw',
        'FonmJ',
        'STRING',
        'CASCADE'
    ];
    a = function () {
        return D;
    };
    return a();
}
u[x(0x14a)] = !![], Object[x(0x16b) + x(0x155)](exports, y(0x15b), u);
const sequelize_1 = require(y(0x15f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfff + -0x27a * 0x2 + 0x1639);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[y(0x16a)] = {
    'up': g => {
        const z = x, A = x, h = {};
        h[z(0x163)] = z(0x14b), h[z(0x148)] = A(0x14f), h[A(0x15d)] = z(0x165), h[z(0x159)] = z(0x150), h[A(0x168)] = A(0x15e);
        const i = h, j = {};
        j[z(0x167)] = sequelize_1[z(0x153)][A(0x151)], j[A(0x169) + z(0x146)] = !![], j[A(0x166)] = !![], j[A(0x152)] = ![];
        const k = {};
        k[A(0x167)] = sequelize_1[z(0x153)][A(0x164)], k[A(0x152)] = ![];
        const l = {};
        return l[z(0x167)] = sequelize_1[z(0x153)][z(0x151)], l[A(0x152)] = ![], g[A(0x157) + 'e'](i[z(0x163)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[A(0x153)][A(0x151)],
                'references': {
                    'model': i[A(0x148)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x15d)],
                'onDelete': i[A(0x15d)]
            },
            'action': {
                'type': sequelize_1[A(0x153)][A(0x151)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[z(0x153)][A(0x151)],
                'references': {
                    'model': i[A(0x159)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x15d)],
                'onDelete': i[A(0x168)]
            },
            'createdAt': {
                'type': sequelize_1[A(0x153)][A(0x161)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x153)][A(0x161)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0x158)] = C(0x14b);
        const f = e;
        return d[B(0x14d)](f[C(0x158)]);
    }
};