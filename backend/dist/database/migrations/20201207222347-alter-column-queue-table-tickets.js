'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0x208)) / (0x2fb + -0xa38 + 0x67 * 0x12) * (parseInt(j(0x1f1)) / (0x1f36 + 0x91e + -0x2852)) + parseInt(j(0x1e6)) / (-0xdb * -0x7 + -0x1bb8 + -0x79 * -0x2e) * (-parseInt(j(0x1e7)) / (-0x98f + -0x2 * 0x169 + 0xc65)) + -parseInt(j(0x1ef)) / (0xa1 * -0x15 + -0x1caa + 0x29e4) * (-parseInt(k(0x200)) / (0x2341 + -0x1e62 + 0x11 * -0x49)) + parseInt(k(0x206)) / (-0x50b + 0xd4 * -0x8 + 0x6 * 0x1f3) + parseInt(j(0x202)) / (-0x5dd + 0x854 + -0x26f * 0x1) + -parseInt(j(0x1f9)) / (-0x1181 + -0x2147 + 0x32d1) * (-parseInt(k(0x207)) / (-0x11bc + -0x966 + 0x1b2c)) + parseInt(k(0x1ee)) / (0x15b0 + 0x23b1 + 0x2 * -0x1cab);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x9d58f + -0x49726 + 0x3526f));
const c = {};
c[l(0x203)] = !![], Object[m(0x1f2) + m(0x1fb)](exports, m(0x1eb), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15c6 + -0x8e + 0x183a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0x209));
function a() {
    const r = [
        '137430bzYTRe',
        '39CCcitj',
        'sequelize',
        '3cqbBVV',
        '4206348sLoqNp',
        'defaultVal',
        'allowNull',
        'addColumn',
        '__esModule',
        'queue',
        'SBmtT',
        '7324581zCYDdZ',
        '30090KFFOSP',
        'INTEGER',
        '11334xGOrwK',
        'defineProp',
        'uiJrS',
        'otYaV',
        'restrict',
        'whoEL',
        'type',
        'Tickets',
        '54GXmWIc',
        'rNGQd',
        'erty',
        'DataTypes',
        'removeColu',
        'CASCADE',
        'otUTR',
        '102eeslxI',
        'exports',
        '3924872vFWyzk',
        'value',
        'nBZnw',
        'Queues',
        '3449068ozIlzY'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0x201)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0x1ed)] = n(0x1f8), f[n(0x1ff)] = o(0x1ec), f[n(0x1f4)] = o(0x205), f[n(0x1f3)] = n(0x1fe), f[o(0x1fa)] = n(0x1f5);
        const g = f;
        await e[n(0x1fd) + 'mn'](g[o(0x1ed)], g[n(0x1ff)]), await e[o(0x1ea)](g[o(0x1ed)], g[n(0x1ff)], {
            'type': sequelize_1[o(0x1fc)][n(0x1f0)],
            'references': {
                'model': g[o(0x1f4)],
                'key': 'id'
            },
            'onUpdate': g[n(0x1f3)],
            'onDelete': g[n(0x1fa)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = l, g = {};
        g[p(0x204)] = p(0x1f8), g[q(0x1f6)] = q(0x1ec);
        const h = g;
        await f[q(0x1fd) + 'mn'](h[q(0x204)], h[q(0x1f6)]);
        const i = {};
        i[q(0x1f7)] = sequelize_1[p(0x1fc)][p(0x1f0)], i[q(0x1e8) + 'ue'] = null, i[p(0x1e9)] = !![], await f[p(0x1ea)](h[q(0x204)], h[p(0x1f6)], i);
    }
};