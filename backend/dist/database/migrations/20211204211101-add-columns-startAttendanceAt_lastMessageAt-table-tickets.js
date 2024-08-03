'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11b9 + -0x15f3 + 0x299f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1f4)) / (0x7bf * -0x5 + 0x2319 + 0x3a3) + -parseInt(r(0x213)) / (-0x202e + 0x1fe4 + 0x4c) + -parseInt(s(0x1f9)) / (0xedb + -0xd * 0xa3 + 0x1 * -0x691) + -parseInt(s(0x1f6)) / (-0xa71 + 0x1a5 * 0x3 + -0x2c3 * -0x2) + -parseInt(r(0x20e)) / (-0x1 * -0x1694 + 0x1516 + -0x2ba5 * 0x1) + -parseInt(s(0x1ff)) / (-0xdf * -0x25 + -0x1b9a + 0x9 * -0x83) + parseInt(s(0x1f3)) / (-0x33 * -0x2a + 0x1 * 0xda1 + -0x15f8) * (parseInt(s(0x215)) / (0x1c9 * 0x2 + -0x1203 + 0xe79));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x139fe * 0x5 + 0x49 * 0x4d2 + -0x3f884));
const q = {};
q[t(0x206)] = !![], Object[t(0x204) + t(0x202)](exports, t(0x1f5), q);
function a() {
    const z = [
        'allowNull',
        '581922NXkiND',
        'lastMessag',
        '984uKlDDj',
        'NmHBY',
        '106099eLpHIH',
        '11063cvakkY',
        '__esModule',
        '1791192uvExpD',
        'YMsTH',
        'endanceAt',
        '379893iZYuJa',
        'BIGINT',
        'all',
        'DataTypes',
        'sttMM',
        'startedAtt',
        '2722434OcWusG',
        'sequelize',
        'defaultVal',
        'erty',
        'type',
        'defineProp',
        'jWFBH',
        'value',
        'closedAt',
        'Tickets',
        'addColumn',
        'BRJYl',
        'UnojX',
        'Xtbtg',
        'exports',
        '1622405IiDHoF',
        'SRjiC',
        'eAt',
        'removeColu'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(t(0x200));
module[t(0x20d)] = {
    'up': g => {
        const v = u, w = t, h = {};
        h[v(0x20f)] = v(0x208), h[v(0x20c)] = w(0x214) + w(0x210), h[w(0x1fd)] = w(0x1fe) + w(0x1f8), h[v(0x20a)] = w(0x207);
        const i = h, j = {};
        j[v(0x203)] = sequelize_1[v(0x1fc)][v(0x1fa)], j[v(0x212)] = !![], j[v(0x201) + 'ue'] = null;
        const k = {};
        k[v(0x203)] = sequelize_1[w(0x1fc)][w(0x1fa)], k[v(0x212)] = !![], k[v(0x201) + 'ue'] = null;
        const l = {};
        return l[v(0x203)] = sequelize_1[w(0x1fc)][w(0x1fa)], l[v(0x212)] = !![], l[w(0x201) + 'ue'] = null, Promise[w(0x1fb)]([
            g[v(0x209)](i[v(0x20f)], i[w(0x20c)], j),
            g[v(0x209)](i[w(0x20f)], i[w(0x1fd)], k),
            g[w(0x209)](i[w(0x20f)], i[v(0x20a)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x205)] = x(0x208), e[y(0x1f7)] = x(0x214) + y(0x210), e[y(0x216)] = x(0x1fe) + y(0x1f8), e[x(0x20b)] = x(0x207);
        const f = e;
        return Promise[y(0x1fb)]([
            d[y(0x211) + 'mn'](f[x(0x205)], f[y(0x1f7)]),
            d[y(0x211) + 'mn'](f[x(0x205)], f[y(0x216)]),
            d[y(0x211) + 'mn'](f[y(0x205)], f[y(0x20b)])
        ]);
    }
};