'use strict';
const a4 = b, a7 = b;
(function (c, d) {
    const a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a2(0x186)) / (0x1 * 0x9c7 + 0x26c9 * 0x1 + -0x308f) * (-parseInt(a2(0x1b7)) / (0x164f + 0x51 + -0x169e)) + parseInt(a3(0x17d)) / (0x21db + 0x11 * -0x130 + -0x1b5 * 0x8) * (-parseInt(a2(0x185)) / (-0x12e5 + -0xb2 * 0x29 + 0xc7 * 0x3d)) + -parseInt(a2(0x1a8)) / (0xed * -0xc + -0x1 * 0x21e5 + 0x2d06) * (-parseInt(a3(0x17a)) / (-0x7 * -0xc0 + -0x212e + 0x1bf4)) + parseInt(a2(0x17f)) / (-0x2177 + -0x1 * -0x2000 + 0x17e) * (-parseInt(a2(0x15f)) / (-0x1 * 0x11a1 + 0x53 * -0x2 + 0x124f)) + -parseInt(a3(0x14e)) / (-0x3 * 0x9a9 + 0x2 * -0x70 + 0x1de4) * (-parseInt(a3(0x17e)) / (-0x1d77 * -0x1 + 0x1 * 0x1db7 + -0x3b24)) + parseInt(a3(0x182)) / (-0x208 + -0x19fe + 0x95b * 0x3) * (-parseInt(a3(0x16b)) / (0x4e5 * -0x4 + -0x17ff + 0xd * 0x35b)) + parseInt(a3(0x16e)) / (-0xa * -0x27f + -0x251 * 0x4 + -0x1 * 0xfa5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x157ecb + -0x1 * 0x15e859 + 0xca978));
