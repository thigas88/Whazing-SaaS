'use strict';
function a() {
    const B = [
        'dropTable',
        '1078075UbQrIS',
        'DATE',
        'Tenants',
        'SET\x20NULL',
        'DataTypes',
        'AbFzo',
        'createTabl',
        '3332133wxvfcU',
        'ozRbX',
        'primaryKey',
        'STRING',
        'defineProp',
        'Users',
        '4Zgalzr',
        'allowNull',
        '2880728dsugHH',
        'ent',
        '__esModule',
        '6yWLOaZ',
        '5544399KBKEsU',
        'nfdLz',
        '2YPKoST',
        '43508900MdOHSw',
        'FastReply',
        'TEXT',
        'CJBRp',
        'exports',
        'EmTPm',
        'INTEGER',
        'value',
        'WJexV',
        'autoIncrem',
        'sequelize',
        'erty',
        'type',
        'CASCADE',
        '13471254YsQLFR',
        '21433TzOsQu'
    ];
    a = function () {
        return B;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x7f)) / (0x1 * 0x18ee + 0x2 * 0x1241 + -0x3d6f) * (parseInt(t(0x96)) / (0x4 * -0x2ab + -0x2 * 0xe05 + 0x26b8)) + -parseInt(t(0x88)) / (0x17 * -0x35 + 0xc1 * 0x4 + 0x1c2) + -parseInt(t(0x8e)) / (0x1 * -0x1593 + 0x1 * 0x1445 + 0x152) * (-parseInt(t(0x81)) / (0x1681 * -0x1 + 0x26cb + -0x1045)) + parseInt(u(0x93)) / (-0x55f + -0x23e0 + 0x2945) * (-parseInt(t(0x94)) / (0x155 + -0x2 * 0xc62 + 0x1776)) + -parseInt(u(0x90)) / (-0x1784 + 0x480 + -0x4 * -0x4c3) + -parseInt(t(0x7e)) / (-0x218d + 0x187d + 0x919) + parseInt(u(0x97)) / (0x5d * 0x25 + 0x2603 * 0x1 + -0x336a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xfb2f8 + 0x161676 + 0x63ff3));
const s = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4d7 + 0x2417 + -0x1 * 0x2876);
        let h = e[f];
        return h;
    }, b(c, d);
}
s[v(0x9e)] = !![], Object[w(0x8c) + w(0x7b)](exports, v(0x92), s);
const sequelize_1 = require(w(0x7a));
module[w(0x9b)] = {
    'up': g => {
        const x = v, y = w, h = {};
        h[x(0x95)] = x(0x98), h[x(0x9c)] = y(0x8d), h[x(0x89)] = y(0x7d), h[y(0x78)] = x(0x84), h[y(0x86)] = y(0x83);
        const i = h, j = {};
        j[x(0x7c)] = sequelize_1[x(0x85)][x(0x9d)], j[y(0x79) + y(0x91)] = !![], j[y(0x8a)] = !![], j[y(0x8f)] = ![];
        const k = {};
        k[y(0x7c)] = sequelize_1[x(0x85)][x(0x8b)], k[y(0x8f)] = ![];
        const l = {};
        return l[x(0x7c)] = sequelize_1[x(0x85)][y(0x99)], l[y(0x8f)] = ![], g[y(0x87) + 'e'](i[x(0x95)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[x(0x85)][x(0x9d)],
                'references': {
                    'model': i[x(0x9c)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x89)],
                'onDelete': i[x(0x78)]
            },
            'tenantId': {
                'type': sequelize_1[y(0x85)][y(0x9d)],
                'references': {
                    'model': i[y(0x86)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x89)],
                'onDelete': i[y(0x89)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[y(0x85)][y(0x82)](0x21af * 0x1 + -0x20ab * -0x1 + 0x4 * -0x1095),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x85)][y(0x82)](-0x14ae + -0x97 * 0x29 + 0x2ce3),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0x9a)] = z(0x98);
        const f = e;
        return d[z(0x80)](f[A(0x9a)]);
    }
};