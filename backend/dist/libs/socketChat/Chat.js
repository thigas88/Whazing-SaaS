'use strict';
const a8 = b, a9 = b;
(function (c, d) {
    const a6 = b, a7 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a6(0x1b3)) / (-0x3 * -0x62f + 0x2e * -0x7a + 0x360) * (parseInt(a7(0x126)) / (-0x12d * -0xe + 0x480 * -0x5 + -0x306 * -0x2)) + -parseInt(a7(0x110)) / (0x1b5f + 0xfc5 + -0x1 * 0x2b21) * (parseInt(a7(0x18f)) / (-0x207d + 0x1e59 + 0xb8 * 0x3)) + -parseInt(a7(0x19c)) / (0x2 * -0xea7 + -0x2275 + 0x3fc8) * (parseInt(a6(0x117)) / (-0x884 + 0x1 * -0x11d7 + 0x1 * 0x1a61)) + parseInt(a6(0x196)) / (-0x1647 * 0x1 + -0x1e53 + -0x1 * -0x34a1) + parseInt(a7(0x203)) / (-0x19bb + 0x2029 * -0x1 + 0x39ec) + -parseInt(a6(0x215)) / (-0x287 * -0x1 + -0x230 + -0x4e) + parseInt(a7(0x1f8)) / (-0x1 * 0xb81 + -0x5ed * 0x3 + 0x1d52);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa53b9 + -0x9c89 + 0x136f5e));
