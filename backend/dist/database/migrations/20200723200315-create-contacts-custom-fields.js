'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1e4)) / (-0x198c + 0x1d87 + -0x2 * 0x1fd) + -parseInt(r(0x1f2)) / (0x1591 + -0xd96 * 0x2 + 0x59d) + -parseInt(r(0x1e1)) / (-0x2666 + 0x76 * 0x4d + 0x2eb) * (-parseInt(r(0x1f0)) / (0x5 * -0x59c + -0xc * -0x31a + -0x125 * 0x8)) + parseInt(s(0x1ee)) / (0x1beb + -0x1 * 0x127b + -0x96b) + parseInt(s(0x1f3)) / (-0x47 * 0x79 + -0x480 + 0x1 * 0x2615) * (parseInt(s(0x1e6)) / (-0x1 * 0x2513 + 0x584 + 0x1f96)) + parseInt(r(0x1e8)) / (-0x4a9 * 0x3 + -0x1952 + 0x2755 * 0x1) + parseInt(r(0x1ea)) / (-0x1569 + 0x3 * 0xab3 + -0x1 * 0xaa7) * (parseInt(r(0x1e9)) / (-0x1 * 0xc91 + 0xcff + 0x19 * -0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9b512 + -0xff689 + 0xa3 * 0x187f));
function a() {
    const z = [
        '174769cOrvzQ',
        'createTabl',
        '2999560CnvrHE',
        '10Oiuoat',
        '10727847vSlYPE',
        'dropTable',
        'Contacts',
        'STRING',
        '262605mOevQI',
        'eJtkV',
        '2156OujzYW',
        'primaryKey',
        '1974292qQJTjL',
        '138ectbzZ',
        'allowNull',
        'sequelize',
        'defineProp',
        'tomFields',
        'ent',
        'autoIncrem',
        'JqEez',
        'tKAUH',
        'exports',
        'DataTypes',
        'DATE',
        'ContactCus',
        'INTEGER',
        'siNpV',
        '__esModule',
        'erty',
        '3xrvzhg',
        'value',
        'CASCADE',
        '594885uxkCAj',
        'type'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x1e2)] = !![], Object[u(0x1f6) + t(0x1e0)](exports, u(0x1df), q);
const sequelize_1 = require(t(0x1f5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1064 + -0x56 * 0x4 + 0x1 * -0xd2d);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0x1fc)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0x1fb)] = v(0x1ff) + w(0x1f7), h[v(0x1fa)] = w(0x1ec), h[w(0x201)] = v(0x1e3);
        const i = h, j = {};
        j[w(0x1e5)] = sequelize_1[v(0x1fd)][v(0x200)], j[w(0x1f9) + v(0x1f8)] = !![], j[w(0x1f1)] = !![], j[w(0x1f4)] = ![];
        const k = {};
        k[w(0x1e5)] = sequelize_1[v(0x1fd)][v(0x1ed)], k[w(0x1f4)] = ![];
        const l = {};
        return l[v(0x1e5)] = sequelize_1[v(0x1fd)][v(0x1ed)], l[v(0x1f4)] = ![], g[v(0x1e7) + 'e'](i[w(0x1fb)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[w(0x1fd)][w(0x200)],
                'references': {
                    'model': i[v(0x1fa)],
                    'key': 'id'
                },
                'onUpdate': i[w(0x201)],
                'onDelete': i[v(0x201)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x1fd)][v(0x1fe)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x1fd)][w(0x1fe)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x1ef)] = x(0x1ff) + y(0x1f7);
        const f = e;
        return d[x(0x1eb)](f[x(0x1ef)]);
    }
};