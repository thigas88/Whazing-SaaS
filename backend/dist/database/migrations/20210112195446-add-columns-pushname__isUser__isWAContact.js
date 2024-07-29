'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1f8)) / (0x1 * 0x16fc + 0x3dd + -0x4 * 0x6b6) + -parseInt(r(0x1ed)) / (0x1982 * -0x1 + -0x1211 + 0x2b95) * (-parseInt(s(0x1f3)) / (0x1 * 0x5ed + 0x43 * 0x2a + -0x10e8)) + parseInt(s(0x1ec)) / (-0x1 * 0x1af + -0x24ce + -0x2681 * -0x1) + parseInt(s(0x206)) / (-0x50b * -0x5 + 0x5 * -0x24 + -0xc3f * 0x2) + parseInt(s(0x1f4)) / (-0xa50 + -0x1 * -0x18f3 + 0xe9d * -0x1) * (-parseInt(s(0x1f7)) / (-0x1ff9 + -0x1a14 + 0x3a14)) + parseInt(r(0x201)) / (-0x2010 + 0x612 + -0x2 * -0xd03) + -parseInt(r(0x1fe)) / (-0x1b6 + -0x1d23 + -0x3b * -0x86) * (parseInt(r(0x209)) / (0x4f9 + 0x19c5 + 0xf5a * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x2e357 + -0x35 * 0x2f35 + 0x148247));
function a() {
    const z = [
        '120541lICTEN',
        'isUser',
        'defaultVal',
        'exports',
        'pushname',
        'Contacts',
        '9XNJrYf',
        'Wpuyn',
        'ejOZE',
        '3822416isJMUg',
        'erty',
        'removeColu',
        'cktxO',
        'clCxI',
        '264610kWXUsh',
        'DataTypes',
        'isWAContac',
        '12523730hgNTWN',
        'all',
        'addColumn',
        '__esModule',
        'sequelize',
        'STRING',
        'value',
        'APTUr',
        '2581120bkJlTQ',
        '158uFnwvV',
        'BOOLEAN',
        'Rlgst',
        'defineProp',
        'wNLSs',
        'eTylm',
        '18501Fsktsc',
        '6DKoSQC',
        'allowNull',
        'type',
        '1444387cCjQNx'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd3 * 0x1 + -0xaa0 + 0xbb5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0x1ea)] = !![], Object[t(0x1f0) + t(0x202)](exports, t(0x20c), q);
const sequelize_1 = require(u(0x1e8));
module[t(0x1fb)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0x200)] = v(0x1fd), h[w(0x204)] = v(0x1fc), h[v(0x1f2)] = w(0x1f9), h[v(0x1f1)] = v(0x208) + 't';
        const i = h, j = {};
        j[v(0x1f6)] = sequelize_1[v(0x207)][w(0x1e9)], j[v(0x1f5)] = !![], j[w(0x1fa) + 'ue'] = null;
        const k = {};
        k[w(0x1f6)] = sequelize_1[v(0x207)][v(0x1ee)], k[v(0x1f5)] = !![], k[v(0x1fa) + 'ue'] = null;
        const l = {};
        return l[v(0x1f6)] = sequelize_1[w(0x207)][v(0x1ee)], l[w(0x1f5)] = !![], l[v(0x1fa) + 'ue'] = null, Promise[w(0x20a)]([
            g[v(0x20b)](i[v(0x200)], i[v(0x204)], j),
            g[v(0x20b)](i[v(0x200)], i[w(0x1f2)], k),
            g[w(0x20b)](i[v(0x200)], i[v(0x1f1)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x1ef)] = y(0x1fd), e[x(0x205)] = x(0x1fc), e[y(0x1eb)] = y(0x1f9), e[x(0x1ff)] = y(0x208) + 't';
        const f = e;
        return Promise[x(0x20a)]([
            d[x(0x203) + 'mn'](f[y(0x1ef)], f[y(0x205)]),
            d[y(0x203) + 'mn'](f[x(0x1ef)], f[y(0x1eb)]),
            d[x(0x203) + 'mn'](f[x(0x1ef)], f[y(0x1ff)])
        ]);
    }
};