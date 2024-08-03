'use strict';
const a8 = b, a9 = b;
(function (c, d) {
    const a6 = b, a7 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a6(0x1b9)) / (-0x1500 + 0x1 * -0x779 + 0x1c7a) * (-parseInt(a6(0x168)) / (-0x1bea + 0x24af * 0x1 + 0x1 * -0x8c3)) + -parseInt(a7(0xdc)) / (-0xdcd + 0x16d + 0x97 * 0x15) + -parseInt(a6(0xfd)) / (0x1d12 + 0x711 + -0x241f) + parseInt(a7(0x24d)) / (0x26c1 + 0xc97 + 0x755 * -0x7) * (parseInt(a6(0x1c7)) / (0x28f * 0x5 + 0xff7 + -0x3 * 0x994)) + parseInt(a7(0x25c)) / (0x2 * -0x11e7 + -0x18bc + -0x8a7 * -0x7) * (parseInt(a7(0x1e8)) / (-0x5 * -0x415 + -0x1 * -0x26a2 + -0x3b03)) + parseInt(a7(0x103)) / (0xb91 + -0x1521 * -0x1 + -0x3a1 * 0x9) + -parseInt(a7(0x19f)) / (-0x140 * 0x1f + -0x1 * -0x2149 + 0x581);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbaa2 * -0x2 + -0x5e703 + -0x3d * -0x3123));
