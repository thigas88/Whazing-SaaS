'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x193)) / (-0x669 * -0x1 + -0x13dd + -0x109 * -0xd) * (-parseInt(r(0x184)) / (-0x1411 + -0x1d50 + 0x1 * 0x3163)) + parseInt(r(0x17a)) / (0xbb * 0xd + -0x74c + -0x230) * (-parseInt(s(0x191)) / (0x1210 + -0x2110 + -0x782 * -0x2)) + parseInt(r(0x180)) / (-0x93 * 0x23 + -0x2 * 0x924 + 0x3d7 * 0xa) + -parseInt(s(0x174)) / (-0x690 + 0xd3a + -0x6a4) * (-parseInt(r(0x17f)) / (-0x18f6 + -0x193 * 0xa + -0x1 * -0x28bb)) + parseInt(s(0x18c)) / (0x32d * 0xb + -0x4b9 + -0x1e2e) * (parseInt(r(0x186)) / (0x1857 + 0xa7d + -0x3 * 0xb99)) + -parseInt(s(0x188)) / (0x19 * 0x1 + -0x2 * -0x665 + -0xcd9 * 0x1) * (parseInt(r(0x178)) / (-0x1 * -0x2275 + 0x26 * 0xcb + -0x4 * 0x1023)) + parseInt(r(0x196)) / (-0x1 * -0x12db + 0x1 * 0x1069 + -0x2338);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdf * 0x8ba + -0x537fd * -0x5 + -0x393f0));
const q = {};
function a() {
    const z = [
        '15277669aWIdPv',
        'createTabl',
        '3KqGXUo',
        'defineProp',
        'value',
        'erty',
        'allowNull',
        '33747tYwEAh',
        '6429665GGxqYw',
        'primaryKey',
        'gsMDC',
        'dropTable',
        '480tpmiRV',
        'ContactCus',
        '4108311huaCHn',
        'eHHQD',
        '10travIW',
        'DATE',
        'exports',
        'XBzfq',
        '8TcReHN',
        'Contacts',
        'zcfdx',
        'autoIncrem',
        '__esModule',
        '6962068rEKPew',
        'ent',
        '5230OFPjxD',
        'STRING',
        'DataTypes',
        '37996956vILHOQ',
        'INTEGER',
        'CASCADE',
        '564IjRZBa',
        'tomFields',
        'type',
        'sequelize'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b50 + 0x112b + 0xb99);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[t(0x17c)] = !![], Object[t(0x17b) + t(0x17d)](exports, u(0x190), q);
const sequelize_1 = require(u(0x177));
module[u(0x18a)] = {
    'up': g => {
        const v = t, w = t, h = {};
        h[v(0x187)] = v(0x185) + w(0x175), h[w(0x18e)] = w(0x18d), h[w(0x18b)] = v(0x198);
        const i = h, j = {};
        j[w(0x176)] = sequelize_1[v(0x195)][v(0x197)], j[v(0x18f) + v(0x192)] = !![], j[w(0x181)] = !![], j[w(0x17e)] = ![];
        const k = {};
        k[w(0x176)] = sequelize_1[v(0x195)][w(0x194)], k[w(0x17e)] = ![];
        const l = {};
        return l[v(0x176)] = sequelize_1[v(0x195)][v(0x194)], l[v(0x17e)] = ![], g[w(0x179) + 'e'](i[v(0x187)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[w(0x195)][v(0x197)],
                'references': {
                    'model': i[w(0x18e)],
                    'key': 'id'
                },
                'onUpdate': i[w(0x18b)],
                'onDelete': i[w(0x18b)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x195)][w(0x189)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x195)][v(0x189)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x182)] = y(0x185) + x(0x175);
        const f = e;
        return d[x(0x183)](f[y(0x182)]);
    }
};