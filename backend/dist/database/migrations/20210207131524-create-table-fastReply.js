'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x22f1 + -0x1d8f + -0xb * 0x56);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'autoIncrem',
        'SET\x20NULL',
        'DataTypes',
        'RywCd',
        'type',
        'SLEEr',
        '1jWjouo',
        'TEXT',
        '__esModule',
        '5961072mbHuVu',
        'AiEIi',
        '340iFhWEE',
        'erty',
        '7701fGFdib',
        'Users',
        '137910HCHGYA',
        'dropTable',
        'EFAHo',
        'defineProp',
        'DATE',
        '3668ZERwsG',
        'INTEGER',
        '5034vcFrZf',
        'sequelize',
        'FastReply',
        'oUcjQ',
        'Tenants',
        'exports',
        'pubJA',
        '187ryYkrd',
        '315nlNLBz',
        '3731310hdwBmY',
        '1192eUoUBF',
        'CASCADE',
        'STRING',
        'primaryKey',
        'ent',
        'allowNull',
        'value',
        '512566LxhOsp',
        'createTabl'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1b7)) / (-0x24a6 + -0x1 * -0xb9b + 0x190c) * (-parseInt(u(0x1d8)) / (0xa6 * 0x22 + -0xb2 * 0x9 + -0xfc8)) + -parseInt(t(0x1be)) / (-0x7b8 + -0x48 * 0x17 + -0x2d7 * -0x5) * (-parseInt(u(0x1bc)) / (-0x5 * 0x6ce + 0x4 * -0x32e + 0x2ec2)) + parseInt(t(0x1cf)) / (0x1 * -0x959 + -0x2237 + 0x2b95) * (parseInt(u(0x1c7)) / (0x116 + -0x1caf + -0x3 * -0x935)) + -parseInt(u(0x1c5)) / (-0xc33 + -0x2 * 0x14c + 0xed2) * (-parseInt(u(0x1d1)) / (0xb4 + 0x5 * 0x529 + -0x1a79)) + parseInt(t(0x1d0)) / (-0x1ff2 + 0x15d * -0x3 + -0xc06 * -0x3) + parseInt(t(0x1c0)) / (-0x14 * -0x94 + -0x1b57 + 0xfd1) * (-parseInt(u(0x1ce)) / (-0xb * 0x14f + 0x1 * -0x221b + -0x308b * -0x1)) + -parseInt(t(0x1ba)) / (-0x608 + -0xeac + 0x14c0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x3c887 + -0x32f9 + -0x5 * -0x1ad86));
const s = {};
s[v(0x1d7)] = !![], Object[v(0x1c3) + v(0x1bd)](exports, w(0x1b9), s);
const sequelize_1 = require(v(0x1c8));
module[w(0x1cc)] = {
    'up': g => {
        const x = v, y = v, h = {};
        h[x(0x1bb)] = y(0x1c9), h[y(0x1b6)] = x(0x1bf), h[x(0x1b4)] = y(0x1d2), h[x(0x1c2)] = y(0x1b2), h[y(0x1ca)] = y(0x1cb);
        const i = h, j = {};
        j[x(0x1b5)] = sequelize_1[y(0x1b3)][y(0x1c6)], j[y(0x1b1) + y(0x1d5)] = !![], j[x(0x1d4)] = !![], j[x(0x1d6)] = ![];
        const k = {};
        k[y(0x1b5)] = sequelize_1[y(0x1b3)][x(0x1d3)], k[y(0x1d6)] = ![];
        const l = {};
        return l[x(0x1b5)] = sequelize_1[y(0x1b3)][y(0x1b8)], l[y(0x1d6)] = ![], g[x(0x1b0) + 'e'](i[x(0x1bb)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[y(0x1b3)][y(0x1c6)],
                'references': {
                    'model': i[y(0x1b6)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x1b4)],
                'onDelete': i[x(0x1c2)]
            },
            'tenantId': {
                'type': sequelize_1[x(0x1b3)][y(0x1c6)],
                'references': {
                    'model': i[x(0x1ca)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x1b4)],
                'onDelete': i[y(0x1b4)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[y(0x1b3)][y(0x1c4)](0x626 * -0x5 + -0x1f67 + -0xc6f * -0x5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x1b3)][x(0x1c4)](0xb * 0x24f + -0x1a4d * 0x1 + 0x1 * 0xee),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x1cd)] = A(0x1c9);
        const f = e;
        return d[A(0x1c1)](f[z(0x1cd)]);
    }
};