var __importDefault = this && this[a8(0x1a6) + a8(0x151)] || function (c) {
    const aa = a8;
    return c && c[aa(0x183)] ? c : { 'default': c };
};
const a4 = {};
a4[a8(0x21c)] = !![], Object[a8(0x21d) + a8(0x124)](exports, a9(0x183), a4);
const lodash_1 = require(a8(0xe4)), Utils_1 = require(a9(0xe0)), Index_1 = require(a9(0x16f)), User_1 = __importDefault(require(a8(0x11e) + a8(0x194))), logger_1 = require(a8(0x159) + a9(0x1e7)), events = {}, JoinChatServer = d => {
        const ab = a8, ac = a8, e = {
                'Bmpvz': function (j, k) {
                    return j === k;
                },
                'drdGo': function (j, k) {
                    return j(k);
                },
                'DwWly': function (j, k) {
                    return j === k;
                },
                'cQFbV': ab(0x18d),
                'McWWj': ac(0x129),
                'DQJEW': ab(0x14e) + ab(0x24b),
                'qfUHN': function (j, k) {
                    return j !== k;
                },
                'bvXRI': ac(0x117),
                'MpXbc': ac(0x166)
            }, {user: f} = d[ac(0x181)][ac(0x1c8)];
        logger_1[ab(0x22b)][ab(0x1c3)](ab(0xda) + ac(0x177) + f[ac(0x23d)]);
        const {tenantId: g} = f, h = ac(0x198) + '_' + g;
        let i;
        i = Index_1[ab(0x1d8)][h];
        i && (e[ac(0x17c)](e[ac(0x260)], e[ac(0x127)]) ? e[ac(0x259)](e[ac(0x16b)](i, j[ab(0x15c)]['id']), e[ab(0x16b)](k, l)) && (o = p[ac(0x15c)]) : (i[ac(0x20d) + 'e'][f['id']] = {
            'sockets': [d['id']],
            'user': f
        }, i[ab(0x1d0)][ab(0x1b5)](d), (-0x16ca * 0x1 + 0x98f * -0x1 + 0x2059, Utils_1[ac(0x250)])(d, e[ab(0xff)])));
        if (!i) {
            if (e[ac(0x180)](e[ab(0x226)], e[ab(0x226)]))
                d[ab(0x17f)] = 's';
            else {
                const l = e[ab(0x201)][ac(0x1ba)]('|');
                let m = 0x1 * -0x1055 + 0x269 * 0x4 + 0x6b1;
                while (!![]) {
                    switch (l[m++]) {
                    case '0':
                        i = Index_1[ac(0x1d8)][h];
                        continue;
                    case '1':
                        i[ab(0x1d0)][ab(0x1b5)](d);
                        continue;
                    case '2':
                        i[ab(0x20d) + 'e'][f['id']] = {
                            'sockets': [d['id']],
                            'user': f
                        };
                        continue;
                    case '3':
                        const n = {};
                        n[ac(0x1d0)] = [], n[ac(0x20d) + 'e'] = {}, n[ac(0xf8)] = {}, Index_1[ac(0x1d8)][h] = n;
                        continue;
                    case '4':
                        (0x9d + 0xd06 + -0xda3, Utils_1[ac(0x250)])(d, f[ac(0x22c)] + (ab(0x121) + ab(0x1ea)));
                        continue;
                    }
                    break;
                }
            }
        }
    }, UpdateUsers = c => {
        const ad = a8, ae = a8, d = {
                'UYZum': function (i, j) {
                    return i(j);
                },
                'BMpSw': function (i, j) {
                    return i < j;
                },
                'jFQNO': function (i, j) {
                    return i === j;
                },
                'tUzkZ': ad(0x1ef),
                'AnNgi': ae(0x123),
                'QUFks': function (i, j) {
                    return i === j;
                },
                'OXKuI': ae(0x24f),
                'nnjpZ': ad(0xf7),
                'PecwD': ad(0x1d5) + 's',
                'oDqZT': function (i, j) {
                    return i !== j;
                },
                'LYJCE': ae(0x1a0),
                'BArmS': function (i, j) {
                    return i === j;
                },
                'sUddX': function (i, j) {
                    return i !== j;
                },
                'abZio': ad(0x13a),
                'fRcwh': function (i, j) {
                    return i > j;
                },
                'qPDXa': ad(0xd9)
            }, {user: e} = c[ad(0x181)][ae(0x1c8)], f = ad(0x198) + '_' + e[ae(0x22c)], g = Index_1[ae(0x1d8)][f], h = (-0x17 * 0x19 + 0x20 * -0x134 + 0x28bf, Utils_1[ae(0x211)])(g[ad(0x20d) + 'e']);
        (-0xff3 + 0xe25 + 0x2 * 0xe7, lodash_1[ae(0x10b)])(h, i => {
            const af = ad, ah = ad, j = {
                    'ztKDf': d[af(0xea)],
                    'SyGsb': function (k, l) {
                        const ag = af;
                        return d[ag(0x165)](k, l);
                    },
                    'LQlpY': d[af(0x112)],
                    'EPhAk': function (k, l) {
                        const ai = ah;
                        return d[ai(0x147)](k, l);
                    }
                };
            if (d[ah(0x19d)](d[ah(0x1df)], d[af(0x1df)])) {
                let l = q[ah(0x1d8)][r];
                l?.[af(0xf8)][s['id']] && delete l?.[ah(0xf8)][E['id']];
                if (!l) {
                    const m = {};
                    m[ah(0x1d0)] = [], m[ah(0x20d) + 'e'] = {}, m[af(0xf8)] = {}, F[af(0x1d8)][G] = m, l = H[ah(0x1d8)][I], l[af(0x20d) + 'e'][af(0x1b5)](J['id']);
                }
                if (l?.[af(0x20d) + 'e']) {
                    const n = {};
                    n[af(0x1d0)] = [L['id']], n[af(0x15c)] = M, l[ah(0x20d) + 'e'][K['id']] = n;
                }
                d[ah(0x20b)](C, D);
            } else {
                const l = i[af(0x15c)], {sockets: m} = i;
                if (l && d[ah(0x1e2)](m[af(0x1b1)], 0x1c13 + -0x1a62 * -0x1 + -0x3675)) {
                    if (d[af(0x19d)](d[af(0x191)], d[ah(0x191)])) {
                        const o = {};
                        o[ah(0x1d0)] = [i['id']], o[af(0x15c)] = j, g[ah(0x20d) + 'e'][h['id']] = o;
                    } else
                        (0xa12 * -0x1 + 0x2536 * 0x1 + -0x486 * 0x6, lodash_1[ah(0x10b)])(m, o => {
                            const ak = af, al = af, p = {
                                    'RPKmc': function (q, r) {
                                        const aj = b;
                                        return d[aj(0x118)](q, r);
                                    }
                                };
                            if (d[ak(0xf2)](d[ak(0x242)], d[ak(0x1bd)])) {
                                const r = l[ak(0x20d) + 'e'][m['id']][al(0x1d0)];
                                p[al(0x251)]((-0x25d7 + -0x292 * 0xb + 0x421d, n[ak(0x24a)])(r), -0x2 * -0xa7e + -0x1521 + 0x3 * 0xd) ? delete u[ak(0x20d) + 'e'][i['id']] : w[ak(0x20d) + 'e'][x['id']][ak(0x1d0)] = (-0x11 * 0x134 + 0x105f + -0x5f * -0xb, y[al(0x172)])(r, z['id']);
                            } else {
                                const r = (0x1e03 + 0x1 * -0x1aa1 + -0x362 * 0x1, lodash_1[ak(0x1f8)])(g[ak(0x1d0)], t => {
                                    const am = al, an = ak, u = {};
                                    u[am(0x267)] = j[an(0x125)];
                                    const w = u;
                                    if (j[am(0x1e6)](j[an(0x12c)], j[an(0x12c)]))
                                        e[an(0x1d3)](w[an(0x267)], f);
                                    else
                                        return j[am(0x1d9)](t['id'], o);
                                });
                                if (r) {
                                    if (d[al(0x241)](d[al(0x261)], d[al(0x261)])) {
                                        if (l[ak(0x144)][al(0x238)] || l[ak(0x144)][al(0x120)]) {
                                            if (d[ak(0xf2)](d[al(0x247)], d[ak(0x247)]))
                                                r[al(0x1d3)](d[ak(0xea)], h);
                                            else {
                                                const t = {};
                                                return t[al(0xf4)] = j, g && h[ak(0x183)] ? i : t;
                                            }
                                        }
                                    } else {
                                        const u = {};
                                        u[ak(0x1d0)] = [], u[al(0x20d) + 'e'] = {}, u[al(0xf8)] = {}, j[ak(0x1d8)][k] = u, l = m[ak(0x1d8)][n], o[al(0x20d) + 'e'][ak(0x1b5)](p['id']);
                                    }
                                }
                            }
                        });
                }
            }
        });
    }, UpdateOnlineBubbles = d => {
        const ao = a9, ap = a9, e = {
                'YEiDc': function (l, m) {
                    return l(m);
                },
                'DvFGP': function (l, m) {
                    return l === m;
                },
                'vKvGD': ao(0x239),
                'DwCbi': function (l, m) {
                    return l !== m;
                },
                'WzKbh': ao(0xe2)
            }, {user: f} = d[ap(0x181)][ao(0x1c8)], g = ao(0x198) + '_' + f[ap(0x22c)], h = Index_1[ap(0x1d8)][g], i = (0x2628 + -0x24fc + -0x4b * 0x4, lodash_1[ap(0x1ca)])((0x23c4 + 0x122d + -0x35f1, lodash_1[ap(0x1aa)])((-0x178b + -0x1970 + 0x30fb, lodash_1[ap(0x245)])(h[ao(0x20d) + 'e']), l => {
                const aq = ao, ar = ao;
                if (e[aq(0xfc)](e[aq(0x18a)], e[ar(0x18a)]))
                    return l[-0x1e49 + -0xb7 * -0x1 + 0x1d92];
                else
                    e[ar(0x115)](e, f);
            })), j = (0x11b9 + 0x5 * 0x4 + -0x3 * 0x5ef, lodash_1[ap(0x1ca)])((-0x1 * 0x82b + -0x897 + 0x10c2, lodash_1[ap(0x1aa)])((-0xb00 + -0xdd3 + 0x18d3, lodash_1[ao(0x245)])(h[ap(0xf8)]), l => {
                const as = ao, at = ap;
                return e[as(0x1bb)](e[at(0x188)], e[at(0x188)]) ? d[-0x14 * 0x58 + 0x2512 + -0x1e32] : l[0x1 * -0xe8e + 0x1534 + 0x1 * -0x6a6];
            })), k = {};
        k[ap(0x21a) + ap(0x119)] = i, k[ao(0xf6) + ap(0x119)] = j, (-0xb40 + 0x1f3 * -0x1 + -0x6d * -0x1f, Utils_1[ap(0x108) + ap(0x11c) + ao(0x1dd)])(d, f[ap(0x22c)] + (ap(0x1e4) + ao(0xe5) + ao(0x221)), k);
    }, SpawnOpenChatWindows = d => {
        const au = a9, av = a8, e = {};
        e[au(0x249)] = au(0xde) + au(0x1ce);
        const f = e, {user: g} = d[au(0x181)][au(0x1c8)], h = User_1[au(0xf4)][au(0x189)](g['id']);
        (-0x2441 + 0x1104 + 0x133d, Utils_1[av(0x250)])(d, f[av(0x249)], h);
    }, spawnChatWindow = d => {
        const aw = a9, ax = a9, e = {};
        e[aw(0x209)] = function (g, h) {
            return g < h;
        }, e[aw(0x143)] = function (g, h) {
            return g === h;
        }, e[aw(0x1de)] = aw(0x202), e[aw(0x1cc)] = aw(0x17d), e[ax(0x1cb)] = ax(0x23d), e[aw(0x173)] = aw(0x146), e[ax(0x114)] = aw(0x1f2), e[aw(0xfa)] = ax(0xde) + aw(0x1ce);
        const f = e;
        d['on'](f[ax(0xfa)], async g => {
            const ay = ax, az = ax;
            if (f[ay(0x143)](f[az(0x1de)], f[ay(0x1cc)])) {
                const i = l[az(0xf8)][m['id']][az(0x1d0)];
                f[az(0x209)]((0x14c8 + -0x116 * 0xc + -0x7c0, n[ay(0x24a)])(i), 0x1 * 0x1b4b + 0x1e9 * 0x1 + 0x1d32 * -0x1) ? delete u[ay(0xf8)][v['id']] : w[az(0xf8)][x['id']][ay(0x1d0)] = (0x1c3 + -0x2249 + 0x2086 * 0x1, y[ay(0x172)])(i, z['id']);
            } else {
                const i = {};
                i[az(0x1bc)] = [
                    'id',
                    f[ay(0x1cb)],
                    f[ay(0x173)],
                    f[ay(0x114)]
                ];
                const j = await User_1[ay(0xf4)][az(0x189)](g, i);
                (0x270f + -0x1 * -0x13c3 + -0x3ad2, Utils_1[az(0x250)])(d, f[az(0xfa)], j);
            }
        });
    }, onSetUserIdle = c => {
        const aA = a9, aB = a8, d = {
                'mVaUf': function (g, h) {
                    return g(h);
                },
                'PVaYZ': function (g, h) {
                    return g === h;
                },
                'ANpZT': aA(0x14d),
                'yHHFY': aA(0x1e5),
                'SsNJe': aB(0x223),
                'jQCLN': function (g, h) {
                    return g !== h;
                },
                'xnYVK': aB(0x1a7),
                'Wigik': aA(0x207),
                'WeVCP': function (g, h) {
                    return g === h;
                },
                'zVCAB': aA(0x233),
                'UZAQj': aA(0x12f)
            }, {user: e} = c[aB(0x181)][aB(0x1c8)], f = aB(0x198) + '_' + e[aB(0x22c)];
        c['on'](e[aA(0x22c)] + (aA(0x14f) + 'le'), () => {
            const aD = aB, aE = aB, g = {
                    'cGGEs': function (h, i) {
                        const aC = b;
                        return d[aC(0x253)](h, i);
                    }
                };
            if (d[aD(0x17e)](d[aD(0x1db)], d[aE(0x1db)])) {
                let h;
                h = Index_1[aE(0x1d8)][f];
                h && (d[aE(0x17e)](d[aD(0x228)], d[aE(0x21e)]) ? e = f[aE(0x15c)] : h[aE(0xf8)][e['id']] = {
                    'sockets': [c['id']],
                    'user': e
                });
                if (!h) {
                    if (d[aE(0x1ad)](d[aD(0x1e1)], d[aD(0x24e)])) {
                        const j = {};
                        j[aE(0x1d0)] = [], j[aD(0x20d) + 'e'] = {}, j[aD(0xf8)] = {}, Index_1[aD(0x1d8)][f] = j, h = Index_1[aD(0x1d8)][f], h[aE(0xf8)][aD(0x1b5)](c['id']);
                    } else {
                        const {user: l} = f[aE(0x181)][aD(0x1c8)];
                        g['on'](l[aE(0x22c)] + (aD(0x1e4) + aE(0xe5) + aE(0x221)), () => {
                            const aF = aE, aG = aE;
                            g[aF(0x1ee)](i, l[aF(0x22c)]);
                        });
                    }
                }
                if (h?.[aE(0x20d) + 'e'][e['id']]) {
                    if (d[aD(0x13f)](d[aD(0x264)], d[aE(0x19e)]))
                        return d[-0x1b91 * -0x1 + -0x2 * 0x45d + -0x12d7];
                    else
                        delete h?.[aD(0x20d) + 'e'][e['id']];
                }
                d[aD(0x253)](UpdateOnlineBubbles, c);
            } else {
                const {user: n} = m[aD(0x181)][aD(0x1c8)], o = aE(0x198) + '_' + n[aD(0x22c)], p = n[aD(0x1d8)][o], q = (0x21d * 0xd + 0x2e * -0xcb + 0x901 * 0x1, o[aD(0x1ca)])((-0x164d + -0x4 * -0x3c8 + 0x72d, p[aD(0x1aa)])((0x778 + 0x21ce + -0x2946, q[aD(0x245)])(p[aE(0x20d) + 'e']), B => {
                        return B[0x10ec + 0x1086 + -0x2172];
                    })), r = (-0x2a9 * 0x4 + -0x1792 + 0x1d * 0x12e, r[aD(0x1ca)])((-0x11d * -0x2 + 0x565 * 0x4 + -0x17ce, s[aE(0x1aa)])((-0x1269 + -0xc + 0x1275, t[aE(0x245)])(p[aD(0xf8)]), B => {
                        return B[-0x44 * 0x32 + 0x1 * -0x1ba7 + 0x28ef];
                    })), s = {};
                s[aE(0x21a) + aE(0x119)] = q, s[aE(0xf6) + aE(0x119)] = r, (-0x1647 * 0x1 + -0x3 * 0xf3 + 0x1920, u[aD(0x108) + aD(0x11c) + aD(0x1dd)])(v, n[aD(0x22c)] + (aD(0x1e4) + aD(0xe5) + aD(0x221)), s);
            }
        });
    }, onSetUserActive = c => {
        const aH = a9, aI = a9, d = {
                'iSNfv': function (g, h) {
                    return g === h;
                },
                'DQyEM': function (g, h) {
                    return g(h);
                },
                'dFjPm': aH(0x17b) + aH(0x257),
                'iJThV': function (g, h) {
                    return g !== h;
                },
                'vXVBp': aH(0x184),
                'mjByZ': function (g, h) {
                    return g === h;
                },
                'vQJpV': aI(0x25b),
                'zDPFn': aI(0x1c0),
                'WKDsL': function (g, h) {
                    return g !== h;
                },
                'EUcHW': aI(0x23c),
                'GuRHT': aI(0x240),
                'jvyTd': function (g, h) {
                    return g === h;
                },
                'ylQvn': aH(0x1a5),
                'dNKVT': aI(0x1b2)
            }, {user: e} = c[aH(0x181)][aI(0x1c8)], f = aH(0x198) + '_' + e[aH(0x22c)];
        c['on'](e[aI(0x22c)] + (aH(0x1ec) + aI(0x15a)), () => {
            const aJ = aI, aK = aI;
            if (d[aJ(0x22a)](d[aJ(0x254)], d[aJ(0x254)]))
                return;
            else {
                let h = Index_1[aK(0x1d8)][f];
                if (h?.[aK(0xf8)][e['id']]) {
                    if (d[aK(0x154)](d[aK(0x105)], d[aK(0x1fb)])) {
                        const j = {
                                'aAPsm': function (m, n) {
                                    const aL = aK;
                                    return d[aL(0x258)](m, n);
                                },
                                'pAiFy': function (m, n) {
                                    const aM = aJ;
                                    return d[aM(0x116)](m, n);
                                }
                            }, {to: k} = n;
                        let l = null;
                        (-0x1ad * -0x7 + 0x17c5 + -0x2380, o[aK(0x1f8)])(p[aJ(0x20d) + 'e'], B => {
                            const aN = aJ, aO = aK;
                            j[aN(0x25d)](j[aN(0xf0)](l, B[aO(0x15c)]['id']), j[aN(0xf0)](z, k)) && (l = B[aO(0x15c)]);
                        });
                        if ((0xc80 + -0x137 * 0x2 + 0xa12 * -0x1, s[aK(0x1fe)])(l))
                            return;
                        t[aK(0x153)] = l, (0x89a + -0x18 * 0x1e + -0x5ca, u[aK(0x110)])(v[aK(0x1d0)], w[aK(0x20d) + 'e'], l[aJ(0x23d)], d[aK(0x1f5)], x);
                    } else
                        delete h?.[aJ(0xf8)][e['id']];
                }
                if (!h) {
                    if (d[aK(0x102)](d[aK(0x1f0)], d[aK(0x13c)])) {
                        const j = {};
                        j[aK(0x1d0)] = [], j[aJ(0x20d) + 'e'] = {}, j[aJ(0xf8)] = {}, Index_1[aK(0x1d8)][f] = j, h = Index_1[aK(0x1d8)][f], h[aK(0x20d) + 'e'][aK(0x1b5)](c['id']);
                    } else
                        delete e[aJ(0x20d) + 'e'][f['id']];
                }
                h?.[aK(0x20d) + 'e'] && (d[aJ(0x234)](d[aJ(0x1a2)], d[aK(0x122)]) ? d[aJ(0x116)](e, f) : h[aK(0x20d) + 'e'][e['id']] = {
                    'sockets': [c['id']],
                    'user': e
                }), d[aK(0x116)](UpdateOnlineBubbles, c);
            }
        });
    }, onUpdateUsers = d => {
        const aP = a8, aQ = a9, e = {};
        e[aP(0xdf)] = aQ(0x1d5) + 's';
        const f = e;
        d['on'](f[aP(0xdf)], UpdateUsers);
    }, onChatMessage = d => {
        const aR = a8, aS = a8, e = {};
        e[aR(0x22e)] = function (j, k) {
            return j < k;
        }, e[aS(0x21b)] = aS(0xde) + aS(0x1ce), e[aS(0x157)] = aS(0x169), e[aS(0x213)] = aS(0x1a4), e[aS(0x220)] = function (j, k) {
            return j === k;
        }, e[aR(0x23f)] = aS(0x25f) + 'e', e[aS(0x141)] = function (j, k) {
            return j === k;
        }, e[aR(0x1fd)] = aR(0x246), e[aS(0x10c)] = aS(0x22d), e[aR(0xd8)] = aS(0x14a), e[aR(0x126)] = function (j, k) {
            return j === k;
        }, e[aS(0x1cd)] = aS(0x167), e[aS(0xe7)] = function (j, k) {
            return j !== k;
        }, e[aR(0x237)] = aR(0x1fa), e[aS(0xdd)] = aR(0x23e);
        const f = e, {user: g} = d[aS(0x181)][aR(0x1c8)], {tenantId: h} = g, i = aS(0x198) + '_' + h;
        d['on'](f[aS(0x23f)], function (j) {
            const aT = aS, aU = aR, k = {
                    'aDYoH': f[aT(0x21b)],
                    'tAczE': f[aU(0x157)],
                    'KnHYs': f[aT(0x213)],
                    'EBnpA': function (l, m) {
                        const aV = aU;
                        return f[aV(0x220)](l, m);
                    },
                    'Idwcs': f[aU(0x23f)]
                };
            if (f[aU(0x141)](f[aU(0x1fd)], f[aU(0x10c)])) {
                const {user: m} = g[aT(0x181)][aU(0x1c8)], n = h[aU(0xf4)][aT(0x189)](m['id']);
                (-0x18cf + 0x1c * -0x43 + 0x2023, i[aU(0x250)])(j, k[aU(0x200)], n);
            } else {
                const m = Index_1[aU(0x1d8)][i];
                if (m) {
                    if (f[aT(0x141)](f[aU(0xd8)], f[aT(0xd8)])) {
                        const {to: n} = j, {from: o} = j;
                        console[aT(0x104)]('TO', n), console[aU(0x104)](f[aU(0x213)], o);
                        const p = j[aU(0x17f)];
                        if (f[aT(0x220)](j[aU(0x17f)], 's')) {
                            if (f[aT(0x126)](f[aU(0x1cd)], f[aT(0x1cd)]))
                                j[aT(0x17f)] = 'r';
                            else {
                                const r = k[aU(0x16c)][aT(0x1ba)]('|');
                                let s = -0x310 + -0x362 + -0x19 * -0x42;
                                while (!![]) {
                                    switch (r[s++]) {
                                    case '0':
                                        const t = {};
                                        t[aU(0x1d0)] = [], t[aT(0x20d) + 'e'] = {}, t[aT(0xf8)] = {}, q[aT(0x1d8)][r] = t;
                                        continue;
                                    case '1':
                                        (0x2 * -0xe94 + -0x136b + 0x3093, B[aU(0x250)])(C, D[aU(0x22c)] + (aU(0x121) + aU(0x1ea)));
                                        continue;
                                    case '2':
                                        s = t[aU(0x1d8)][u];
                                        continue;
                                    case '3':
                                        const u = {};
                                        u[aU(0x1d0)] = [x['id']], u[aU(0x15c)] = y, v[aU(0x20d) + 'e'][w['id']] = u;
                                        continue;
                                    case '4':
                                        z[aT(0x1d0)][aU(0x1b5)](A);
                                        continue;
                                    }
                                    break;
                                }
                            }
                        } else {
                            if (f[aT(0xe7)](f[aU(0x237)], f[aU(0xdd)]))
                                j[aT(0x17f)] = 's';
                            else {
                                if (t[aT(0xf8)][u['id']]) {
                                    const u = K[aU(0xf8)][L['id']][aT(0x1d0)];
                                    f[aT(0x22e)]((-0xe0b + 0x228f + -0x1484, M[aT(0x24a)])(u), -0x1c0c + 0x332 + 0x18dc) ? delete T[aU(0xf8)][U['id']] : V[aU(0xf8)][W['id']][aT(0x1d0)] = (0x118 * -0xb + 0x1988 + -0xd80, X[aT(0x172)])(u, Y['id']);
                                }
                                const s = {};
                                s['id'] = G['id'];
                                const t = (0xa7c + 0x15 * -0x9 + -0x9bf, E[aT(0x21f)])(F[aU(0x1d0)], s);
                                H[aU(0x1d0)] = (-0x1 * -0x22a9 + 0x259c + -0x4845, I[aU(0x172)])(J[aT(0x1d0)], t);
                            }
                        }
                        (0x652 + -0x2a * -0x99 + -0x2 * 0xfb6, Utils_1[aT(0x110)])(m[aU(0x1d0)], m[aT(0x20d) + 'e'], j[aU(0x153)][aT(0x22f)], f[aU(0x23f)], j), j[aU(0x17f)] = p, (-0x1 * -0x264a + -0xc45 + -0x1a05, Utils_1[aT(0x110)])(m[aU(0x1d0)], m[aU(0x20d) + 'e'], j[aU(0x256)][aT(0x22f)], f[aU(0x23f)], j);
                    } else {
                        const t = t[aT(0x1d8)][u];
                        if (t) {
                            const {to: u} = K, {from: v} = L;
                            M[aU(0x104)]('TO', u), N[aU(0x104)](k[aT(0x1b6)], v);
                            const w = O[aU(0x17f)];
                            k[aU(0xee)](P[aT(0x17f)], 's') ? Z[aU(0x17f)] = 'r' : a0[aT(0x17f)] = 's', (-0x438 + 0x2de * 0x7 + 0x7ed * -0x2, S[aU(0x110)])(t[aT(0x1d0)], t[aT(0x20d) + 'e'], T[aU(0x153)][aU(0x22f)], k[aT(0x10d)], U), V[aT(0x17f)] = w, (-0x386 * 0x1 + 0x1 * -0x91f + -0x437 * -0x3, W[aU(0x110)])(t[aT(0x1d0)], t[aT(0x20d) + 'e'], X[aT(0x256)][aT(0x22f)], k[aU(0x10d)], Y);
                        }
                    }
                }
            }
        });
    }, onChatTyping = c => {
        const aW = a8, aX = a9, d = {
                'YDchd': aW(0x14e) + aW(0x24b),
                'wVsJF': aW(0x16d),
                'jPAnK': function (h, i) {
                    return h !== i;
                },
                'pQCjf': aW(0x131),
                'NaGpa': aW(0x187),
                'CgtBo': function (h, i) {
                    return h === i;
                },
                'QuqXo': function (h, i) {
                    return h(i);
                },
                'KEGTS': function (h, i) {
                    return h === i;
                },
                'wIzNX': aW(0x1eb),
                'rgphb': function (h, i) {
                    return h === i;
                },
                'GuPAt': function (h, i) {
                    return h(i);
                },
                'eDNqq': function (h, i) {
                    return h(i);
                },
                'hBgsh': aW(0x1b8),
                'VqFSO': aX(0x1da),
                'BrkyJ': function (h, i) {
                    return h === i;
                },
                'HwySG': aW(0x133),
                'zQjFF': aX(0x161),
                'teBAv': function (h, i) {
                    return h === i;
                },
                'vKaid': aX(0x164),
                'rdQSc': aX(0x206),
                'KrRIH': aX(0x150)
            }, {user: e} = c[aW(0x181)][aW(0x1c8)], {tenantId: f} = e, g = aX(0x198) + '_' + f;
        c['on'](d[aW(0x225)], h => {
            const aY = aW, aZ = aX;
            if (d[aY(0x10e)](d[aY(0x1fc)], d[aZ(0x179)])) {
                const {user: j} = p[aZ(0x181)][aY(0x1c8)];
                q[aZ(0x22b)][aY(0x1c3)](aZ(0xda) + aZ(0x177) + j[aY(0x23d)]);
                const {tenantId: k} = j, l = aY(0x198) + '_' + k;
                let m;
                m = r[aY(0x1d8)][l];
                m && (m[aZ(0x20d) + 'e'][j['id']] = {
                    'sockets': [C['id']],
                    'user': j
                }, m[aZ(0x1d0)][aZ(0x1b5)](D), (0x1af7 + 0x1f9e + -0x1 * 0x3a95, E[aZ(0x250)])(F, d[aZ(0x20c)]));
                if (!m) {
                    const n = d[aY(0x1b3)][aZ(0x1ba)]('|');
                    let o = 0x3 * -0x94f + 0xc * 0x20 + -0x549 * -0x5;
                    while (!![]) {
                        switch (n[o++]) {
                        case '0':
                            m[aY(0x1d0)][aZ(0x1b5)](J);
                            continue;
                        case '1':
                            const p = {};
                            p[aY(0x1d0)] = [], p[aZ(0x20d) + 'e'] = {}, p[aY(0xf8)] = {}, G[aZ(0x1d8)][l] = p;
                            continue;
                        case '2':
                            (-0x1039 * 0x1 + -0x1ece + 0x3 * 0xfad, K[aZ(0x250)])(L, j[aY(0x22c)] + (aY(0x121) + aY(0x1ea)));
                            continue;
                        case '3':
                            m = H[aY(0x1d8)][l];
                            continue;
                        case '4':
                            m[aZ(0x20d) + 'e'][j['id']] = {
                                'sockets': [I['id']],
                                'user': j
                            };
                            continue;
                        }
                        break;
                    }
                }
            } else {
                const j = Index_1[aZ(0x1d8)][g];
                if (j) {
                    if (d[aZ(0x1c5)](d[aZ(0x178)], d[aY(0x178)])) {
                        const {to: k} = h, {from: l} = h;
                        let m = null, n = null;
                        (-0x201 * 0x12 + 0x80e * 0x2 + 0x46 * 0x49, lodash_1[aY(0x1f8)])(j[aZ(0x20d) + 'e'], function (o) {
                            const b0 = aY, b1 = aZ;
                            if (d[b0(0x1b0)](d[b1(0x1f9)], d[b1(0x160)])) {
                                d[b1(0x148)](d[b0(0x18b)](String, o[b1(0x15c)]['id']), d[b0(0x18b)](String, k)) && (d[b1(0x1ac)](d[b1(0x222)], d[b0(0x222)]) ? m = o[b1(0x15c)] : delete e?.[b1(0xf8)][f['id']]);
                                if (d[b1(0x23a)](d[b0(0x1c2)](String, o[b0(0x15c)]['id']), d[b1(0x193)](String, l))) {
                                    if (d[b1(0x1b0)](d[b1(0x18c)], d[b0(0x195)]))
                                        n = o[b0(0x15c)];
                                    else {
                                        const r = {};
                                        r[b0(0x1d0)] = [], r[b0(0x20d) + 'e'] = {}, r[b1(0xf8)] = {}, j[b1(0x1d8)][k] = r, l = m[b0(0x1d8)][n], o[b0(0xf8)][b1(0x1b5)](p['id']);
                                    }
                                }
                            } else
                                delete e?.[b1(0x20d) + 'e'][f['id']];
                        });
                        if ((-0x2581 + -0xf5 * -0xa + 0x1bef, lodash_1[aY(0x1fe)])(m) || (-0x2230 + -0x254c + 0x477c, lodash_1[aZ(0x1fe)])(n)) {
                            if (d[aY(0x1ac)](d[aY(0x20e)], d[aY(0x20e)]))
                                return;
                            else {
                                const p = {};
                                p[aY(0x1d0)] = [m['id']], p[aZ(0x15c)] = n, k[aZ(0x20d) + 'e'][l['id']] = p, o[aY(0x1d0)][aZ(0x1b5)](p), (0x621 * 0x5 + 0x1fd6 + -0x3e7b, q[aY(0x250)])(r, d[aZ(0x20c)]);
                            }
                        }
                        h[aY(0x153)] = m, h[aZ(0x256)] = n, (0x10a4 + -0x1b * -0x136 + -0x34a * 0xf, Utils_1[aY(0x110)])(j[aY(0x1d0)], j[aY(0x20d) + 'e'], m[aZ(0x23d)], d[aY(0x225)], h);
                    } else {
                        const q = {};
                        q[aZ(0x1d0)] = [i['id']], q[aY(0x15c)] = j, g[aY(0xf8)][h['id']] = q;
                    }
                }
            }
        });
    }, onChatStopTyping = c => {
        const b2 = a8, b3 = a8, d = {
                'PvvEU': b2(0x1a4),
                'dlCNH': function (h, i) {
                    return h === i;
                },
                'GtoNU': b2(0x25f) + 'e',
                'lYkgU': b2(0x196),
                'phgWQ': b3(0x1c4),
                'OJYIQ': function (h, i) {
                    return h(i);
                },
                'pXLWM': function (h, i) {
                    return h === i;
                },
                'tGyLa': b2(0x268),
                'FYgnl': b2(0x217) + b2(0x15f) + b3(0x163),
                'iQVcM': function (h, i) {
                    return h === i;
                },
                'njCdh': b2(0x14b),
                'Qotox': b3(0x16a),
                'OdYcv': b2(0x205),
                'JaGMQ': b2(0x176),
                'NRQIV': function (h, i) {
                    return h === i;
                },
                'VPMuE': b2(0x210),
                'WrlCu': b2(0x17b) + b2(0x257)
            }, {user: e} = c[b2(0x181)][b3(0x1c8)], {tenantId: f} = e, g = b3(0x198) + '_' + f;
        c['on'](d[b2(0x235)], h => {
            const b4 = b3, b6 = b3, i = {
                    'extxu': d[b4(0x139)],
                    'pzEtw': function (j, k) {
                        const b5 = b4;
                        return d[b5(0x132)](j, k);
                    }
                };
            if (d[b4(0x1e3)](d[b6(0x229)], d[b6(0x208)]))
                e = f[b4(0x15c)];
            else {
                const k = Index_1[b4(0x1d8)][g];
                if (k) {
                    if (d[b4(0x1f6)](d[b4(0x1a3)], d[b4(0xe6)])) {
                        const {to: m} = v, {from: n} = w;
                        x[b6(0x104)]('TO', m), y[b4(0x104)](d[b4(0x199)], n);
                        const o = z[b4(0x17f)];
                        d[b6(0x1d4)](A[b4(0x17f)], 's') ? O[b4(0x17f)] = 'r' : P[b6(0x17f)] = 's', (0x18e6 + 0x9d * 0x1f + -0x4e1 * 0x9, D[b4(0x110)])(E[b4(0x1d0)], F[b4(0x20d) + 'e'], G[b4(0x153)][b6(0x22f)], d[b4(0x140)], H), I[b6(0x17f)] = o, (-0x3 * -0xad9 + -0x1 * -0x949 + -0x2 * 0x14ea, J[b4(0x110)])(K[b4(0x1d0)], L[b4(0x20d) + 'e'], M[b6(0x256)][b6(0x22f)], d[b6(0x140)], N);
                    } else {
                        const {to: m} = h;
                        let n = null;
                        (0x1df4 + 0x14f8 + -0x32ec, lodash_1[b6(0x1f8)])(k[b6(0x20d) + 'e'], o => {
                            const b7 = b4, b8 = b4;
                            if (d[b7(0x1d4)](d[b8(0x11f)], d[b7(0x12b)]))
                                return;
                            else {
                                if (d[b8(0x1d4)](d[b7(0x132)](String, o[b7(0x15c)]['id']), d[b7(0x132)](String, m))) {
                                    if (d[b8(0x1f6)](d[b7(0xef)], d[b7(0xef)]))
                                        n = o[b7(0x15c)];
                                    else
                                        return;
                                }
                            }
                        });
                        if ((0x1d62 + -0x2627 * -0x1 + -0x9 * 0x781, lodash_1[b6(0x1fe)])(n)) {
                            if (d[b4(0x265)](d[b4(0xed)], d[b6(0xed)]))
                                return;
                            else {
                                const p = i[b6(0xf5)][b6(0x1ba)]('|');
                                let q = -0x662 + 0x11f7 + -0xb95;
                                while (!![]) {
                                    switch (p[q++]) {
                                    case '0':
                                        J[b4(0x175) + b4(0x231)](K);
                                        continue;
                                    case '1':
                                        D[b6(0x182) + b6(0x20a)](E);
                                        continue;
                                    case '2':
                                        R[b4(0x23b) + 'ng'](S);
                                        continue;
                                    case '3':
                                        L[b6(0xde) + b6(0x1ce)](M);
                                        continue;
                                    case '4':
                                        N[b6(0x244) + b4(0x134)](O);
                                        continue;
                                    case '5':
                                        if (!C[b6(0x181)]?.[b6(0x1c8)]?.[b6(0x22c)])
                                            return;
                                        continue;
                                    case '6':
                                        V[b4(0x1a8) + b4(0x227)](W);
                                        continue;
                                    case '7':
                                        T[b6(0x230) + b6(0x255)](U);
                                        continue;
                                    case '8':
                                        F[b6(0x185) + b4(0x18f)](G);
                                        continue;
                                    case '9':
                                        Z[b6(0x181)][b4(0x1c8)][b4(0x15c)]['id'] && i[b4(0x192)](a2, a3);
                                        continue;
                                    case '10':
                                        H[b6(0x1f3) + b4(0x16e)](I);
                                        continue;
                                    case '11':
                                        X[b6(0x158) + 'ct'](Y);
                                        continue;
                                    case '12':
                                        P[b4(0xe9) + b6(0x171)](Q);
                                        continue;
                                    }
                                    break;
                                }
                            }
                        }
                        h[b4(0x153)] = n, (-0xcb9 * -0x2 + 0xbe * 0x29 + -0x37e0, Utils_1[b6(0x110)])(k[b6(0x1d0)], k[b4(0x20d) + 'e'], n[b4(0x23d)], d[b6(0x235)], h);
                    }
                }
            }
        });
    }, saveChatWindow = c => {
        const b9 = a8, ba = a8, d = {
                'SakOz': b9(0x243) + b9(0x1f7),
                'NCSSl': function (e, f) {
                    return e(f);
                },
                'HXGIA': function (e, f) {
                    return e !== f;
                },
                'PwcKb': ba(0x20f),
                'laPok': b9(0x11b),
                'QJguQ': function (e, f) {
                    return e === f;
                },
                'Vtsnf': b9(0xf3),
                'ziduw': ba(0x1a8) + b9(0x227)
            };
        c['on'](d[b9(0x1d1)], async e => {
            const bc = b9, bd = b9, f = {
                    'BQJEa': function (g, h) {
                        const bb = b;
                        return d[bb(0x215)](g, h);
                    }
                };
            if (d[bc(0x12d)](d[bd(0x263)], d[bd(0x1be)])) {
                const {userId: g} = e, {remove: h} = e, i = await User_1[bd(0xf4)][bd(0x189)](g);
                if (i) {
                    if (d[bd(0x11a)](d[bc(0x142)], d[bc(0x142)])) {
                        if (h) {
                        } else {
                        }
                    } else {
                        let k;
                        k = q[bc(0x1d8)][r];
                        if (k) {
                            const l = {};
                            l[bc(0x1d0)] = [F['id']], l[bc(0x15c)] = G, k[bc(0xf8)][E['id']] = l;
                        }
                        if (!k) {
                            const m = {};
                            m[bd(0x1d0)] = [], m[bc(0x20d) + 'e'] = {}, m[bd(0xf8)] = {}, H[bd(0x1d8)][I] = m, k = J[bc(0x1d8)][K], k[bd(0xf8)][bc(0x1b5)](L['id']);
                        }
                        k?.[bc(0x20d) + 'e'][A['id']] && delete k?.[bd(0x20d) + 'e'][M['id']], f[bc(0x15e)](C, D);
                    }
                }
            } else
                d = d[bd(0x107)];
        });
    }, onDisconnect = c => {
        const be = a8, bf = a8, d = {
                'UeCtr': function (e, f) {
                    return e === f;
                },
                'whKjj': function (e, f) {
                    return e(f);
                },
                'TyPQp': function (e, f) {
                    return e === f;
                },
                'XDpob': function (e, f) {
                    return e(f);
                },
                'KAeZm': be(0x1d5) + 's',
                'eRcrG': bf(0x244) + be(0x134),
                'PJncS': function (e, f) {
                    return e !== f;
                },
                'RMhMr': be(0x17a),
                'qcovX': bf(0x12e),
                'XXCnf': function (e, f) {
                    return e === f;
                },
                'aCkaR': bf(0x1c1),
                'QmKSt': function (e, f) {
                    return e === f;
                },
                'CvxOS': bf(0x232),
                'FepFj': function (e, f) {
                    return e < f;
                },
                'amDLP': function (e, f) {
                    return e !== f;
                },
                'fFHOU': bf(0x190),
                'Xozxo': function (e, f) {
                    return e !== f;
                },
                'aOHnq': bf(0x11d),
                'mgfiW': be(0x135),
                'uzGri': be(0x12a),
                'pjrzA': function (e, f) {
                    return e === f;
                },
                'ASrrH': bf(0x14c),
                'naACc': bf(0x1ab),
                'jvXnS': function (e, f) {
                    return e !== f;
                },
                'ncWbO': be(0xe8),
                'EyYul': function (e, f) {
                    return e === f;
                },
                'XKIsV': bf(0x13e),
                'KGuTt': bf(0x1d7),
                'xRLPX': function (e, f) {
                    return e(f);
                },
                'IzanA': be(0x212) + bf(0x1cf),
                'ltZZj': be(0x1af),
                'TjUat': bf(0x243) + bf(0x1f7),
                'WpEoL': be(0x137)
            };
        c['on'](d[be(0x152)], async e => {
            const bg = be, bi = bf, f = {
                    'IHdOX': d[bg(0x109)],
                    'GeEYi': function (g, h) {
                        const bh = bg;
                        return d[bh(0x1f1)](g, h);
                    },
                    'VcUAC': d[bi(0x111)]
                };
            if (d[bi(0x1ed)](d[bg(0x186)], d[bi(0x236)])) {
                const {user: g} = c[bi(0x181)][bi(0x1c8)], {tenantId: h} = g, j = bg(0x198) + '_' + h, k = Index_1[bi(0x1d8)][j];
                if (k?.[bi(0x20d) + 'e']) {
                    if (d[bi(0x149)](d[bi(0x25e)], d[bg(0x25e)])) {
                        if (k[bg(0x20d) + 'e'][g['id']]) {
                            if (d[bg(0x1d6)](d[bg(0x1f4)], d[bi(0x1f4)])) {
                                const p = k[bg(0x20d) + 'e'][g['id']][bi(0x1d0)];
                                d[bi(0x130)]((-0x1c80 + 0x24af + 0x5 * -0x1a3, lodash_1[bi(0x24a)])(p), -0x2a * -0xea + 0x1 * -0x1c03 + 0x3 * -0x375) ? d[bi(0x162)](d[bi(0x1e9)], d[bg(0x1e9)]) ? (d[bi(0x155)](d[bi(0x1f1)](n, p[bg(0x15c)]['id']), d[bg(0x1f1)](q, r)) && (A = B[bi(0x15c)]), d[bg(0x128)](d[bg(0x145)](u, v[bi(0x15c)]['id']), d[bg(0x145)](w, x)) && (C = D[bi(0x15c)])) : delete k[bg(0x20d) + 'e'][g['id']] : d[bg(0x19c)](d[bi(0x219)], d[bg(0x219)]) ? (g[bi(0x144)][bg(0x238)] || h[bg(0x144)][bg(0x120)]) && k[bg(0x1d3)](f[bi(0x156)], l) : k[bi(0x20d) + 'e'][g['id']][bg(0x1d0)] = (-0x1 * 0x2f + -0x1a09 + 0x1a38, lodash_1[bi(0x172)])(p, c['id']);
                            } else
                                e['on'](d[bi(0x109)], f);
                        }
                        const m = {};
                        m['id'] = c['id'];
                        const n = (0x1bb * 0x11 + 0x7f4 + -0x255f, lodash_1[bg(0x21f)])(k[bg(0x1d0)], m);
                        k[bg(0x1d0)] = (-0x1fdf * 0x1 + 0xb11 * 0x1 + 0x14ce, lodash_1[bg(0x172)])(k[bi(0x1d0)], n);
                    } else {
                        if (d) {
                        } else {
                        }
                    }
                }
                if (k?.[bi(0xf8)]) {
                    if (d[bg(0x1ed)](d[bi(0xf9)], d[bi(0x174)])) {
                        if (k[bg(0xf8)][g['id']]) {
                            if (d[bg(0x1a1)](d[bi(0x248)], d[bg(0x197)]))
                                f['on'](f[bi(0xe3)], () => {
                                    const bj = bi;
                                    f[bj(0xf1)](v, j);
                                });
                            else {
                                const x = k[bi(0xf8)][g['id']][bi(0x1d0)];
                                d[bi(0x130)]((-0x2192 + -0x1073 + -0xc5 * -0x41, lodash_1[bg(0x24a)])(x), -0x2 * 0x4eb + -0x37 * -0x1f + 0x32f * 0x1) ? d[bi(0x15d)](d[bg(0x25a)], d[bi(0x25a)]) ? e = f[bg(0x15c)] : delete k[bg(0xf8)][g['id']] : d[bi(0x138)](d[bi(0x218)], d[bi(0x218)]) ? k[bg(0xf8)][g['id']][bi(0x1d0)] = (0x158d + -0x1d * 0xc2 + 0x1 * 0x6d, lodash_1[bi(0x172)])(x, c['id']) : delete e[bi(0xf8)][f['id']];
                            }
                        }
                        const u = {};
                        u['id'] = c['id'];
                        const v = (-0xe02 + 0x1e98 * 0x1 + -0x1096, lodash_1[bi(0x21f)])(k[bg(0x1d0)], u);
                        k[bg(0x1d0)] = (-0xcd6 * -0x2 + 0x1344 + -0x2cf * 0x10, lodash_1[bg(0x172)])(k[bi(0x1d0)], v);
                    } else
                        h[bi(0x20d) + 'e'][i['id']][bg(0x1d0)] = (0x2d3 * -0x9 + -0x458 + 0x1dc3, j[bg(0x172)])(k, l['id']);
                }
                const l = await User_1[bg(0xf4)][bg(0x189)](g['id']);
                l?.[bi(0x1ae)]({
                    'status': d[bi(0xdb)],
                    'lastOnline': new Date()
                }), d[bg(0x203)](UpdateOnlineBubbles, c), d[bg(0x138)](e, d[bg(0x1d2)]) && (d[bi(0x149)](d[bi(0x214)], d[bg(0x214)]) ? e = d[bi(0x136)] : h[bi(0xf8)][i['id']][bi(0x1d0)] = (-0x2d * 0x7 + 0x17c * 0x5 + -0x1 * 0x631, j[bg(0x172)])(k, l['id'])), logger_1[bi(0x22b)][bg(0xeb)](bg(0xfb) + bi(0x204) + e + bi(0x106) + g[bi(0x23d)] + bg(0x101) + c['id']);
            } else
                d[bi(0x17f)] = 'r';
        });
    };
