'use strict';
const ae = b, af = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1b31 + -0x4 * -0x637 + 0x1cd * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const ac = b, ad = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ac(0x1a1)) / (0x154e + 0x1b54 + -0x30a1 * 0x1) * (-parseInt(ad(0x1f2)) / (-0x6d7 + -0x219f + 0x2878)) + -parseInt(ad(0x1e5)) / (0xf36 + 0x1a58 + -0x298b) * (-parseInt(ad(0x17d)) / (0x12e0 + -0xada + -0x802)) + parseInt(ac(0x241)) / (-0xab5 * 0x3 + -0x12f * 0x1a + 0x1f75 * 0x2) * (-parseInt(ac(0x270)) / (-0x1 * -0xa2d + -0xe60 * -0x1 + -0x1887)) + -parseInt(ad(0x156)) / (-0x2d * -0x23 + -0x209a + -0x1a7a * -0x1) + -parseInt(ad(0x1c5)) / (0x1 * 0x4dc + -0x17 * 0xfe + 0x11fe) * (-parseInt(ac(0x204)) / (-0x20b3 + 0x159c + -0xb20 * -0x1)) + parseInt(ac(0x238)) / (0x1 * 0x17c9 + 0x3 * 0x96b + -0x3400) * (parseInt(ac(0x1a4)) / (0x2 * -0x251 + -0x1fb5 + -0x1231 * -0x2)) + -parseInt(ad(0x219)) / (0x3c7 * -0x5 + 0x878 + 0xa77) * (-parseInt(ac(0x245)) / (0xe25 + 0x1 * 0x135a + -0x2172));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2f * 0x6d9f + 0x59 * -0x17ec + 0x296041));
var __importDefault = this && this[ae(0x18c) + ae(0x1f9)] || function (c) {
    const ag = ae;
    return c && c[ag(0x221)] ? c : { 'default': c };
};
const t = {};
t[af(0x21a)] = !![], Object[ae(0x1ea) + ae(0x174)](exports, af(0x221), t);
const sequelize_1 = require(af(0x20b)), Ticket_1 = __importDefault(require(af(0x193) + af(0x20f))), UsersQueues_1 = __importDefault(require(af(0x193) + af(0x2ba) + ae(0x180))), AppError_1 = __importDefault(require(ae(0x1e1) + ae(0x2cf) + 'r')), Queue_1 = __importDefault(require(ae(0x193) + af(0x19c))), User_1 = __importDefault(require(af(0x193) + af(0x237))), ListSettingsService_1 = __importDefault(require(ae(0x2a1) + ae(0x2ad) + af(0x18d) + af(0x2cd))), ListTicketsService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        status: l,
        date: m,
        showAll: n,
        userId: o,
        withUnreadMessages: p,
        queuesIds: q,
        isNotAssignedUser: r,
        includeNotQueueDefined: s,
        tenantId: u,
        profile: v
    }) => {
        const ah = af, ai = ae, w = {
                'jDpXz': function (V, W) {
                    return V !== W;
                },
                'aiGXL': ah(0x2b1),
                'qyHBf': ai(0x249),
                'iDGbN': function (V, W) {
                    return V === W;
                },
                'YKgQn': ah(0x234) + ai(0x29f) + 'ts',
                'xHsHV': function (V, W) {
                    return V === W;
                },
                'lopyW': ah(0x1e4),
                'HRPhe': ah(0x160),
                'FaSAw': ai(0x162),
                'WMvNF': ah(0x185),
                'sNASy': ai(0x255) + ah(0x1b6) + 'ED',
                'LiOWe': function (V, W) {
                    return V !== W;
                },
                'kWwCE': ah(0x228),
                'MJFww': function (V, W) {
                    return V > W;
                },
                'ZfLOj': function (V, W) {
                    return V === W;
                },
                'hxBes': ah(0x1dd),
                'EfpAe': function (V, W) {
                    return V(W);
                },
                'xDLUn': function (V, W) {
                    return V(W);
                },
                'JNRMm': function (V, W) {
                    return V(W);
                },
                'xDvOX': function (V, W) {
                    return V(W);
                },
                'IazUH': function (V, W) {
                    return V == W;
                },
                'rpBtk': ah(0x187),
                'LQmOz': ai(0x226),
                'UCIeJ': function (V, W) {
                    return V == W;
                },
                'FImzL': function (V, W) {
                    return V == W;
                },
                'OYDJO': ah(0x2be),
                'tIOCa': function (V, W) {
                    return V && W;
                },
                'YbTmE': function (V, W) {
                    return V !== W;
                },
                'ryVOw': ai(0x1e7),
                'IkSEV': ai(0x155),
                'fhXMg': function (V, W) {
                    return V === W;
                },
                'UkIyL': ai(0x2bb),
                'RjyZn': ai(0x2c1),
                'tFmqW': ai(0x227),
                'ukHRb': function (V, W) {
                    return V !== W;
                },
                'MuRUN': ah(0x151),
                'BVefM': ai(0x287),
                'ellkX': ah(0x1d7),
                'zFchE': ah(0x2b0),
                'zoYQf': ai(0x1f5),
                'MEXPo': ai(0x164),
                'XvQAQ': ai(0x2c6),
                'nGers': ah(0x17c),
                'eqEFo': ah(0x2b4),
                'yuvku': function (V, W) {
                    return V * W;
                },
                'tzuqU': function (V, W) {
                    return V - W;
                },
                'onbvY': function (V, W) {
                    return V > W;
                },
                'sUECe': function (V, W) {
                    return V + W;
                }
            }, x = w[ai(0x189)](n, w[ai(0x2c0)]) && w[ah(0x210)](v, w[ai(0x2a9)]), y = p && w[ah(0x299)](p, w[ai(0x2c0)]) ? 'S' : 'N', z = r && w[ah(0x26d)](r, w[ai(0x2c0)]) ? 'S' : 'N', A = x ? 'S' : 'N', B = q ? 'S' : 'N', C = searchParam ? 'S' : 'N', D = await (0x8 * -0x473 + 0xafa + 0x2e * 0x89, ListSettingsService_1[ah(0x1f6)])(u), E = w[ai(0x168)](D?.[ah(0x2cc)](V => {
                const aj = ah, ak = ai;
                if (w[aj(0x150)](w[aj(0x200)], w[aj(0x153)]))
                    return w[ak(0x210)](V[ak(0x297)], w[aj(0x1ed)]);
                else {
                    const X = {};
                    return X[aj(0x1f6)] = P, g && h[ak(0x221)] ? O : X;
                }
            })?.[ai(0x21a)], w[ah(0x1d4)]) ? 'S' : 'N';
        if (w[ah(0x145)](!l, !x)) {
            if (w[ah(0x2bf)](w[ah(0x1b4)], w[ah(0x16b)]))
                throw new AppError_1[(ah(0x1f6))](w[ah(0x1ce)], 0x2141 + 0x178a + -0xb * 0x505);
            else
                G = [0x115a + -0x1 * -0x25fe + -0x3758];
        }
        x && (w[ah(0x201)](w[ah(0x18f)], w[ah(0x24f)]) ? G = ai(0x1f8) + ai(0x268) + ah(0x1aa) + ah(0x211) + ai(0x27a) + ai(0x292) + ai(0x232) + ah(0x1f7) + ai(0x1c0) + ai(0x17e) + ai(0x1c3) + ah(0x23e) + ai(0x281) + ah(0x1c6) + ai(0x284) + ai(0x17a) + ah(0x21e) + ah(0x236) + ai(0x23c) + ah(0x223) + ai(0x15e) + ah(0x14c) + ai(0x217) + ah(0x23d) + ah(0x296) + ah(0x26b) + ai(0x22d) + ah(0x1cd) + ai(0x1e8) + ah(0x16d) + ah(0x1bf) + ai(0x1fc) + ai(0x1f4) + ah(0x14a) + ai(0x1a8) + ai(0x1ad) + ah(0x1de) + ah(0x208) + ah(0x173) + ai(0x14e) + ai(0x1bf) + ai(0x233) + ah(0x25c) + ai(0x183) + ah(0x184) + ah(0x188) + ah(0x157) + ai(0x1a7) + ai(0x22b) + ai(0x2b7) + ai(0x179) + ai(0x14f) + ai(0x25a) + ah(0x293) + ah(0x166) + ai(0x1fe) + ah(0x178) + ai(0x298) + ai(0x2a4) + ah(0x29c) + ai(0x2a8) + ai(0x22a) + ai(0x2a0) + ah(0x2a6) + ai(0x1bd) + ah(0x20a) + ah(0x2ae) + ai(0x22f) + ah(0x22c) + ah(0x288) + ah(0x20d) + ah(0x214) + ai(0x171) + ai(0x172) + ai(0x2b2) + ah(0x163) + ai(0x14a) + ah(0x1c1) + ai(0x2c3) + ah(0x24e) + ai(0x1fd) + ah(0x24d) + ah(0x28b) + ai(0x19d) + ai(0x251) + ai(0x27c) + ah(0x1e6) + ah(0x1a6) + ai(0x25f) + ai(0x271) + ai(0x289) + ah(0x1ac) + ah(0x1e9) + ah(0x19f) + ai(0x24a) + ai(0x16a) + ai(0x197) + ah(0x1b9) + ai(0x1cf) + ah(0x190) + (ai(0x269) + ai(0x205) + ah(0x28a) + ai(0x258) + ai(0x2b6) + ah(0x203) + ai(0x265) + ai(0x1dc) + ah(0x14d) + ah(0x1d3) + ai(0x1b1) + ah(0x1ef) + ai(0x247) + ah(0x23b) + ah(0x19b) + ah(0x18a) + ah(0x261) + ai(0x1b7) + ah(0x1ba) + ai(0x283) + ah(0x28d) + ah(0x212) + ah(0x26e) + ai(0x1d1) + ah(0x154) + ah(0x276) + ai(0x1cb) + ah(0x2d5) + ai(0x159) + ah(0x1cc) + ai(0x15f) + ah(0x1f3) + ah(0x17f) + ai(0x1db) + ai(0x1be) + ah(0x176) + ah(0x2ac) + ah(0x206) + ah(0x254) + ah(0x16f) + ah(0x2c5) + ai(0x15b) + ah(0x170) + ah(0x290) + ai(0x243) + ai(0x279) + ai(0x26a) + ah(0x256) + ah(0x262) + ai(0x2a3) + ai(0x2c8) + ah(0x202) + ah(0x2ac) + ah(0x206) + ai(0x1e2) + ai(0x19a) + ai(0x181) + ah(0x207) + ah(0x175) + ah(0x1b8) + ah(0x2ca) + ah(0x295) + ah(0x27d) + ah(0x2bc) + ah(0x147) + ah(0x286) + ah(0x1bc) + ah(0x1df) + ai(0x213)) : l = [
            w[ah(0x220)],
            w[ah(0x21b)],
            w[ai(0x2c7)]
        ]);
        const F = {};
        F[ai(0x278)] = u;
        const G = {};
        G[ai(0x1bb)] = F;
        const H = w[ai(0x1a2)](await Queue_1[ah(0x1f6)][ah(0x267)](G), -0x1 * 0x1415 + -0x307 + -0xae * -0x22) ? 'S' : 'N', I = await User_1[ah(0x1f6)][ai(0x230)](o);
        let J;
        if (w[ai(0x201)](I[ai(0x23a)], w[ah(0x2a9)])) {
            if (w[ai(0x2bd)](w[ah(0x2d4)], w[ai(0x2d4)])) {
                const X = {};
                X[ah(0x278)] = u, X[ah(0x2d0)] = !![];
                const Y = {};
                Y[ai(0x1bb)] = X, Y[ai(0x1ee)] = ['id'], J = await Queue_1[ah(0x1f6)][ai(0x229)](Y), J = J[ah(0x2c2)](Z => {
                    const al = ah, am = ai;
                    if (w[al(0x168)](w[am(0x1d2)], w[al(0x1d2)])) {
                        const a0 = {};
                        return a0[am(0x235)] = Z['id'], a0;
                    } else
                        X = Y = al(0x1f8) + al(0x268) + al(0x1aa) + am(0x211) + am(0x27a) + al(0x292) + am(0x232) + al(0x1f7) + am(0x1c0) + am(0x17e) + al(0x1c3) + am(0x23e) + al(0x281) + am(0x1c6) + am(0x284) + am(0x17a) + am(0x21e) + am(0x236) + am(0x23c) + am(0x223) + al(0x15e) + al(0x14c) + al(0x217) + am(0x23d) + am(0x296) + al(0x26b) + am(0x22d) + am(0x1cd) + al(0x1e8) + am(0x16d) + am(0x1bf) + am(0x1fc) + al(0x1f4) + al(0x14a) + am(0x1a8) + am(0x1ad) + am(0x1de) + al(0x208) + al(0x173) + am(0x14e) + al(0x1bf) + am(0x233) + am(0x25c) + am(0x183) + al(0x184) + am(0x188) + al(0x157) + al(0x1a7) + am(0x22b) + al(0x2b7) + al(0x179) + al(0x14f) + am(0x25a) + am(0x293) + am(0x166) + al(0x1fe) + al(0x178) + al(0x298) + am(0x2a4) + am(0x29c) + al(0x2a8) + al(0x216) + am(0x2aa) + al(0x26c) + al(0x1c9) + am(0x21f) + am(0x2ab) + al(0x195) + am(0x190) + al(0x248) + al(0x177) + al(0x16e) + al(0x266) + al(0x27e) + al(0x244) + am(0x2d2) + al(0x14b) + am(0x1b1) + am(0x1eb) + am(0x222) + al(0x24c) + al(0x1d8) + al(0x165) + am(0x239) + al(0x2af) + am(0x1da) + am(0x196) + am(0x2a0) + al(0x2a6) + am(0x246) + am(0x2d1) + al(0x240) + al(0x1e3) + al(0x264) + al(0x2a7) + al(0x19e) + al(0x1a5) + al(0x2ca) + am(0x15d) + am(0x2d3) + (am(0x15c) + al(0x29a) + am(0x29d) + al(0x1ca) + am(0x152) + al(0x257) + al(0x2d1) + al(0x28f) + al(0x149) + al(0x253) + al(0x231) + am(0x1b3) + am(0x263) + al(0x169) + am(0x1a0) + al(0x20e) + al(0x2c4) + am(0x1ae) + al(0x17b) + al(0x1d0) + am(0x1f1) + am(0x18b) + al(0x20c) + al(0x22e) + al(0x158) + am(0x186) + am(0x18e) + al(0x148) + am(0x194) + am(0x26f) + am(0x146) + al(0x167) + al(0x1ec) + am(0x1af) + al(0x25b) + al(0x1d0) + am(0x1f1) + am(0x1c7) + am(0x1b0) + am(0x242) + al(0x291) + al(0x1a3) + am(0x21c) + al(0x215) + al(0x2b3) + am(0x182) + am(0x277) + am(0x1d5) + al(0x2a5) + am(0x28e) + am(0x16c) + al(0x27b));
                });
            } else
                G = [
                    w[ai(0x220)],
                    w[ai(0x21b)],
                    w[ai(0x2c7)]
                ];
        } else {
            if (w[ai(0x282)](w[ah(0x1d9)], w[ah(0x1d6)])) {
                const a0 = {};
                a0[ai(0x1ff)] = o;
                const a1 = {};
                a1[ai(0x1bb)] = a0, J = await UsersQueues_1[ah(0x1f6)][ah(0x229)](a1);
            } else
                return w[ai(0x168)](G[ah(0x297)], w[ah(0x1ed)]);
        }
        let K = J[ai(0x2c2)](a3 => a3[ah(0x235)]);
        K[ai(0x274)](-0x245e + 0x1a4e + 0xa10);
        if (q) {
            if (w[ai(0x168)](w[ah(0x225)], w[ah(0x225)])) {
                const a3 = [];
                q[ai(0x29e)](a4 => {
                    const an = ah, ao = ah, a5 = {};
                    a5[an(0x27f)] = w[ao(0x1ce)];
                    const a6 = a5;
                    if (w[ao(0x1b5)](w[ao(0x1fa)], w[an(0x1fa)]))
                        throw new G[(an(0x1f6))](a6[ao(0x27f)], 0x335 * -0xc + -0x64c + 0x114 * 0x2b);
                    else {
                        const a8 = K[an(0x1fb)](a9 => Number(a4) == a9);
                        if (w[an(0x1a2)](a8, -(0x2088 + -0x10c3 + -0xfc4))) {
                            if (w[ao(0x2bd)](w[ao(0x1e0)], w[ao(0x1e0)]))
                                a3[an(0x274)](w[ao(0x28c)](Number, a4));
                            else {
                                const aa = {};
                                return aa[an(0x235)] = G['id'], aa;
                            }
                        }
                    }
                }), K = a3[ah(0x259)] ? a3 : [-0xc9 + 0x1d00 + 0x1 * -0x1c37];
            } else {
                const a5 = O[ai(0x1fb)](a6 => o(p) == a6);
                w[ai(0x1a2)](a5, -(-0xfd1 + 0x2b * -0xd4 + 0x336e)) && o[ai(0x274)](w[ai(0x1c8)](p, q));
            }
        }
        !K[ai(0x259)] && (w[ai(0x210)](w[ai(0x198)], w[ai(0x2c9)]) ? f[ai(0x274)](w[ah(0x294)](g, h)) : K = [-0x1004 + -0x1060 + 0x2 * 0x1032]);
        let L;
        if (w[ah(0x299)](v, w[ai(0x2a9)]))
            w[ai(0x210)](w[ah(0x2b5)], w[ai(0x25d)]) ? (g = h[0x9da + -0x3f0 + -0x5ea * 0x1][ai(0x267)], O = P[ah(0x259)]) : L = L = ah(0x1f8) + ah(0x268) + ai(0x1aa) + ah(0x211) + ah(0x27a) + ai(0x292) + ai(0x232) + ah(0x1f7) + ai(0x1c0) + ai(0x17e) + ah(0x1c3) + ai(0x23e) + ai(0x281) + ah(0x1c6) + ai(0x284) + ah(0x17a) + ah(0x21e) + ah(0x236) + ai(0x23c) + ai(0x223) + ai(0x15e) + ai(0x14c) + ai(0x217) + ah(0x23d) + ai(0x296) + ah(0x26b) + ai(0x22d) + ai(0x1cd) + ah(0x1e8) + ai(0x16d) + ah(0x1bf) + ai(0x1fc) + ah(0x1f4) + ai(0x14a) + ah(0x1a8) + ah(0x1ad) + ah(0x1de) + ai(0x208) + ah(0x173) + ai(0x14e) + ah(0x1bf) + ah(0x233) + ah(0x25c) + ai(0x183) + ah(0x184) + ah(0x188) + ai(0x157) + ai(0x1a7) + ai(0x22b) + ai(0x2b7) + ai(0x179) + ah(0x14f) + ai(0x25a) + ai(0x293) + ai(0x166) + ah(0x1fe) + ai(0x178) + ah(0x298) + ai(0x2a4) + ah(0x29c) + ah(0x2a8) + ai(0x216) + ai(0x2aa) + ai(0x26c) + ah(0x1c9) + ah(0x21f) + ah(0x2ab) + ah(0x195) + ai(0x190) + ai(0x248) + ah(0x177) + ah(0x16e) + ai(0x266) + ah(0x27e) + ah(0x244) + ai(0x2d2) + ah(0x14b) + ai(0x1b1) + ai(0x1eb) + ah(0x222) + ah(0x24c) + ah(0x1d8) + ah(0x165) + ah(0x239) + ai(0x2af) + ah(0x1da) + ah(0x196) + ah(0x2a0) + ah(0x2a6) + ai(0x246) + ah(0x2d1) + ah(0x240) + ai(0x1e3) + ai(0x264) + ai(0x2a7) + ah(0x19e) + ai(0x1a5) + ah(0x2ca) + ah(0x15d) + ah(0x2d3) + (ah(0x15c) + ai(0x29a) + ah(0x29d) + ah(0x1ca) + ah(0x152) + ai(0x257) + ah(0x2d1) + ai(0x28f) + ai(0x149) + ai(0x253) + ai(0x231) + ah(0x1b3) + ah(0x263) + ai(0x169) + ah(0x1a0) + ai(0x20e) + ah(0x2c4) + ai(0x1ae) + ah(0x17b) + ai(0x1d0) + ah(0x1f1) + ai(0x18b) + ai(0x20c) + ai(0x22e) + ah(0x158) + ah(0x186) + ai(0x18e) + ai(0x148) + ai(0x194) + ai(0x26f) + ai(0x146) + ai(0x167) + ai(0x1ec) + ai(0x1af) + ah(0x25b) + ai(0x1d0) + ai(0x1f1) + ah(0x1c7) + ai(0x1b0) + ai(0x242) + ai(0x291) + ai(0x1a3) + ah(0x21c) + ai(0x215) + ah(0x2b3) + ah(0x182) + ai(0x277) + ah(0x1d5) + ai(0x2a5) + ah(0x28e) + ai(0x16c) + ai(0x27b));
        else {
            if (w[ai(0x2bd)](w[ai(0x1c4)], w[ai(0x2cb)])) {
                const a8 = [];
                h[ai(0x29e)](a9 => {
                    const ap = ah, aq = ai, aa = a8[ap(0x1fb)](ab => p(a9) == ab);
                    w[aq(0x1a2)](aa, -(-0x147b + -0x1254 + 0x26d0)) && a8[ap(0x274)](w[aq(0x192)](p, a9));
                }), l = a8[ah(0x259)] ? a8 : [-0x3 * -0xbd5 + 0x2 * 0x529 + -0x2dd1];
            } else
                L = ai(0x1f8) + ai(0x268) + ah(0x1aa) + ah(0x211) + ai(0x27a) + ai(0x292) + ai(0x232) + ai(0x1f7) + ai(0x1c0) + ai(0x17e) + ah(0x1c3) + ai(0x23e) + ai(0x281) + ah(0x1c6) + ai(0x284) + ai(0x17a) + ai(0x21e) + ai(0x236) + ai(0x23c) + ai(0x223) + ai(0x15e) + ah(0x14c) + ai(0x217) + ah(0x23d) + ah(0x296) + ah(0x26b) + ah(0x22d) + ai(0x1cd) + ah(0x1e8) + ah(0x16d) + ah(0x1bf) + ah(0x1fc) + ah(0x1f4) + ah(0x14a) + ai(0x1a8) + ai(0x1ad) + ai(0x1de) + ai(0x208) + ai(0x173) + ai(0x14e) + ah(0x1bf) + ai(0x233) + ai(0x25c) + ai(0x183) + ah(0x184) + ah(0x188) + ai(0x157) + ai(0x1a7) + ai(0x22b) + ai(0x2b7) + ai(0x179) + ah(0x14f) + ah(0x25a) + ai(0x293) + ai(0x166) + ai(0x1fe) + ai(0x178) + ah(0x298) + ah(0x2a4) + ah(0x29c) + ai(0x2a8) + ah(0x22a) + ai(0x2a0) + ai(0x2a6) + ah(0x1bd) + ah(0x20a) + ah(0x2ae) + ai(0x22f) + ah(0x22c) + ah(0x288) + ai(0x20d) + ah(0x214) + ai(0x171) + ah(0x172) + ah(0x2b2) + ah(0x163) + ah(0x14a) + ai(0x1c1) + ah(0x2c3) + ah(0x24e) + ah(0x1fd) + ah(0x24d) + ai(0x28b) + ai(0x19d) + ai(0x251) + ai(0x27c) + ah(0x1e6) + ah(0x1a6) + ah(0x25f) + ai(0x271) + ah(0x289) + ai(0x1ac) + ai(0x1e9) + ah(0x19f) + ah(0x24a) + ai(0x16a) + ah(0x197) + ai(0x1b9) + ai(0x1cf) + ai(0x190) + (ah(0x269) + ah(0x205) + ah(0x28a) + ah(0x258) + ai(0x2b6) + ah(0x203) + ah(0x265) + ai(0x1dc) + ai(0x14d) + ai(0x1d3) + ah(0x1b1) + ai(0x1ef) + ai(0x247) + ai(0x23b) + ah(0x19b) + ah(0x18a) + ah(0x261) + ah(0x1b7) + ai(0x1ba) + ai(0x283) + ah(0x28d) + ah(0x212) + ai(0x26e) + ai(0x1d1) + ai(0x154) + ai(0x276) + ah(0x1cb) + ai(0x2d5) + ai(0x159) + ai(0x1cc) + ai(0x15f) + ah(0x1f3) + ai(0x17f) + ah(0x1db) + ai(0x1be) + ai(0x176) + ah(0x2ac) + ai(0x206) + ai(0x254) + ai(0x16f) + ai(0x2c5) + ai(0x15b) + ai(0x170) + ai(0x290) + ai(0x243) + ai(0x279) + ai(0x26a) + ah(0x256) + ah(0x262) + ai(0x2a3) + ah(0x2c8) + ah(0x202) + ah(0x2ac) + ah(0x206) + ah(0x1e2) + ah(0x19a) + ah(0x181) + ai(0x207) + ah(0x175) + ai(0x1b8) + ah(0x2ca) + ah(0x295) + ah(0x27d) + ai(0x2bc) + ah(0x147) + ai(0x286) + ai(0x1bc) + ah(0x1df) + ai(0x213));
        }
        const M = 0x1 * -0xc20 + 0x191b + -0xcdd * 0x1, N = w[ah(0x209)](M, w[ah(0x29b)](+pageNumber, 0x239b * -0x1 + 0x495 * 0x2 + 0x1a72)), O = {};
        O[ah(0x278)] = u, O[ah(0x1ab) + 's'] = B, O[ah(0x275)] = l, O[ah(0x1b2)] = A, O[ai(0x21d) + ah(0x280)] = H, O[ai(0x1c2) + ah(0x1a9)] = K, O[ai(0x1ff)] = o, O[ai(0x273)] = y, O[ah(0x2d3) + ai(0x2a2)] = z, O[ai(0x252) + ai(0x2ce)] = C, O[ai(0x25e) + 'm'] = '%' + searchParam + '%', O[ah(0x260)] = M, O[ai(0x161)] = N, O[ai(0x272) + ah(0x15a) + ai(0x250)] = E, O[ah(0x23a)] = v;
        const P = {};
        P[ah(0x224) + 'ts'] = O, P[ai(0x2b8)] = sequelize_1[ah(0x199)][ai(0x24b)], P[ai(0x218)] = !![];
        const Q = await Ticket_1[ah(0x1f6)][ah(0x20b)]?.[ah(0x285)](L, P);
        let R = -0x7da + 0x7e6 + -0x3 * 0x4, S = 0x88d * -0x2 + 0x98b + 0x78f;
        Q?.[ah(0x259)] && (R = Q[0x140a + 0x11 * 0xa7 + -0x1f21 * 0x1][ai(0x267)], S = Q[ai(0x259)]);
        const T = w[ai(0x2b9)](R, w[ai(0x191)](N, S)), U = {};
        return U[ah(0x1f0)] = Q || [], U[ah(0x267)] = R, U[ai(0x23f)] = T, U;
    };
