'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x183)) / (-0x40c + -0x25a8 + -0xde7 * -0x3) * (parseInt(J(0x19e)) / (0x1 * 0x1d68 + 0x1901 + -0x3667)) + -parseInt(J(0x199)) / (0x12 * 0x10c + 0x31 * -0xc9 + 0x13a4) * (-parseInt(K(0x18e)) / (0x3ac + 0x129 + -0x4d1)) + -parseInt(K(0x170)) / (-0x1b7c * 0x1 + 0x1553 * 0x1 + 0x62e) * (parseInt(K(0x18f)) / (0x2 * 0x59 + -0x24f4 + 0x2448)) + parseInt(K(0x142)) / (-0x1861 + -0x1 * -0x7c3 + 0x1 * 0x10a5) + -parseInt(K(0x1a2)) / (0x2116 + 0x67 * -0x3e + -0x81c) + parseInt(J(0x18a)) / (-0x1c12 + 0x1898 + -0x383 * -0x1) * (parseInt(J(0x17a)) / (-0xd8d * -0x1 + 0x2bb + 0x3f * -0x42)) + parseInt(J(0x184)) / (0x7fe + -0x1 * 0x1633 + 0xe40);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3ab30 + 0x2 * 0x1e973 + 0x2c42d));
var __importDefault = this && this[L(0x179) + M(0x191)] || function (c) {
    const N = M;
    return c && c[N(0x198)] ? c : { 'default': c };
};
const H = {};
H[M(0x162)] = !![], Object[M(0x1aa) + L(0x16a)](exports, M(0x198), H), exports[L(0x165) + M(0x172)] = exports[L(0x177) + 't'] = exports[L(0x159) + 'ot'] = void (0x13d6 * 0x1 + 0x9a5 + -0x1d7b);
const instagram_private_api_1 = require(L(0x1af) + M(0x164) + 'i'), instagram_mqtt_1 = require(L(0x187) + L(0x1ae)), AppError_1 = __importDefault(require(M(0x157) + M(0x190))), logger_1 = require(M(0x1ac) + M(0x145)), sessions = [], initInstaBot = async (f, g = 0x1296 + 0x175 * -0x2 + -0x1 * 0xfa7) => {
        const O = M, P = M, h = {};
        h[O(0x168)] = P(0x1a8) + P(0x19d), h[P(0x19f)] = function (k, l) {
            return k === l;
        }, h[O(0x146)] = P(0x14e), h[P(0x152)] = function (k, l) {
            return k !== l;
        }, h[O(0x180)] = function (k, l) {
            return k !== l;
        }, h[O(0x149)] = function (k, l) {
            return k < l;
        }, h[P(0x16b)] = O(0x15d), h[P(0x17c)] = function (k, l) {
            return k || l;
        }, h[O(0x1a6)] = function (k, l) {
            return k !== l;
        }, h[O(0x15c)] = O(0x14c), h[O(0x18b)] = P(0x192), h[O(0x1a7)] = P(0x176), h[P(0x175)] = function (k, l) {
            return k === l;
        }, h[P(0x16e)] = O(0x150), h[P(0x1ad)] = O(0x155), h[P(0x14a)] = P(0x144), h[O(0x1a0)] = P(0x188), h[P(0x171)] = P(0x1a4), h[O(0x19c)] = P(0x167), h[O(0x1a5)] = P(0x16f), h[P(0x196)] = P(0x174) + P(0x197) + P(0x193) + P(0x17d) + P(0x19a) + '.';
        const i = h;
        let j = -0x3 * -0x669 + -0x1495 * -0x1 + -0x27d0;
        while (i[O(0x149)](j, g)) {
            try {
                if (i[O(0x152)](i[O(0x16b)], i[P(0x16b)]))
                    throw new d(i[P(0x168)]);
                else {
                    let l, m;
                    const n = '@' + f[P(0x19b) + P(0x161)], o = f[P(0x15e) + 'ey'];
                    if (i[P(0x17c)](!n, !o)) {
                        if (i[O(0x1a6)](i[P(0x15c)], i[P(0x15c)]))
                            r[O(0x140)][O(0x194)](O(0x195) + O(0x169) + f);
                        else
                            throw new Error(i[O(0x168)]);
                    }
                    f && f[P(0x185)] && (i[O(0x180)](i[P(0x18b)], i[P(0x1a7)]) ? l = JSON[O(0x1a1)](f[P(0x185)]) : (k[l][O(0x17e)][P(0x17b)](), m[n][O(0x166)][O(0x18d)](), o[p][P(0x17f)][O(0x18d)](), q[O(0x186)](r, 0x591 + 0x7b2 + -0xd42)));
                    const p = (0xce * -0xc + 0xca3 * 0x3 + -0x1c41, instagram_mqtt_1[O(0x151) + O(0x1a9)])(new instagram_private_api_1[(P(0x1a3)) + 't']());
                    p['id'] = f['id'], p[P(0x148)][P(0x15a) + O(0x16d)](n), m = await p[O(0x17e)][P(0x181)](n, o), p[P(0x163) + 'in'] = m, process[P(0x15b)](async () => {
                        const Q = O, R = P;
                        if (i[Q(0x19f)](i[R(0x146)], i[Q(0x146)]))
                            await p[Q(0x18c)][Q(0x153) + Q(0x158)]();
                        else {
                            const w = f[R(0x154)](x => x['id'] === w);
                            return h[w];
                        }
                    }), l = await p[P(0x14b) + 'e']();
                    const q = {};
                    q[O(0x185)] = l, await f[P(0x147)](q), await p[P(0x166)][O(0x1ab)]({ 'irisData': await p[O(0x14d)][O(0x173) + 'x']()[P(0x178)]() });
                    const r = {};
                    r[P(0x16c) + P(0x143)] = !![], await p[O(0x17f)][P(0x1ab)](r);
                    const s = sessions[O(0x154)](v => v['id'] === f['id']);
                    if (i[O(0x175)](s, -(-0x40 * -0x52 + 0x219b + -0x1 * 0x361a))) {
                        if (i[P(0x152)](i[O(0x16e)], i[O(0x1ad)])) {
                            p['id'] = f['id'];
                            if (!p[O(0x163) + 'in']) {
                                if (i[O(0x1a6)](i[P(0x14a)], i[O(0x1a0)]))
                                    p[O(0x163) + 'in'] = await p[O(0x17e)][O(0x14f) + 'r']();
                                else {
                                    const w = {};
                                    return w[O(0x156)] = j, g && h[O(0x198)] ? i : w;
                                }
                            }
                            sessions[O(0x160)](p);
                        } else
                            try {
                                const x = s[O(0x154)](I => I['id'] === z['id']);
                                i[P(0x152)](x, -(0x1371 + 0x1 * -0x5c1 + -0xdaf)) && (z[x][O(0x17e)][P(0x17b)](), A[x][P(0x166)][P(0x18d)](), B[x][O(0x17f)][O(0x18d)](), C[P(0x186)](x, 0xc87 + -0x45d * 0x3 + 0x91));
                                const y = {};
                                y[O(0x185)] = '', y[P(0x147)](y);
                            } catch (z) {
                                E[P(0x140)][P(0x194)](O(0x195) + P(0x169) + z);
                            }
                    } else {
                        if (i[P(0x175)](i[P(0x171)], i[O(0x19c)])) {
                            const y = j[O(0x154)](A => A['id'] === q['id']);
                            i[O(0x180)](y, -(-0x17c9 + -0x9b * -0x3 + -0x15f9 * -0x1)) && (q[y][P(0x17e)][P(0x17b)](), r[y][P(0x166)][P(0x18d)](), s[y][P(0x17f)][O(0x18d)](), t[P(0x186)](y, -0x2 * 0x1122 + 0xc5d + -0x1 * -0x15e8));
                            const z = {};
                            z[P(0x185)] = '', p[O(0x147)](z);
                        } else
                            p['id'] = f['id'], !p[O(0x163) + 'in'] && (i[P(0x175)](i[O(0x1a5)], i[P(0x1a5)]) ? p[O(0x163) + 'in'] = await p[P(0x17e)][P(0x14f) + 'r']() : f = g[P(0x1a1)](h[P(0x185)])), sessions[s] = p;
                    }
                    return p;
                }
            } catch (z) {
                logger_1[P(0x140)][P(0x194)](O(0x182) + P(0x15f) + P(0x189) + z), j++, await new Promise(A => setTimeout(A, -0xe5 * 0xe + 0x1ae7 + 0x7 * -0x17f));
            }
        }
        throw new AppError_1[(O(0x156))](i[O(0x196)], -0xd * 0x2f3 + -0x2 * -0xd6c + -0x1 * -0xd13);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x172b + -0x2 * 0x9bb + -0x275);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[L(0x159) + 'ot'] = initInstaBot;
