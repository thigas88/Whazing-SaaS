'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xdf)) / (-0x15bc + -0x1583 + 0x2b40) + parseInt(t(0xf0)) / (-0x26ca + -0x1125 + 0x37f1) + -parseInt(t(0xeb)) / (0x8e * -0x3f + -0xd22 + 0x3b3 * 0xd) * (-parseInt(u(0xda)) / (-0x1 * -0x43a + 0x257f + -0xde7 * 0x3)) + -parseInt(t(0xcc)) / (-0x164a + -0x1 * 0xa57 + 0x255 * 0xe) * (-parseInt(t(0xe5)) / (-0xfc1 + -0x1f73 + 0x2f3a)) + parseInt(u(0xea)) / (0x4c6 + 0xf81 + -0xa20 * 0x2) * (-parseInt(t(0xd4)) / (-0x1 * 0x148 + 0x2503 * 0x1 + -0x2bf * 0xd)) + -parseInt(t(0xce)) / (-0x6b * -0x6 + -0x40 * -0x3e + 0x1 * -0x11f9) * (-parseInt(u(0xe1)) / (-0x10e5 + 0x140a + 0x5 * -0x9f)) + -parseInt(u(0xe0)) / (-0x7ea * -0x3 + 0x2332 + -0x3ae5 * 0x1) * (parseInt(t(0xcb)) / (0x2 * -0xdf3 + -0x195d + 0x354f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcd21 + -0x68fe * -0x3 + 0x3de61));
const s = {};
s[v(0xde)] = !![], Object[w(0xee) + v(0xe7)](exports, v(0xe9), s);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21ba + 0x159 * 0xb + 0x13b0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(v(0xd7));
function a() {
    const B = [
        '120HtISsf',
        'createTabl',
        'erty',
        'ANdOn',
        '__esModule',
        '7lsrrTK',
        '243gnKhcf',
        'CASCADE',
        'WvShU',
        'defineProp',
        'INTEGER',
        '204906vvmtRN',
        'dropTable',
        'fJMtL',
        'allowNull',
        '12WLYapD',
        '72715ShwgRG',
        'STRING',
        '285075vnjlRQ',
        'Tenants',
        'FastReply',
        'exports',
        'DYPzq',
        'Users',
        '1673608LsrAEQ',
        'type',
        'DataTypes',
        'sequelize',
        'YBBHD',
        'autoIncrem',
        '27620jZvPbu',
        'TEXT',
        'ent',
        'INNbQ',
        'value',
        '96828ZKSUrz',
        '12067682tkQSvD',
        '170ePEWOx',
        'DATE',
        'SET\x20NULL',
        'primaryKey'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[v(0xd1)] = {
    'up': g => {
        const x = v, y = v, h = {};
        h[x(0xed)] = y(0xd0), h[x(0xd2)] = y(0xd3), h[y(0xe8)] = y(0xec), h[y(0xdd)] = y(0xe3), h[x(0xd8)] = x(0xcf);
        const i = h, j = {};
        j[y(0xd5)] = sequelize_1[y(0xd6)][x(0xef)], j[y(0xd9) + x(0xdc)] = !![], j[x(0xe4)] = !![], j[y(0xca)] = ![];
        const k = {};
        k[y(0xd5)] = sequelize_1[x(0xd6)][x(0xcd)], k[y(0xca)] = ![];
        const l = {};
        return l[y(0xd5)] = sequelize_1[y(0xd6)][x(0xdb)], l[x(0xca)] = ![], g[x(0xe6) + 'e'](i[x(0xed)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[x(0xd6)][x(0xef)],
                'references': {
                    'model': i[y(0xd2)],
                    'key': 'id'
                },
                'onUpdate': i[y(0xe8)],
                'onDelete': i[y(0xdd)]
            },
            'tenantId': {
                'type': sequelize_1[x(0xd6)][x(0xef)],
                'references': {
                    'model': i[y(0xd8)],
                    'key': 'id'
                },
                'onUpdate': i[x(0xe8)],
                'onDelete': i[y(0xe8)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0xd6)][y(0xe2)](-0x1 * 0x1f39 + -0x1d8e + 0x3ccd),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xd6)][x(0xe2)](0x212e + 0x440 + -0x2568),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0xc9)] = z(0xd0);
        const f = e;
        return d[A(0xf1)](f[A(0xc9)]);
    }
};