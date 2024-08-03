'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1f7)) / (-0x1a25 + -0x5c1 + 0x1fe7) + parseInt(m(0x1fc)) / (0xffe + 0xcac + -0x1ca8) + -parseInt(m(0x204)) / (0x1f7c + 0x566 * 0x6 + 0x1 * -0x3fdd) + parseInt(m(0x1fb)) / (-0xb61 + -0x1c6c + 0x27d1) * (-parseInt(l(0x20a)) / (-0x9 * -0x21c + -0x1d70 + -0xa79 * -0x1)) + parseInt(m(0x20d)) / (-0x1 * 0x46f + -0x8df + -0x4 * -0x355) * (parseInt(l(0x202)) / (0x21d * -0x1 + -0x1d * -0x152 + -0x1213 * 0x2)) + parseInt(l(0x203)) / (-0x1804 + -0x111f + -0xdb9 * -0x3) + parseInt(m(0x201)) / (0x22b + -0x1 * 0xdad + -0xf * -0xc5) * (-parseInt(l(0x1f9)) / (-0x1552 * -0x1 + 0x1722 + -0x2c6a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xec6f * -0x2 + 0x8f21b + -0x12433));
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x93f * 0x1 + 0x1bf9 + -0x1 * 0x10c9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'UUID',
        '9MODWUV',
        '15820cLViAX',
        '5315496ASeBMo',
        '154512CoZqDx',
        'sequelize',
        '__esModule',
        'defineProp',
        'AaQUn',
        'erty',
        '20RHqxhe',
        'SqzBP',
        'Sequelize',
        '1014UcgZaN',
        'DataTypes',
        'adVTN',
        '_uuid()',
        'gen_random',
        'all',
        'ApiConfigs',
        '483393yZdsrv',
        'literal',
        '7904770UBWZxN',
        'TnOyF',
        '681060okILtH',
        '767362ZLizIi',
        'changeColu',
        'exports',
        'value'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[n(0x1ff)] = !![], Object[o(0x207) + o(0x209)](exports, o(0x206), k);
const sequelize_1 = require(n(0x205));
module[n(0x1fe)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x1f2)] = p(0x1f6), e[q(0x208)] = q(0x1f4) + q(0x1f3);
        const f = e;
        return Promise[p(0x1f5)]([d[q(0x1fd) + 'mn'](f[p(0x1f2)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x1f1)][q(0x200)],
                'defaultValue': sequelize_1[p(0x20c)][q(0x1f8)](f[q(0x208)])
            })]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0x20b)] = r(0x1f6), e[s(0x1fa)] = s(0x1f4) + s(0x1f3);
        const f = e;
        return Promise[s(0x1f5)]([d[s(0x1fd) + 'mn'](f[s(0x20b)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x1f1)][s(0x200)],
                'defaultValue': sequelize_1[s(0x20c)][r(0x1f8)](f[s(0x1fa)])
            })]);
    }
};