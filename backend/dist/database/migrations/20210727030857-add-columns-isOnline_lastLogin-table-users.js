'use strict';
const t = b, u = b;
function a() {
    const z = [
        '4WyWsdL',
        'auPPq',
        'DataTypes',
        'xkDTm',
        '395181JWBeFf',
        '541231ekNWPs',
        'lastLogin',
        'DlRMs',
        'BOOLEAN',
        'SiPjI',
        'all',
        '16MdeYZS',
        'addColumn',
        'DATE',
        'type',
        'removeColu',
        'OLJKd',
        'defineProp',
        '36zuiJCy',
        'defaultVal',
        'isOnline',
        '__esModule',
        '7761635qpjJzd',
        'exports',
        'zHClX',
        '27KkRTDf',
        'EuaIe',
        '8927112RWaWeZ',
        '7YeIpiH',
        '796270GcosIi',
        'EdJhK',
        '2021679WBjeqF',
        'lastLogout',
        'sequelize',
        '2325462CMxUJd',
        'erty',
        'value',
        'Users'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x10d)) / (-0x1d20 + 0x3f1 * -0x1 + 0xf9 * 0x22) * (parseInt(s(0x108)) / (-0x1 * 0x7db + 0x9 * 0x28a + -0xefd)) + parseInt(r(0x10c)) / (-0x1b83 + -0x4df * -0x1 + 0x16a7) * (-parseInt(s(0x113)) / (-0x261 * 0x10 + 0x2621 + -0xd * 0x1)) + -parseInt(r(0xf8)) / (-0xd72 + -0x2d3 * -0x1 + 0xaa4) + parseInt(s(0x104)) / (0xe * -0xd9 + -0x544 * 0x5 + -0x2 * -0x131c) * (parseInt(r(0xfe)) / (-0x5 * 0x5d + 0xcc4 + 0xc * -0xe9)) + parseInt(r(0xfd)) / (-0x2085 + 0xb3 * 0x9 + -0x1 * -0x1a42) + parseInt(r(0xfb)) / (0x16d7 + 0xb4c + 0x2 * -0x110d) * (-parseInt(s(0xff)) / (-0x16 * -0x1b8 + 0x4fe * -0x2 + -0x1 * 0x1bca)) + parseInt(s(0x101)) / (-0x17ef + -0x26f * 0x1 + -0x1 * -0x1a69) * (parseInt(r(0x11a)) / (0x1707 + 0x2036 + -0x3731 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x900fe + -0x5cdd * -0x1 + 0x32210));
const q = {};
q[t(0x106)] = !![], Object[t(0x119) + t(0x105)](exports, t(0xf7), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c73 + -0x171d + -0x3 * -0x1182);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x103));
module[t(0xf9)] = {
    'up': g => {
        const v = t, w = t, h = {};
        h[v(0x10f)] = w(0x107), h[w(0x118)] = w(0x10e), h[v(0x109)] = w(0x102), h[v(0xfa)] = w(0xf6);
        const i = h, j = {};
        j[w(0x116)] = sequelize_1[w(0x10a)][v(0x115)], j[w(0x11b) + 'ue'] = null;
        const k = {};
        k[v(0x116)] = sequelize_1[v(0x10a)][w(0x115)], k[w(0x11b) + 'ue'] = null;
        const l = {};
        return l[w(0x116)] = sequelize_1[w(0x10a)][w(0x110)], l[w(0x11b) + 'ue'] = ![], Promise[w(0x112)]([
            g[w(0x114)](i[w(0x10f)], i[w(0x118)], j),
            g[w(0x114)](i[v(0x10f)], i[w(0x109)], k),
            g[w(0x114)](i[w(0x10f)], i[v(0xfa)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xfc)] = x(0x107), e[x(0x100)] = x(0x10e), e[x(0x10b)] = y(0x102), e[x(0x111)] = x(0xf6);
        const f = e;
        return Promise[x(0x112)]([
            d[y(0x117) + 'mn'](f[y(0xfc)], f[x(0x100)]),
            d[y(0x117) + 'mn'](f[y(0xfc)], f[y(0x10b)]),
            d[x(0x117) + 'mn'](f[x(0xfc)], f[y(0x111)])
        ]);
    }
};