'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x102)) / (-0x2d4 * 0x7 + -0x1 * -0x494 + -0x1b1 * -0x9) * (parseInt(s(0x11b)) / (-0xbb2 + -0x11f2 * 0x2 + 0x2f98)) + parseInt(s(0x10e)) / (-0x91 * 0x5 + 0x1d87 + -0x1aaf) + parseInt(r(0x11a)) / (-0xefa + 0x13d2 + -0x6 * 0xce) + parseInt(r(0xfd)) / (-0x91 + -0xe37 + -0x3 * -0x4ef) * (parseInt(r(0xfa)) / (0xc83 * -0x1 + 0x942 + 0x1 * 0x347)) + -parseInt(r(0x10a)) / (0x1 * -0x1afb + -0x225e + 0x3d60) + parseInt(s(0x101)) / (-0xb * -0x1eb + -0x9a0 + -0x65 * 0x1d) + parseInt(s(0xff)) / (-0x79 * -0x19 + -0x1ec + -0x9dc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x78c5f * 0x2 + -0x2c141 * -0x3 + -0xf6e74));
function a() {
    const z = [
        '1912017rijpAC',
        'erty',
        'exports',
        'DATE',
        'Tags',
        'Contacts',
        'IaYTY',
        'sequelize',
        'ContactTag',
        'INTEGER',
        'fXqYr',
        'CASCADE',
        '2827496MlkicG',
        '2tSdgOp',
        'createTabl',
        'sbssB',
        'AbywY',
        'autoIncrem',
        '42AIziGP',
        'ARNEM',
        'dropTable',
        '592660uGqJPf',
        'DataTypes',
        '958383TXAsQU',
        'RtvnX',
        '1222576lKFial',
        '1016040KtICFu',
        'ent',
        '__esModule',
        'value',
        'RESTRICT',
        'defineProp',
        'Tenants',
        'tMlEZ',
        '6282591DMosXK',
        'type',
        'primaryKey',
        'allowNull'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x105)] = !![], Object[u(0x107) + t(0x10f)](exports, u(0x104), q);
const sequelize_1 = require(u(0x115));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21ba + 0x14ad + -0x1 * 0x3571);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[u(0x110)] = {
    'up': e => {
        const v = t, w = t, f = {};
        f[v(0x109)] = v(0x116) + 's', f[w(0xf7)] = v(0x112), f[v(0x114)] = w(0x119), f[v(0xf8)] = v(0x106), f[v(0xfb)] = w(0x113), f[w(0x100)] = w(0x108);
        const g = f, h = {};
        return h[v(0x10b)] = sequelize_1[w(0xfe)][w(0x117)], h[v(0xf9) + v(0x103)] = !![], h[v(0x10c)] = !![], h[v(0x10d)] = ![], e[w(0xf6) + 'e'](g[w(0x109)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[w(0xfe)][w(0x117)],
                'references': {
                    'model': g[v(0xf7)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x114)],
                'onDelete': g[w(0xf8)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0xfe)][w(0x117)],
                'references': {
                    'model': g[v(0xfb)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x114)],
                'onDelete': g[w(0x114)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0xfe)][v(0x117)],
                'references': {
                    'model': g[v(0x100)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x114)],
                'onDelete': g[w(0x114)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0xfe)][v(0x111)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xfe)][v(0x111)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x118)] = y(0x116) + 's';
        const f = e;
        return d[x(0xfc)](f[y(0x118)]);
    }
};