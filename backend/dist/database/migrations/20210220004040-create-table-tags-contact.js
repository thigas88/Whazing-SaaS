'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x181)) / (0x1 * -0x13f9 + -0x2055 * 0x1 + 0x344f) * (-parseInt(r(0x1a0)) / (0xdff * -0x1 + 0x101 + -0x340 * -0x4)) + -parseInt(s(0x18b)) / (0x163e + -0x1 * 0xe7f + -0x7bc) + -parseInt(r(0x191)) / (0x11c0 * -0x2 + -0x1fd1 + -0xb * -0x61f) * (-parseInt(s(0x193)) / (0xc40 + 0x1783 + -0xf * 0x262)) + -parseInt(s(0x194)) / (0xefe * 0x2 + 0x18a8 + -0x2 * 0x1b4f) + -parseInt(s(0x198)) / (0x2b6 + -0x18 * -0x112 + -0x1c5f) * (-parseInt(r(0x19b)) / (0x1451 + 0x145c + -0x1 * 0x28a5)) + -parseInt(s(0x196)) / (-0x931 * 0x1 + -0x1b33 + 0x246d) * (-parseInt(s(0x18e)) / (-0x566 * -0x7 + -0xfa7 + -0x1619 * 0x1)) + -parseInt(s(0x197)) / (0x3ca + 0x23fb + -0x27ba);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4632c + -0x26bc6 + -0x1595b * -0x6));
const q = {};
q[t(0x188)] = !![], Object[t(0x17d) + t(0x17f)](exports, t(0x19e), q);
function a() {
    const z = [
        'CASCADE',
        '40NMTkvc',
        'DataTypes',
        'Tenants',
        '229604qIWQWz',
        'UVKjZ',
        '95OlCtQx',
        '1910796QsuvkS',
        'exports',
        '1198836jhbOSd',
        '5989962SorSop',
        '223111PpvIsE',
        'INTEGER',
        'ContactTag',
        '328xzRfZr',
        'allowNull',
        'czUAx',
        '__esModule',
        'Contacts',
        '1555178ZJbXGX',
        'qoNiz',
        'THUiZ',
        'Tags',
        'createTabl',
        'defineProp',
        'sequelize',
        'erty',
        'autoIncrem',
        '1PlEGdQ',
        'dropTable',
        'type',
        'ent',
        'puZli',
        'primaryKey',
        'DATE',
        'value',
        'uUkkb',
        'RESTRICT',
        '1890885hEBBoP',
        'oHbSX'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12dd + 0x7b5 + -0x1919);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x17e));
module[t(0x195)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0x18c)] = v(0x19a) + 's', f[v(0x19d)] = w(0x17b), f[v(0x192)] = v(0x18d), f[w(0x17a)] = v(0x18a), f[v(0x189)] = v(0x19f), f[w(0x185)] = w(0x190);
        const g = f, h = {};
        return h[w(0x183)] = sequelize_1[w(0x18f)][v(0x199)], h[v(0x180) + w(0x184)] = !![], h[v(0x186)] = !![], h[v(0x19c)] = ![], e[w(0x17c) + 'e'](g[v(0x18c)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[w(0x18f)][v(0x199)],
                'references': {
                    'model': g[w(0x19d)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x192)],
                'onDelete': g[w(0x17a)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x18f)][v(0x199)],
                'references': {
                    'model': g[w(0x189)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x192)],
                'onDelete': g[w(0x192)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x18f)][v(0x199)],
                'references': {
                    'model': g[v(0x185)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x192)],
                'onDelete': g[w(0x192)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x18f)][w(0x187)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x18f)][v(0x187)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x179)] = y(0x19a) + 's';
        const f = e;
        return d[y(0x182)](f[x(0x179)]);
    }
};