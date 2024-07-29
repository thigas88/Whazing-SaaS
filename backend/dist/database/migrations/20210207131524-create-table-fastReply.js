'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x17e)) / (0x7 * 0x175 + -0x2544 + 0x2b5 * 0xa) * (parseInt(u(0x181)) / (-0xe * -0xe + -0x16 * 0xf1 + 0x13f4)) + -parseInt(t(0x1a0)) / (-0x1bad + 0x518 * -0x4 + 0x3010 * 0x1) * (-parseInt(t(0x196)) / (-0x6 * 0xd + 0x27d * -0xd + 0x20ab)) + parseInt(t(0x189)) / (0xd * -0x157 + 0x804 + 0x96c * 0x1) * (-parseInt(t(0x198)) / (-0x2171 + -0x1a17 * 0x1 + -0xf2 * -0x3f)) + parseInt(t(0x19b)) / (-0x1 * -0x11c3 + -0x13b0 + 0x14 * 0x19) * (parseInt(t(0x1a5)) / (0x1a * -0x17 + 0x8c * 0x2d + 0x27 * -0x92)) + parseInt(t(0x19f)) / (0x59 * 0x3b + -0x1 * -0xb3f + -0x1fb9 * 0x1) * (parseInt(t(0x194)) / (0x1269 + -0x23e9 + 0x118a)) + parseInt(u(0x199)) / (-0x1a * -0x3e + 0x6 * 0x337 + -0x1f7 * 0xd) * (-parseInt(u(0x17d)) / (-0x1 * -0x11ef + 0xde7 + -0x1fca)) + parseInt(u(0x184)) / (-0x167 * 0x1 + -0x719 + 0x88d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x20437 * -0x1 + -0xd3131 + -0x27f * -0xa73));
const s = {};
s[v(0x186)] = !![], Object[v(0x183) + v(0x190)](exports, w(0x19e), s);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x96f + -0x2382 + 0x1b8f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(v(0x18e));
function a() {
    const B = [
        '8258718tYcsyE',
        'TEXT',
        'value',
        'CASCADE',
        'Tenants',
        '205tnlaLF',
        'ddeqw',
        'INTEGER',
        'Users',
        'dropTable',
        'sequelize',
        'QPHUh',
        'erty',
        'SET\x20NULL',
        'STRING',
        'DATE',
        '10NVkOdY',
        'kzBVG',
        '497296iMYsAo',
        'autoIncrem',
        '60678QGPyhZ',
        '7945201GFCbEE',
        'createTabl',
        '1148MHFmmG',
        'DataTypes',
        'TFJHh',
        '__esModule',
        '2430162orLeWd',
        '6dXdsfi',
        'allowNull',
        'FastReply',
        'primaryKey',
        'type',
        '50936uXJdmj',
        'exports',
        '12UjOMAQ',
        '116201lXhDJq',
        'ent',
        'WcbQz',
        '6IcwpiJ',
        'erBGq',
        'defineProp'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[w(0x17c)] = {
    'up': g => {
        const x = v, y = v, h = {};
        h[x(0x19d)] = y(0x1a2), h[x(0x18a)] = y(0x18c), h[x(0x18f)] = x(0x187), h[y(0x182)] = x(0x191), h[y(0x180)] = y(0x188);
        const i = h, j = {};
        j[x(0x1a4)] = sequelize_1[y(0x19c)][y(0x18b)], j[y(0x197) + x(0x17f)] = !![], j[y(0x1a3)] = !![], j[y(0x1a1)] = ![];
        const k = {};
        k[y(0x1a4)] = sequelize_1[x(0x19c)][x(0x192)], k[y(0x1a1)] = ![];
        const l = {};
        return l[x(0x1a4)] = sequelize_1[y(0x19c)][y(0x185)], l[x(0x1a1)] = ![], g[x(0x19a) + 'e'](i[y(0x19d)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[x(0x19c)][x(0x18b)],
                'references': {
                    'model': i[x(0x18a)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x18f)],
                'onDelete': i[y(0x182)]
            },
            'tenantId': {
                'type': sequelize_1[x(0x19c)][y(0x18b)],
                'references': {
                    'model': i[x(0x180)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x18f)],
                'onDelete': i[x(0x18f)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0x19c)][y(0x193)](0x1ed5 + 0x7ab + -0x32 * 0xc5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x19c)][y(0x193)](-0x22fb + -0xbf * 0x1 + -0x34 * -0xb0),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x195)] = A(0x1a2);
        const f = e;
        return d[A(0x18d)](f[z(0x195)]);
    }
};