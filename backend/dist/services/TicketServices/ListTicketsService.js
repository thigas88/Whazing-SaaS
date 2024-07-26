'use strict';
const ad = b, ae = b;
(function (c, d) {
    const ab = b, ac = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ab(0x2e7)) / (0x1 * 0x851 + 0x260d + 0x53 * -0x8f) * (-parseInt(ac(0x2a5)) / (-0xf27 + 0x1375 + -0x44c)) + -parseInt(ac(0x29e)) / (-0xf8f + 0x2 * -0x425 + 0x17dc) + -parseInt(ac(0x23a)) / (-0x16 * 0x89 + -0x3d2 * -0x6 + -0x1e * 0x5f) + -parseInt(ab(0x241)) / (-0x177c + 0x6b1 * -0x2 + 0x24e3) * (parseInt(ab(0x192)) / (-0x925 * -0x2 + 0x1 * -0x1cd + 0xf * -0x119)) + parseInt(ac(0x298)) / (-0x1187 * -0x2 + 0x1405 + 0xdc3 * -0x4) * (-parseInt(ab(0x252)) / (-0x1955 * -0x1 + 0x14aa + -0x2df7)) + -parseInt(ac(0x292)) / (-0x49 * 0xd + -0x1 * -0x191f + -0x1561) * (-parseInt(ac(0x2ae)) / (-0x7b * 0x44 + -0x675 * -0x1 + 0x8f * 0x2f)) + parseInt(ab(0x2fd)) / (-0x1 * 0x1e1d + -0x87d + 0x26a5) * (parseInt(ac(0x27c)) / (-0x2135 + -0xa23 * 0x1 + 0x2b64));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1204e * -0x3 + 0xf4a2 * 0x4 + 0x2 * 0x191e4));