events[a8(0x182) + a8(0x20a)] = onSetUserIdle, events[a9(0x185) + a9(0x18f)] = onSetUserActive, events[a9(0x1f3) + a8(0x16e)] = onUpdateUsers, events[a8(0xde) + a9(0x1ce)] = spawnChatWindow, events[a8(0xe9) + a9(0x171)] = onChatMessage, events[a8(0x23b) + 'ng'] = onChatTyping, events[a9(0x230) + a8(0x255)] = onChatStopTyping, events[a9(0x1a8) + a8(0x227)] = saveChatWindow, events[a8(0x158) + 'ct'] = onDisconnect, events[a9(0x175) + a8(0x231)] = c => {
    const bk = a9, bl = a9, d = {
            'wgUlb': function (f, g) {
                return f < g;
            },
            'TJkeu': function (f, g) {
                return f === g;
            },
            'SaBaL': bk(0x1b4),
            'zshWU': function (f, g) {
                return f(g);
            }
        }, {user: e} = c[bk(0x181)][bk(0x1c8)];
    c['on'](e[bl(0x22c)] + (bl(0x1e4) + bl(0xe5) + bk(0x221)), () => {
        const bn = bk, bo = bl, f = {
                'kIvUa': function (g, h) {
                    const bm = b;
                    return d[bm(0xec)](g, h);
                }
            };
        if (d[bn(0x262)](d[bo(0x18e)], d[bo(0x18e)]))
            d[bo(0x1dc)](UpdateOnlineBubbles, e[bo(0x22c)]);
        else {
            if (t[bo(0x20d) + 'e'][u['id']]) {
                const j = K[bo(0x20d) + 'e'][L['id']][bo(0x1d0)];
                f[bn(0xfe)]((0xa * -0x1b3 + 0x2171 * -0x1 + 0x326f, M[bn(0x24a)])(j), -0x6f3 * -0x1 + -0x1 * 0x5f9 + -0xf8) ? delete T[bo(0x20d) + 'e'][U['id']] : V[bn(0x20d) + 'e'][W['id']][bo(0x1d0)] = (-0x42 * 0x21 + 0x263 * 0x3 + 0x17 * 0xf, X[bo(0x172)])(j, Y['id']);
            }
            const h = {};
            h['id'] = G['id'];
            const i = (0x1ccb + 0xa59 + -0x1e * 0x14e, E[bo(0x21f)])(F[bn(0x1d0)], h);
            H[bo(0x1d0)] = (-0x412 + -0xff + 0x1 * 0x511, I[bo(0x172)])(J[bo(0x1d0)], i);
        }
    });
}, events[a8(0x244) + a8(0x134)] = c => {
    const bp = a8, bq = a8, d = {
            'pcFuO': function (e, f) {
                return e(f);
            },
            'lhcyB': function (e, f) {
                return e !== f;
            },
            'vgwNW': bp(0x1c6),
            'FWist': bp(0x100),
            'uZIaZ': bp(0x244) + bp(0x134)
        };
    c['on'](d[bp(0x1a9)], () => {
        const br = bq, bs = bq;
        d[br(0x24c)](d[bs(0x13d)], d[br(0x252)]) ? d[br(0xe1)](SpawnOpenChatWindows, c) : (d[br(0xe1)](g, h), d[bs(0xe1)](i, j));
    });
};
function a() {
    const bx = [
        'auth',
        'events',
        'fromPairs',
        'jrJif',
        'LTeGa',
        'QRCAB',
        'indow',
        'error',
        'sockets',
        'ziduw',
        'IzanA',
        'emit',
        'dlCNH',
        'updateUser',
        'QmKSt',
        'offline',
        'shared',
        'EPhAk',
        'xXKVa',
        'ANpZT',
        'zshWU',
        'ients',
        'zsLFP',
        'abZio',
        'XtGNo',
        'xnYVK',
        'fRcwh',
        'iQVcM',
        ':chat:upda',
        'gdVJr',
        'SyGsb',
        's/logger',
        '32hCETFW',
        'fFHOU',
        'ssfully',
        'EOkyw',
        ':setUserAc',
        'PJncS',
        'cGGEs',
        'PwDlc',
        'EUcHW',
        'whKjj',
        'profile',
        'onUpdateUs',
        'CvxOS',
        'dFjPm',
        'pXLWM',
        'minated',
        'find',
        'pQCjf',
        'qqBbQ',
        'zDPFn',
        'HwySG',
        'eiXFj',
        'isNull',
        'KXrwM',
        'aDYoH',
        'MpXbc',
        'yDcGJ',
        'xRLPX',
        'nnected\x20(',
        'mKeRM',
        'zcWyf',
        'GOksN',
        'Qotox',
        'LAjVo',
        'dle',
        'UYZum',
        'YDchd',
        'usersOnlin',
        'rdQSc',
        'sfAdP',
        'SkHEo',
        'sortByKeys',
        'transport\x20',
        'RvEYR',
        'ltZZj',
        'NCSSl',
        'lzcTR',
        '5|1|8|10|0',
        'XKIsV',
        'aOHnq',
        'sortedUser',
        'bTcJr',
        'value',
        'defineProp',
        'SsNJe',
        'findKey',
        'mqNly',
        'bbles',
        'wIzNX',
        'cmZNo',
        'eventLoop',
        'KrRIH',
        'bvXRI',
        'ndow',
        'yHHFY',
        'njCdh',
        'iJThV',
        'logger',
        'tenantId',
        'GbkUB',
        'MIEiH',
        'username',
        'onChatStop',
        'neBubbles',
        'iBYQf',
        'yPkEy',
        'jvyTd',
        'WrlCu',
        'qcovX',
        'pTWmW',
        'isAdmin',
        'GloqK',
        'rgphb',
        'onChatTypi',
        'NIfdT',
        'name',
        'WizOc',
        'vTXfA',
        'gGmoB',
        'QUFks',
        'tUzkZ',
        'client\x20ter',
        'getOpenCha',
        'toPairs',
        'GOxvg',
        'nnjpZ',
        'ASrrH',
        'OjrVB',
        'size',
        'sfully',
        'lhcyB',
        '5DKglqu',
        'Wigik',
        'mqtrh',
        'sendToSelf',
        'RPKmc',
        'FWist',
        'mVaUf',
        'vXVBp',
        'Typing',
        'fromUser',
        'ping',
        'iSNfv',
        'Bmpvz',
        'ncWbO',
        'xSfoV',
        '1151094HDKkId',
        'aAPsm',
        'aCkaR',
        'chatMessag',
        'cQFbV',
        'OXKuI',
        'TJkeu',
        'PwcKb',
        'zVCAB',
        'NRQIV',
        'XsORk',
        'hKfMF',
        'iIwQI',
        'zGrWb',
        'SWsFF',
        'joinChatSe',
        'KGuTt',
        '2374563mmPIlg',
        'TAfEA',
        'spawnChatW',
        'WiDvm',
        './Utils',
        'pcFuO',
        'MRaeE',
        'VcUAC',
        'lodash',
        'teOnlineBu',
        'JaGMQ',
        'zKPOd',
        'DQvhK',
        'onChatMess',
        'PecwD',
        'debug',
        'wgUlb',
        'VPMuE',
        'EBnpA',
        'tGyLa',
        'pAiFy',
        'GeEYi',
        'jFQNO',
        'SYBso',
        'default',
        'extxu',
        'sortedIdle',
        'VuKDV',
        'idleUsers',
        'mgfiW',
        'vSLtJ',
        'User\x20disco',
        'DvFGP',
        '590744kKUClR',
        'kIvUa',
        'DQJEW',
        'IcXbL',
        '\x20-\x20',
        'WKDsL',
        '6821478UloDwY',
        'log',
        'vQJpV',
        '):\x20',
        'SakOz',
        'sendToAllC',
        'KAeZm',
        'kuvMV',
        'forEach',
        'THFFZ',
        'Idwcs',
        'BrkyJ',
        'GmlIz',
        'sendToUser',
        'eRcrG',
        'LYJCE',
        'bwMGB',
        'dtrnE',
        'YEiDc',
        'DQyEM',
        'NxtRY',
        'BMpSw',
        'List',
        'QJguQ',
        'alepF',
        'onnectedCl',
        'epopg',
        '../../mode',
        'lYkgU',
        'isAgent',
        ':joinSucce',
        'dNKVT',
        'QsmQN',
        'erty',
        'ztKDf',
        'utUKT',
        'McWWj',
        'TyPQp',
        'NKduV',
        'OjvVJ',
        'phgWQ',
        'LQlpY',
        'HXGIA',
        'SEDik',
        'EUfmV',
        'FepFj',
        'gOnlV',
        'OJYIQ',
        'AoBkI',
        'tWindows',
        'xIezw',
        'TjUat',
        'disconnect',
        'EyYul',
        'FYgnl',
        'JaDCh',
        'vipzm',
        'GuRHT',
        'vgwNW',
        'fTTyE',
        'WeVCP',
        'GtoNU',
        'HLZwk',
        'Vtsnf',
        'Pqjgi',
        'role',
        'XDpob',
        'email',
        'BArmS',
        'CgtBo',
        'XXCnf',
        'CPMbk',
        'ATZjq',
        'nIPCg',
        'xVfyu',
        'joinSucces',
        ':setUserId',
        'chatTyping',
        'fault',
        'WpEoL',
        'toUser',
        'mjByZ',
        'UeCtr',
        'IHdOX',
        'TXugu',
        'onDisconne',
        '../../util',
        'tive',
        'vkgUo',
        'user',
        'jvXnS',
        'BQJEa',
        '|3|4|12|2|',
        'NaGpa',
        'nbTjy',
        'amDLP',
        '7|6|11|9',
        'lyYVJ',
        'oDqZT',
        '3|0|2|1|4',
        'MRjCK',
        '20LQMYvW',
        '0|2|3|4|1',
        'viAKg',
        'drdGo',
        'tAczE',
        '1|3|4|0|2',
        'ers',
        './Index',
        'JnfmI',
        'age',
        'without',
        'XumaU',
        'uzGri',
        'updateOnli',
        'ckHYf',
        'rver\x20USER\x20',
        'vKaid',
        'zQjFF',
        'rKKsR',
        'chatStopTy',
        'DwWly',
        'ebZgf',
        'PVaYZ',
        'type',
        'qfUHN',
        'handshake',
        'onSetUserI',
        '__esModule',
        'Wugth',
        'onSetUserA',
        'RMhMr',
        'YQSQO',
        'WzKbh',
        'findByPk',
        'vKvGD',
        'QuqXo',
        'hBgsh',
        'Oybpd',
        'SaBaL',
        'ctive',
        'VguCx',
        'qPDXa',
        'pzEtw',
        'eDNqq',
        'ls/User',
        'VqFSO',
        'qbaOG',
        'naACc',
        'socketData',
        'PvvEU',
        'tUbbd',
        'zvrTo',
        'Xozxo',
        'sUddX',
        'UZAQj',
        '5671240SToyLJ',
        'IbiMU',
        'pjrzA',
        'ylQvn',
        'OdYcv',
        'FROM',
        'hfGbI',
        '__importDe',
        'FwqSC',
        'saveChatWi',
        'uZIaZ',
        'sortBy',
        'skvyc',
        'KEGTS',
        'jQCLN',
        'update',
        'cxyjk',
        'jPAnK',
        'length',
        'lEnEO',
        'wVsJF',
        'jrzeO',
        'push',
        'KnHYs',
        'ZKqMu',
        'fjyvE',
        '24025PARCZA',
        'split',
        'DwCbi',
        'attributes',
        'AnNgi',
        'laPok',
        'register',
        'OogYT',
        'ovWMY',
        'GuPAt',
        'info',
        'ObAfR',
        'teBAv',
        'ghtpA',
        '1958562wwWwkt'
    ];
    a = function () {
        return bx;
    };
    return a();
}
function register(c) {
    const bt = a8, bu = a8, d = {
            'lzcTR': function (e, f) {
                return e === f;
            },
            'ZKqMu': function (e, f) {
                return e(f);
            },
            'vkgUo': function (e, f) {
                return e === f;
            },
            'XtGNo': bt(0x10a),
            'bwMGB': bu(0x19a),
            'XsORk': function (e, f) {
                return e !== f;
            },
            'JnfmI': bu(0x10f),
            'zvrTo': bu(0x1ff)
        };
    if (!c[bu(0x181)]?.[bu(0x1c8)]?.[bt(0x22c)]) {
        if (d[bu(0x15b)](d[bt(0x1e0)], d[bu(0x113)]))
            return d[bt(0x216)](e['id'], f);
        else
            return;
    }
    events[bt(0x182) + bt(0x20a)](c), events[bu(0x185) + bt(0x18f)](c), events[bu(0x1f3) + bu(0x16e)](c), events[bt(0x175) + bu(0x231)](c), events[bt(0xde) + bt(0x1ce)](c), events[bt(0x244) + bt(0x134)](c), events[bu(0xe9) + bu(0x171)](c), events[bt(0x23b) + 'ng'](c), events[bt(0x230) + bt(0x255)](c), events[bu(0x1a8) + bt(0x227)](c), events[bt(0x158) + 'ct'](c), c[bu(0x181)][bu(0x1c8)][bt(0x15c)]['id'] && (d[bu(0x266)](d[bu(0x170)], d[bu(0x19b)]) ? d[bu(0x1b7)](JoinChatServer, c) : d[bu(0x1b7)](e, f[bt(0x22c)]));
}
const eventLoop = c => {
        const bv = a8, bw = a9, d = {
                'vipzm': function (e, f) {
                    return e(f);
                }
            };
        d[bv(0x13b)](UpdateUsers, c), d[bv(0x13b)](UpdateOnlineBubbles, c);
    }, a5 = {};
a5[a9(0x1c9)] = events, a5[a8(0x224)] = eventLoop, a5[a9(0x1bf)] = register;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e74 + 0x18bf + 0x365b * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const chat = a5;
exports[a8(0xf4)] = chat;