'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x8a)) / (0x23d3 + 0x1fd1 + -0x43a3) * (-parseInt(r(0x7c)) / (-0x147 * -0x9 + -0x1c44 + 0x5 * 0x35b)) + parseInt(r(0x6f)) / (-0x165 + -0x1e20 + 0x2 * 0xfc4) + -parseInt(s(0x6a)) / (0x1676 + 0x974 + -0xaa2 * 0x3) + parseInt(s(0x70)) / (0x1ab5 + 0x26d7 + -0x4187) + parseInt(s(0x84)) / (-0x9f * 0x3 + 0x1b * 0x131 + -0x1e48) * (parseInt(r(0x86)) / (-0xda * 0x18 + 0x71 * 0x32 + -0x3 * 0x89)) + parseInt(s(0x6b)) / (0xce0 + 0x797 + 0x1 * -0x146f) * (parseInt(s(0x82)) / (-0x8d3 * 0x4 + -0x5 * -0x5bc + 0x6a9)) + -parseInt(r(0x68)) / (-0x1 * 0x4eb + -0x1861 + 0x1d56);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9 * -0xda2a + 0x17d417 * 0x1 + 0x42665 * -0x1));
function a() {
    const z = [
        'AodHO',
        'allowNull',
        'type',
        'XXzPY',
        '144QOiUYu',
        'lastMessag',
        '6nBMIcH',
        'PbZJc',
        '2122183iVDCnO',
        'wBaYg',
        'exports',
        'BIGINT',
        '1GNxGGS',
        'addColumn',
        '__esModule',
        'closedAt',
        '3016810GOiRGX',
        'OPbzV',
        '6226924ayBtyz',
        '242456FSJeeC',
        'ucpej',
        'eAt',
        'all',
        '1572744RnBMoO',
        '4685680IIEuxq',
        'DataTypes',
        'Tickets',
        'erty',
        'endanceAt',
        'syBAd',
        'eIsDB',
        'startedAtt',
        'sequelize',
        'defineProp',
        'value',
        'removeColu',
        '791894XicZaY',
        'defaultVal'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x7a)] = !![], Object[t(0x79) + t(0x73)](exports, t(0x66), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1bbf + -0xf1 * -0x5 + 0x1770);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0x78));
module[u(0x88)] = {
    'up': g => {
        const v = t, w = t, h = {};
        h[v(0x81)] = v(0x72), h[w(0x69)] = v(0x83) + v(0x6d), h[v(0x76)] = w(0x77) + v(0x74), h[v(0x6c)] = v(0x67);
        const i = h, j = {};
        j[w(0x80)] = sequelize_1[w(0x71)][w(0x89)], j[v(0x7f)] = !![], j[v(0x7d) + 'ue'] = null;
        const k = {};
        k[w(0x80)] = sequelize_1[w(0x71)][w(0x89)], k[w(0x7f)] = !![], k[w(0x7d) + 'ue'] = null;
        const l = {};
        return l[w(0x80)] = sequelize_1[v(0x71)][v(0x89)], l[w(0x7f)] = !![], l[v(0x7d) + 'ue'] = null, Promise[w(0x6e)]([
            g[w(0x8b)](i[v(0x81)], i[v(0x69)], j),
            g[w(0x8b)](i[w(0x81)], i[w(0x76)], k),
            g[w(0x8b)](i[w(0x81)], i[v(0x6c)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x75)] = x(0x72), e[x(0x85)] = y(0x83) + y(0x6d), e[x(0x7e)] = y(0x77) + y(0x74), e[x(0x87)] = x(0x67);
        const f = e;
        return Promise[y(0x6e)]([
            d[y(0x7b) + 'mn'](f[y(0x75)], f[y(0x85)]),
            d[y(0x7b) + 'mn'](f[y(0x75)], f[y(0x7e)]),
            d[y(0x7b) + 'mn'](f[y(0x75)], f[y(0x87)])
        ]);
    }
};