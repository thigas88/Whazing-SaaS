'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1d21 + 0x1750 + 0x63a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x75)) / (0x1894 + 0x17 * 0x15b + -0x10 * 0x37c) * (-parseInt(r(0x85)) / (0x1850 + 0x1e4b + 0x9 * -0x611)) + parseInt(r(0x8a)) / (0x5d * 0x11 + 0x8f9 * -0x1 + 0x1 * 0x2cf) * (parseInt(s(0x8b)) / (-0x175f + -0x2651 + 0x2ce * 0x16)) + parseInt(s(0x94)) / (0xa7 * 0x12 + 0x1 * 0x506 + 0x1 * -0x10bf) * (-parseInt(s(0x6a)) / (-0x2 * 0x67a + 0x749 + 0x5b1)) + -parseInt(s(0x7f)) / (0x1853 + 0x1bd1 * 0x1 + -0x341d) * (parseInt(r(0x89)) / (-0xd7d + -0x1 * 0x8af + -0x74 * -0x31)) + parseInt(r(0x92)) / (-0xe17 * 0x1 + -0x1ab4 + 0x28d4) * (-parseInt(r(0x7c)) / (-0x462 + -0xc1 * 0x3 + 0x6af)) + -parseInt(s(0x74)) / (-0x1 * 0x6f7 + -0x1c46 + 0x2348) * (parseInt(r(0x76)) / (-0x2368 + -0x7ee + 0x2b62)) + parseInt(r(0x91)) / (-0xe56 + -0x16a9 + 0x1 * 0x250c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x381f * -0xb + 0x1d71a + -0x3cca9 * -0x1));
const q = {};
function a() {
    const z = [
        'ent',
        '30EBXgdg',
        'erty',
        'UserMessag',
        '161khNpsT',
        'esLog',
        'qfdNM',
        'Tickets',
        'INTEGER',
        'value',
        '62bvWQAo',
        'STRING',
        'type',
        'pJsGm',
        '105536YGSUxn',
        '1103091FdkNNp',
        '4pTJPtV',
        'defineProp',
        'allowNull',
        'SET\x20NULL',
        'exports',
        'sequelize',
        '10652993yTmuDf',
        '1121499REPOpF',
        'CASCADE',
        '10445JnXIFI',
        'defaultVal',
        'dropTable',
        '606QtHptK',
        'Ynlpe',
        'PdQSh',
        'autoIncrem',
        'DataTypes',
        'RESTRICT',
        'DATE',
        'Users',
        'lXVpp',
        'WhFRv',
        '2761YsWNwr',
        '8299yaxxtE',
        '16476UksLCK',
        '__esModule',
        'primaryKey',
        'createTabl',
        'pPFzA'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x84)] = !![], Object[t(0x8c) + t(0x7d)](exports, t(0x77), q);
const sequelize_1 = require(u(0x90));
module[u(0x8f)] = {
    'up': f => {
        const v = t, w = u, g = {};
        g[v(0x81)] = w(0x7e) + v(0x80), g[w(0x6b)] = v(0x71), g[v(0x72)] = w(0x93), g[w(0x73)] = v(0x6f), g[w(0x6c)] = v(0x82), g[w(0x88)] = w(0x8e);
        const h = g, i = {};
        i[w(0x87)] = sequelize_1[v(0x6e)][v(0x83)], i[w(0x6d) + w(0x7b)] = !![], i[w(0x78)] = !![], i[v(0x8d)] = ![];
        const j = {};
        return j[v(0x87)] = sequelize_1[v(0x6e)][v(0x86)], j[v(0x8d)] = !![], j[w(0x95) + 'ue'] = null, f[v(0x79) + 'e'](h[v(0x81)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[w(0x6e)][w(0x83)],
                'references': {
                    'model': h[w(0x6b)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x72)],
                'onDelete': h[w(0x73)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x6e)][w(0x83)],
                'references': {
                    'model': h[v(0x6c)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x72)],
                'onDelete': h[w(0x88)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x6e)][w(0x70)](-0x920 + 0x1 * 0x2663 + -0x1f3 * 0xf),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x6e)][w(0x70)](0x5f * 0x14 + -0x11 * 0xfe + 0x978),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x7a)] = x(0x7e) + x(0x80);
        const f = e;
        return d[x(0x69)](f[y(0x7a)]);
    }
};