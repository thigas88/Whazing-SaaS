'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x185)) / (0xb5 * -0x11 + 0x892 * 0x1 + 0x374) * (-parseInt(j(0x18d)) / (0x56f * -0x1 + -0x1bb4 + -0x2125 * -0x1)) + parseInt(j(0x193)) / (-0x72b + 0x5 * -0x7a4 + 0x9d * 0x4a) + -parseInt(j(0x188)) / (0x28e * 0x4 + -0x2626 + 0x92 * 0x31) * (-parseInt(j(0x191)) / (0x1 * 0x1d + 0x2113 * -0x1 + 0x20fb)) + parseInt(i(0x17b)) / (-0x935 + 0x1257 + -0x91c) * (-parseInt(j(0x18b)) / (0x1f74 + 0xe9e + -0x2e0b)) + parseInt(i(0x18a)) / (-0xaba * -0x3 + -0x1234 + 0x22 * -0x69) * (parseInt(j(0x178)) / (0x1 * 0x1b16 + 0x1340 + -0x2e4d)) + parseInt(i(0x17c)) / (-0x251 + 0x1c35 + -0x3 * 0x89e) + parseInt(i(0x187)) / (0x1 * 0x1fe5 + -0x83b + 0x179f * -0x1) * (parseInt(j(0x186)) / (0x44c + -0x1e12 + -0x19d2 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x49e43 * 0x2 + 0x264fc * -0x3 + 0x2 * 0xee633));
function a() {
    const q = [
        'admin',
        'qRvhM',
        'erty',
        '348323nMrVBo',
        '14319684YMUyOL',
        '22fAxBEy',
        '4trQYGt',
        'exports',
        '2696FgnqGg',
        '24738RhrOSB',
        'STRING',
        '10ZfVWhJ',
        'Users',
        '__esModule',
        'defineProp',
        '322100zYNAZv',
        'pNkEr',
        '813600XuHjED',
        'DataTypes',
        'addColumn',
        '657wCWpuF',
        'value',
        'sequelize',
        '1164dhuVFk',
        '5571560otfJOc',
        'NjcxI',
        'profile',
        'lCHyj',
        'removeColu',
        'fYrnE'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x179)] = !![], Object[k(0x190) + l(0x184)](exports, k(0x18f), g);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x240f + -0x1baf + 0x4134);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(l(0x17a));
module[k(0x189)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x192)] = n(0x18e), e[m(0x183)] = m(0x17e), e[n(0x17f)] = n(0x182);
        const f = e;
        return d[m(0x177)](f[m(0x192)], f[n(0x183)], {
            'type': sequelize_1[m(0x176)][m(0x18c)],
            'allowNull': ![],
            'defaultValue': f[n(0x17f)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x181)] = o(0x18e), e[p(0x17d)] = o(0x17e);
        const f = e;
        return d[p(0x180) + 'mn'](f[p(0x181)], f[o(0x17d)]);
    }
};