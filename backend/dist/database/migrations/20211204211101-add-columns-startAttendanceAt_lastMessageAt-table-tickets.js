'use strict';
function a() {
    const z = [
        'eAt',
        'sequelize',
        'endanceAt',
        'addColumn',
        '8093845kQXNWr',
        'njlqO',
        'startedAtt',
        'allowNull',
        'lbNCp',
        'exports',
        'defaultVal',
        'Tickets',
        'Dfdtw',
        'type',
        'lastMessag',
        'closedAt',
        'DataTypes',
        'erty',
        'removeColu',
        'all',
        '1496HxRqig',
        'defineProp',
        '154864drIYPM',
        '5408358rKvdPo',
        'oKmvr',
        'value',
        'zVUuS',
        '12269173fcMHVs',
        '74250uxFVBa',
        'ihgvQ',
        '11862010tAndlu',
        '4jwBSKm',
        'gnDgZ',
        '__esModule',
        '6zwPdvJ',
        '6668816yHEkdX',
        'GUBmO',
        '12kbGfja',
        'BIGINT'
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
            const f = parseInt(r(0x216)) / (-0x1daa + -0x106f + 0x2e1a) * (-parseInt(r(0x207)) / (-0x2 * 0x9f5 + 0xfcd + -0x41f * -0x1)) + parseInt(r(0x208)) / (0x6aa + 0x12e4 + -0x198b * 0x1) + -parseInt(r(0x210)) / (0x7cd + -0x1db1 * 0x1 + 0x15e8) * (-parseInt(r(0x1f5)) / (0x2149 + 0x2 * -0xd4 + 0xee * -0x22)) + parseInt(s(0x213)) / (0x16f + -0x4d6 * 0x8 + 0x3 * 0xc6d) * (parseInt(r(0x20c)) / (0x3ca * -0x2 + 0x36 * -0x15 + 0x1 * 0xc09)) + parseInt(s(0x205)) / (-0x63 * 0x5b + 0x2333 * -0x1 + 0x466c) * (-parseInt(s(0x20d)) / (0x13a9 + -0x43 * -0x1f + 0x93f * -0x3)) + -parseInt(s(0x20f)) / (0x2621 + -0x1ea + -0x242d) + -parseInt(r(0x214)) / (0x2 * 0x2f9 + -0x103e + 0xa57 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1ab1de + -0x1 * -0x19aa33 + -0x133ce1 * 0x2));
const q = {};
q[t(0x20a)] = !![], Object[t(0x206) + t(0x202)](exports, u(0x212), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19d2 + -0x205c + 0x3c21);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x219));
module[t(0x1fa)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x211)] = w(0x1fc), h[w(0x215)] = w(0x1ff) + w(0x218), h[w(0x1f9)] = w(0x1f7) + w(0x1f3), h[v(0x1f6)] = v(0x200);
        const i = h, j = {};
        j[v(0x1fe)] = sequelize_1[v(0x201)][v(0x217)], j[w(0x1f8)] = !![], j[w(0x1fb) + 'ue'] = null;
        const k = {};
        k[v(0x1fe)] = sequelize_1[v(0x201)][v(0x217)], k[v(0x1f8)] = !![], k[v(0x1fb) + 'ue'] = null;
        const l = {};
        return l[w(0x1fe)] = sequelize_1[w(0x201)][v(0x217)], l[v(0x1f8)] = !![], l[w(0x1fb) + 'ue'] = null, Promise[w(0x204)]([
            g[v(0x1f4)](i[v(0x211)], i[w(0x215)], j),
            g[w(0x1f4)](i[v(0x211)], i[w(0x1f9)], k),
            g[v(0x1f4)](i[w(0x211)], i[w(0x1f6)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x20b)] = y(0x1fc), e[x(0x209)] = y(0x1ff) + x(0x218), e[x(0x1fd)] = x(0x1f7) + x(0x1f3), e[x(0x20e)] = y(0x200);
        const f = e;
        return Promise[y(0x204)]([
            d[y(0x203) + 'mn'](f[x(0x20b)], f[x(0x209)]),
            d[x(0x203) + 'mn'](f[x(0x20b)], f[x(0x1fd)]),
            d[x(0x203) + 'mn'](f[y(0x20b)], f[y(0x20e)])
        ]);
    }
};