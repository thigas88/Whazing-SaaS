var p = b;
function a() {
    var u = [
        'TEXT',
        'FarewellMe',
        'NOW',
        '3187780AQUGiJ',
        'BOOLEAN',
        'AgXim',
        'exports',
        '2pltjuf',
        'type',
        '55GKbwni',
        'defaultVal',
        'allowNull',
        'NcZvJ',
        '67067KJsnEZ',
        'autoIncrem',
        'SET\x20NULL',
        'DATE',
        '4193392kTQxeY',
        'createTabl',
        'KsBZN',
        'Users',
        '1695488hrQPkW',
        'bYFHe',
        '3495445mZlCMa',
        'primaryKey',
        'ssages',
        'Iefor',
        'TZfsn',
        'dropTable',
        '1418851xjHDjK',
        'mYxwm',
        'INTEGER',
        'Tenants',
        'CASCADE',
        '3664653kiZwtn',
        'ent',
        '36kUsiMi',
        '30DpDREb'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (0x219c + 0xfa7 + -0x1 * 0x3041);
        var h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    var n = b, o = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(n(0x10a)) / (0x1 * -0x2203 + -0x1e85 + 0x4089 * 0x1) + -parseInt(n(0x104)) / (0xcc4 + -0x2fc * -0x8 + -0x24a2 * 0x1) * (parseInt(n(0x11f)) / (0x191 + -0x197d + 0x17ef)) + parseInt(o(0x10e)) / (-0x565 * -0x5 + 0x28 * -0x92 + -0x425) + -parseInt(n(0x114)) / (-0x91c + -0x1 * 0x200f + 0x2930) + -parseInt(n(0x122)) / (-0xbf0 * 0x2 + 0xa3e + -0x4 * -0x36a) * (parseInt(o(0x11a)) / (-0x1cc6 + 0x232c + -0x65f * 0x1)) + parseInt(n(0x112)) / (0x1 * 0x22c + -0x20 * 0x138 + 0x24dc) * (parseInt(o(0x121)) / (-0x43a + -0xf7f * -0x1 + -0xb3c)) + parseInt(o(0x126)) / (-0x21e7 + 0x96f + 0x1882) * (parseInt(n(0x106)) / (-0xcef + 0x19d * 0x13 + -0x11ad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0x32a8b + 0x11d0c8 + -0x13039 * -0x1), module[p(0x103)] = {
    'up': async (g, h) => {
        var q = p, r = p, i = {};
        i[q(0x110)] = q(0x124) + r(0x116), i[q(0x117)] = r(0x111), i[r(0x102)] = q(0x11e), i[q(0x109)] = q(0x10c), i[q(0x11b)] = r(0x11d), i[q(0x113)] = r(0x125);
        var j = i, k = {};
        k[r(0x105)] = h[r(0x11c)], k[r(0x115)] = !![], k[q(0x10b) + r(0x120)] = !![], k[r(0x108)] = ![];
        var l = {};
        l[q(0x105)] = h[r(0x123)], l[r(0x108)] = ![];
        var m = {};
        m[r(0x105)] = h[q(0x127)], m[r(0x107) + 'ue'] = ![], await g[q(0x10f) + 'e'](j[q(0x110)], {
            'id': k,
            'message': l,
            'global': m,
            'userId': {
                'type': h[r(0x11c)],
                'allowNull': ![],
                'references': {
                    'model': j[r(0x117)],
                    'key': 'id'
                },
                'onUpdate': j[r(0x102)],
                'onDelete': j[q(0x109)]
            },
            'tenantId': {
                'type': h[q(0x11c)],
                'allowNull': ![],
                'references': {
                    'model': j[r(0x11b)],
                    'key': 'id'
                },
                'onUpdate': j[q(0x102)],
                'onDelete': j[q(0x109)]
            },
            'createdAt': {
                'type': h[q(0x10d)],
                'allowNull': ![],
                'defaultValue': h['fn'](j[q(0x113)])
            },
            'updatedAt': {
                'type': h[q(0x10d)],
                'allowNull': ![],
                'defaultValue': h['fn'](j[q(0x113)])
            }
        });
    },
    'down': async (d, e) => {
        var s = p, t = p, f = {};
        f[s(0x118)] = t(0x124) + s(0x116);
        var g = f;
        await d[s(0x119)](g[t(0x118)]);
    }
});