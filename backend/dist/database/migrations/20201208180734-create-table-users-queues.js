'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xc4)) / (-0x183e + 0x47a * 0x8 + -0xb91) + -parseInt(p(0xc7)) / (0x11 * -0x151 + -0xc82 * -0x1 + 0x9e1) + -parseInt(q(0xc8)) / (-0x1df0 + -0x219d * 0x1 + 0xa98 * 0x6) + -parseInt(q(0xdc)) / (0x2 * -0xc8e + 0x2 * 0x167 + -0x1 * -0x1652) * (parseInt(q(0xc3)) / (0xc2f * 0x1 + -0x37 * -0x67 + -0x224b)) + parseInt(p(0xc9)) / (0x260c + -0x15 + 0x373 * -0xb) * (-parseInt(q(0xcf)) / (0x1 * -0x16e + 0x1 * 0x2665 + -0x24f0)) + parseInt(p(0xcc)) / (0x15d * -0x1b + -0x48c + 0x2963) * (-parseInt(p(0xd1)) / (0x2689 + -0x1534 + -0x1b * 0xa4)) + parseInt(q(0xdf)) / (-0x1 * 0x23f9 + 0x1 * -0x24cf + -0x6 * -0xc23);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb4e66 * 0x1 + 0x10 * 0x4181 + -0xcf583 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cc1 * 0x1 + 0x37f * -0x2 + -0x1506);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'defineProp',
        '__esModule',
        '184370HtaPET',
        '303956VFRMCH',
        'Queues',
        'primaryKey',
        '593348URoxOG',
        '861288ABSanz',
        '3673500TkgNME',
        'exports',
        'fyZsv',
        '408YVswXm',
        'DATE',
        'Users',
        '7mhFUvz',
        'createTabl',
        '55602lBqEnH',
        'value',
        'ent',
        'dropTable',
        'allowNull',
        'autoIncrem',
        'INTEGER',
        'UsersQueue',
        'DataTypes',
        'JwJEc',
        'sequelize',
        '64ngELWj',
        'erty',
        'EiXPV',
        '21737470ojHYPy',
        'CASCADE',
        'KmuiH',
        'tMPpP',
        'type'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0xd2)] = !![], Object[s(0xc1) + r(0xdd)](exports, s(0xc2), o);
const sequelize_1 = require(s(0xdb));
module[r(0xca)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0xcb)] = u(0xd8) + 's', f[u(0xde)] = u(0xc5), f[u(0xbe)] = t(0xbd), f[t(0xda)] = u(0xce);
        const g = f, h = {};
        return h[t(0xc0)] = sequelize_1[u(0xd9)][t(0xd7)], h[t(0xc6)] = !![], h[u(0xd6) + u(0xd3)] = !![], h[t(0xd5)] = ![], e[u(0xd0) + 'e'](g[u(0xcb)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[t(0xd9)][t(0xd7)],
                'references': {
                    'model': g[t(0xde)],
                    'key': 'id'
                },
                'onUpdate': g[u(0xbe)],
                'onDelete': g[u(0xbe)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0xd9)][u(0xd7)],
                'references': {
                    'model': g[t(0xda)],
                    'key': 'id'
                },
                'onUpdate': g[u(0xbe)],
                'onDelete': g[t(0xbe)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0xd9)][t(0xcd)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0xd9)][t(0xcd)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0xbf)] = v(0xd8) + 's';
        const f = e;
        return d[w(0xd4)](f[v(0xbf)]);
    }
};