var __importDefault = this && this[a8(0x262) + a8(0x208)] || function (c) {
    const aa = a9;
    return c && c[aa(0xf8)] ? c : { 'default': c };
};
const a4 = {};
a4[a9(0x1cb)] = !![], Object[a8(0x10b) + a8(0x10f)](exports, a9(0xf8), a4);
const lodash_1 = require(a8(0x1b0)), Utils_1 = require(a9(0x22a)), Index_1 = require(a9(0x229)), User_1 = __importDefault(require(a9(0x224) + a8(0x185))), logger_1 = require(a8(0x152) + a9(0xec)), events = {}, JoinChatServer = e => {
        const ab = a8, ac = a9, f = {};
        f[ab(0x233)] = function (l, m) {
            return l === m;
        }, f[ab(0x1c7)] = ac(0x210), f[ab(0xd2)] = ab(0x246) + ac(0x22e), f[ab(0x236)] = ac(0x254), f[ab(0x1e5)] = ac(0xcb);
        const g = f, {user: h} = e[ab(0x21a)][ac(0xf1)];
        logger_1[ac(0x21d)][ab(0x168)](ac(0x148) + ab(0x164) + h[ab(0x12f)]);
        const {tenantId: i} = h, j = ac(0x15d) + '_' + i;
        let k;
        k = Index_1[ab(0x13e)][j];
        k && (g[ac(0x233)](g[ab(0x1c7)], g[ab(0x1c7)]) ? (k[ac(0x25c) + 'e'][h['id']] = {
            'sockets': [e['id']],
            'user': h
        }, k[ac(0xd7)][ab(0x130)](e), (-0x25d * -0x3 + 0x15cc + -0x1 * 0x1ce3, Utils_1[ab(0x12c)])(e, g[ac(0xd2)])) : delete e[ab(0x1b6)][f['id']]);
        if (!k) {
            if (g[ab(0x233)](g[ab(0x236)], g[ab(0x236)])) {
                const m = g[ac(0x1e5)][ab(0x1f2)]('|');
                let n = -0x1 * -0x1802 + 0x22ea + -0x24 * 0x1a3;
                while (!![]) {
                    switch (m[n++]) {
                    case '0':
                        k[ab(0xd7)][ac(0x130)](e);
                        continue;
                    case '1':
                        const o = {};
                        o[ac(0xd7)] = [], o[ab(0x25c) + 'e'] = {}, o[ab(0x1b6)] = {}, Index_1[ab(0x13e)][j] = o;
                        continue;
                    case '2':
                        (0x475 * -0x2 + -0x118d + -0x19 * -0x10f, Utils_1[ab(0x12c)])(e, h[ac(0xd0)] + (ac(0x127) + ab(0x121)));
                        continue;
                    case '3':
                        k = Index_1[ac(0x13e)][j];
                        continue;
                    case '4':
                        k[ac(0x25c) + 'e'][h['id']] = {
                            'sockets': [e['id']],
                            'user': h
                        };
                        continue;
                    }
                    break;
                }
            } else
                h[ab(0x25c) + 'e'][i['id']][ab(0xd7)] = (-0x1 * -0x1143 + 0x23bb + -0x34fe, j[ac(0x1da)])(k, l['id']);
        }
    }, UpdateUsers = c => {
        const ad = a8, ae = a9, d = {
                'KtDdp': function (i, j) {
                    return i === j;
                },
                'CBGyL': ad(0x1d7),
                'xcXRZ': function (i, j) {
                    return i === j;
                },
                'hxbob': ad(0x246) + ae(0x22e),
                'CeyHJ': ad(0x265),
                'DCaLZ': function (i, j) {
                    return i(j);
                },
                'IULaS': ae(0x1ab),
                'vuaic': function (i, j) {
                    return i !== j;
                },
                'BqDhL': ae(0xf9),
                'SzmGY': ad(0x20d),
                'nFnRF': ae(0x191) + 's',
                'UVnTa': function (i, j) {
                    return i !== j;
                },
                'IgKvk': ad(0x141),
                'TXHZX': function (i, j) {
                    return i > j;
                },
                'LAqff': ad(0x10a)
            }, {user: e} = c[ae(0x21a)][ad(0xf1)], f = ae(0x15d) + '_' + e[ad(0xd0)], g = Index_1[ae(0x13e)][f], h = (-0x984 + -0x22 * 0xf1 + 0x5 * 0x84e, Utils_1[ad(0x1ef)])(g[ad(0x25c) + 'e']);
        (0x33d * 0xb + 0x3 * 0x173 + -0x2 * 0x13fc, lodash_1[ad(0x22b)])(h, i => {
            const ag = ae, ai = ae, j = {
                    'HlwCL': function (k, l) {
                        const af = b;
                        return d[af(0xd1)](k, l);
                    },
                    'UtClp': d[ag(0x219)],
                    'CMhyE': function (k, l) {
                        const ah = ag;
                        return d[ah(0x1ec)](k, l);
                    },
                    'mgNPq': d[ai(0x201)],
                    'EmWYv': d[ag(0x1e6)],
                    'VOqRP': function (k, l) {
                        const aj = ai;
                        return d[aj(0x15a)](k, l);
                    },
                    'UuQyJ': function (k, l) {
                        const ak = ag;
                        return d[ak(0xd1)](k, l);
                    },
                    'ZEXOM': d[ag(0x1b7)],
                    'qbjlT': function (k, l) {
                        const al = ag;
                        return d[al(0x1af)](k, l);
                    },
                    'KMpSJ': d[ai(0x118)],
                    'BqvUu': d[ai(0x26b)],
                    'qUydA': d[ai(0x217)]
                };
            if (d[ag(0x202)](d[ai(0x231)], d[ai(0x231)])) {
                if (d) {
                } else {
                }
            } else {
                const l = i[ai(0xe3)], {sockets: m} = i;
                if (l && d[ag(0xe4)](m[ag(0x15e)], 0x1a9e * 0x1 + 0x226c + -0x3d0a)) {
                    if (d[ai(0xd1)](d[ag(0x10d)], d[ag(0x10d)]))
                        (-0x1463 + 0x13 * 0x8f + 0x9c6, lodash_1[ai(0x22b)])(m, n => {
                            const an = ag, ao = ag, o = {
                                    'tUSnn': function (p, q) {
                                        const am = b;
                                        return j[am(0x20a)](p, q);
                                    }
                                };
                            if (j[an(0x1db)](j[an(0xc4)], j[ao(0xc4)])) {
                                const p = (0x6 * -0x18 + 0xa * 0x29 + -0x10a, lodash_1[ao(0x114)])(g[an(0xd7)], q => {
                                    const ap = an, aq = an;
                                    if (j[ap(0x25f)](j[ap(0x1d1)], j[aq(0x1d1)]))
                                        return j[ap(0x199)](q['id'], n);
                                    else
                                        o[aq(0x23e)](e, f);
                                });
                                if (p) {
                                    if (j[an(0x1de)](j[an(0x149)], j[ao(0x149)])) {
                                        const {user: r} = p[an(0x21a)][an(0xf1)];
                                        q[ao(0x21d)][an(0x168)](an(0x148) + an(0x164) + r[ao(0x12f)]);
                                        const {tenantId: s} = r, t = ao(0x15d) + '_' + s;
                                        let u;
                                        u = r[ao(0x13e)][t];
                                        u && (u[an(0x25c) + 'e'][r['id']] = {
                                            'sockets': [C['id']],
                                            'user': r
                                        }, u[an(0xd7)][an(0x130)](D), (-0x1e3b * -0x1 + 0x5 * -0x202 + 0x1 * -0x1431, E[ao(0x12c)])(F, j[ao(0x100)]));
                                        if (!u) {
                                            const w = j[an(0x22c)][ao(0x1f2)]('|');
                                            let x = -0x82f * 0x1 + -0x1 * 0x24ba + -0x1 * -0x2ce9;
                                            while (!![]) {
                                                switch (w[x++]) {
                                                case '0':
                                                    u[an(0x25c) + 'e'][r['id']] = {
                                                        'sockets': [I['id']],
                                                        'user': r
                                                    };
                                                    continue;
                                                case '1':
                                                    const y = {};
                                                    y[an(0xd7)] = [], y[ao(0x25c) + 'e'] = {}, y[an(0x1b6)] = {}, G[ao(0x13e)][t] = y;
                                                    continue;
                                                case '2':
                                                    u[ao(0xd7)][an(0x130)](J);
                                                    continue;
                                                case '3':
                                                    (0xa62 * 0x1 + -0x1ad1 * -0x1 + 0x59 * -0x6b, K[ao(0x12c)])(L, r[ao(0xd0)] + (an(0x127) + an(0x121)));
                                                    continue;
                                                case '4':
                                                    u = H[ao(0x13e)][t];
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                    } else
                                        (l[ao(0x16d)][an(0x267)] || l[ao(0x16d)][an(0x113)]) && (j[an(0x1db)](j[an(0x13c)], j[an(0x13c)]) ? p[an(0x160)](j[an(0x1d5)], h) : d[an(0x1ac)] = 'r');
                                }
                            } else
                                e = f[ao(0xe3)];
                        });
                    else
                        return;
                }
            }
        });
    }, UpdateOnlineBubbles = e => {
        const ar = a8, as = a9, f = {};
        f[ar(0xc6)] = ar(0x116) + ar(0x206), f[as(0x227)] = function (n, o) {
            return n === o;
        }, f[as(0x211)] = as(0xf0), f[ar(0x1d9)] = ar(0x245), f[ar(0x257)] = ar(0x1fe), f[as(0x122)] = as(0x1a2) + 'e', f[as(0x11d)] = ar(0x154), f[as(0x243)] = as(0xf2);
        const g = f, {user: h} = e[ar(0x21a)][as(0xf1)], i = ar(0x15d) + '_' + h[as(0xd0)], j = Index_1[ar(0x13e)][i], k = (0x244e + -0x2 * 0xe8 + -0x227e, lodash_1[as(0xf7)])((0x1cc + -0x683 * -0x3 + -0x1555, lodash_1[as(0x1fa)])((0xbb + 0x15ef + -0x1 * 0x16aa, lodash_1[as(0x194)])(j[as(0x25c) + 'e']), n => {
                const at = as, au = ar;
                if (g[at(0x227)](g[at(0x211)], g[at(0x1d9)]))
                    m = g[at(0xc6)];
                else
                    return n[-0x85 * -0xa + -0x25cb + -0x5 * -0x685];
            })), l = (0xad2 + -0x3 * 0xc4c + 0x1a12, lodash_1[ar(0xf7)])((-0x1336 * 0x2 + -0xc83 * 0x1 + -0x11 * -0x2ff, lodash_1[ar(0x1fa)])((-0x74b * 0x5 + -0xac0 + 0x2c7 * 0x11, lodash_1[as(0x194)])(j[as(0x1b6)]), n => {
                const av = as, ax = as, p = {
                        'ApzCz': g[av(0x257)],
                        'cQbhM': function (q, r) {
                            const aw = av;
                            return g[aw(0x227)](q, r);
                        },
                        'KwrQz': g[av(0x122)]
                    };
                if (g[av(0x227)](g[av(0x11d)], g[av(0x243)])) {
                    const r = t[ax(0x13e)][u];
                    if (r) {
                        const {to: s} = K, {from: t} = L;
                        M[av(0x155)]('TO', s), N[ax(0x155)](p[av(0xe2)], t);
                        const u = O[av(0x1ac)];
                        p[av(0x107)](P[av(0x1ac)], 's') ? Z[ax(0x1ac)] = 'r' : a0[ax(0x1ac)] = 's', (-0x1 * -0x6c2 + 0xb * -0x137 + 0x69b, S[av(0x1c5)])(r[ax(0xd7)], r[ax(0x25c) + 'e'], T[av(0x1a8)][ax(0x226)], p[ax(0x14c)], U), V[av(0x1ac)] = u, (-0xdfa + -0x1d93 + -0x1 * -0x2b8d, W[ax(0x1c5)])(r[av(0xd7)], r[av(0x25c) + 'e'], X[ax(0x131)][av(0x226)], p[ax(0x14c)], Y);
                    }
                } else
                    return n[-0x18ca + 0x1e39 + -0x56f];
            })), m = {};
        m[ar(0x11e) + as(0x135)] = k, m[ar(0x13b) + ar(0x135)] = l, (-0x1e12 + -0x1 * 0x1747 + 0x3559 * 0x1, Utils_1[ar(0x12d) + as(0x153) + as(0x11c)])(e, h[as(0xd0)] + (as(0x232) + as(0xe5) + as(0x1f9)), m);
    }, SpawnOpenChatWindows = d => {
        const ay = a8, az = a9, e = {};
        e[ay(0x1ff)] = ay(0x250) + ay(0x179);
        const f = e, {user: g} = d[az(0x21a)][ay(0xf1)], h = User_1[ay(0x17a)][ay(0xc8)](g['id']);
        (0x1ba4 + -0x639 + -0x156b, Utils_1[ay(0x12c)])(d, f[az(0x1ff)], h);
    }, spawnChatWindow = d => {
        const aA = a9, aB = a8, e = {};
        e[aA(0x22d)] = function (g, h) {
            return g === h;
        }, e[aB(0x260)] = aA(0x1bd), e[aB(0x241)] = aB(0xd4), e[aB(0x144)] = aB(0x12f), e[aB(0x16c)] = aB(0x1cf), e[aB(0x17e)] = aB(0x17d), e[aB(0x190)] = aB(0x250) + aA(0x179);
        const f = e;
        d['on'](f[aB(0x190)], async g => {
            const aC = aA, aD = aB;
            if (f[aC(0x22d)](f[aC(0x260)], f[aC(0x241)])) {
                const {user: i} = m[aD(0x21a)][aC(0xf1)], j = aD(0x15d) + '_' + i[aD(0xd0)], k = n[aD(0x13e)][j], l = (0x1732 + 0x1bce * -0x1 + -0x76 * -0xa, o[aD(0xf7)])((0xab4 + 0x1 * 0xe71 + 0x29 * -0x9d, p[aC(0x1fa)])((-0xc8a + -0x496 * -0x3 + 0x9c * -0x2, q[aD(0x194)])(k[aD(0x25c) + 'e']), B => {
                        return B[0x10c * 0x13 + 0x1 * -0xacf + 0x19 * -0x5d];
                    })), m = (-0x85 * -0x1c + 0x1 * -0x1934 + 0xaa8, r[aD(0xf7)])((-0xc8 * 0x28 + -0x13cd * 0x1 + 0x330d * 0x1, s[aC(0x1fa)])((-0x1db2 + 0x1 * -0x2075 + 0x3e27, t[aD(0x194)])(k[aD(0x1b6)]), B => {
                        return B[0xb7e + 0xea + 0x8 * -0x18d];
                    })), n = {};
                n[aD(0x11e) + aC(0x135)] = l, n[aC(0x13b) + aD(0x135)] = m, (-0xa * 0x275 + -0x1375 * -0x1 + -0x4d * -0x11, u[aD(0x12d) + aD(0x153) + aD(0x11c)])(v, i[aC(0xd0)] + (aD(0x232) + aD(0xe5) + aD(0x1f9)), n);
            } else {
                const i = {};
                i[aC(0x16f)] = [
                    'id',
                    f[aD(0x144)],
                    f[aD(0x16c)],
                    f[aD(0x17e)]
                ];
                const j = await User_1[aC(0x17a)][aC(0xc8)](g, i);
                (-0x1 * -0x62b + 0x1 * -0x2144 + 0x1 * 0x1b19, Utils_1[aC(0x12c)])(d, f[aC(0x190)], j);
            }
        });
    }, onSetUserIdle = c => {
        const aE = a8, aF = a9, d = {
                'iHGpB': function (g, h) {
                    return g(h);
                },
                'jefSS': aE(0x191) + 's',
                'xVxiz': function (g, h) {
                    return g !== h;
                },
                'AdAov': aF(0x1e9),
                'pleym': function (g, h) {
                    return g !== h;
                },
                'zhfuc': aE(0x123),
                'wEIzz': function (g, h) {
                    return g === h;
                },
                'RdvsD': aF(0x205),
                'MbuSN': aE(0x18a),
                'fTyiX': aF(0xd3)
            }, {user: e} = c[aF(0x21a)][aE(0xf1)], f = aE(0x15d) + '_' + e[aF(0xd0)];
        c['on'](e[aF(0xd0)] + (aE(0x24c) + 'le'), () => {
            const aH = aE, aI = aF, g = {
                    'lPtUc': function (h, i) {
                        const aG = b;
                        return d[aG(0x228)](h, i);
                    },
                    'ssYhe': d[aH(0x244)]
                };
            if (d[aH(0x1dd)](d[aH(0x221)], d[aH(0x221)]))
                e = f[aI(0xe3)];
            else {
                let i;
                i = Index_1[aH(0x13e)][f];
                i && (d[aI(0x16e)](d[aH(0x162)], d[aH(0x162)]) ? g[aH(0xf3)](e, f) : i[aH(0x1b6)][e['id']] = {
                    'sockets': [c['id']],
                    'user': e
                });
                if (!i) {
                    if (d[aH(0x24d)](d[aI(0x256)], d[aI(0x256)])) {
                        const k = {};
                        k[aH(0xd7)] = [], k[aI(0x25c) + 'e'] = {}, k[aI(0x1b6)] = {}, Index_1[aH(0x13e)][f] = k, i = Index_1[aH(0x13e)][f], i[aH(0x1b6)][aH(0x130)](c['id']);
                    } else
                        (g[aH(0x16d)][aH(0x267)] || h[aI(0x16d)][aI(0x113)]) && k[aH(0x160)](g[aI(0x1c6)], l);
                }
                i?.[aI(0x25c) + 'e'][e['id']] && (d[aI(0x24d)](d[aI(0x17b)], d[aI(0x207)]) ? e = f[aI(0xe3)] : delete i?.[aI(0x25c) + 'e'][e['id']]), d[aI(0x228)](UpdateOnlineBubbles, c);
            }
        });
    }, onSetUserActive = c => {
        const aJ = a9, aK = a8, d = {
                'boZdS': aJ(0x250) + aJ(0x179),
                'ewnxI': function (g, h) {
                    return g(h);
                },
                'WcwIe': function (g, h) {
                    return g(h);
                },
                'pecbJ': function (g, h) {
                    return g(h);
                },
                'fRBjU': function (g, h) {
                    return g === h;
                },
                'TGBlS': aK(0xd9),
                'qGDms': aJ(0x223),
                'LYoDA': function (g, h) {
                    return g !== h;
                },
                'CXWXJ': aJ(0x13a),
                'ovpoB': aK(0x147),
                'DCmFe': function (g, h) {
                    return g === h;
                },
                'oauQd': aK(0xe1),
                'QEXaE': aJ(0x25a),
                'ujDiX': function (g, h) {
                    return g(h);
                }
            }, {user: e} = c[aJ(0x21a)][aK(0xf1)], f = aJ(0x15d) + '_' + e[aK(0xd0)];
        c['on'](e[aK(0xd0)] + (aJ(0x157) + aK(0x1ce)), () => {
            const aO = aJ, aP = aK, g = {
                    'HzcYY': function (h, i) {
                        const aL = b;
                        return d[aL(0xf5)](h, i);
                    },
                    'WxtAC': function (h, i) {
                        const aM = b;
                        return d[aM(0x26c)](h, i);
                    },
                    'tIFNm': function (h, i) {
                        const aN = b;
                        return d[aN(0xfb)](h, i);
                    }
                };
            if (d[aO(0x193)](d[aO(0x14b)], d[aP(0x23d)]))
                g[aP(0x1c3)](g, h), g[aP(0x11a)](i, j);
            else {
                let i = Index_1[aP(0x13e)][f];
                i?.[aP(0x1b6)][e['id']] && (d[aO(0x26d)](d[aO(0x1f6)], d[aP(0x1f6)]) ? g[aO(0x218)](e, f[aO(0xd0)]) : delete i?.[aP(0x1b6)][e['id']]);
                if (!i) {
                    if (d[aO(0x193)](d[aO(0x161)], d[aO(0x161)])) {
                        const k = {};
                        k[aP(0xd7)] = [], k[aP(0x25c) + 'e'] = {}, k[aO(0x1b6)] = {}, Index_1[aP(0x13e)][f] = k, i = Index_1[aP(0x13e)][f], i[aP(0x25c) + 'e'][aO(0x130)](c['id']);
                    } else {
                        const {user: m} = g[aO(0x21a)][aO(0xf1)], n = h[aO(0x17a)][aP(0xc8)](m['id']);
                        (0x149b + -0x2d * 0x7 + -0x8 * 0x26c, i[aO(0x12c)])(j, d[aP(0x248)], n);
                    }
                }
                if (i?.[aO(0x25c) + 'e']) {
                    if (d[aP(0x1b9)](d[aO(0x1bf)], d[aP(0x24b)]))
                        return d[-0xffe + -0x2 * -0xcb + 0xe68];
                    else
                        i[aP(0x25c) + 'e'][e['id']] = {
                            'sockets': [c['id']],
                            'user': e
                        };
                }
                d[aP(0x238)](UpdateOnlineBubbles, c);
            }
        });
    }, onUpdateUsers = d => {
        const aQ = a9, aR = a8, e = {};
        e[aQ(0xdb)] = aR(0x191) + 's';
        const f = e;
        d['on'](f[aQ(0xdb)], UpdateUsers);
    }, onChatMessage = d => {
        const aS = a9, aT = a8, e = {};
        e[aS(0x21b)] = aS(0x191) + 's', e[aT(0x1b4)] = function (j, k) {
            return j < k;
        }, e[aT(0x151)] = function (j, k) {
            return j === k;
        }, e[aT(0x166)] = aS(0x18d), e[aS(0xcc)] = function (j, k) {
            return j === k;
        }, e[aT(0x249)] = aS(0xca), e[aS(0xee)] = aS(0x1fe), e[aS(0x1fd)] = function (j, k) {
            return j === k;
        }, e[aS(0x21c)] = function (j, k) {
            return j !== k;
        }, e[aT(0x1bb)] = aS(0x109), e[aT(0x21e)] = aS(0x213), e[aS(0x146)] = aT(0x136), e[aT(0x1a6)] = aT(0x1aa), e[aS(0x21f)] = aS(0x1a2) + 'e';
        const f = e, {user: g} = d[aT(0x21a)][aT(0xf1)], {tenantId: h} = g, i = aS(0x15d) + '_' + h;
        d['on'](f[aS(0x21f)], function (j) {
            const aU = aT, aW = aT, k = {
                    'ahmcK': f[aU(0x21b)],
                    'HaOZs': function (l, m) {
                        const aV = aU;
                        return f[aV(0x1b4)](l, m);
                    }
                };
            if (f[aU(0x151)](f[aU(0x166)], f[aW(0x166)])) {
                const l = Index_1[aW(0x13e)][i];
                if (l) {
                    if (f[aU(0xcc)](f[aU(0x249)], f[aU(0x249)])) {
                        const {to: m} = j, {from: n} = j;
                        console[aW(0x155)]('TO', m), console[aU(0x155)](f[aU(0xee)], n);
                        const o = j[aU(0x1ac)];
                        if (f[aW(0x1fd)](j[aW(0x1ac)], 's'))
                            f[aW(0x21c)](f[aW(0x1bb)], f[aU(0x21e)]) ? j[aU(0x1ac)] = 'r' : e['on'](k[aW(0xc5)], f);
                        else {
                            if (f[aW(0x21c)](f[aU(0x146)], f[aU(0x1a6)]))
                                j[aU(0x1ac)] = 's';
                            else {
                                const r = l[aU(0x25c) + 'e'][m['id']][aU(0xd7)];
                                k[aU(0x255)]((0x17ab + 0x1 * -0x1af8 + 0x34d, n[aW(0x1f1)])(r), -0xd61 * -0x1 + 0x1f6f + 0x2cce * -0x1) ? delete u[aU(0x25c) + 'e'][v['id']] : w[aW(0x25c) + 'e'][x['id']][aW(0xd7)] = (0x145a + -0xc2b + 0x1a3 * -0x5, y[aU(0x1da)])(r, z['id']);
                            }
                        }
                        (-0xa7 * 0x3a + 0xbb6 + 0x1a20, Utils_1[aW(0x1c5)])(l[aW(0xd7)], l[aW(0x25c) + 'e'], j[aU(0x1a8)][aU(0x226)], f[aW(0x21f)], j), j[aU(0x1ac)] = o, (-0x1bca + -0x4c6 * 0x7 + -0x4 * -0xf4d, Utils_1[aU(0x1c5)])(l[aU(0xd7)], l[aU(0x25c) + 'e'], j[aU(0x131)][aU(0x226)], f[aU(0x21f)], j);
                    } else {
                        const s = {};
                        s[aU(0xd7)] = [], s[aU(0x25c) + 'e'] = {}, s[aW(0x1b6)] = {}, j[aW(0x13e)][k] = s, l = m[aW(0x13e)][n], o[aU(0x1b6)][aW(0x130)](p['id']);
                    }
                }
            } else {
                if (t[aU(0x1b6)][u['id']]) {
                    const v = K[aU(0x1b6)][L['id']][aU(0xd7)];
                    k[aW(0x255)]((-0x4 * 0x829 + -0x1dac + 0x4 * 0xf94, M[aU(0x1f1)])(v), 0x26bf + -0x57a * 0x4 + 0x1 * -0x10d5) ? delete T[aW(0x1b6)][U['id']] : V[aU(0x1b6)][W['id']][aU(0xd7)] = (0x1 * -0x1709 + 0x98 * -0x20 + 0x279 * 0x11, X[aW(0x1da)])(v, Y['id']);
                }
                const t = {};
                t['id'] = G['id'];
                const u = (0x1 * -0x18fd + -0x7d9 * 0x2 + 0x28af, E[aW(0x253)])(F[aW(0xd7)], t);
                H[aU(0xd7)] = (-0x184 * -0x8 + -0xb1e + 0x6 * -0x2b, I[aU(0x1da)])(J[aW(0xd7)], u);
            }
        });
    }, onChatTyping = c => {
        const aX = a8, aY = a9, d = {
                'UnzYJ': aX(0xea) + aX(0x14e) + aY(0x23f),
                'cdpwk': function (h, i) {
                    return h(i);
                },
                'MTwzR': function (h, i) {
                    return h === i;
                },
                'fbdsO': function (h, i) {
                    return h !== i;
                },
                'DvyYI': aY(0x24a),
                'rioem': function (h, i) {
                    return h === i;
                },
                'uqBJC': function (h, i) {
                    return h(i);
                },
                'hgcoh': function (h, i) {
                    return h !== i;
                },
                'YRZoF': aY(0x263),
                'tnkxU': function (h, i) {
                    return h === i;
                },
                'GkCsA': aX(0x171),
                'DPriz': aX(0x246) + aY(0x22e),
                'qcORZ': function (h, i) {
                    return h === i;
                },
                'NPxwg': aX(0x1ad),
                'UCvzQ': aY(0x1e1),
                'WFmef': function (h, i) {
                    return h !== i;
                },
                'nESje': aY(0x104),
                'LMyhQ': aY(0x105)
            }, {user: e} = c[aX(0x21a)][aX(0xf1)], {tenantId: f} = e, g = aX(0x15d) + '_' + f;
        c['on'](d[aY(0x17c)], h => {
            const b3 = aY, b7 = aY, i = {
                    'LjoCj': function (j, k) {
                        const aZ = b;
                        return d[aZ(0x1e8)](j, k);
                    },
                    'lvSaF': function (j, k) {
                        const b0 = b;
                        return d[b0(0xfd)](j, k);
                    },
                    'gYUCw': function (j, k) {
                        const b1 = b;
                        return d[b1(0x1e8)](j, k);
                    },
                    'HqdeS': function (j, k) {
                        const b2 = b;
                        return d[b2(0x19d)](j, k);
                    },
                    'KszBq': d[b3(0xcf)],
                    'ClExH': function (j, k) {
                        const b4 = b3;
                        return d[b4(0x143)](j, k);
                    },
                    'rCSYk': function (j, k) {
                        const b5 = b3;
                        return d[b5(0x15f)](j, k);
                    },
                    'iIGbk': function (j, k) {
                        const b6 = b3;
                        return d[b6(0x19a)](j, k);
                    },
                    'GzpQx': d[b3(0x195)],
                    'HEQQr': function (j, k) {
                        const b8 = b7;
                        return d[b8(0x15c)](j, k);
                    },
                    'tRGgG': d[b7(0xff)],
                    'xpyTx': d[b7(0x216)]
                };
            if (d[b7(0x1ed)](d[b7(0xce)], d[b3(0xce)])) {
                const j = Index_1[b3(0x13e)][g];
                if (j) {
                    if (d[b3(0x19a)](d[b3(0xe9)], d[b7(0xe9)])) {
                        const l = d[b7(0x251)][b3(0x1f2)]('|');
                        let m = -0x2253 + -0x8ef * 0x1 + 0x2b42;
                        while (!![]) {
                            switch (l[m++]) {
                            case '0':
                                Z[b3(0x21a)][b3(0xf1)][b3(0xe3)]['id'] && d[b7(0x1e8)](a2, a3);
                                continue;
                            case '1':
                                H[b3(0x19b) + b7(0x198)](I);
                                continue;
                            case '2':
                                V[b7(0x187) + b3(0x1be)](W);
                                continue;
                            case '3':
                                P[b3(0x13f) + b3(0x14d)](Q);
                                continue;
                            case '4':
                                F[b7(0x189) + b3(0x129)](G);
                                continue;
                            case '5':
                                N[b7(0x108) + b7(0x175)](O);
                                continue;
                            case '6':
                                R[b7(0x10c) + 'ng'](S);
                                continue;
                            case '7':
                                X[b3(0x1f4) + 'ct'](Y);
                                continue;
                            case '8':
                                if (!C[b3(0x21a)]?.[b3(0xf1)]?.[b7(0xd0)])
                                    return;
                                continue;
                            case '9':
                                D[b7(0x1fb) + b3(0x222)](E);
                                continue;
                            case '10':
                                T[b7(0x15b) + b7(0x180)](U);
                                continue;
                            case '11':
                                J[b7(0xed) + b7(0x19f)](K);
                                continue;
                            case '12':
                                L[b3(0x250) + b7(0x179)](M);
                                continue;
                            }
                            break;
                        }
                    } else {
                        const {to: l} = h, {from: m} = h;
                        let n = null, o = null;
                        (0x1680 + -0x56 * -0x68 + -0x4 * 0xe5c, lodash_1[b3(0x114)])(j[b7(0x25c) + 'e'], function (p) {
                            const bc = b3, bd = b3, q = {
                                    'Qwlnz': function (r, s) {
                                        const b9 = b;
                                        return i[b9(0x1c4)](r, s);
                                    },
                                    'DOzCE': function (r, s) {
                                        const ba = b;
                                        return i[ba(0x1f3)](r, s);
                                    },
                                    'pcdvQ': function (r, s) {
                                        const bb = b;
                                        return i[bb(0x214)](r, s);
                                    }
                                };
                            if (i[bc(0x14f)](i[bd(0x1dc)], i[bd(0x1dc)])) {
                                let s = q[bc(0x13e)][r];
                                s?.[bc(0x1b6)][s['id']] && delete s?.[bd(0x1b6)][E['id']];
                                if (!s) {
                                    const t = {};
                                    t[bc(0xd7)] = [], t[bd(0x25c) + 'e'] = {}, t[bd(0x1b6)] = {}, F[bc(0x13e)][G] = t, s = H[bd(0x13e)][I], s[bc(0x25c) + 'e'][bc(0x130)](J['id']);
                                }
                                if (s?.[bd(0x25c) + 'e']) {
                                    const u = {};
                                    u[bd(0xd7)] = [L['id']], u[bd(0xe3)] = M, s[bc(0x25c) + 'e'][K['id']] = u;
                                }
                                i[bd(0x214)](C, D);
                            } else {
                                i[bd(0x182)](i[bc(0x18e)](String, p[bc(0xe3)]['id']), i[bd(0x18e)](String, l)) && (i[bd(0x12e)](i[bc(0x25e)], i[bd(0x25e)]) ? q[bc(0xcd)](q[bc(0x1ea)](i, j[bd(0xe3)]['id']), q[bc(0x112)](k, l)) && (o = p[bd(0xe3)]) : n = p[bc(0xe3)]);
                                if (i[bc(0x192)](i[bd(0x214)](String, p[bc(0xe3)]['id']), i[bd(0x18e)](String, m))) {
                                    if (i[bc(0x1c4)](i[bc(0x1a0)], i[bd(0x1a0)]))
                                        o = p[bc(0xe3)];
                                    else {
                                        let u;
                                        u = q[bc(0x13e)][r];
                                        if (u) {
                                            const w = {};
                                            w[bc(0xd7)] = [F['id']], w[bd(0xe3)] = G, u[bc(0x1b6)][E['id']] = w;
                                        }
                                        if (!u) {
                                            const x = {};
                                            x[bc(0xd7)] = [], x[bd(0x25c) + 'e'] = {}, x[bd(0x1b6)] = {}, H[bc(0x13e)][I] = x, u = J[bc(0x13e)][K], u[bc(0x1b6)][bc(0x130)](L['id']);
                                        }
                                        u?.[bc(0x25c) + 'e'][A['id']] && delete u?.[bd(0x25c) + 'e'][M['id']], i[bd(0x214)](C, D);
                                    }
                                }
                            }
                        });
                        if ((-0x2555 + 0xbe4 + -0xa7 * -0x27, lodash_1[b3(0x170)])(n) || (0x3 * -0xb5d + 0x1 * -0x1094 + 0x7 * 0x73d, lodash_1[b3(0x170)])(o)) {
                            if (d[b7(0x11f)](d[b3(0x158)], d[b3(0x158)]))
                                delete e?.[b3(0x1b6)][f['id']];
                            else
                                return;
                        }
                        h[b3(0x1a8)] = n, h[b7(0x131)] = o, (-0x102b * 0x1 + 0x1 * -0x1f3 + 0x121e, Utils_1[b3(0x1c5)])(j[b7(0xd7)], j[b7(0x25c) + 'e'], n[b3(0x12f)], d[b3(0x17c)], h);
                    }
                }
            } else {
                const r = {};
                r[b7(0xd7)] = [m['id']], r[b3(0xe3)] = n, k[b3(0x25c) + 'e'][l['id']] = r, o[b3(0xd7)][b7(0x130)](p), (-0x19df + -0xa * -0xf5 + -0xd * -0x141, q[b3(0x12c)])(r, i[b3(0x138)]);
            }
        });
    }, onChatStopTyping = c => {
        const be = a8, bf = a9, d = {
                'DUpog': be(0x191) + 's',
                'eEjWd': function (h, i) {
                    return h === i;
                },
                'AcZGh': function (h, i) {
                    return h(i);
                },
                'NuuUM': function (h, i) {
                    return h === i;
                },
                'bBtvR': function (h, i) {
                    return h === i;
                },
                'eZTDc': be(0x16b),
                'atoLd': function (h, i) {
                    return h(i);
                },
                'UFtiH': function (h, i) {
                    return h !== i;
                },
                'SvdHt': be(0x1b5),
                'CgtSw': be(0x1fe),
                'OMNdH': be(0x1a2) + 'e',
                'aHubV': be(0x1f7),
                'wTHtN': be(0x252),
                'KTUIp': function (h, i) {
                    return h !== i;
                },
                'NJMsV': be(0x1d8),
                'tSNKZ': bf(0x239),
                'wFOni': function (h, i) {
                    return h !== i;
                },
                'pBxzz': be(0x1c1),
                'klnZL': be(0x220),
                'fvFpu': bf(0x1ae) + bf(0x177)
            }, {user: e} = c[be(0x21a)][bf(0xf1)], {tenantId: f} = e, g = bf(0x15d) + '_' + f;
        c['on'](d[be(0xeb)], h => {
            const bg = be, bm = bf, i = {
                    'bvhtq': d[bg(0x20c)],
                    'zEYiT': function (j, k) {
                        const bh = bg;
                        return d[bh(0x17f)](j, k);
                    },
                    'LVNFH': function (j, k) {
                        const bi = bg;
                        return d[bi(0xf6)](j, k);
                    },
                    'ohmEp': function (j, k) {
                        const bj = bg;
                        return d[bj(0x22f)](j, k);
                    },
                    'MwuDL': function (j, k) {
                        const bk = bg;
                        return d[bk(0xf6)](j, k);
                    },
                    'FKVqj': function (j, k) {
                        const bl = bg;
                        return d[bl(0x150)](j, k);
                    },
                    'vUorJ': d[bg(0x106)],
                    'bizYA': function (j, k) {
                        const bn = bg;
                        return d[bn(0x22f)](j, k);
                    },
                    'PzqjQ': function (j, k) {
                        const bo = bg;
                        return d[bo(0x1a5)](j, k);
                    },
                    'XQSMl': function (j, k) {
                        const bp = bg;
                        return d[bp(0x1a5)](j, k);
                    },
                    'DbqYm': function (j, k) {
                        const bq = bm;
                        return d[bq(0x1a4)](j, k);
                    },
                    'vddJB': d[bg(0x1c8)],
                    'jyDSa': d[bg(0x209)],
                    'VVPyG': function (j, k) {
                        const br = bg;
                        return d[br(0x22f)](j, k);
                    },
                    'yaQHS': d[bg(0x269)]
                };
            if (d[bg(0x22f)](d[bg(0x230)], d[bg(0x1cc)]))
                e[bg(0x160)](i[bm(0xda)], f);
            else {
                const k = Index_1[bm(0x13e)][g];
                if (k) {
                    if (d[bm(0x1ca)](d[bg(0x12b)], d[bm(0xef)])) {
                        const {to: l} = h;
                        let m = null;
                        (-0x728 + 0x2 * -0xa88 + 0x1c38, lodash_1[bm(0x114)])(k[bm(0x25c) + 'e'], n => {
                            const bs = bm, bt = bm;
                            if (i[bs(0x163)](i[bs(0x169)], i[bt(0x169)]))
                                i[bs(0x19e)](i[bt(0xfa)](String, n[bt(0xe3)]['id']), i[bt(0x183)](String, l)) && (i[bt(0xe0)](i[bs(0x137)], i[bs(0x137)]) ? (i[bs(0x225)](i[bs(0x176)](o, p[bs(0xe3)]['id']), i[bs(0x176)](q, r)) && (A = B[bt(0xe3)]), i[bt(0x1c0)](i[bs(0x176)](u, n[bs(0xe3)]['id']), i[bt(0x1e4)](w, x)) && (C = D[bt(0xe3)])) : m = n[bt(0xe3)]);
                            else
                                return i[bt(0x225)](e['id'], f);
                        });
                        if ((0x2032 + 0x2 * -0xf2e + 0x5e * -0x5, lodash_1[bm(0x170)])(m)) {
                            if (d[bm(0x13d)](d[bg(0x145)], d[bm(0x18c)]))
                                return;
                            else
                                delete e?.[bg(0x25c) + 'e'][f['id']];
                        }
                        h[bm(0x1a8)] = m, (-0x1 * -0x15b3 + 0x457 + 0x65 * -0x42, Utils_1[bg(0x1c5)])(k[bm(0xd7)], k[bm(0x25c) + 'e'], m[bm(0x12f)], d[bm(0xeb)], h);
                    } else {
                        const {to: p} = v, {from: q} = w;
                        x[bg(0x155)]('TO', p), y[bg(0x155)](i[bg(0xfe)], q);
                        const r = z[bg(0x1ac)];
                        i[bm(0x132)](A[bm(0x1ac)], 's') ? O[bm(0x1ac)] = 'r' : P[bg(0x1ac)] = 's', (-0x20b3 * 0x1 + -0x1fc7 * -0x1 + 0xec * 0x1, D[bm(0x1c5)])(E[bg(0xd7)], F[bg(0x25c) + 'e'], G[bg(0x1a8)][bm(0x226)], i[bg(0x174)], H), I[bm(0x1ac)] = r, (-0x7 * -0xe5 + -0xc74 + -0x631 * -0x1, J[bg(0x1c5)])(K[bm(0xd7)], L[bm(0x25c) + 'e'], M[bg(0x131)][bg(0x226)], i[bg(0x174)], N);
                    }
                }
            }
        });
    }, saveChatWindow = d => {
        const bu = a9, bv = a8, e = {};
        e[bu(0x20f)] = function (g, h) {
            return g < h;
        }, e[bv(0xd8)] = function (g, h) {
            return g === h;
        }, e[bv(0x1bc)] = bv(0x268), e[bu(0x133)] = bu(0xde), e[bu(0x1b8)] = function (g, h) {
            return g === h;
        }, e[bu(0x1fc)] = bv(0x1b1), e[bu(0x139)] = bu(0x26e), e[bv(0x11b)] = bv(0x187) + bv(0x1be);
        const f = e;
        d['on'](f[bu(0x11b)], async g => {
            const bx = bv, by = bu, h = {
                    'MlOza': function (i, j) {
                        const bw = b;
                        return f[bw(0x20f)](i, j);
                    }
                };
            if (f[bx(0xd8)](f[by(0x1bc)], f[bx(0x133)]))
                d[by(0x1ac)] = 's';
            else {
                const {userId: j} = g, {remove: k} = g, l = await User_1[by(0x17a)][bx(0xc8)](j);
                if (l) {
                    if (f[bx(0x1b8)](f[by(0x1fc)], f[bx(0x139)])) {
                        if (t[bx(0x25c) + 'e'][u['id']]) {
                            const p = K[bx(0x25c) + 'e'][L['id']][by(0xd7)];
                            h[bx(0x1d6)]((0x1e89 + -0x10 * 0x14b + -0x9d9, M[bx(0x1f1)])(p), 0x10 * -0x115 + -0x1e84 + 0x2fd6) ? delete T[bx(0x25c) + 'e'][U['id']] : V[bx(0x25c) + 'e'][W['id']][by(0xd7)] = (-0xe5 * 0x2 + -0x19e + 0x368, X[bx(0x1da)])(p, Y['id']);
                        }
                        const n = {};
                        n['id'] = G['id'];
                        const o = (-0x95 * 0x3a + 0x577 * 0x1 + -0x1c4b * -0x1, E[bx(0x253)])(F[bx(0xd7)], n);
                        H[by(0xd7)] = (0x1e5b + -0x80 * 0x1d + 0x63 * -0x29, I[by(0x1da)])(J[bx(0xd7)], o);
                    } else {
                        if (k) {
                        } else {
                        }
                    }
                }
            }
        });
    }, onDisconnect = c => {
        const bz = a8, bA = a9, d = {
                'jfATn': function (e, f) {
                    return e < f;
                },
                'bYAiQ': bz(0x191) + 's',
                'lTvgM': function (e, f) {
                    return e(f);
                },
                'seOnh': function (e, f) {
                    return e === f;
                },
                'Bjpaj': bz(0x20b),
                'wWzdf': function (e, f) {
                    return e === f;
                },
                'IAuqk': bA(0xdc),
                'BwYYy': bz(0x204),
                'ZWXCT': bA(0x234),
                'AdERU': function (e, f) {
                    return e < f;
                },
                'QqgOh': function (e, f) {
                    return e !== f;
                },
                'HZUKH': bA(0x235),
                'UMwpQ': bz(0x237),
                'UmKAN': function (e, f) {
                    return e === f;
                },
                'bpALv': bz(0x167),
                'cDgYe': bz(0xc7),
                'qVeEX': function (e, f) {
                    return e === f;
                },
                'HWYpG': bA(0x25d),
                'rZXbz': bA(0x186),
                'pwYqu': bA(0x259),
                'PTbZs': bz(0x1df),
                'MpgJW': bz(0x165),
                'aJuZj': bA(0x159),
                'JNsfK': function (e, f) {
                    return e(f);
                },
                'gmcZZ': function (e, f) {
                    return e === f;
                },
                'IXOkt': bA(0x212) + bA(0x247),
                'cwwNP': bz(0x120),
                'pBtHb': bz(0x266),
                'zmLrc': bA(0x116) + bz(0x206),
                'ulTwA': bz(0xe7)
            };
        c['on'](d[bz(0xfc)], async e => {
            const bD = bz, bE = bz, f = {
                    'Ffohz': function (g, h) {
                        const bB = b;
                        return d[bB(0x197)](g, h);
                    },
                    'KuVqk': function (g, h) {
                        const bC = b;
                        return d[bC(0xdd)](g, h);
                    }
                };
            if (d[bD(0xdd)](d[bE(0x1a9)], d[bE(0x1a9)])) {
                const {user: g} = c[bE(0x21a)][bD(0xf1)], {tenantId: h} = g, j = bE(0x15d) + '_' + h, k = Index_1[bE(0x13e)][j];
                if (k?.[bD(0x25c) + 'e']) {
                    if (d[bE(0x20e)](d[bD(0x181)], d[bE(0x181)])) {
                        if (k[bD(0x25c) + 'e'][g['id']]) {
                            if (d[bD(0xdd)](d[bD(0x188)], d[bD(0x125)])) {
                                const q = {};
                                q[bD(0xd7)] = [], q[bE(0x25c) + 'e'] = {}, q[bE(0x1b6)] = {}, j[bD(0x13e)][k] = q, l = m[bD(0x13e)][n], n[bE(0x25c) + 'e'][bD(0x130)](p['id']);
                            } else {
                                const q = k[bD(0x25c) + 'e'][g['id']][bE(0xd7)];
                                if (d[bE(0x240)]((0x6 * -0x130 + 0x5 * 0xcd + -0x11 * -0x2f, lodash_1[bD(0x1f1)])(q), 0x1 * -0x19c1 + -0x98 * 0x1d + 0x2afb * 0x1)) {
                                    if (d[bD(0x1c2)](d[bD(0x124)], d[bE(0x124)])) {
                                        const s = {};
                                        return s[bD(0x17a)] = j, g && h[bE(0xf8)] ? i : s;
                                    } else
                                        delete k[bD(0x25c) + 'e'][g['id']];
                                } else {
                                    if (d[bE(0x1c2)](d[bE(0x18b)], d[bD(0x18b)]))
                                        return d[0x5 * -0x41a + -0x17 * 0x7b + 0x3 * 0xa85];
                                    else
                                        k[bD(0x25c) + 'e'][g['id']][bE(0xd7)] = (0x21d2 + -0x20 * -0x9c + 0x11c6 * -0x3, lodash_1[bE(0x1da)])(q, c['id']);
                                }
                            }
                        }
                        const m = {};
                        m['id'] = c['id'];
                        const n = (-0x76f + 0x1c27 * -0x1 + 0x2396, lodash_1[bD(0x253)])(k[bE(0xd7)], m);
                        k[bE(0xd7)] = (0xaf9 + 0xf1b + 0x2 * -0xd0a, lodash_1[bD(0x1da)])(k[bE(0xd7)], n);
                    } else
                        h[bE(0x1b6)][i['id']][bD(0xd7)] = (0x878 + 0x21d2 + 0x1525 * -0x2, j[bE(0x1da)])(k, l['id']);
                }
                if (k?.[bE(0x1b6)]) {
                    if (d[bD(0x119)](d[bE(0xe6)], d[bD(0x23a)])) {
                        const v = {
                                'BGITI': function (x, y) {
                                    const bF = bD;
                                    return f[bF(0xe8)](x, y);
                                }
                            }, {user: w} = f[bD(0x21a)][bD(0xf1)];
                        g['on'](w[bE(0xd0)] + (bD(0x232) + bE(0xe5) + bD(0x1f9)), () => {
                            const bG = bE, bH = bE;
                            v[bG(0x1a7)](i, w[bG(0xd0)]);
                        });
                    } else {
                        if (k[bD(0x1b6)][g['id']]) {
                            if (d[bD(0x12a)](d[bE(0x1d4)], d[bD(0x1ba)])) {
                                const y = {};
                                y[bD(0xd7)] = [w['id']], y[bD(0xe3)] = j, g[bE(0x1b6)][h['id']] = y;
                            } else {
                                const y = k[bE(0x1b6)][g['id']][bE(0xd7)];
                                if (d[bE(0x1d0)]((0xac * -0x3a + 0x9f2 + 0x5ce * 0x5, lodash_1[bE(0x1f1)])(y), 0x574 * 0x4 + 0x28d * -0x2 + 0x2 * -0x85a)) {
                                    if (d[bD(0x1c2)](d[bD(0x101)], d[bE(0x101)]))
                                        return;
                                    else
                                        delete k[bE(0x1b6)][g['id']];
                                } else {
                                    if (d[bE(0x1c2)](d[bE(0xd6)], d[bE(0x23c)]))
                                        k[bD(0x1b6)][g['id']][bE(0xd7)] = (0x5c6 * -0x4 + -0xb * 0xfd + 0x6cb * 0x5, lodash_1[bD(0x1da)])(y, c['id']);
                                    else
                                        return;
                                }
                            }
                        }
                        const v = {};
                        v['id'] = c['id'];
                        const w = (-0x21a + 0x20cc * -0x1 + -0x2 * -0x1173, lodash_1[bE(0x253)])(k[bE(0xd7)], v);
                        k[bD(0xd7)] = (0x788 * -0x1 + -0x9ca * 0x1 + 0x1152, lodash_1[bD(0x1da)])(k[bE(0xd7)], w);
                    }
                }
                const l = await User_1[bD(0x17a)][bE(0xc8)](g['id']);
                l?.[bE(0xdf)]({
                    'status': d[bE(0x25b)],
                    'lastOnline': new Date()
                }), d[bE(0x1f0)](UpdateOnlineBubbles, c);
                if (d[bE(0x10e)](e, d[bD(0x1c9)])) {
                    if (d[bE(0x1c2)](d[bE(0x115)], d[bE(0x1a3)]))
                        e = d[bE(0x1d2)];
                    else {
                        const C = l[bD(0x1b6)][m['id']][bD(0xd7)];
                        d[bD(0x1d0)]((-0x728 + 0x433 + 0x1 * 0x2f5, n[bD(0x1f1)])(C), -0x1 * 0xb09 + 0x3a6 + -0x765 * -0x1) ? delete u[bD(0x1b6)][v['id']] : w[bD(0x1b6)][x['id']][bD(0xd7)] = (-0x7f * 0x5 + -0x1312 * 0x2 + 0x289f, y[bE(0x1da)])(C, z['id']);
                    }
                }
                logger_1[bD(0x21d)][bD(0x1d3)](bD(0x140) + bD(0x1a1) + e + bE(0x1e3) + g[bD(0x12f)] + bE(0x128) + c['id']);
            } else {
                const D = (0xe * 0x19a + 0x3 * 0x6d + -0x17b3, i[bE(0x114)])(j[bE(0xd7)], E => {
                    const bI = bE;
                    return f[bI(0x261)](E['id'], o);
                });
                D && ((o[bD(0x16d)][bE(0x267)] || p[bE(0x16d)][bD(0x113)]) && D[bD(0x160)](d[bD(0x184)], r));
            }
        });
    };
function a() {
    const bX = [
        's/logger',
        'updateOnli',
        'yMHTM',
        'tSNKZ',
        'YdvBf',
        'auth',
        'yUmMm',
        'lPtUc',
        'jXKhW',
        'ewnxI',
        'AcZGh',
        'fromPairs',
        '__esModule',
        'gVfaI',
        'PzqjQ',
        'pecbJ',
        'ulTwA',
        'MTwzR',
        'jyDSa',
        'GkCsA',
        'mgNPq',
        'pwYqu',
        'TnIOq',
        'aLBJe',
        'DiBMc',
        'chatTyping',
        'eZTDc',
        'cQbhM',
        'getOpenCha',
        'ZWSnC',
        'ksHZi',
        'defineProp',
        'onChatTypi',
        'LAqff',
        'gmcZZ',
        'erty',
        '2469zwRROh',
        '0|2|1|3|4',
        'pcdvQ',
        'isAgent',
        'find',
        'cwwNP',
        'client\x20ter',
        '6hNTJDU',
        'BqDhL',
        'UmKAN',
        'WxtAC',
        'GlmfJ',
        'ients',
        'vGxqC',
        'sortedUser',
        'WFmef',
        'mKGED',
        'ssfully',
        'MGfDt',
        'LgNJL',
        'HZUKH',
        'ZWXCT',
        '88898CNdROR',
        ':joinSucce',
        '\x20-\x20',
        'ctive',
        'qVeEX',
        'NJMsV',
        'sendToSelf',
        'sendToAllC',
        'iIGbk',
        'name',
        'push',
        'fromUser',
        'VVPyG',
        'ZGTTW',
        'sgLqb',
        'List',
        'MlNwE',
        'vddJB',
        'xpyTx',
        'MnsMB',
        'zguEd',
        'sortedIdle',
        'BqvUu',
        'wFOni',
        'shared',
        'onChatMess',
        'User\x20disco',
        'WCxnR',
        'xJycf',
        'rioem',
        'jiCIG',
        'pBxzz',
        'ZnhcC',
        'EKWUJ',
        'joinChatSe',
        'KMpSJ',
        'yTlPp',
        'TGBlS',
        'KwrQz',
        'age',
        '|12|5|3|6|',
        'HqdeS',
        'bBtvR',
        'Zinyw',
        '../../util',
        'onnectedCl',
        'vEZBH',
        'log',
        'LWNhd',
        ':setUserAc',
        'nESje',
        'offline',
        'DCaLZ',
        'onChatStop',
        'tnkxU',
        'socketData',
        'length',
        'uqBJC',
        'emit',
        'ovpoB',
        'zhfuc',
        'FKVqj',
        'rver\x20USER\x20',
        'CCZNP',
        'yjOGw',
        'DOpow',
        'info',
        'vUorJ',
        'zNfSI',
        'RzRle',
        'ThTxG',
        'role',
        'pleym',
        'attributes',
        'isNull',
        'NEYHj',
        'wBPvq',
        'register',
        'yaQHS',
        'tWindows',
        'LVNFH',
        'ping',
        'hVedL',
        'indow',
        'default',
        'MbuSN',
        'LMyhQ',
        'profile',
        'TuXeb',
        'eEjWd',
        'Typing',
        'IAuqk',
        'ClExH',
        'XQSMl',
        'bYAiQ',
        'ls/User',
        'qDhJo',
        'saveChatWi',
        'BwYYy',
        'onSetUserA',
        'QBprb',
        'UMwpQ',
        'klnZL',
        'VUMCQ',
        'rCSYk',
        '2996aHQqWv',
        'rTGLA',
        'updateUser',
        'HEQQr',
        'fRBjU',
        'toPairs',
        'YRZoF',
        '7294QMNiip',
        'lTvgM',
        'ers',
        'CMhyE',
        'hgcoh',
        'onUpdateUs',
        '4649090NKBGer',
        'fbdsO',
        'bizYA',
        'neBubbles',
        'tRGgG',
        'nnected\x20(',
        'chatMessag',
        'pBtHb',
        'UFtiH',
        'atoLd',
        'MlqHk',
        'BGITI',
        'toUser',
        'Bjpaj',
        'MpKGQ',
        'tCwrm',
        'type',
        'Tpdsm',
        'chatStopTy',
        'vuaic',
        'lodash',
        'tCCYQ',
        'zmDAP',
        '8pbabbx',
        'Ppmyr',
        'QQsJK',
        'idleUsers',
        'IULaS',
        'hnnVL',
        'DCmFe',
        'rZXbz',
        'snjnP',
        'HfNdV',
        'FYmZs',
        'ndow',
        'oauQd',
        'ohmEp',
        'bGUto',
        'QqgOh',
        'HzcYY',
        'lvSaF',
        'sendToUser',
        'ssYhe',
        'XPozm',
        'SvdHt',
        'IXOkt',
        'KTUIp',
        'value',
        'wTHtN',
        'kzBtL',
        'tive',
        'email',
        'jfATn',
        'UtClp',
        'zmLrc',
        'debug',
        'HWYpG',
        'qUydA',
        'MlOza',
        'DVYqd',
        'EvBZw',
        'VbWEZ',
        'without',
        'UuQyJ',
        'KszBq',
        'xVxiz',
        'qbjlT',
        'QJHsU',
        'vbnjR',
        'nWZez',
        'YwZEr',
        '):\x20',
        'MwuDL',
        'NvHTs',
        'CeyHJ',
        'iLYLt',
        'cdpwk',
        'ChBfL',
        'DOzCE',
        'RUyEi',
        'xcXRZ',
        'qcORZ',
        'prfQe',
        'sortByKeys',
        'JNsfK',
        'size',
        'split',
        'gYUCw',
        'onDisconne',
        'RCpjp',
        'CXWXJ',
        'ZBbzo',
        '10272670LlRNvy',
        'bbles',
        'sortBy',
        'onSetUserI',
        'TruPB',
        'ZkYpV',
        'FROM',
        'dywwY',
        'eMrop',
        'hxbob',
        'UVnTa',
        '7246416SNLVVz',
        'mAitL',
        'FOvSg',
        'minated',
        'fTyiX',
        'fault',
        'CgtSw',
        'VOqRP',
        'wPtfU',
        'DUpog',
        'oJKFO',
        'wWzdf',
        'WueDl',
        'wNoWn',
        'wPCDN',
        'transport\x20',
        'gTMfn',
        'LjoCj',
        '1679670AWuCDo',
        'DPriz',
        'nFnRF',
        'tIFNm',
        'CBGyL',
        'handshake',
        'adDGN',
        'Qnhwd',
        'logger',
        'wDSWg',
        'iRsbx',
        'BJOMs',
        'AdAov',
        'dle',
        'YRKDi',
        '../../mode',
        'zEYiT',
        'username',
        'IfPFi',
        'iHGpB',
        './Index',
        './Utils',
        'forEach',
        'EmWYv',
        'XeAYP',
        'sfully',
        'NuuUM',
        'aHubV',
        'IgKvk',
        ':chat:upda',
        'MSjQc',
        'ortex',
        'dxKQP',
        'ePDAS',
        'qQMjH',
        'ujDiX',
        'wPcFD',
        'cDgYe',
        'zFmjj',
        'MpgJW',
        'qGDms',
        'tUSnn',
        '10|2|7|0',
        'AdERU',
        'FXtKB',
        'QfjaB',
        'LyBzU',
        'jefSS',
        'tynLm',
        'joinSucces',
        'error',
        'boZdS',
        'cxzCg',
        'xDPRG',
        'QEXaE',
        ':setUserId',
        'wEIzz',
        'VVuKm',
        'mKAFb',
        'spawnChatW',
        'UnzYJ',
        'taygP',
        'findKey',
        'gVUAA',
        'HaOZs',
        'RdvsD',
        'pqETF',
        'events',
        'bafFz',
        'TBGrW',
        'aJuZj',
        'usersOnlin',
        'rNGrG',
        'GzpQx',
        'HlwCL',
        'OJmzl',
        'KuVqk',
        '__importDe',
        'gWgiX',
        'kaKFr',
        '1|4|0|2|3',
        'gKXJt',
        'isAdmin',
        'gFYPk',
        'OMNdH',
        'lffxW',
        'SzmGY',
        'WcwIe',
        'LYoDA',
        'aBDVg',
        'ZEXOM',
        'ahmcK',
        'JPztK',
        'OteSr',
        'findByPk',
        'eventLoop',
        'ygbyS',
        '1|3|4|0|2',
        'YBKkM',
        'Qwlnz',
        'NPxwg',
        'DvyYI',
        'tenantId',
        'KtDdp',
        'xqqwx',
        'qfrWF',
        'WgiTg',
        'wwMyW',
        'PTbZs',
        'sockets',
        'SbKQO',
        'QWEYg',
        'bvhtq',
        'vhsSe',
        'jwLvR',
        'seOnh',
        'bsegP',
        'update',
        'DbqYm',
        'JRlUl',
        'ApzCz',
        'user',
        'TXHZX',
        'teOnlineBu',
        'bpALv',
        'disconnect',
        'Ffohz',
        'UCvzQ',
        '8|9|4|1|11',
        'fvFpu'
    ];
    a = function () {
        return bX;
    };
    return a();
}
events[a8(0x1fb) + a9(0x222)] = onSetUserIdle, events[a9(0x189) + a9(0x129)] = onSetUserActive, events[a8(0x19b) + a8(0x198)] = onUpdateUsers, events[a9(0x250) + a8(0x179)] = spawnChatWindow, events[a8(0x13f) + a8(0x14d)] = onChatMessage, events[a9(0x10c) + 'ng'] = onChatTyping, events[a9(0x15b) + a8(0x180)] = onChatStopTyping, events[a8(0x187) + a9(0x1be)] = saveChatWindow, events[a8(0x1f4) + 'ct'] = onDisconnect, events[a8(0xed) + a9(0x19f)] = c => {
    const bJ = a9, bK = a9, d = {
            'yTlPp': function (f, g) {
                return f === g;
            },
            'mKAFb': bJ(0x16a),
            'VVuKm': bJ(0x172),
            'wwMyW': function (f, g) {
                return f(g);
            }
        }, {user: e} = c[bJ(0x21a)][bK(0xf1)];
    c['on'](e[bJ(0xd0)] + (bK(0x232) + bK(0xe5) + bJ(0x1f9)), () => {
        const bL = bJ, bM = bK;
        d[bL(0x14a)](d[bM(0x24f)], d[bM(0x24e)]) ? delete e[bL(0x25c) + 'e'][f['id']] : d[bM(0xd5)](UpdateOnlineBubbles, e[bM(0xd0)]);
    });
}, events[a9(0x108) + a9(0x175)] = c => {
    const bN = a8, bO = a9, d = {
            'kzBtL': bN(0x111),
            'LWNhd': function (e, f) {
                return e !== f;
            },
            'YwZEr': bO(0x134),
            'aLBJe': function (e, f) {
                return e(f);
            },
            'iLYLt': bN(0x108) + bN(0x175)
        };
    c['on'](d[bN(0x1e7)], () => {
        const bP = bN, bQ = bN;
        if (d[bP(0x156)](d[bQ(0x1e2)], d[bQ(0x1e2)])) {
            const f = d[bQ(0x1cd)][bP(0x1f2)]('|');
            let g = -0x1c54 + 0x12 * -0x79 + 0xa * 0x3af;
            while (!![]) {
                switch (f[g++]) {
                case '0':
                    const h = {};
                    h[bP(0xd7)] = [], h[bQ(0x25c) + 'e'] = {}, h[bQ(0x1b6)] = {}, q[bP(0x13e)][r] = h;
                    continue;
                case '1':
                    const i = {};
                    i[bP(0xd7)] = [x['id']], i[bP(0xe3)] = y, v[bQ(0x25c) + 'e'][w['id']] = i;
                    continue;
                case '2':
                    s = t[bQ(0x13e)][u];
                    continue;
                case '3':
                    z[bP(0xd7)][bP(0x130)](A);
                    continue;
                case '4':
                    (-0x21b9 + 0x577 * -0x7 + 0x47fa, B[bP(0x12c)])(C, D[bP(0xd0)] + (bP(0x127) + bQ(0x121)));
                    continue;
                }
                break;
            }
        } else
            d[bP(0x103)](SpawnOpenChatWindows, c);
    });
};
function register(c) {
    const bR = a8, bS = a8, d = {
            'prfQe': function (e, f) {
                return e === f;
            },
            'TnIOq': function (e, f) {
                return e(f);
            },
            'jXKhW': function (e, f) {
                return e(f);
            },
            'eMrop': bR(0x1ae) + bR(0x177),
            'RUyEi': function (e, f) {
                return e === f;
            },
            'vbnjR': bS(0x178),
            'lffxW': bR(0x142),
            'zFmjj': bS(0x242),
            'kaKFr': bR(0x1b2)
        };
    if (!c[bR(0x21a)]?.[bS(0xf1)]?.[bS(0xd0)]) {
        if (d[bR(0x1eb)](d[bS(0x1e0)], d[bS(0x26a)])) {
            const {to: f} = n;
            let g = null;
            (0x1405 + -0x1d6b + 0x966, o[bS(0x114)])(p[bR(0x25c) + 'e'], B => {
                const bT = bS, bU = bS;
                d[bT(0x1ee)](d[bU(0x102)](g, B[bU(0xe3)]['id']), d[bT(0xf4)](z, f)) && (g = B[bT(0xe3)]);
            });
            if ((0x6e3 + -0x1300 + 0xc1d, s[bS(0x170)])(g))
                return;
            t[bS(0x1a8)] = g, (0x2 * -0x926 + -0xc00 * -0x1 + 0x64c * 0x1, u[bS(0x1c5)])(v[bR(0xd7)], w[bR(0x25c) + 'e'], g[bS(0x12f)], d[bR(0x200)], x);
        } else
            return;
    }
    events[bS(0x1fb) + bS(0x222)](c), events[bR(0x189) + bS(0x129)](c), events[bR(0x19b) + bR(0x198)](c), events[bR(0xed) + bR(0x19f)](c), events[bS(0x250) + bR(0x179)](c), events[bS(0x108) + bS(0x175)](c), events[bS(0x13f) + bS(0x14d)](c), events[bS(0x10c) + 'ng'](c), events[bS(0x15b) + bS(0x180)](c), events[bS(0x187) + bR(0x1be)](c), events[bS(0x1f4) + 'ct'](c);
    if (c[bS(0x21a)][bS(0xf1)][bR(0xe3)]['id']) {
        if (d[bR(0x1ee)](d[bS(0x23b)], d[bS(0x264)])) {
            const g = {};
            g[bR(0xd7)] = [i['id']], g[bS(0xe3)] = j, g[bS(0x25c) + 'e'][h['id']] = g;
        } else
            d[bR(0xf4)](JoinChatServer, c);
    }
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3da * -0x2 + 0x133d * -0x2 + 0x1f8a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const eventLoop = c => {
        const bV = a9, bW = a9, d = {
                'RCpjp': function (e, f) {
                    return e(f);
                }
            };
        d[bV(0x1f5)](UpdateUsers, c), d[bW(0x1f5)](UpdateOnlineBubbles, c);
    }, a5 = {};
a5[a9(0x258)] = events, a5[a9(0xc9)] = eventLoop, a5[a9(0x173)] = register;
const chat = a5;
exports[a8(0x17a)] = chat;