var __importDefault = this && this[ad(0x2c9) + ad(0x1f9)] || function (c) {
    const af = ae;
    return c && c[af(0x238)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xfc1 + 0x12 * -0x23 + 0x2378);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = {};
t[ad(0x232)] = !![], Object[ad(0x239) + ae(0x18c)](exports, ad(0x238), t);
const sequelize_1 = require(ae(0x245)), Ticket_1 = __importDefault(require(ae(0x288) + ad(0x207))), UsersQueues_1 = __importDefault(require(ae(0x288) + ae(0x1b3) + ae(0x1ac))), AppError_1 = __importDefault(require(ad(0x246) + ad(0x25e) + 'r')), Queue_1 = __importDefault(require(ad(0x288) + ad(0x293))), User_1 = __importDefault(require(ad(0x288) + ad(0x225))), ListSettingsService_1 = __importDefault(require(ad(0x2a4) + ae(0x260) + ae(0x285) + ae(0x1a8))), ListTicketsService = async ({
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
        const ag = ad, ah = ad, w = {
                'kqRzy': function (V, W) {
                    return V === W;
                },
                'kFqgo': ag(0x268),
                'iBbZx': function (V, W) {
                    return V === W;
                },
                'GXJvv': ah(0x247) + ah(0x202) + 'ts',
                'eqmSd': ah(0x19a) + ah(0x1fc) + 'ED',
                'YxJdL': ah(0x25f),
                'KEKZg': ag(0x2c3),
                'jBPLr': ah(0x236),
                'lEjCs': ah(0x223),
                'NMDGK': function (V, W) {
                    return V > W;
                },
                'oHnpp': function (V, W) {
                    return V(W);
                },
                'jYAHe': function (V, W) {
                    return V > W;
                },
                'JVRDr': ah(0x29a),
                'UVZLm': ag(0x258),
                'weEPu': ah(0x1d5),
                'hOHqN': function (V, W) {
                    return V(W);
                },
                'rfAxo': function (V, W) {
                    return V == W;
                },
                'TQACb': ah(0x1c7),
                'mNSER': function (V, W) {
                    return V === W;
                },
                'jdLCw': ah(0x1f2),
                'gMGie': function (V, W) {
                    return V == W;
                },
                'MFRmr': ag(0x2bd),
                'iUewt': function (V, W) {
                    return V && W;
                },
                'zrdQM': function (V, W) {
                    return V !== W;
                },
                'dSqAa': ag(0x1c4),
                'pYHLg': ag(0x2f4),
                'EYIiq': ah(0x295),
                'orqXi': ag(0x1ee),
                'VLGKf': function (V, W) {
                    return V > W;
                },
                'DmsfS': function (V, W) {
                    return V === W;
                },
                'iziiV': ah(0x194),
                'MKrYs': ah(0x267),
                'WXUvR': ag(0x2bf),
                'KGiMh': ag(0x204),
                'vHlgt': function (V, W) {
                    return V === W;
                },
                'ORXdg': ag(0x290),
                'MLHAo': ah(0x1d2),
                'dDEBT': ag(0x2ce),
                'sFigr': ag(0x234),
                'SOtPf': ah(0x1e9),
                'TInws': ag(0x1d1),
                'lNdVX': function (V, W) {
                    return V * W;
                },
                'weXmZ': function (V, W) {
                    return V - W;
                },
                'JIOWe': function (V, W) {
                    return V + W;
                }
            }, x = w[ah(0x2d2)](n, w[ag(0x1e2)]) && w[ag(0x1e0)](v, w[ag(0x280)]), y = p && w[ag(0x2b9)](p, w[ah(0x1e2)]) ? 'S' : 'N', z = r && w[ag(0x2d2)](r, w[ah(0x1e2)]) ? 'S' : 'N', A = x ? 'S' : 'N', B = q ? 'S' : 'N', C = searchParam ? 'S' : 'N', D = await (-0x7f9 + -0x2 * -0xdb7 + 0x125 * -0x11, ListSettingsService_1[ah(0x2bc)])(u), E = w[ag(0x1e0)](D?.[ag(0x1b9)](V => {
                const ai = ah, aj = ag;
                if (w[ai(0x1e5)](w[ai(0x2f8)], w[aj(0x2f8)]))
                    return w[ai(0x2da)](V[aj(0x26a)], w[ai(0x1c5)]);
                else {
                    const X = {};
                    return X[ai(0x2bc)] = P, g && h[aj(0x238)] ? O : X;
                }
            })?.[ah(0x232)], w[ag(0x28e)]) ? 'S' : 'N';
        if (w[ag(0x2f2)](!l, !x)) {
            if (w[ag(0x1fb)](w[ag(0x2e3)], w[ag(0x222)]))
                throw new AppError_1[(ag(0x2bc))](w[ah(0x27d)], -0x19d7 + 0x2692 * -0x1 + -0x3 * -0x15ff);
            else
                throw new G[(ag(0x2bc))](w[ah(0x27d)], -0x1 * 0x1cec + 0x1238 * -0x2 + 0x42f0);
        }
        if (x) {
            if (w[ah(0x1fb)](w[ah(0x249)], w[ag(0x1e8)]))
                l = [
                    w[ag(0x254)],
                    w[ah(0x1ff)],
                    w[ag(0x1c2)]
                ];
            else
                return w[ah(0x2da)](G[ah(0x26a)], w[ah(0x1c5)]);
        }
        const F = {};
        F[ag(0x291)] = u;
        const G = {};
        G[ag(0x1a9)] = F;
        const H = w[ag(0x1ec)](await Queue_1[ah(0x2bc)][ah(0x20f)](G), -0x9 * 0x19d + -0xbb * -0x13 + -0x1 * -0xa4) ? 'S' : 'N', I = await User_1[ag(0x2bc)][ah(0x1f6)](o);
        let J;
        if (w[ag(0x2cf)](I[ag(0x1b8)], w[ag(0x280)])) {
            if (w[ah(0x1fb)](w[ag(0x270)], w[ah(0x22c)])) {
                const X = {};
                X[ag(0x291)] = u, X[ag(0x303)] = !![];
                const Y = {};
                Y[ag(0x1a9)] = X, Y[ag(0x1db)] = ['id'], J = await Queue_1[ah(0x2bc)][ag(0x28c)](Y), J = J[ag(0x29c)](Z => {
                    const ak = ah, al = ag;
                    if (w[ak(0x1e5)](w[al(0x243)], w[al(0x243)])) {
                        const a0 = {};
                        return a0[al(0x23c)] = Z['id'], a0;
                    } else
                        G = al(0x26f) + al(0x1af) + al(0x27a) + al(0x21c) + ak(0x255) + ak(0x2cc) + al(0x1ba) + al(0x21f) + al(0x19f) + ak(0x2a7) + ak(0x1ad) + ak(0x287) + ak(0x233) + al(0x19b) + al(0x253) + ak(0x2a8) + al(0x244) + al(0x1c6) + al(0x2c8) + al(0x2a1) + al(0x1ed) + ak(0x2b3) + ak(0x2e0) + al(0x20a) + al(0x2f1) + al(0x210) + ak(0x22a) + ak(0x28f) + al(0x1bd) + al(0x1b2) + ak(0x23f) + al(0x2b8) + al(0x1ea) + ak(0x273) + ak(0x1ce) + al(0x256) + ak(0x2d9) + al(0x2fc) + ak(0x1aa) + al(0x2a9) + al(0x23f) + ak(0x2dd) + ak(0x1ef) + ak(0x2b7) + al(0x24e) + ak(0x237) + al(0x25c) + ak(0x198) + ak(0x1df) + ak(0x1b6) + ak(0x29f) + ak(0x2e4) + al(0x265) + ak(0x23b) + al(0x1b0) + al(0x2b0) + ak(0x1a1) + al(0x1d4) + al(0x262) + ak(0x306) + ak(0x20e) + al(0x248) + al(0x1f4) + ak(0x185) + ak(0x1f0) + ak(0x2e8) + al(0x1e6) + ak(0x30a) + al(0x2a3) + al(0x2d8) + ak(0x2eb) + al(0x213) + ak(0x21b) + ak(0x21e) + al(0x2db) + al(0x227) + al(0x273) + ak(0x271) + ak(0x2df) + ak(0x216) + al(0x2d6) + ak(0x215) + al(0x284) + ak(0x217) + ak(0x308) + al(0x1ab) + ak(0x2fb) + ak(0x22e) + al(0x2ea) + al(0x1c8) + ak(0x1cb) + al(0x266) + al(0x2ba) + al(0x2ef) + ak(0x22f) + al(0x2d7) + ak(0x1eb) + ak(0x208) + ak(0x197) + al(0x218) + (al(0x2af) + al(0x180) + al(0x1d9) + ak(0x199) + ak(0x269) + al(0x1f7) + al(0x2c2) + al(0x2ed) + ak(0x301) + al(0x2ca) + ak(0x257) + al(0x309) + al(0x1f5) + ak(0x21d) + al(0x18b) + ak(0x28a) + ak(0x2f5) + ak(0x20d) + ak(0x263) + ak(0x305) + al(0x1f1) + al(0x2a2) + al(0x203) + al(0x196) + al(0x211) + ak(0x2f9) + ak(0x1a4) + ak(0x2fa) + al(0x2ac) + ak(0x224) + al(0x272) + ak(0x1c9) + ak(0x206) + ak(0x1ae) + ak(0x219) + ak(0x191) + ak(0x19d) + al(0x2dc) + al(0x195) + al(0x2be) + ak(0x1a7) + ak(0x20c) + al(0x27f) + ak(0x2ab) + al(0x304) + al(0x2a6) + ak(0x299) + ak(0x26d) + al(0x264) + al(0x26c) + ak(0x261) + al(0x2ee) + al(0x19d) + ak(0x2dc) + al(0x1e1) + al(0x2c7) + al(0x2f3) + ak(0x1be) + al(0x277) + al(0x2f7) + al(0x184) + ak(0x235) + ak(0x1fe) + ak(0x30b) + ak(0x188) + ak(0x2e5) + ak(0x1a3) + ak(0x30c) + al(0x2d5));
                });
            } else
                G = [
                    w[ag(0x254)],
                    w[ah(0x1ff)],
                    w[ah(0x1c2)]
                ];
        } else {
            if (w[ah(0x2da)](w[ah(0x1a6)], w[ah(0x1a6)])) {
                const a0 = {};
                a0[ag(0x1cd)] = o;
                const a1 = {};
                a1[ag(0x1a9)] = a0, J = await UsersQueues_1[ah(0x2bc)][ag(0x28c)](a1);
            } else
                e = f = ag(0x26f) + ag(0x1af) + ag(0x27a) + ah(0x21c) + ah(0x255) + ah(0x2cc) + ah(0x1ba) + ah(0x21f) + ah(0x19f) + ag(0x2a7) + ag(0x1ad) + ag(0x287) + ag(0x233) + ah(0x19b) + ag(0x253) + ah(0x2a8) + ah(0x244) + ag(0x1c6) + ah(0x2c8) + ah(0x2a1) + ah(0x1ed) + ag(0x2b3) + ag(0x2e0) + ag(0x20a) + ag(0x2f1) + ag(0x210) + ag(0x22a) + ah(0x28f) + ah(0x1bd) + ag(0x1b2) + ag(0x23f) + ag(0x2b8) + ah(0x1ea) + ag(0x273) + ag(0x1ce) + ah(0x256) + ah(0x2d9) + ah(0x2fc) + ag(0x1aa) + ah(0x2a9) + ah(0x23f) + ah(0x2dd) + ah(0x1ef) + ag(0x2b7) + ag(0x24e) + ag(0x237) + ah(0x25c) + ag(0x198) + ag(0x1df) + ah(0x1b6) + ag(0x29f) + ag(0x2e4) + ag(0x265) + ah(0x23b) + ah(0x1b0) + ah(0x2b0) + ah(0x1a1) + ah(0x1d4) + ag(0x262) + ag(0x306) + ah(0x20e) + ah(0x1ca) + ag(0x23e) + ah(0x2cb) + ah(0x28b) + ah(0x220) + ah(0x26b) + ah(0x214) + ag(0x218) + ah(0x1de) + ah(0x29d) + ah(0x28d) + ah(0x1a0) + ag(0x2de) + ag(0x2c4) + ag(0x1e7) + ag(0x2e1) + ag(0x257) + ah(0x2b5) + ag(0x25b) + ag(0x230) + ah(0x283) + ag(0x1bc) + ah(0x276) + ah(0x24c) + ag(0x289) + ag(0x181) + ag(0x1f4) + ah(0x185) + ag(0x297) + ah(0x19e) + ag(0x2d3) + ag(0x2c1) + ah(0x2a0) + ag(0x20b) + ah(0x2e6) + ah(0x1b1) + ag(0x184) + ag(0x183) + ah(0x1d8) + (ah(0x2b1) + ag(0x19c) + ag(0x209) + ag(0x18e) + ah(0x2b6) + ag(0x294) + ah(0x19e) + ag(0x22b) + ah(0x250) + ah(0x189) + ah(0x226) + ag(0x278) + ag(0x1c3) + ag(0x307) + ah(0x1b5) + ag(0x2e2) + ah(0x2d0) + ag(0x1e3) + ag(0x18a) + ag(0x1d0) + ag(0x201) + ah(0x300) + ah(0x2ff) + ah(0x2aa) + ag(0x259) + ah(0x1e4) + ah(0x1b7) + ag(0x25d) + ah(0x2b2) + ah(0x22d) + ah(0x2c0) + ah(0x23d) + ag(0x279) + ah(0x1c1) + ah(0x1c0) + ah(0x1d0) + ag(0x201) + ah(0x2d4) + ag(0x281) + ah(0x231) + ah(0x2fe) + ag(0x240) + ah(0x27b) + ah(0x1dc) + ag(0x1a5) + ag(0x2b4) + ag(0x2cd) + ah(0x186) + ah(0x282) + ag(0x1d3) + ah(0x21a) + ag(0x1a2));
        }
        let K = J[ah(0x29c)](a3 => a3[ag(0x23c)]);
        K[ag(0x24f)](0x86c + -0x18c5 + 0x1059);
        if (q) {
            if (w[ah(0x1e5)](w[ah(0x251)], w[ah(0x251)])) {
                const a3 = [];
                q[ag(0x2ad)](a4 => {
                    const ao = ah, ap = ag, a5 = {
                            'HGDDR': function (a6, a7) {
                                const am = b;
                                return w[am(0x1d6)](a6, a7);
                            },
                            'eGtem': function (a6, a7) {
                                const an = b;
                                return w[an(0x27e)](a6, a7);
                            }
                        };
                    if (w[ao(0x1e5)](w[ap(0x1b4)], w[ao(0x205)])) {
                        const a7 = [];
                        h[ao(0x2ad)](a8 => {
                            const aq = ao, ar = ao, a9 = a7[aq(0x1da)](aa => p(a8) == aa);
                            a5[ar(0x1f3)](a9, -(-0x1600 + 0x1eb8 + -0x8b7)) && a7[ar(0x24f)](a5[ar(0x1d7)](p, a8));
                        }), l = a7[ap(0x24b)] ? a7 : [0x19d + 0x853 * -0x1 + 0x35b * 0x2];
                    } else {
                        const a7 = K[ap(0x1da)](a8 => Number(a4) == a8);
                        if (w[ap(0x1d6)](a7, -(0x1dd1 + 0x862 * 0x3 + -0x36f6))) {
                            if (w[ap(0x1e5)](w[ao(0x228)], w[ap(0x228)]))
                                a3[ao(0x24f)](w[ap(0x187)](Number, a4));
                            else {
                                const a9 = a4[ap(0x1da)](aa => o(p) == aa);
                                w[ap(0x190)](a9, -(-0x31 * 0xc4 + 0x2007 * 0x1 + 0x57e)) && o[ap(0x24f)](w[ap(0x27e)](p, q));
                            }
                        }
                    }
                }), K = a3[ah(0x24b)] ? a3 : [-0x152e * 0x1 + -0x1 * -0x347 + 0x11e7];
            } else
                g = h[0xc * -0x220 + 0x1 * -0x2153 + 0xb * 0x559][ag(0x20f)], O = P[ah(0x24b)];
        }
        if (!K[ah(0x24b)]) {
            if (w[ah(0x242)](w[ah(0x2e9)], w[ag(0x24d)])) {
                const a6 = {};
                return a6[ag(0x23c)] = G['id'], a6;
            } else
                K = [-0xbc6 + 0x449 + 0x47 * 0x1b];
        }
        let L;
        w[ag(0x2b9)](v, w[ah(0x280)]) ? w[ag(0x1fb)](w[ag(0x1dd)], w[ag(0x2f0)]) ? L = L = ah(0x26f) + ag(0x1af) + ag(0x27a) + ag(0x21c) + ah(0x255) + ag(0x2cc) + ah(0x1ba) + ah(0x21f) + ag(0x19f) + ah(0x2a7) + ah(0x1ad) + ag(0x287) + ag(0x233) + ah(0x19b) + ah(0x253) + ag(0x2a8) + ag(0x244) + ah(0x1c6) + ah(0x2c8) + ag(0x2a1) + ah(0x1ed) + ah(0x2b3) + ag(0x2e0) + ag(0x20a) + ah(0x2f1) + ah(0x210) + ah(0x22a) + ah(0x28f) + ag(0x1bd) + ah(0x1b2) + ag(0x23f) + ag(0x2b8) + ag(0x1ea) + ah(0x273) + ah(0x1ce) + ag(0x256) + ag(0x2d9) + ah(0x2fc) + ag(0x1aa) + ag(0x2a9) + ag(0x23f) + ah(0x2dd) + ag(0x1ef) + ag(0x2b7) + ag(0x24e) + ah(0x237) + ag(0x25c) + ag(0x198) + ah(0x1df) + ag(0x1b6) + ah(0x29f) + ag(0x2e4) + ah(0x265) + ah(0x23b) + ag(0x1b0) + ag(0x2b0) + ag(0x1a1) + ah(0x1d4) + ag(0x262) + ag(0x306) + ah(0x20e) + ag(0x1ca) + ah(0x23e) + ag(0x2cb) + ah(0x28b) + ag(0x220) + ag(0x26b) + ag(0x214) + ah(0x218) + ag(0x1de) + ah(0x29d) + ag(0x28d) + ah(0x1a0) + ah(0x2de) + ag(0x2c4) + ah(0x1e7) + ah(0x2e1) + ah(0x257) + ag(0x2b5) + ah(0x25b) + ah(0x230) + ah(0x283) + ah(0x1bc) + ag(0x276) + ah(0x24c) + ah(0x289) + ag(0x181) + ag(0x1f4) + ah(0x185) + ag(0x297) + ah(0x19e) + ag(0x2d3) + ag(0x2c1) + ag(0x2a0) + ah(0x20b) + ah(0x2e6) + ag(0x1b1) + ag(0x184) + ah(0x183) + ag(0x1d8) + (ah(0x2b1) + ag(0x19c) + ah(0x209) + ag(0x18e) + ah(0x2b6) + ah(0x294) + ag(0x19e) + ah(0x22b) + ag(0x250) + ag(0x189) + ah(0x226) + ah(0x278) + ah(0x1c3) + ag(0x307) + ah(0x1b5) + ag(0x2e2) + ag(0x2d0) + ag(0x1e3) + ah(0x18a) + ag(0x1d0) + ag(0x201) + ah(0x300) + ah(0x2ff) + ah(0x2aa) + ag(0x259) + ag(0x1e4) + ah(0x1b7) + ag(0x25d) + ah(0x2b2) + ag(0x22d) + ag(0x2c0) + ah(0x23d) + ag(0x279) + ah(0x1c1) + ag(0x1c0) + ag(0x1d0) + ag(0x201) + ah(0x2d4) + ah(0x281) + ah(0x231) + ah(0x2fe) + ag(0x240) + ah(0x27b) + ag(0x1dc) + ag(0x1a5) + ag(0x2b4) + ag(0x2cd) + ah(0x186) + ah(0x282) + ah(0x1d3) + ag(0x21a) + ag(0x1a2)) : f[ag(0x24f)](w[ah(0x27e)](g, h)) : w[ah(0x242)](w[ah(0x1cc)], w[ah(0x2c6)]) ? G = [0x3e5 + -0x12d6 * 0x2 + -0x21c7 * -0x1] : L = ag(0x26f) + ah(0x1af) + ag(0x27a) + ah(0x21c) + ag(0x255) + ag(0x2cc) + ah(0x1ba) + ag(0x21f) + ah(0x19f) + ag(0x2a7) + ag(0x1ad) + ah(0x287) + ag(0x233) + ah(0x19b) + ah(0x253) + ag(0x2a8) + ag(0x244) + ag(0x1c6) + ag(0x2c8) + ag(0x2a1) + ah(0x1ed) + ah(0x2b3) + ag(0x2e0) + ah(0x20a) + ah(0x2f1) + ah(0x210) + ag(0x22a) + ag(0x28f) + ah(0x1bd) + ah(0x1b2) + ah(0x23f) + ah(0x2b8) + ag(0x1ea) + ah(0x273) + ah(0x1ce) + ag(0x256) + ah(0x2d9) + ag(0x2fc) + ah(0x1aa) + ag(0x2a9) + ag(0x23f) + ah(0x2dd) + ah(0x1ef) + ag(0x2b7) + ah(0x24e) + ah(0x237) + ag(0x25c) + ah(0x198) + ah(0x1df) + ag(0x1b6) + ag(0x29f) + ah(0x2e4) + ah(0x265) + ag(0x23b) + ag(0x1b0) + ah(0x2b0) + ah(0x1a1) + ag(0x1d4) + ah(0x262) + ah(0x306) + ag(0x20e) + ah(0x248) + ah(0x1f4) + ag(0x185) + ah(0x1f0) + ag(0x2e8) + ag(0x1e6) + ah(0x30a) + ah(0x2a3) + ah(0x2d8) + ag(0x2eb) + ah(0x213) + ag(0x21b) + ah(0x21e) + ag(0x2db) + ah(0x227) + ag(0x273) + ag(0x271) + ag(0x2df) + ah(0x216) + ah(0x2d6) + ag(0x215) + ah(0x284) + ag(0x217) + ah(0x308) + ah(0x1ab) + ah(0x2fb) + ag(0x22e) + ah(0x2ea) + ag(0x1c8) + ag(0x1cb) + ag(0x266) + ag(0x2ba) + ah(0x2ef) + ah(0x22f) + ah(0x2d7) + ah(0x1eb) + ag(0x208) + ah(0x197) + ah(0x218) + (ah(0x2af) + ag(0x180) + ag(0x1d9) + ag(0x199) + ah(0x269) + ag(0x1f7) + ag(0x2c2) + ah(0x2ed) + ag(0x301) + ah(0x2ca) + ag(0x257) + ag(0x309) + ag(0x1f5) + ag(0x21d) + ag(0x18b) + ag(0x28a) + ah(0x2f5) + ag(0x20d) + ag(0x263) + ag(0x305) + ah(0x1f1) + ah(0x2a2) + ah(0x203) + ag(0x196) + ah(0x211) + ag(0x2f9) + ag(0x1a4) + ah(0x2fa) + ag(0x2ac) + ah(0x224) + ag(0x272) + ah(0x1c9) + ah(0x206) + ah(0x1ae) + ah(0x219) + ah(0x191) + ag(0x19d) + ah(0x2dc) + ag(0x195) + ah(0x2be) + ah(0x1a7) + ag(0x20c) + ah(0x27f) + ah(0x2ab) + ah(0x304) + ag(0x2a6) + ah(0x299) + ah(0x26d) + ag(0x264) + ah(0x26c) + ag(0x261) + ag(0x2ee) + ag(0x19d) + ag(0x2dc) + ag(0x1e1) + ag(0x2c7) + ah(0x2f3) + ag(0x1be) + ah(0x277) + ah(0x2f7) + ah(0x184) + ah(0x235) + ah(0x1fe) + ag(0x30b) + ag(0x188) + ah(0x2e5) + ah(0x1a3) + ah(0x30c) + ah(0x2d5));
        const M = -0x12a5 + -0x2031 + -0x43f * -0xc, N = w[ah(0x1fa)](M, w[ah(0x18d)](+pageNumber, 0x1 * -0x1f97 + -0xab * 0x11 + 0x3 * 0xe51)), O = {};
        O[ah(0x291)] = u, O[ah(0x1f8) + 's'] = B, O[ag(0x1fd)] = l, O[ag(0x193)] = A, O[ag(0x2bb) + ah(0x1bf)] = H, O[ag(0x2ec) + ag(0x275)] = K, O[ah(0x1cd)] = o, O[ah(0x1bb)] = y, O[ah(0x1d8) + ag(0x24a)] = z, O[ah(0x26e) + ag(0x221)] = C, O[ag(0x302) + 'm'] = '%' + searchParam + '%', O[ag(0x1cf)] = M, O[ag(0x296)] = N, O[ah(0x29b) + ah(0x200) + ah(0x2d1)] = E, O[ag(0x1b8)] = v;
        const P = {};
        P[ah(0x2c5) + 'ts'] = O, P[ag(0x229)] = sequelize_1[ag(0x182)][ag(0x212)], P[ag(0x25a)] = !![];
        const Q = await Ticket_1[ah(0x2bc)][ag(0x245)]?.[ag(0x18f)](L, P);
        let R = -0x1 * -0x1dc5 + 0x565 + -0x232a, S = 0x186f + -0x2174 + 0x905 * 0x1;
        Q?.[ag(0x24b)] && (R = Q[0x93a + 0xc1 * -0x33 + 0x1d39 * 0x1][ag(0x20f)], S = Q[ah(0x24b)]);
        const T = w[ag(0x1ec)](R, w[ah(0x2f6)](N, S)), U = {};
        return U[ag(0x286)] = Q || [], U[ah(0x20f)] = R, U[ag(0x274)] = T, U;
    };
exports[ae(0x2bc)] = ListTicketsService;
function a() {
    const as = [
        'limit',
        ')\x20like\x20upp',
        'cAYfT',
        'mbwKU',
        'imit\x20offse',
        'ueId\x22,\x200)\x20',
        'pErnt',
        'jYAHe',
        'eGtem',
        'isNotAssig',
        'tAssigned\x20',
        'findIndex',
        'attributes',
        'm\x20=\x20\x27N\x27))\x0a',
        'dDEBT',
        '\x22\x20=\x20:userI',
        'd\x0a\x20\x20\x20\x20and\x20',
        'mNSER',
        'aram)\x20or\x20c',
        'TQACb',
        '\x20\x20\x20\x20and\x20up',
        '\x20:searchPa',
        'kqRzy',
        '\x22userId\x22\x20=',
        're\x20cw.\x22wal',
        'orqXi',
        'PUiWe',
        's\x22\x20c\x20on\x20(t',
        'and\x20((:isN',
        'VLGKf',
        '\x22)\x20whatsap',
        'QzpiR',
        '\x20q\x20on\x20(t.\x22',
        't\x20=\x20\x27S\x27)\x0a\x20',
        'otViewAssi',
        'admin',
        'HGDDR',
        '(:isExists',
        '\x20in\x20(\x20:sta',
        'findByPk',
        'sNotViewAs',
        'isQueuesId',
        'fault',
        'lNdVX',
        'zrdQM',
        'TUS_SELECT',
        'status',
        'rder\x20by\x20t.',
        'jBPLr',
        'ssignedTic',
        'er(:search',
        'ignedTicke',
        's\x20=\x20\x27N\x27))\x0a',
        'nrliV',
        'UVZLm',
        'ticketId\x22\x20',
        'ls/Ticket',
        'otAssigned',
        'rId\x22\x20is\x20nu',
        '\x22Tickets\x22\x20',
        'adMessages',
        'char\x20like\x20',
        'us\x20\x20in\x20(\x20:',
        ')\x0a\x20\x20\x20\x20and\x20',
        'count',
        'r\x20join\x20\x22Wh',
        ':isSearchP',
        'SELECT',
        'ctWallets\x22',
        ')\x0a\x20\x20\x20\x20\x20\x20or',
        'll\x20=\x20\x27S\x27)\x20',
        ')\x0a\x20\x20\x20\x20)\x20OR',
        'roup\x22\x20=\x20tr',
        '\x20t.\x22userId',
        '\x20\x20\x20and\x20upp',
        't\x20:offset\x20',
        '\x20cw\x20where\x20',
        '(\x20)\x20as\x20cou',
        'tus\x20))\x20or\x20',
        'cw.\x22wallet',
        '\x20c.\x22name\x22,',
        'stsQueueTe',
        'ram',
        'pYHLg',
        'closed',
        '\x201\x20from\x20\x22M',
        'ls/User',
        'exists\x20(\x0a\x20',
        'rId\x20and\x20cw',
        'weEPu',
        'type',
        'atsapps\x22\x20w',
        '(:isSearch',
        'MKrYs',
        '\x20\x22Contacts',
        '\x20\x27N\x27)\x20)\x0a\x20\x20',
        'sUnread\x20=\x20',
        '\x22contactId',
        '\x20like\x20:sea',
        'value',
        '\x20\x20\x20\x20jsonb_',
        'cAqTI',
        '\x20\x20\x20)\x0a\x20\x20\x20\x20o',
        'pending',
        '\x20where\x20t.\x22',
        '__esModule',
        'defineProp',
        '1447396YuGOTS',
        's\x20in\x20(\x20:st',
        'queueId',
        'c.id\x20=\x20t.\x22',
        'All\x20=\x20\x27N\x27\x20',
        '\x20\x20left\x20joi',
        '))\x20OR\x20(:is',
        '15KjTPRO',
        'vHlgt',
        'YxJdL',
        '\x27,\x20w.\x22name',
        'sequelize',
        '../../erro',
        'NotViewAss',
        '(((\x0a\x20\x20\x20\x20\x20\x20',
        'EYIiq',
        'ned',
        'length',
        '\x27)\x20OR\x20(t.\x22',
        'MLHAo',
        '\x20q.id)\x0a\x20\x20\x20',
        'push',
        'Param\x20=\x20\x27S',
        'KGiMh',
        '1524392zUAbaS',
        'ct(\x27id\x27,\x20w',
        'KEKZg',
        'nt,\x0a\x20\x20\x20\x20c.',
        '\x0a\x20\x20\x20\x20left\x20',
        'userId\x20and',
        'zeecf',
        'rchar\x20like',
        'nest',
        'ctId\x22\x20=\x20t.',
        'tenantId\x22\x20',
        'xists\x20(sel',
        'rs/AppErro',
        'nALOx',
        'Services/L',
        'and\x20(upper',
        'in\x20(\x20:queu',
        'status\x20)))',
        '.id\x20=\x20t.\x22c',
        'nd\x20t.statu',
        't.\x22unreadM',
        'ZrGYz',
        'oWRFZ',
        '\x20\x20and\x20((:i',
        'key',
        'nant\x20=\x20\x27S\x27',
        'ontactId\x22\x20',
        '\x20c\x20where\x20c',
        'isSearchPa',
        '\x0a\x20\x20\x20\x20selec',
        'iziiV',
        'd\x22\x20=\x20t.\x22co',
        'essages\x22\x20m',
        '.\x22contactI',
        'hasMore',
        'ser',
        'owAll\x20=\x20\x27S',
        ')\x20OR\x20(:isS',
        '\x20\x20\x20\x20\x20selec',
        'contactId\x22',
        't(*)\x20OVER\x20',
        'SearchPara',
        '24lYdMTn',
        'eqmSd',
        'oHnpp',
        ':searchPar',
        'jdLCw',
        'c.\x22number\x22',
        '\x20\x20limit\x20:l',
        '\x22)\x20)\x0a\x20\x20\x20\x20)',
        'OR\x20(t.\x22isG',
        'istSetting',
        'tickets',
        '\x20q.queue,\x0a',
        '../../mode',
        'isGroup\x22\x20=',
        '\x22\x20is\x20null\x20',
        '\x20\x20\x20(:isExi',
        'findAll',
        's\x20(select\x20',
        'MFRmr',
        '\x20on\x20(w.id\x20',
        'PiQFF',
        'tenantId',
        '9wCieRL',
        'ls/Queue',
        'ed\x20=\x20\x27N\x27))',
        'kIPXl',
        'offset',
        't\x20=\x20\x27N\x27)\x20)',
        '14GzHevm',
        '\x22Contacts\x22',
        'ZUXMq',
        'isNotViewA',
        'map',
        'd\x20or\x20exist',
        '3757629lOEAkB',
        'd\x22\x20=\x20:tena',
        'nd\x20t.\x22unre',
        '\x22isDeleted',
        'gnedTicket',
        'r\x20exists\x20(',
        '../Setting',
        '2RxUUfB',
        'ct\x201\x20from\x20',
        'me\x22\x20as\x20use',
        '.id,\x20\x27name',
        'serId\x22)\x0a\x20\x20',
        '\x20(t.id::va',
        'am)\x20or\x20(ex',
        '\x20\x20\x20\x20select',
        'forEach',
        '1450310xNqjBQ',
        '\x22\x20is\x20null)',
        '\x20and\x20coale',
        'ned\x20=\x20\x27S\x27\x20',
        'ect\x201\x20from',
        'p,\x0a\x20\x20\x20\x20t.*',
        'order\x20by\x20t',
        '\x20cw.\x22conta',
        'sNotAssign',
        'queueId\x22\x20=',
        'n\x20\x22Contact',
        'gMGie',
        'essages\x22\x20>',
        'isExistsQu',
        'default',
        'enabled',
        '\x20\x20)\x20or\x20*/\x20',
        'DgnbB',
        '\x22\x20c\x20where\x20',
        'd\x20=\x20\x27S\x27\x20\x20a',
        'signedTick',
        'open',
        'ts\x22\x20cw\x20whe',
        'replacemen',
        'TInws',
        '.\x22number\x22\x20',
        'eted\x27\x20,\x20w.',
        '__importDe',
        'serId\x22\x20=\x20:',
        'and\x20\x20(\x0a\x20\x20\x20',
        '\x22profilePi',
        '.\x22updatedA',
        'wtmzn',
        'DmsfS',
        '\x20=\x20t.id\x0a\x20\x20',
        'kets',
        'rfAxo',
        '(\x20:isUnrea',
        'Param)\x20or\x20',
        '\x0a\x20\x20',
        '\x20(:isShowA',
        '\x27N\x27))\x0a\x20\x20\x20\x20',
        'select\x201\x20f',
        'join\x20\x22User',
        'iBbZx',
        'Id\x22\x20=\x20:use',
        'r(:searchP',
        'n\x20\x22Queues\x22',
        'ntactWalle',
        'ntactId\x22)\x20',
        '\x0a\x20\x20\x20\x20from\x20',
        'letId\x22\x20=\x20:',
        '\x22ticketId\x22',
        'dSqAa',
        'ntId\x0a\x20\x20\x20\x20a',
        '\x20limit\x20:li',
        '\x22\x20>\x200)\x20OR\x20',
        '172339jceEhK',
        '\x20\x20\x20\x20\x20or\x20t.',
        'ORXdg',
        '\x20\x20and\x20((\x20:',
        'rom\x20\x22Conta',
        'queuesIdsU',
        'ets\x20=\x20\x27S\x27\x20',
        '(c.\x22name\x22)',
        '\x200)\x20OR\x20(:i',
        'sFigr',
        't\x0a\x20\x20\x20\x20inne',
        'iUewt',
        'like\x20:sear',
        'ioTxL',
        'and\x20t.stat',
        'JIOWe',
        'earchParam',
        'kFqgo',
        'aram\x20=\x20\x27S\x27',
        'xists\x20(\x0a\x20\x20',
        'ueTenant\x20=',
        's\x22\x20u\x20on\x20(u',
        '15848327zOScHj',
        'rchParam))',
        '\x20\x20\x20)\x20or\x20*/',
        'Param)\x0a\x20\x20\x20',
        'and\x20((t.\x22u',
        'searchPara',
        'isActive',
        'ists\x20(sele',
        ')\x20OR\x20(:isN',
        'esIdsUser\x20',
        'Messages\x22\x20',
        'ue)\x20OR\x20(:i',
        '\x20t.status\x20',
        '\x20:userId\x20o',
        '\x22updatedAt',
        '\x20:offset\x20;',
        '\x20OR\x20(:isNo',
        '\x20true)\x20OR\x20',
        'QueryTypes',
        '\x20\x20\x20and\x20((:',
        '\x20=\x20\x27N\x27))\x0a\x20',
        'QueueTenan',
        't\x22\x20desc\x0a\x20\x20',
        'hOHqN',
        '\x22\x20desc\x0a\x20\x20\x20',
        '\x27\x20and\x20(\x20/*',
        'per(m.body',
        '(t.\x22userId',
        'erty',
        'weXmZ',
        'll)\x20OR\x20(:i',
        'query',
        'NMDGK',
        'er(m.body)',
        '362052nOefCp',
        'isShowAll',
        'GaXFu',
        'aram)\x0a\x20\x20\x20\x20',
        '\x20\x20\x20\x20and\x20((',
        '\x20=\x20\x27S\x27\x20and',
        '=\x20:tenantI',
        '=\x20\x27N\x27))\x0a\x20\x20',
        'ERR_NO_STA',
        'build_obje',
        'and\x20t.\x22use',
        '\x20like\x20uppe',
        '\x0a\x20\x20\x20\x20and\x20(',
        '\x0a\x20\x20\x20\x20u.\x22na',
        '1\x20from\x20\x22Co',
        'sce(t.\x22que',
        ';\x0a\x20\x20',
        'mit\x20offset',
        '\x20and\x20(\x20/*e',
        '\x20\x20\x20\x20)\x0a\x20\x20\x20\x20',
        'WXUvR',
        '(t.id::var',
        'sService',
        'where',
        '.id\x20=\x20t.\x22u',
        'sExistsQue',
        'eues',
        'rname,\x0a\x20\x20\x20',
        '=\x20t.id\x0a\x20\x20\x20',
        't\x0a\x20\x20\x20\x20coun',
        'atus\x20)\x0a\x20\x20\x20',
        '(:isUnread',
        'appId\x22)\x0a\x20\x20',
        'ls/UsersQu',
        'JVRDr',
        'm\x20where\x20m.',
        'c.\x22tenantI',
        'ram)\x20or\x20(e',
        'profile',
        'find',
        'cUrl\x22,\x0a\x20\x20\x20',
        'isUnread',
        '\x20OR\x20(:isSh',
        '=\x20t.\x22whats',
        'chParam)))',
        'eueTenant',
        'r(c.\x22name\x22',
        '\x20and\x20(uppe',
        'lEjCs',
        't\x201\x20from\x20\x22',
        'qaqrJ',
        'GXJvv',
        '\x22\x20,\x20\x27isDel',
        'true',
        'isUnread\x20=',
        '\x20where\x20m.\x22',
        '((\x20:isShow',
        '\x20\x27S\x27\x20\x20and\x20',
        'SOtPf',
        'userId',
        'd\x22\x20=\x20c.id)'
    ];
    a = function () {
        return as;
    };
    return a();
}