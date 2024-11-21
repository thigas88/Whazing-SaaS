'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x6e)) / (-0x12b1 + -0x13e8 + 0x269a) + -parseInt(s(0x71)) / (-0x10a9 + 0x1 * 0x1bd1 + -0xb26) * (-parseInt(s(0x7d)) / (-0x26a + -0x1c1 * -0x7 + -0x9da)) + parseInt(r(0x73)) / (-0x1c38 + -0x562 + 0x219e) * (parseInt(s(0x85)) / (-0xea5 * -0x1 + 0x549 + -0x13e9)) + -parseInt(s(0x7f)) / (-0x7 * 0x1b2 + -0x83 * -0x3d + -0x1353) * (parseInt(s(0x69)) / (-0x245f * -0x1 + -0x19 * 0x113 + 0x15b * -0x7)) + -parseInt(r(0x6d)) / (0xf8 * -0x17 + -0xbcd + -0xd5 * -0x29) * (parseInt(r(0x80)) / (0xeb7 + 0x1628 + -0x24d6)) + parseInt(s(0x8b)) / (0x866 + -0xba3 + 0x347) + parseInt(s(0x6c)) / (-0x1e49 + -0x1b9a + 0x39ee) * (-parseInt(s(0x8a)) / (-0x1d * -0xb3 + 0x51b * -0x2 + 0x39 * -0x2d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x561 * 0xc9 + -0x1 * 0x48ef9 + 0xbe740));
const q = {};
q[t(0x72)] = !![], Object[t(0x84) + t(0x77)](exports, u(0x7c), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12d9 + -0x403 + -0xe6e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0x6a));
function a() {
    const z = [
        'all',
        'jBmqg',
        'BOOLEAN',
        'erty',
        'NrQex',
        'XFQVi',
        'lastLogin',
        'BDYKB',
        '__esModule',
        '3fMLxMz',
        'isOnline',
        '32730kHizjs',
        '9yfWbuG',
        'DATE',
        'Users',
        'YPTIU',
        'defineProp',
        '10UJCcOH',
        'DataTypes',
        'addColumn',
        'Mggbw',
        'removeColu',
        '21852qJeAHr',
        '2074850rpnRXj',
        'qAiUt',
        'exports',
        'lastLogout',
        '35JpHwnm',
        'sequelize',
        'rXKTe',
        '715uivUil',
        '595176dJmegR',
        '392625mGtIPD',
        'defaultVal',
        'type',
        '798430WuCIiC',
        'value',
        '421072ieZsKW'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0x8d)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x75)] = w(0x82), h[w(0x79)] = v(0x7a), h[w(0x78)] = v(0x68), h[w(0x88)] = w(0x7e);
        const i = h, j = {};
        j[v(0x70)] = sequelize_1[w(0x86)][v(0x81)], j[v(0x6f) + 'ue'] = null;
        const k = {};
        k[w(0x70)] = sequelize_1[w(0x86)][w(0x81)], k[w(0x6f) + 'ue'] = null;
        const l = {};
        return l[w(0x70)] = sequelize_1[w(0x86)][w(0x76)], l[w(0x6f) + 'ue'] = ![], Promise[v(0x74)]([
            g[w(0x87)](i[v(0x75)], i[v(0x79)], j),
            g[v(0x87)](i[w(0x75)], i[w(0x78)], k),
            g[w(0x87)](i[w(0x75)], i[v(0x88)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x83)] = y(0x82), e[y(0x6b)] = y(0x7a), e[y(0x8c)] = y(0x68), e[x(0x7b)] = y(0x7e);
        const f = e;
        return Promise[y(0x74)]([
            d[y(0x89) + 'mn'](f[x(0x83)], f[y(0x6b)]),
            d[y(0x89) + 'mn'](f[x(0x83)], f[y(0x8c)]),
            d[y(0x89) + 'mn'](f[y(0x83)], f[x(0x7b)])
        ]);
    }
};