const getInstaBot = c => {
    const S = M, d = sessions[S(0x154)](e => e['id'] === c);
    return sessions[d];
};
function a() {
    const V = [
        'instagramU',
        'USJjY',
        'tials',
        '6GMverR',
        'aduuc',
        'GgGyG',
        'parse',
        '707512LLPaEi',
        'IgApiClien',
        'UQYne',
        'VMGYs',
        'wOrHR',
        'sHDGj',
        'Not\x20creden',
        'dRealtime',
        'defineProp',
        'connect',
        '../utils/l',
        'qMPNi',
        'mqtt',
        'instagram-',
        'logger',
        'grgQv',
        '477470ZDWktm',
        'ect',
        'dwKgi',
        'ogger',
        'TGmIi',
        'update',
        'state',
        'XjLZh',
        'VrJSN',
        'exportStat',
        'TYLHq',
        'feed',
        'gJUjW',
        'currentUse',
        'fPbXi',
        'withFbnsAn',
        'wzgLI',
        'postLoginF',
        'findIndex',
        'hEAjB',
        'default',
        '../errors/',
        'low',
        'initInstaB',
        'generateDe',
        'nextTick',
        'pzEjW',
        'BWWqa',
        'instagramK',
        'rror\x20|\x20Err',
        'push',
        'ser',
        'value',
        'accountLog',
        'private-ap',
        'removeInst',
        'realtime',
        'nsSVP',
        'VXgUk',
        '\x20|\x20Error:\x20',
        'erty',
        'zmbBw',
        'autoReconn',
        'vice',
        'UgnmE',
        'UZdqK',
        '20FtzSlB',
        'lWsaI',
        'aBot',
        'directInbo',
        'Max\x20retrie',
        'rRYXy',
        'zWKwB',
        'getInstaBo',
        'request',
        '__importDe',
        '216730xSmjRR',
        'logout',
        'NwyLa',
        '\x20initializ',
        'account',
        'fbns',
        'qGkwM',
        'login',
        'initWbot\x20e',
        '109277YenOVy',
        '7214823EaOYdu',
        'session',
        'splice',
        'instagram_',
        'GcRKz',
        'or:\x20',
        '36lEKlSe',
        'oeRPz',
        'simulate',
        'disconnect',
        '309284cTGQrY',
        '536562eejDQZ',
        'AppError',
        'fault',
        'zZsBH',
        '\x20Unable\x20to',
        'error',
        'removeWbot',
        'OqpQt',
        's\x20reached.',
        '__esModule',
        '6CsqHcK',
        'e\x20InstaBot'
    ];
    a = function () {
        return V;
    };
    return a();
}
exports[M(0x177) + 't'] = getInstaBot;
const removeInstaBot = e => {
    const T = M, U = L, f = {};
    f[T(0x141)] = function (h, i) {
        return h !== i;
    };
    const g = f;
    try {
        const h = sessions[T(0x154)](j => j['id'] === e['id']);
        g[T(0x141)](h, -(0x1b88 + 0x173e + -0x32c5 * 0x1)) && (sessions[h][T(0x17e)][T(0x17b)](), sessions[h][T(0x166)][T(0x18d)](), sessions[h][T(0x17f)][U(0x18d)](), sessions[T(0x186)](h, -0x1d8 * 0x1 + 0x458 * 0x8 + -0x20e7));
        const i = {};
        i[U(0x185)] = '', e[U(0x147)](i);
    } catch (j) {
        logger_1[U(0x140)][U(0x194)](U(0x195) + T(0x169) + j);
    }
};
exports[M(0x165) + L(0x172)] = removeInstaBot;