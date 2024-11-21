function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (0x1910 + 0x90b + 0x2173 * -0x1);
        var h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    var w = [
        'autoIncrem',
        '1026852gmRdks',
        'Tenants',
        'defaultVal',
        '528777lZJixr',
        'INTEGER',
        'createTabl',
        'exports',
        'SET\x20NULL',
        'Kanbans',
        'KYtQT',
        'CASCADE',
        'JZmya',
        'lQWLX',
        '160DpKuEl',
        'yAvRc',
        '3569502BPmuXt',
        'BOOLEAN',
        'allowNull',
        '17447056qQqfTe',
        'vTKOz',
        '704354rjAWlZ',
        '12399jiUgUP',
        'ent',
        '26fbNPRW',
        'hFuMJ',
        'STRING',
        'literal',
        'Users',
        '2256ukaPmA',
        'MESTAMP',
        '4571kDgEfU',
        'DATE',
        'type',
        'dropTable',
        '5jazDKr',
        'CURRENT_TI',
        'dzPQf',
        'primaryKey'
    ];
    a = function () {
        return w;
    };
    return a();
}
var r = b;
(function (c, d) {
    var p = b, q = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(p(0xb0)) / (-0x1aae + -0x28 + 0x1ad7) + parseInt(q(0xb3)) / (0x21cc + -0x1205 + 0x16f * -0xb) * (parseInt(p(0xb1)) / (-0x172 * 0x3 + -0x1 * 0x2031 + 0x248a * 0x1)) + -parseInt(q(0xc3)) / (0x23 * 0x10f + 0x1d76 + -0x427f) + parseInt(p(0xbe)) / (-0x1 * 0x1b6e + 0x9de + 0x283 * 0x7) * (parseInt(q(0xab)) / (-0x2 * 0x129e + -0x51b + -0x5 * -0x879)) + -parseInt(p(0xba)) / (0x95a + -0x23d5 + -0x105 * -0x1a) * (-parseInt(p(0xb8)) / (0x20cf + -0x1b8f + -0x538)) + -parseInt(p(0xc6)) / (-0xc * 0xe1 + 0x3cb + 0x6ca) * (parseInt(q(0xa9)) / (0x11c2 + 0x40f + -0x15c7)) + parseInt(p(0xae)) / (0x2658 + 0x11f6 + -0x12c1 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x49add + 0xee58a + -0xb99da), module[r(0xc9)] = {
    'up': async (h, i) => {
        var s = r, t = r, j = {};
        j[s(0xa8)] = t(0xcb), j[s(0xb4)] = s(0xbf) + s(0xb9), j[s(0xce)] = s(0xb7), j[s(0xcc)] = t(0xcd), j[t(0xc0)] = s(0xca), j[t(0xaf)] = s(0xc4);
        var k = j, l = {};
        l[t(0xbc)] = i[t(0xc7)], l[s(0xc2) + t(0xb2)] = !![], l[s(0xc1)] = !![], l[s(0xad)] = ![];
        var m = {};
        m[t(0xbc)] = i[t(0xb5)], m[s(0xad)] = ![];
        var n = {};
        n[s(0xbc)] = i[t(0xb5)], n[t(0xad)] = !![];
        var o = {};
        o[t(0xbc)] = i[s(0xac)], o[s(0xad)] = ![], o[s(0xc5) + 'ue'] = !![], await h[t(0xc8) + 'e'](k[s(0xa8)], {
            'id': l,
            'name': m,
            'color': n,
            'isActive': o,
            'createdAt': {
                'type': i[t(0xbb)],
                'allowNull': ![],
                'defaultValue': i[s(0xb6)](k[t(0xb4)])
            },
            'updatedAt': {
                'type': i[s(0xbb)],
                'allowNull': ![],
                'defaultValue': i[t(0xb6)](k[t(0xb4)])
            },
            'userId': {
                'type': i[t(0xc7)],
                'references': {
                    'model': k[s(0xce)],
                    'key': 'id'
                },
                'onUpdate': k[s(0xcc)],
                'onDelete': k[t(0xc0)],
                'allowNull': !![]
            },
            'tenantId': {
                'type': i[t(0xc7)],
                'references': {
                    'model': k[s(0xaf)],
                    'key': 'id'
                },
                'onUpdate': k[s(0xcc)],
                'onDelete': k[t(0xc0)],
                'allowNull': !![]
            }
        });
    },
    'down': async (d, e) => {
        var u = r, v = r, f = {};
        f[u(0xaa)] = v(0xcb);
        var g = f;
        await d[v(0xbd)](g[v(0xaa)]);
    }
});