exports[ae(0x1f6)] = ListTicketsService;
function a() {
    const ar = [
        'cUrl\x22,\x0a\x20\x20\x20',
        'n\x20\x22Queues\x22',
        'NotViewAss',
        'queueId',
        '\x22\x20,\x20\x27isDel',
        'ls/User',
        '2110OfOGCv',
        'owAll\x20=\x20\x27S',
        'profile',
        'tus\x20))\x20or\x20',
        'eted\x27\x20,\x20w.',
        '\x22Tickets\x22\x20',
        '\x20q.queue,\x0a',
        'hasMore',
        '(\x20:isUnrea',
        '42005VGxpTa',
        '\x20like\x20:sea',
        'ists\x20(sele',
        'ts\x22\x20cw\x20whe',
        '1874119pgfFuz',
        't\x20=\x20\x27N\x27)\x20)',
        '\x20in\x20(\x20:sta',
        '\x22\x20=\x20:userI',
        'MqRbi',
        'sUnread\x20=\x20',
        'SELECT',
        '\x22contactId',
        'll\x20=\x20\x27S\x27)\x20',
        ')\x0a\x20\x20\x20\x20)\x20OR',
        'RjyZn',
        'kets',
        'ue)\x20OR\x20(:i',
        'isSearchPa',
        '\x27\x20and\x20(\x20/*',
        'aram)\x0a\x20\x20\x20\x20',
        'ERR_NO_STA',
        '\x20c\x20where\x20c',
        'ed\x20=\x20\x27N\x27))',
        '=\x20\x27N\x27))\x0a\x20\x20',
        'length',
        'nd\x20t.statu',
        'r(c.\x22name\x22',
        '\x20q\x20on\x20(t.\x22',
        'XvQAQ',
        'searchPara',
        '\x20\x20and\x20((\x20:',
        'limit',
        'and\x20t.stat',
        '.id\x20=\x20t.\x22c',
        't\x201\x20from\x20\x22',
        'nd\x20t.\x22unre',
        'signedTick',
        '1\x20from\x20\x22Co',
        'count',
        't\x0a\x20\x20\x20\x20coun',
        '\x22\x20is\x20null)',
        '\x22Contacts\x22',
        'r\x20join\x20\x22Wh',
        'and\x20\x20(\x0a\x20\x20\x20',
        'FImzL',
        's\x20=\x20\x27N\x27))\x0a',
        '\x20\x22Contacts',
        '162akGtHq',
        'isUnread\x20=',
        'isNotViewA',
        'isUnread',
        'push',
        'status',
        'aram\x20=\x20\x27S\x27',
        '.\x22updatedA',
        'tenantId',
        'ct\x201\x20from\x20',
        'nt,\x0a\x20\x20\x20\x20c.',
        ';\x0a\x20\x20',
        'sExistsQue',
        'rder\x20by\x20t.',
        'ntactWalle',
        'JwmKT',
        'eueTenant',
        '\x20\x20\x20\x20jsonb_',
        'ukHRb',
        ')\x20OR\x20(:isN',
        'ct(\x27id\x27,\x20w',
        'query',
        '\x20limit\x20:li',
        'SlcoW',
        'select\x201\x20f',
        '\x20\x27S\x27\x20\x20and\x20',
        'tAssigned\x20',
        'OR\x20(t.\x22isG',
        'EfpAe',
        'otViewAssi',
        'imit\x20offse',
        '(:isSearch',
        'am)\x20or\x20(ex',
        'rchParam))',
        '\x22profilePi',
        's\x20in\x20(\x20:st',
        'JNRMm',
        '\x20\x20\x20)\x0a\x20\x20\x20\x20o',
        't\x0a\x20\x20\x20\x20inne',
        'key',
        'ueId\x22,\x200)\x20',
        'UCIeJ',
        'and\x20t.\x22use',
        'tzuqU',
        'esIdsUser\x20',
        'rId\x22\x20is\x20nu',
        'forEach',
        'ignedTicke',
        '(:isExists',
        '../Setting',
        'ned',
        'ontactId\x22\x20',
        'in\x20(\x20:queu',
        '\x20\x20limit\x20:l',
        'QueueTenan',
        'adMessages',
        ')\x0a\x20\x20\x20\x20and\x20',
        'LQmOz',
        'All\x20=\x20\x27N\x27\x20',
        'nant\x20=\x20\x27S\x27',
        '\x20like\x20uppe',
        'Services/L',
        '\x22userId\x22\x20=',
        '\x27)\x20OR\x20(t.\x22',
        'qRKMd',
        'iBLJu',
        'Id\x22\x20=\x20:use',
        '\x20\x20\x20\x20)\x0a\x20\x20\x20\x20',
        'yRcrv',
        'MEXPo',
        '\x20\x20and\x20((:i',
        'c.\x22tenantI',
        'type',
        'onbvY',
        'ls/UsersQu',
        'frJXO',
        '\x22updatedAt',
        'ZfLOj',
        'enabled',
        'YbTmE',
        'rpBtk',
        'NmClE',
        'map',
        'ntactId\x22)\x20',
        '\x20=\x20t.id\x0a\x20\x20',
        '(t.id::var',
        'TjWFf',
        'WMvNF',
        'and\x20(upper',
        'zoYQf',
        '\x20=\x20\x27N\x27))\x0a\x20',
        'eqEFo',
        'find',
        'sService',
        'ram',
        'rs/AppErro',
        'isActive',
        '\x0a\x20\x20\x20\x20and\x20(',
        're\x20cw.\x22wal',
        'isNotAssig',
        'tFmqW',
        'xists\x20(\x0a\x20\x20',
        'tIOCa',
        '\x22\x20c\x20where\x20',
        '\x22\x20desc\x0a\x20\x20\x20',
        'xists\x20(sel',
        'Param\x20=\x20\x27S',
        '.\x22contactI',
        'letId\x22\x20=\x20:',
        'p,\x0a\x20\x20\x20\x20t.*',
        'and\x20((t.\x22u',
        'serId\x22)\x0a\x20\x20',
        'ntId\x0a\x20\x20\x20\x20a',
        'jDpXz',
        'kRaGU',
        'sNotAssign',
        'qyHBf',
        ':isSearchP',
        'uJosl',
        '8382164aGvKWj',
        'tenantId\x22\x20',
        'rchar\x20like',
        '\x20\x20\x20\x20select',
        'ssignedTic',
        'char\x20like\x20',
        'ned\x20=\x20\x27S\x27\x20',
        '\x20\x20\x20and\x20((:',
        '\x22)\x20whatsap',
        'essages\x22\x20m',
        'open',
        'offset',
        'pending',
        'rId\x20and\x20cw',
        'CWtTb',
        '\x20OR\x20(:isSh',
        'atus\x20)\x0a\x20\x20\x20',
        'c.id\x20=\x20t.\x22',
        'xHsHV',
        'Messages\x22\x20',
        '\x27N\x27))\x0a\x20\x20\x20\x20',
        'IkSEV',
        't\x20:offset\x20',
        'appId\x22)\x0a\x20\x20',
        's\x20(select\x20',
        '\x20\x20)\x20or\x20*/\x20',
        ':searchPar',
        '\x20cw\x20where\x20',
        'cw.\x22wallet',
        '.id\x20=\x20t.\x22u',
        'erty',
        ')\x20OR\x20(:isS',
        'er(m.body)',
        'd\x20or\x20exist',
        'sce(t.\x22que',
        'd\x22\x20=\x20:tena',
        '.id,\x20\x27name',
        'per(m.body',
        'tnKMn',
        '99884SPFlpb',
        'me\x22\x20as\x20use',
        'ticketId\x22\x20',
        'eues',
        'like\x20:sear',
        'order\x20by\x20t',
        'queueId\x22\x20=',
        '\x20q.id)\x0a\x20\x20\x20',
        'closed',
        '\x20:searchPa',
        'true',
        '\x20where\x20t.\x22',
        'IazUH',
        '\x22\x20is\x20null\x20',
        'Param)\x0a\x20\x20\x20',
        '__importDe',
        'istSetting',
        'ram)\x20or\x20(e',
        'UkIyL',
        '\x20t.\x22userId',
        'sUECe',
        'xDvOX',
        '../../mode',
        'ect\x201\x20from',
        ')\x0a\x20\x20\x20\x20\x20\x20or',
        '\x20true)\x20OR\x20',
        'and\x20((:isN',
        'zFchE',
        'QueryTypes',
        '.\x22number\x22\x20',
        '(t.\x22userId',
        'ls/Queue',
        'roup\x22\x20=\x20tr',
        '\x22\x20>\x200)\x20OR\x20',
        '\x200)\x20OR\x20(:i',
        'm\x20where\x20m.',
        '618682LSkxgK',
        'MJFww',
        '))\x20OR\x20(:is',
        '3982XsugtE',
        '(:isUnread',
        '\x20\x27N\x27)\x20)\x0a\x20\x20',
        '=\x20:tenantI',
        'd\x22\x20=\x20c.id)',
        'ser',
        't(*)\x20OVER\x20',
        'isQueuesId',
        't.\x22unreadM',
        '\x0a\x20\x20\x20\x20left\x20',
        '\x20\x20\x20\x20and\x20up',
        '\x20and\x20(uppe',
        'c.\x22number\x22',
        'userId\x20and',
        'isShowAll',
        '\x20\x20\x20\x20\x20selec',
        'ryVOw',
        'LiOWe',
        'TUS_SELECT',
        'us\x20\x20in\x20(\x20:',
        'earchParam',
        'otAssigned',
        'status\x20)))',
        'where',
        'mit\x20offset',
        't\x20=\x20\x27S\x27)\x0a\x20',
        '\x20\x20\x20and\x20upp',
        '\x20\x20left\x20joi',
        '\x0a\x20\x20\x20\x20u.\x22na',
        'd\x22\x20=\x20t.\x22co',
        'queuesIdsU',
        'rname,\x0a\x20\x20\x20',
        'nGers',
        '64608nltoMd',
        'build_obje',
        'Param)\x20or\x20',
        'xDLUn',
        '\x20\x20\x20(:isExi',
        'll)\x20OR\x20(:i',
        '\x20and\x20(\x20/*e',
        '\x201\x20from\x20\x22M',
        '\x20on\x20(w.id\x20',
        'sNASy',
        '\x20=\x20\x27S\x27\x20and',
        ')\x20like\x20upp',
        '\x20\x20\x20\x20and\x20((',
        'lopyW',
        'serId\x22\x20=\x20:',
        'OYDJO',
        't\x22\x20desc\x0a\x20\x20',
        'BVefM',
        'orvJy',
        '\x22)\x20)\x0a\x20\x20\x20\x20)',
        'MuRUN',
        'isGroup\x22\x20=',
        '=\x20t.id\x0a\x20\x20\x20',
        'ets\x20=\x20\x27S\x27\x20',
        'jtqHm',
        'join\x20\x22User',
        '\x20:offset\x20;',
        'hxBes',
        '../../erro',
        'aram)\x20or\x20c',
        'd\x20=\x20\x27S\x27\x20\x20a',
        'EjHgl',
        '51umLUdi',
        'ueTenant\x20=',
        'hseAY',
        '=\x20t.\x22whats',
        'essages\x22\x20>',
        'defineProp',
        '\x20cw.\x22conta',
        'contactId\x22',
        'YKgQn',
        'attributes',
        '\x20t.status\x20',
        'tickets',
        'er(:search',
        '4jyzlND',
        '\x20where\x20m.\x22',
        's\x22\x20c\x20on\x20(t',
        'oJMdc',
        'default',
        '\x20c.\x22name\x22,',
        '\x0a\x20\x20\x20\x20selec',
        'fault',
        'kWwCE',
        'findIndex',
        'n\x20\x22Contact',
        '\x20(:isShowA',
        '\x20and\x20coale',
        'userId',
        'aiGXL',
        'fhXMg',
        '(c.\x22name\x22)',
        'sNotViewAs',
        '1746zAsjrQ',
        '\x20OR\x20(:isNo',
        'r(:searchP',
        'chParam)))',
        's\x22\x20u\x20on\x20(u',
        'yuvku',
        '\x20\x20\x20\x20\x20or\x20t.',
        'sequelize',
        '\x20\x20\x20)\x20or\x20*/',
        'rom\x20\x22Conta',
        '\x22ticketId\x22',
        'ls/Ticket',
        'iDGbN',
        '(\x20)\x20as\x20cou',
        'gnedTicket',
        '\x0a\x20\x20',
        'ctWallets\x22',
        'm\x20=\x20\x27N\x27))\x0a',
        '((\x20:isShow',
        '\x0a\x20\x20\x20\x20from\x20',
        'nest',
        '120qnpCyb',
        'value',
        'FaSAw',
        'SearchPara',
        'isExistsQu',
        '\x27,\x20w.\x22name',
        'stsQueueTe',
        'HRPhe',
        '__esModule',
        'ctId\x22\x20=\x20t.',
        '\x22isDeleted',
        'replacemen',
        'ellkX',
        'admin',
        'sezJO',
        'qQqQc',
        'findAll',
        '(((\x0a\x20\x20\x20\x20\x20\x20',
        'd\x0a\x20\x20\x20\x20and\x20',
        'r\x20exists\x20(',
        'atsapps\x22\x20w',
        '\x20(t.id::va',
        '\x20:userId\x20o',
        'findByPk',
        'exists\x20(\x0a\x20'
    ];
    a = function () {
        return ar;
    };
    return a();
}