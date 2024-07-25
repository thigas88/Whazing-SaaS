'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x635 * 0x2 + -0x1f1d + -0x97 * -0x4d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'all',
        'BIGINT',
        'cQzdX',
        'eAt',
        'flJmG',
        '2owDDMN',
        'lastMessag',
        '1068mnibwa',
        'fMrKd',
        'sequelize',
        '1164648wlSqDx',
        'PtYeF',
        'pRCbz',
        'removeColu',
        '9sdESuP',
        'type',
        'defineProp',
        'addColumn',
        'erty',
        'DataTypes',
        'value',
        '70bkIUaG',
        'endanceAt',
        '976151wwWutB',
        '__esModule',
        'exports',
        'qWXxG',
        'Tickets',
        'defaultVal',
        'allowNull',
        '106272hGUCFa',
        'Cabsc',
        '287742zTRUKR',
        'startedAtt',
        'tGEoK',
        '1760HcSoPc',
        '836520mazPaJ',
        '362353hwqnDa',
        'closedAt'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1f2)) / (-0x16 * -0x133 + -0x1e * 0x4f + -0x111f) * (-parseInt(s(0x1f9)) / (0xd02 + 0x217b + -0x49 * 0xa3)) + parseInt(s(0x1f1)) / (-0x11eb + 0x151 + 0x109d) + parseInt(r(0x1eb)) / (-0x2690 + 0x13d2 + 0x12c2) + -parseInt(r(0x1f0)) / (0x51a + 0x6 * 0x60d + -0x2963) * (-parseInt(s(0x1fb)) / (0x1f1 * -0x6 + -0x1 * 0x1139 + -0xd * -0x239)) + -parseInt(s(0x1ed)) / (0x1097 + 0x7c7 + -0x3 * 0x81d) + parseInt(s(0x1fe)) / (-0x166 * 0x8 + 0x1381 * -0x1 + 0x1eb9) * (parseInt(r(0x202)) / (-0x4d * -0x11 + 0x6b0 + -0x6 * 0x1f6)) + parseInt(r(0x209)) / (0x28e * -0x2 + 0x1d94 + -0x76 * 0x35) * (-parseInt(r(0x1e4)) / (0x2356 + 0xc * -0x223 + -0x161 * 0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14359 + 0x4 * 0x10eef + 0x2 * 0x2533));
const q = {};
q[t(0x208)] = !![], Object[t(0x204) + u(0x206)](exports, t(0x1e5), q);
const sequelize_1 = require(t(0x1fd));
module[t(0x1e6)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x1f8)] = w(0x1e8), h[v(0x1f6)] = w(0x1fa) + w(0x1f7), h[w(0x1e7)] = v(0x1ee) + v(0x20a), h[v(0x1ec)] = w(0x1f3);
        const i = h, j = {};
        j[w(0x203)] = sequelize_1[w(0x207)][v(0x1f5)], j[v(0x1ea)] = !![], j[v(0x1e9) + 'ue'] = null;
        const k = {};
        k[v(0x203)] = sequelize_1[w(0x207)][w(0x1f5)], k[v(0x1ea)] = !![], k[w(0x1e9) + 'ue'] = null;
        const l = {};
        return l[v(0x203)] = sequelize_1[w(0x207)][w(0x1f5)], l[v(0x1ea)] = !![], l[v(0x1e9) + 'ue'] = null, Promise[w(0x1f4)]([
            g[v(0x205)](i[w(0x1f8)], i[w(0x1f6)], j),
            g[w(0x205)](i[w(0x1f8)], i[w(0x1e7)], k),
            g[w(0x205)](i[w(0x1f8)], i[w(0x1ec)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x200)] = x(0x1e8), e[y(0x1ef)] = x(0x1fa) + x(0x1f7), e[x(0x1ff)] = x(0x1ee) + x(0x20a), e[y(0x1fc)] = x(0x1f3);
        const f = e;
        return Promise[x(0x1f4)]([
            d[y(0x201) + 'mn'](f[x(0x200)], f[x(0x1ef)]),
            d[y(0x201) + 'mn'](f[x(0x200)], f[y(0x1ff)]),
            d[x(0x201) + 'mn'](f[x(0x200)], f[x(0x1fc)])
        ]);
    }
};