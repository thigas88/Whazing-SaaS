'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xcd)) / (0xf3e + 0x1 * -0xe71 + -0x66 * 0x2) * (parseInt(j(0xc7)) / (0x1 * 0x277 + 0xbd7 + 0x3d * -0x3c)) + -parseInt(i(0xc4)) / (-0x2f * -0x14 + 0x1f38 + 0x22e1 * -0x1) + -parseInt(j(0xc9)) / (-0x82 * 0x1 + -0x5 * 0x5a7 + 0x1 * 0x1cc9) + parseInt(i(0xdb)) / (-0x2a * -0x1d + -0x26a5 + 0x21e8) + parseInt(j(0xca)) / (-0x2356 + 0x1e * -0x51 + 0x2 * 0x166d) * (-parseInt(j(0xd2)) / (0x1 * 0x24fa + 0x1 * -0x43f + -0x20b4 * 0x1)) + -parseInt(j(0xd0)) / (0x6f * -0x57 + -0x4e + -0x260f * -0x1) * (-parseInt(i(0xce)) / (-0xc * -0x1c9 + -0x2607 + 0x10a4)) + parseInt(i(0xc2)) / (-0x1659 + 0x30 * 0x18 + 0x13 * 0xf1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1fbd1 + 0xa320 + 0x7d40));
const g = {};
g[k(0xbf)] = !![], Object[l(0xda) + l(0xcf)](exports, l(0xd3), g);
const sequelize_1 = require(k(0xd5));
function a() {
    const q = [
        'addColumn',
        'uJbIQ',
        'CASCADE',
        'defineProp',
        '208240IpFbgt',
        'Messages',
        'value',
        'hlnNN',
        'exports',
        '7453750hUPBMT',
        'DataTypes',
        '560943HTNDfc',
        'removeColu',
        'MhtZf',
        '418iSRhex',
        'contactId',
        '1492440XFwquh',
        '1920936Kmfeub',
        'Contacts',
        'INTEGER',
        '274gSwNIt',
        '1035asljIo',
        'erty',
        '24648MLplvK',
        'sonRs',
        '7QHvgjg',
        '__esModule',
        'yhiqI',
        'sequelize',
        'CGZFe'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc2 + 0x217 * 0xa + -0x1366);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0xc1)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xc0)] = n(0xbe), e[m(0xd6)] = n(0xc8), e[m(0xd8)] = m(0xcb), e[n(0xd1)] = n(0xd9);
        const f = e;
        return d[m(0xd7)](f[n(0xc0)], f[m(0xd6)], {
            'type': sequelize_1[n(0xc3)][n(0xcc)],
            'references': {
                'model': f[m(0xd8)],
                'key': 'id'
            },
            'onUpdate': f[m(0xd1)],
            'onDelete': f[m(0xd1)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xd4)] = o(0xbe), e[o(0xc6)] = p(0xc8);
        const f = e;
        return d[o(0xc5) + 'mn'](f[o(0xd4)], f[p(0xc6)]);
    }
};