'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x568 + 0x22c6 + -0x27b5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x85)) / (0x393 + -0x1e3 * 0x1 + -0x1af) * (parseInt(t(0x97)) / (0x1567 * 0x1 + 0x13d2 + 0xdbd * -0x3)) + parseInt(t(0x9c)) / (-0x3f * -0x31 + -0x1669 * 0x1 + 0x7 * 0x17b) + -parseInt(u(0x96)) / (-0x33 * 0x45 + -0x531 * -0x6 + 0x1163 * -0x1) + -parseInt(u(0x8b)) / (0xf44 + 0x3a0 * -0x2 + 0x7ff * -0x1) + parseInt(u(0x99)) / (0x2077 * -0x1 + 0x193 * 0x9 + 0x1252) * (-parseInt(u(0x95)) / (0x26dc + 0x8b7 + 0x1 * -0x2f8c)) + -parseInt(t(0x9a)) / (0x1311 + 0x305 * -0xb + 0x21 * 0x6e) * (parseInt(u(0x7a)) / (-0x1900 + -0xd1 * 0x13 + 0x2b4 * 0xf)) + parseInt(u(0x82)) / (0x1d * 0x34 + 0x11 * 0x183 + -0x29 * 0xc5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x75457 + -0xb2 * -0x625 + 0xc3a6c));
const s = {};
s[v(0x81)] = !![], Object[w(0x9b) + w(0x8e)](exports, w(0x8c), s);
const sequelize_1 = require(v(0x7d));
function a() {
    const B = [
        '7toImPP',
        '4354800caMOhp',
        '2143948AMlwDr',
        'createTabl',
        '5656800lyaoDw',
        '17104RIbgnr',
        'defineProp',
        '2332389ZhrRKh',
        'dropTable',
        'QZFQl',
        'exports',
        'pending',
        'SET\x20NULL',
        '1314OVLdMp',
        'ent',
        'mBino',
        'sequelize',
        'DataTypes',
        'Tickets',
        'wXIPP',
        'value',
        '33273760SMQlMF',
        'type',
        'INTEGER',
        '1uHykUS',
        'echfQ',
        'primaryKey',
        'YQVfh',
        'CASCADE',
        'Users',
        '440890YkKqQp',
        '__esModule',
        'allowNull',
        'erty',
        'autoIncrem',
        'Contacts',
        'uXKIT',
        'vmqfU',
        'DATE',
        'STRING'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[w(0x9f)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x7c)] = y(0x7f), f[x(0x80)] = y(0xa0), f[y(0x92)] = y(0x90), f[y(0x91)] = x(0x89), f[x(0x9e)] = x(0x8a), f[x(0x86)] = y(0x79);
        const g = f, h = {};
        return h[x(0x83)] = sequelize_1[x(0x7e)][x(0x84)], h[x(0x8f) + x(0x7b)] = !![], h[y(0x87)] = !![], h[x(0x8d)] = ![], e[x(0x98) + 'e'](g[y(0x7c)], {
            'id': h,
            'status': {
                'type': sequelize_1[y(0x7e)][y(0x94)],
                'defaultValue': g[x(0x80)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[x(0x7e)][x(0x94)] },
            'contactId': {
                'type': sequelize_1[x(0x7e)][y(0x84)],
                'references': {
                    'model': g[x(0x92)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x91)],
                'onDelete': g[y(0x91)]
            },
            'userId': {
                'type': sequelize_1[x(0x7e)][x(0x84)],
                'references': {
                    'model': g[y(0x9e)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x91)],
                'onDelete': g[x(0x86)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x7e)][y(0x93)](-0x710 + -0xa54 + -0x8b5 * -0x2),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x7e)][y(0x93)](0x1 * -0x1791 + -0x15c3 * -0x1 + -0x12 * -0x1a),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x88)] = A(0x7f);
        const f = e;
        return d[A(0x9d)](f[A(0x88)]);
    }
};