var __decorate = this && this[a4(0x1ac)] || function (e, f, g, h) {
        const a5 = a4, a6 = a4, j = {
                'bndeS': function (o, p) {
                    return o < p;
                },
                'bftcP': function (o, p) {
                    return o === p;
                },
                'yKvhd': a5(0x1a6),
                'YDvkK': a6(0x1c2),
                'yBHsL': function (o, p) {
                    return o - p;
                },
                'izeXl': function (o, p) {
                    return o >= p;
                },
                'hCEqk': function (o, p) {
                    return o < p;
                },
                'FBEDw': function (o, p) {
                    return o(p);
                },
                'DIPHT': function (o, p) {
                    return o > p;
                },
                'zlWZV': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'dyLwS': function (o, p, q) {
                    return o(p, q);
                }
            };
        var k = arguments[a6(0x18c)], l = j[a6(0x1a7)](k, -0xbee * 0x1 + -0x341 * 0x5 + 0x1c36) ? f : j[a6(0x16d)](h, null) ? h = Object[a5(0x16f) + a5(0x1a9) + a6(0x15a)](f, g) : h, m;
        if (j[a6(0x16d)](typeof Reflect, j[a6(0x1a5)]) && j[a6(0x16d)](typeof Reflect[a5(0x190)], j[a5(0x189)]))
            l = Reflect[a5(0x190)](e, f, g, h);
        else {
            for (var n = j[a5(0x1ae)](e[a5(0x18c)], -0x1 * 0x955 + -0x1576 + 0x1ecc); j[a5(0x1b0)](n, 0x3d7 * 0x6 + 0x23c + -0x1946); n--)
                if (m = e[n])
                    l = (j[a5(0x1a4)](k, -0x2 * -0x10ff + 0x13cb + -0x35c6) ? j[a5(0x1b8)](m, l) : j[a5(0x150)](k, 0x1a90 + -0x1 * -0x25d5 + -0x4062) ? j[a5(0x1a1)](m, f, g, l) : j[a6(0x1b3)](m, f, g)) || l;
        }
        return j[a6(0x150)](k, -0x1590 + 0x1d75 + -0x7e2) && l && Object[a5(0x151) + a6(0x171)](f, g, l), l;
    }, __metadata = this && this[a7(0x184)] || function (d, e) {
        const a8 = a4, a9 = a4, f = {};
        f[a8(0x19b)] = function (h, i) {
            return h === i;
        }, f[a8(0x1c0)] = a8(0x1a6), f[a8(0x199)] = a8(0x1c2);
        const g = f;
        if (g[a8(0x19b)](typeof Reflect, g[a8(0x1c0)]) && g[a9(0x19b)](typeof Reflect[a8(0x154)], g[a8(0x199)]))
            return Reflect[a8(0x154)](d, e);
    }, __importDefault = this && this[a7(0x169) + a7(0x1bd)] || function (c) {
        const aa = a7;
        return c && c[aa(0x178)] ? c : { 'default': c };
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3d7 + -0x3f * 0x7b + -0xe * -0x1fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const a0 = {};
a0[a7(0x15d)] = !![], Object[a4(0x151) + a7(0x171)](exports, a7(0x178), a0);
const sequelize_typescript_1 = require(a7(0x15c) + a7(0x1b2)), User_1 = __importDefault(require(a7(0x1bc))), Tenant_1 = __importDefault(require(a7(0x16c)));
let ChatFlow = class ChatFlow extends sequelize_typescript_1[a4(0x18a)] {
    get [a4(0x183)]() {
        const ab = a4, ac = a7, d = {};
        d[ab(0x168)] = function (g, h) {
            return g === h;
        }, d[ac(0x172)] = ab(0x1a6), d[ac(0x1be)] = ab(0x1c2), d[ac(0x1af)] = function (g, h) {
            return g === h;
        }, d[ac(0x193)] = ab(0x176), d[ab(0x198)] = function (g, h) {
            return g === h;
        }, d[ab(0x19d)] = ab(0x173), d[ab(0x1a3)] = function (g, h) {
            return g === h;
        }, d[ab(0x195)] = ab(0x183), d[ac(0x19a)] = function (g, h) {
            return g === h;
        }, d[ab(0x181)] = ab(0x1c3), d[ab(0x187)] = ac(0x196), d[ab(0x1c1)] = function (g, h) {
            return g !== h;
        }, d[ac(0x1bf)] = ac(0x1aa), d[ac(0x165)] = ab(0x155), d[ac(0x1b1)] = function (g, h) {
            return g !== h;
        }, d[ab(0x167)] = ac(0x18b), d[ab(0x158)] = ab(0x157), d[ac(0x152)] = function (g, h) {
            return g === h;
        }, d[ac(0x1c5)] = ac(0x1b4), d[ab(0x197)] = ab(0x163), d[ab(0x166)] = ab(0x170);
        const e = d, f = this[ac(0x156) + 'ue'](e[ab(0x195)]);
        if (f) {
            if (e[ab(0x19a)](e[ac(0x181)], e[ac(0x187)])) {
                if (e[ac(0x168)](typeof h, e[ac(0x172)]) && e[ac(0x168)](typeof i[ac(0x154)], e[ab(0x1be)]))
                    return j[ac(0x154)](k, l);
            } else {
                for (const h of f[ab(0x17c)]) {
                    if (e[ab(0x1c1)](e[ac(0x1bf)], e[ac(0x165)])) {
                        if (e[ac(0x1a3)](h[ac(0x159)], e[ab(0x193)])) {
                            if (e[ac(0x1b1)](e[ac(0x167)], e[ac(0x158)]))
                                for (const i of h[ab(0x19e) + 'ns']) {
                                    if (e[ab(0x152)](e[ab(0x1c5)], e[ab(0x1c5)])) {
                                        if (e[ac(0x198)](i[ac(0x159)], e[ab(0x19d)]) && i[ab(0x180)][ab(0x14d)]) {
                                            if (e[ac(0x19a)](e[ab(0x197)], e[ab(0x166)])) {
                                                if (e[ab(0x1af)](f[ab(0x159)], e[ab(0x193)]))
                                                    for (const k of k[ac(0x19e) + 'ns']) {
                                                        if (e[ab(0x198)](k[ac(0x159)], e[ac(0x19d)]) && k[ac(0x180)][ac(0x14d)]) {
                                                            const {
                                                                    BACKEND_URL: l,
                                                                    PROXY_PORT: m
                                                                } = n[ab(0x1a0)], n = k[ac(0x180)][ab(0x14d)];
                                                            k[ac(0x180)][ab(0x192)] = n, k[ab(0x180)][ac(0x14d)] = l + ':' + m + ab(0x16a) + n;
                                                        }
                                                    }
                                            } else {
                                                const {
                                                        BACKEND_URL: k,
                                                        PROXY_PORT: l
                                                    } = process[ab(0x1a0)], m = i[ac(0x180)][ac(0x14d)];
                                                i[ac(0x180)][ab(0x192)] = m, i[ac(0x180)][ab(0x14d)] = k + ':' + l + ac(0x16a) + m;
                                            }
                                        }
                                    } else {
                                        const {
                                                BACKEND_URL: o,
                                                PROXY_PORT: p
                                            } = g[ab(0x1a0)], q = h[ab(0x180)][ab(0x14d)];
                                        i[ac(0x180)][ab(0x192)] = q, j[ab(0x180)][ab(0x14d)] = o + ':' + p + ac(0x16a) + q;
                                    }
                                }
                            else
                                for (const p of g[ab(0x19e) + 'ns']) {
                                    if (e[ab(0x1a3)](p[ac(0x159)], e[ab(0x19d)]) && p[ac(0x180)][ab(0x14d)]) {
                                        const {
                                                BACKEND_URL: q,
                                                PROXY_PORT: r
                                            } = j[ac(0x1a0)], s = p[ac(0x180)][ab(0x14d)];
                                        p[ac(0x180)][ab(0x192)] = s, p[ac(0x180)][ac(0x14d)] = q + ':' + r + ab(0x16a) + s;
                                    }
                                }
                        }
                    } else {
                        const q = {};
                        return q[ac(0x162)] = j, g && h[ac(0x178)] ? i : q;
                    }
                }
                return f;
            }
        }
        return {};
    }
};
__decorate([
    sequelize_typescript_1[a7(0x1b6)],
    sequelize_typescript_1[a7(0x153) + a4(0x1ba)],
    sequelize_typescript_1[a7(0x18f)],
    __metadata(a4(0x17b) + 'e', String)
], ChatFlow[a4(0x1b5)], 'id', void (-0x11a + 0x11b * 0x11 + 0x1 * -0x11b1)), __decorate([
    (0x163f * -0x1 + 0x259b + -0x3d7 * 0x4, sequelize_typescript_1[a7(0x18f)])(sequelize_typescript_1[a4(0x1a2)][a7(0x175)]),
    __metadata(a4(0x17b) + 'e', String)
], ChatFlow[a4(0x1b5)], a7(0x1ad), void (-0x1eb5 + -0x1505 * 0x1 + 0x33ba)), __decorate([
    (-0x23f8 + 0xd * -0x14c + 0x34d4, sequelize_typescript_1[a4(0x1ab)])({}),
    sequelize_typescript_1[a7(0x1bb)],
    (0x5 * 0x28d + -0xe6b + -0x2 * -0xd5, sequelize_typescript_1[a7(0x18f)])(sequelize_typescript_1[a4(0x1a2)][a4(0x18e)]),
    __metadata(a7(0x17b) + 'e', Object),
    __metadata(a7(0x14f) + a4(0x161), [])
], ChatFlow[a4(0x1b5)], a4(0x183), null), __decorate([
    (0x1014 + 0x11f9 + -0x220d * 0x1, sequelize_typescript_1[a7(0x1ab)])(!![]),
    sequelize_typescript_1[a7(0x18f)],
    __metadata(a7(0x17b) + 'e', Boolean)
], ChatFlow[a4(0x1b5)], a4(0x1c4), void (0x2315 + 0xd * -0x10b + -0x227 * 0xa)), __decorate([
    (0x20 * 0xd3 + 0x1e * -0x53 + -0x2 * 0x853, sequelize_typescript_1[a7(0x1ab)])(![]),
    sequelize_typescript_1[a7(0x18f)],
    __metadata(a4(0x17b) + 'e', Boolean)
], ChatFlow[a4(0x1b5)], a4(0x1c6), void (-0x9e8 + -0x1d17 + 0x26ff)), __decorate([
    (0x1eb5 + 0x13 * 0x11c + -0x33c9, sequelize_typescript_1[a4(0x1ab)])(null),
    (-0x445 * -0x6 + 0x114d + 0x1 * -0x2aeb, sequelize_typescript_1[a7(0x18f)])(sequelize_typescript_1[a7(0x1a2)][a7(0x175)]),
    __metadata(a4(0x17b) + 'e', String)
], ChatFlow[a7(0x1b5)], a7(0x14c) + 'te', void (0x373 * -0x6 + -0x1c33 * 0x1 + 0x30e5)), __decorate([
    (0x8ad * -0x2 + -0x123f + 0x2399, sequelize_typescript_1[a7(0x18d)])(() => User_1[a4(0x162)]),
    sequelize_typescript_1[a4(0x18f)],
    __metadata(a7(0x17b) + 'e', Number)
], ChatFlow[a7(0x1b5)], a7(0x188), void (-0x459 + -0x7b * 0x4 + -0x645 * -0x1)), __decorate([
    (0x1fe1 + -0x6 * -0x33b + -0x3343, sequelize_typescript_1[a4(0x174)])(() => User_1[a4(0x162)]),
    __metadata(a7(0x17b) + 'e', User_1[a7(0x162)])
], ChatFlow[a4(0x1b5)], a4(0x19f), void (0x1239 + -0x45d + -0x4 * 0x377)), __decorate([
    (-0xaa4 + 0x19df + -0xf3b, sequelize_typescript_1[a4(0x18d)])(() => Tenant_1[a7(0x162)]),
    sequelize_typescript_1[a4(0x18f)],
    __metadata(a7(0x17b) + 'e', Number)
], ChatFlow[a4(0x1b5)], a4(0x19c), void (-0xbc8 + -0x232e + 0x2ef6 * 0x1)), __decorate([
    (0xfbd + 0x1eec * 0x1 + 0x955 * -0x5, sequelize_typescript_1[a4(0x174)])(() => Tenant_1[a7(0x162)]),
    __metadata(a7(0x17b) + 'e', Tenant_1[a7(0x162)])
], ChatFlow[a7(0x1b5)], a7(0x191), void (0x91 * 0x3d + -0xb55 + -0x2e7 * 0x8)), __decorate([
    sequelize_typescript_1[a4(0x177)],
    (0x48c + -0x1 * 0x2662 + 0x7a * 0x47, sequelize_typescript_1[a7(0x18f)])(sequelize_typescript_1[a7(0x1a2)][a7(0x160)](-0x1f9d + -0x105 * -0x7 + 0x1880)),
    __metadata(a4(0x17b) + 'e', Date)
], ChatFlow[a4(0x1b5)], a4(0x194), void (0x367 + -0x9f7 + 0x5 * 0x150)), __decorate([
    sequelize_typescript_1[a4(0x15e)],
    (0x137 * -0x20 + -0x1 * 0x1a4b + 0x412b, sequelize_typescript_1[a4(0x18f)])(sequelize_typescript_1[a7(0x1a2)][a4(0x160)](0x70 * 0x3e + 0x1075 + 0xbd * -0x3b)),
    __metadata(a7(0x17b) + 'e', Date)
], ChatFlow[a4(0x1b5)], a4(0x164), void (-0x25f7 + 0x2675 + -0x7e));
function a() {
    const ad = [
        'DataType',
        'WmnLJ',
        'hCEqk',
        'yKvhd',
        'object',
        'bndeS',
        '231435spvMJg',
        'ertyDescri',
        'VNpCA',
        'Default',
        '__decorate',
        'name',
        'yBHsL',
        'SLzji',
        'izeXl',
        'lcLCf',
        'typescript',
        'dyLwS',
        'ahAxc',
        'prototype',
        'PrimaryKey',
        '8gyjHDp',
        'FBEDw',
        'eName',
        'ent',
        'AllowNull',
        './User',
        'fault',
        'bTUOJ',
        'RODnF',
        'MNxvW',
        'Fpakj',
        'function',
        'YkUdK',
        'isActive',
        'Arans',
        'isDeleted',
        'celularTes',
        'mediaUrl',
        '90cVPGfO',
        'design:par',
        'DIPHT',
        'defineProp',
        'XwYnK',
        'AutoIncrem',
        'metadata',
        'zcnsV',
        'getDataVal',
        'SJUIx',
        'nfbLx',
        'type',
        'ptor',
        'Table',
        'sequelize-',
        'value',
        'UpdatedAt',
        '340360jNwAfu',
        'DATE',
        'amtypes',
        'default',
        'rpHRN',
        'updatedAt',
        'CzBzL',
        'KPjgN',
        'SFZlp',
        'pnnUs',
        '__importDe',
        '/public/',
        '5382372hxkcfs',
        './Tenant',
        'bftcP',
        '7936721sGCyfK',
        'getOwnProp',
        'rrLDD',
        'erty',
        'vYiJw',
        'MediaField',
        'BelongsTo',
        'TEXT',
        'node',
        'CreatedAt',
        '__esModule',
        'freezeTabl',
        '144aegQpP',
        'design:typ',
        'nodeList',
        '326286jXFKfz',
        '1264120dKJspC',
        '14UbLsal',
        'data',
        'QmWwM',
        '33aZDyYN',
        'flow',
        '__metadata',
        '8aKejeh',
        '133631AzOeGR',
        'Vwijb',
        'userId',
        'YDvkK',
        'Model',
        'nuxJo',
        'length',
        'ForeignKey',
        'JSON',
        'Column',
        'decorate',
        'tenant',
        'fileName',
        'RDfec',
        'createdAt',
        'HBkxF',
        'gZgar',
        'HZUJI',
        'IDFAJ',
        'RWRZa',
        'OcIcr',
        'yoeJZ',
        'tenantId',
        'pRaDK',
        'interactio',
        'user',
        'env',
        'zlWZV'
    ];
    a = function () {
        return ad;
    };
    return a();
}
const a1 = {};
a1[a4(0x179) + a4(0x1b9)] = !![], ChatFlow = __decorate([(0x136b + 0x54 * -0x6 + -0x1173, sequelize_typescript_1[a7(0x15b)])(a1)], ChatFlow), exports[a4(0x162)] = ChatFlow;