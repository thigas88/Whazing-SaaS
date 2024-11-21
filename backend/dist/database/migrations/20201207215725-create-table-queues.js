'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f5c + 0x1 * -0x1425 + 0x3562 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1fe)) / (0x1183 * -0x1 + -0xd71 + 0x1ef5) * (parseInt(p(0x1f9)) / (0x1d68 + 0x19c9 + -0x115 * 0x33)) + -parseInt(p(0x1f8)) / (-0xcc5 + 0x5ac * -0x5 + 0x2924) * (-parseInt(q(0x203)) / (-0x23 * 0xac + 0x10d * -0x6 + 0x1dd6)) + parseInt(q(0x1ff)) / (0x129e + 0x16 * 0x4e + -0x194d) + -parseInt(p(0x1ea)) / (0x1aa8 + -0x2373 + -0x3d * -0x25) * (-parseInt(q(0x1fa)) / (0x25f * 0xb + -0x3cf + 0x11 * -0x14f)) + -parseInt(p(0x1e4)) / (-0x93a * 0x2 + 0x71 * 0x4f + -0x1063) * (parseInt(p(0x206)) / (0x53b + -0x20e * -0x9 + -0x17b * 0x10)) + parseInt(q(0x1f2)) / (0x7 * 0x4c7 + -0xc43 + 0x29 * -0x84) + parseInt(p(0x200)) / (-0x54 * 0x20 + 0xd99 + -0x30e) * (-parseInt(p(0x1f4)) / (0x6c6 * 0x1 + -0x3f * 0x12 + 0x1 * -0x24c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c412 + 0x43597 + -0x7e1d * -0x3));
const o = {};
function a() {
    const x = [
        'STRING',
        'dropTable',
        'INTEGER',
        'value',
        '49902NYruoy',
        'ent',
        'raOsC',
        'rtEyk',
        'type',
        'DATE',
        'WYHXd',
        'Users',
        '9584670OisAsw',
        'RmPMt',
        '6352524vvwhze',
        'Queues',
        'erty',
        'exports',
        '27vYEIEj',
        '2cfsKPl',
        '224OKwVRY',
        'sequelize',
        '__esModule',
        'primaryKey',
        '716649BHwUHI',
        '1429530uGnJPr',
        '33AIjUdn',
        'wNpWz',
        'allowNull',
        '100668aIGkBy',
        'autoIncrem',
        'createTabl',
        '242415mAfdBe',
        'defineProp',
        'SET\x20NULL',
        'CASCADE',
        '112lRMELS',
        'DataTypes'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0x1e9)] = !![], Object[s(0x1e1) + r(0x1f6)](exports, r(0x1fc), o);
const sequelize_1 = require(r(0x1fb));
module[s(0x1f7)] = {
    'up': f => {
        const t = s, u = s, g = {};
        g[t(0x1f3)] = u(0x1f5), g[t(0x1f0)] = t(0x1f1), g[u(0x201)] = t(0x1e3), g[u(0x1ed)] = u(0x1e2);
        const h = g, i = {};
        i[u(0x1ee)] = sequelize_1[t(0x1e5)][u(0x1e8)], i[u(0x1fd)] = !![], i[t(0x204) + u(0x1eb)] = !![], i[u(0x202)] = ![];
        const j = {};
        return j[u(0x1ee)] = sequelize_1[t(0x1e5)][u(0x1e6)], j[u(0x202)] = ![], f[t(0x205) + 'e'](h[u(0x1f3)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[t(0x1e5)][u(0x1e8)],
                'references': {
                    'model': h[u(0x1f0)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x201)],
                'onDelete': h[u(0x1ed)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1e5)][t(0x1ef)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x1e5)][u(0x1ef)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x1ec)] = v(0x1f5);
        const f = e;
        return d[w(0x1e7)](f[v(0x1ec)]);
    }
};