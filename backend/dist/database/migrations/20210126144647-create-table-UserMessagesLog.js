'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x210)) / (0x4 * -0x32b + 0x1df * -0xf + 0x28be) + -parseInt(r(0x216)) / (-0x897 * -0x3 + -0x7a * -0x41 + -0x1 * 0x38bd) + parseInt(r(0x203)) / (0x1dfa * -0x1 + 0x11 * -0x55 + -0x1 * -0x23a2) * (parseInt(s(0x1f8)) / (0x470 + 0x1954 + -0x1dc0)) + parseInt(r(0x215)) / (-0x9c7 * -0x1 + -0x133b + -0x979 * -0x1) * (-parseInt(r(0x1f9)) / (0xe * -0x27a + -0xd * -0x24 + 0x20de)) + parseInt(r(0x201)) / (0x3 * 0x4d2 + -0x1b15 + 0x2 * 0x653) * (-parseInt(r(0x20a)) / (0xbcd + 0xc9 + -0xc8e)) + -parseInt(r(0x217)) / (-0x1 * 0x844 + 0x1241 + 0x2 * -0x4fa) + parseInt(s(0x1ff)) / (-0xbff + -0x89 * -0x3f + 0x15ae * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x191cda + 0x19d2f1 * -0x1 + -0x2070e6 * -0x2));
function a() {
    const z = [
        'defaultVal',
        'DATE',
        'dSdbK',
        'defineProp',
        'SET\x20NULL',
        'VQEEq',
        '758840njdrJM',
        'esLog',
        'exports',
        'OYlix',
        'sequelize',
        'createTabl',
        '435100WPFxxs',
        'value',
        '__esModule',
        'RESTRICT',
        'type',
        '5uDcuQZ',
        '961998GIkItR',
        '2902005iwtHJg',
        'Users',
        'Tickets',
        'OuZvO',
        'ent',
        'jmrWa',
        'erty',
        'UserMessag',
        'INTEGER',
        'autoIncrem',
        'nmzUR',
        '3592072cDvoKY',
        '4411182cJAAkZ',
        'allowNull',
        'STRING',
        'DataTypes',
        'CASCADE',
        'FzczR',
        '25422690jUTvzZ',
        'dropTable',
        '105bxQwnT',
        'primaryKey',
        '3olgVML'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x211)] = !![], Object[t(0x207) + u(0x21d)](exports, u(0x212), q);
const sequelize_1 = require(u(0x20e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c17 + 0x8be + 0x154d);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[u(0x20c)] = {
    'up': f => {
        const v = t, w = u, g = {};
        g[v(0x206)] = w(0x1f4) + v(0x20b), g[w(0x21a)] = v(0x218), g[w(0x1f7)] = w(0x1fd), g[v(0x1fe)] = w(0x213), g[w(0x20d)] = w(0x219), g[w(0x21c)] = w(0x208);
        const h = g, i = {};
        i[w(0x214)] = sequelize_1[w(0x1fc)][w(0x1f5)], i[v(0x1f6) + w(0x21b)] = !![], i[w(0x202)] = !![], i[w(0x1fa)] = ![];
        const j = {};
        return j[v(0x214)] = sequelize_1[w(0x1fc)][w(0x1fb)], j[w(0x1fa)] = !![], j[w(0x204) + 'ue'] = null, f[w(0x20f) + 'e'](h[v(0x206)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[w(0x1fc)][v(0x1f5)],
                'references': {
                    'model': h[v(0x21a)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x1f7)],
                'onDelete': h[v(0x1fe)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x1fc)][w(0x1f5)],
                'references': {
                    'model': h[w(0x20d)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x1f7)],
                'onDelete': h[v(0x21c)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x1fc)][w(0x205)](0x13e9 + -0x95d + 0x382 * -0x3),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1fc)][v(0x205)](-0x7 * 0xb + -0x1e97 + 0x1eea),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x209)] = x(0x1f4) + x(0x20b);
        const f = e;
        return d[y(0x200)](f[y(0x209)]);
    }
};