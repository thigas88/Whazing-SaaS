'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ae1 + 0x80b + -0x2167 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'primaryKey',
        'erty',
        '2kKvAHV',
        '10043xegFcY',
        '348EFySvS',
        'autoIncrem',
        'createTabl',
        'INTEGER',
        'eGroups',
        'SypTT',
        'ReBzc',
        '5ITuRPA',
        'EnSWf',
        '93464ahefyz',
        '137599xajkce',
        '14NxpCVX',
        'type',
        'BIGINT',
        'QZlRF',
        'sequelize',
        '56vxJWMT',
        '3633734jEMlpV',
        '2450TjMYvu',
        'defineProp',
        'InternalMe',
        'SET\x20NULL',
        'ssage',
        '36483LoBqfy',
        'value',
        'tVODt',
        'DATE',
        'ent',
        'allowNull',
        'UsersGroup',
        'DataTypes',
        'CASCADE',
        'KYcmI',
        'ReadMessag',
        '76IuEsQT',
        'dropTable',
        '1441380qcVuwr',
        'exports',
        '__esModule',
        '4464ADkKff'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1b0)) / (-0x1 * 0x94f + 0x2705 * 0x1 + -0x5 * 0x5f1) * (-parseInt(p(0x18f)) / (0x25dd + 0x1ca7 + -0x2 * 0x2141)) + parseInt(q(0x19d)) / (-0x6e7 + 0x2227 + 0x1 * -0x1b3d) * (-parseInt(p(0x1a8)) / (0x1ba2 + 0x1dc7 + -0x3965)) + -parseInt(q(0x18d)) / (0xd8e + -0x1eb7 + -0x112e * -0x1) * (parseInt(q(0x1aa)) / (-0x2355 * 0x1 + 0x1 * -0x6d3 + 0x1 * 0x2a2e)) + -parseInt(q(0x190)) / (0x17c2 + -0x1f44 + -0x1 * -0x789) * (-parseInt(q(0x196)) / (-0x4 * -0x58f + 0x6 * -0x5d1 + 0x41 * 0x32)) + parseInt(p(0x1ad)) / (0x24 * -0x4a + -0x51 * 0xa + 0x9 * 0x183) * (parseInt(p(0x198)) / (-0x1a14 + -0x1 * -0xbcc + -0x6 * -0x263)) + -parseInt(q(0x185)) / (0x26a3 + -0x42e + -0x6e2 * 0x5) * (parseInt(p(0x186)) / (-0x1144 + 0x9 * 0x259 + -0x3d1)) + -parseInt(p(0x197)) / (0x1 * -0x7c3 + -0x10eb + 0x18bb) * (-parseInt(q(0x191)) / (0x2 * -0x89b + 0xa * 0x2f3 + -0xc3a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6 * -0x6164 + 0x9ab8 + 0x3ba5f));
const o = {};
o[r(0x19e)] = !![], Object[s(0x199) + r(0x1af)](exports, r(0x1ac), o);
const sequelize_1 = require(s(0x195));
module[s(0x1ab)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x18e)] = t(0x1a7) + u(0x18a), f[u(0x1a6)] = t(0x19a) + t(0x19c), f[u(0x18b)] = u(0x1a5), f[u(0x18c)] = u(0x19b), f[t(0x194)] = u(0x1a3) + 's';
        const g = f, h = {};
        return h[t(0x192)] = sequelize_1[u(0x1a4)][t(0x189)], h[t(0x1ae)] = !![], h[t(0x187) + u(0x1a1)] = !![], h[u(0x1a2)] = ![], e[u(0x188) + 'e'](g[t(0x18e)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[u(0x1a4)][u(0x193)],
                'references': {
                    'model': g[u(0x1a6)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x18b)],
                'onDelete': g[u(0x18c)]
            },
            'userGroupId': {
                'type': sequelize_1[u(0x1a4)][u(0x189)],
                'references': {
                    'model': g[t(0x194)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x18b)],
                'onDelete': g[t(0x18b)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1a4)][t(0x1a0)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1a4)][t(0x1a0)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x19f)] = v(0x1a7) + v(0x18a);
        const f = e;
        return d[w(0x1a9)](f[v(0x19f)]);
    }
};