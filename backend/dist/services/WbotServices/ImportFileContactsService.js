'use strict';
const W = b, X = b;
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(U(0x15a)) / (-0x3 * -0xab9 + -0x2064 + 0x3a) + parseInt(V(0x140)) / (-0x1d35 + 0x5 * 0x30a + 0xe05) + -parseInt(U(0xf1)) / (0x48a + -0x90b * 0x3 + 0x1 * 0x169a) * (parseInt(U(0x103)) / (-0x40 * 0x83 + 0x1f3c + 0x8 * 0x31)) + parseInt(U(0x170)) / (0x60 * 0x4 + 0x7f * -0x19 + 0xc * 0xe9) + -parseInt(V(0x16e)) / (0x1c35 + 0x19db + 0x2 * -0x1b05) * (parseInt(V(0x14a)) / (-0x1b0e + -0x2 * 0x95 + 0x409 * 0x7)) + -parseInt(U(0x125)) / (-0xc47 + 0x150 + 0xaff) * (parseInt(V(0x151)) / (-0x1838 + -0x13ea * 0x1 + -0x2c2b * -0x1)) + parseInt(U(0x116)) / (-0x123c * -0x2 + 0x22e + -0x269c) * (parseInt(V(0xef)) / (0x5 * -0x2ab + 0x1436 + -0x6d4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x27b70 + 0x2 * 0x10bbf + 0x36659));
var __importDefault = this && this[W(0x128) + W(0x122)] || function (c) {
    const Y = X;
    return c && c[Y(0x16c)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1aec + 0x1 * 0x2391 + -0x7b9 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[W(0x143)] = !![], Object[X(0x114) + W(0x106)](exports, W(0x16c), q), exports[X(0xf9) + W(0x156) + W(0xed)] = void (-0x2678 * 0x1 + 0xb78 + -0x1 * -0x1b00);
const lodash_1 = require(X(0x10e)), xlsx_1 = __importDefault(require(W(0x120))), Contact_1 = __importDefault(require(X(0x157) + W(0x14e))), Whatsapp_1 = __importDefault(require(X(0x157) + W(0x15c) + 'p')), AppError_1 = __importDefault(require(X(0x111) + X(0x147) + 'r')), wbot_1 = require(W(0x102) + W(0x12b));
async function ImportFileContactsService(m, n, o, p) {
    const Z = W, a0 = W, r = {};
    r[Z(0x16b)] = a0(0x13a) + a0(0x144) + Z(0x13d), r[a0(0x119)] = a0(0x10c), r[a0(0x172)] = Z(0x150), r[a0(0x12a)] = function (z, A) {
        return z === A;
    }, r[Z(0x131)] = Z(0xf2), r[Z(0x11d)] = Z(0xfa), r[a0(0xf0)] = Z(0x10d), r[Z(0x137)] = Z(0x167), r[Z(0x109)] = function (z, A) {
        return z !== A;
    }, r[Z(0x154)] = a0(0xf6), r[Z(0xfc)] = a0(0xec), r[a0(0x159)] = a0(0x158), r[a0(0x130)] = Z(0x12d), r[Z(0x161)] = Z(0x139), r[a0(0x14c)] = a0(0x11b), r[Z(0x16a)] = Z(0x133), r[Z(0x10b)] = Z(0x160), r[a0(0x11a)] = function (z, A) {
        return z !== A;
    }, r[Z(0xf3)] = Z(0x145), r[Z(0xee)] = function (z, A) {
        return z || A;
    }, r[a0(0xf4)] = function (z, A) {
        return z && A;
    }, r[a0(0x163)] = function (z, A) {
        return z >= A;
    }, r[a0(0x117)] = Z(0x162), r[Z(0xf8)] = Z(0xfd), r[a0(0x104)] = a0(0x115) + Z(0x13e), r[Z(0x14d)] = Z(0x171), r[Z(0x141)] = a0(0x108), r[a0(0x129)] = a0(0x11f), r[a0(0x121)] = a0(0x110), r[Z(0x14b)] = function (z, A) {
        return z == A;
    }, r[Z(0x15d)] = function (z, A) {
        return z !== A;
    }, r[Z(0xfb)] = a0(0xf5), r[Z(0x152)] = Z(0x165), r[Z(0x13f)] = function (z, A) {
        return z !== A;
    }, r[a0(0x112)] = Z(0x10f), r[Z(0x11e)] = function (z, A) {
        return z !== A;
    }, r[a0(0x136)] = Z(0x13b);
    const s = r, t = xlsx_1[a0(0x118)][Z(0x166)](n?.[a0(0x169)]), u = (-0x192 + -0x1920 + 0x1ab2, lodash_1[Z(0x16f)])(Object[Z(0x142)](t[Z(0x155)])), v = {};
    v[a0(0x16d)] = 0x0;
    const w = xlsx_1[a0(0x118)][a0(0x14f)][Z(0x10a) + Z(0x105)](u, v), x = [];
    w[Z(0x164)](z => {
        const a1 = a0, a2 = a0, A = {};
        A[a1(0x123)] = s[a2(0x119)], A[a2(0x146)] = s[a1(0x172)];
        const B = A;
        if (s[a1(0x12a)](s[a2(0x131)], s[a1(0x11d)]))
            throw new v[(a2(0x118))](s[a1(0x16b)], 0x2 * 0x2b9 + -0x1005 + 0xc27);
        else {
            let D = '', E = '', F = '';
            ((0x200a + -0x11 * -0x1bb + -0x3d75 * 0x1, lodash_1[a2(0x134)])(z, s[a2(0xf0)]) || (-0x1a5 * 0xf + 0x12 * -0x129 + 0x2d8d, lodash_1[a2(0x134)])(z, s[a2(0x137)])) && (s[a1(0x109)](s[a1(0x154)], s[a1(0x154)]) ? A[a2(0x168)](a2(0xf7) + a2(0x135) + a1(0xff) + f[a2(0x11c)]) : D = z[a1(0x10d)] || z[a1(0x167)]);
            ((0x1492 + 0x6a4 + 0x489 * -0x6, lodash_1[a1(0x134)])(z, s[a1(0xfc)]) || (0x1da4 * 0x1 + -0x2467 * -0x1 + 0x420b * -0x1, lodash_1[a2(0x134)])(z, s[a2(0x119)]) || (-0xc1 * -0xb + -0x1098 + 0x84d, lodash_1[a2(0x134)])(z, s[a1(0x159)]) || (0xf6f + 0x24fa + -0x3469, lodash_1[a1(0x134)])(z, s[a2(0x172)])) && (s[a2(0x109)](s[a1(0x130)], s[a2(0x130)]) ? A[a2(0x15b)](f) : (E = z[a2(0xec)] || z[s[a2(0x119)]] || z[a1(0x158)] || z[s[a2(0x172)]], E = ('' + E)[a2(0x13c)](/\D/g, '')));
            if ((0x8cc + -0x1c82 + 0x6 * 0x349, lodash_1[a2(0x134)])(z, s[a1(0x161)]) || (-0x1d * 0x89 + 0x1ec3 + -0x1 * 0xf3e, lodash_1[a1(0x134)])(z, s[a2(0x14c)]) || (-0x1065 + 0xf41 + 0x124, lodash_1[a2(0x134)])(z, s[a2(0x16a)]) || (-0xa6 * 0x4 + -0x1714 + 0x19ac, lodash_1[a2(0x134)])(z, s[a2(0x10b)])) {
                if (s[a2(0x11a)](s[a1(0xf3)], s[a1(0xf3)])) {
                    const J = {};
                    return J[a1(0x118)] = j, g && h[a1(0x16c)] ? i : J;
                } else
                    F = z[a1(0x139)] || z[s[a2(0x14c)]] || z[a2(0x133)] || z[s[a1(0x10b)]];
            }
            D = s[a2(0xee)](D, E);
            if (s[a2(0xf4)](D, E) && s[a2(0x163)](E[a2(0x107)], -0x1 * 0x249b + 0x23b0 + -0x7 * -0x23)) {
                if (s[a1(0x11a)](s[a2(0x117)], s[a2(0xf8)])) {
                    const J = {};
                    J[a2(0x148)] = D, J[a1(0x11c)] = E, J[a2(0x139)] = F, J[a2(0x12e)] = m, x[a2(0x15b)](J);
                } else
                    j = k[a2(0xec)] || l[B[a1(0x123)]] || m[a2(0x158)] || n[B[a1(0x146)]], o = ('' + p)[a1(0x13c)](/\D/g, '');
            }
        }
    });
    const y = [];
    for (const z of x) {
        try {
            z[Z(0x11c)] = z[a0(0x11c)][Z(0x13c)]('-', '')[a0(0x13c)]('\x20', '')[a0(0x13c)]('(', '')[a0(0x13c)](')', '');
            const A = {};
            A[Z(0x12c)] = s[a0(0x14d)], A[a0(0x12e)] = m, A[Z(0x173)] = s[Z(0x141)];
            const B = {};
            B[a0(0x153)] = A;
            const C = await Whatsapp_1[a0(0x118)][Z(0x12f)](B);
            if (!C) {
                if (s[Z(0x12a)](s[Z(0x129)], s[Z(0x121)]))
                    B = G[Z(0x10d)] || H[a0(0x167)];
                else
                    throw new AppError_1[(Z(0x118))](s[a0(0x16b)], 0x2024 * 0x1 + 0x1 * -0x1a3f + 0x5 * -0xdd);
            }
            const D = (-0x2a6 * -0x4 + -0x2 * -0xeed + 0x14e * -0x1f, wbot_1[a0(0x101)])(C['id']), E = z[a0(0x11c)] + (Z(0x126) + a0(0x15f)), F = await D[a0(0x113)](E);
            if (s[a0(0x14b)](F[-0x1cf0 + -0x1835 * 0x1 + -0xf * -0x38b][a0(0x124)], ![])) {
                if (s[Z(0x15d)](s[Z(0xfb)], s[Z(0x152)]))
                    throw new AppError_1[(a0(0x118))](s[a0(0x104)], -0x1dd9 + -0x2415 + -0x4382 * -0x1);
                else {
                    const N = {};
                    N[a0(0x148)] = i, N[a0(0x11c)] = j, N[a0(0x139)] = k, N[a0(0x12e)] = l, H[Z(0x15b)](N);
                }
            }
            z[a0(0x11c)] = F[0x2e0 + -0x2 * 0x24b + 0x1b6][a0(0x132)][a0(0x138)]('@')[-0xefa + -0x1e5f + 0x2d59];
            const G = {};
            G[Z(0x11c)] = z[Z(0x11c)], G[a0(0x12e)] = z[Z(0x12e)];
            const H = {};
            H[a0(0x153)] = G, H[Z(0x15e)] = z;
            const [I, J] = await Contact_1[Z(0x118)][a0(0x127) + 'te'](H), K = I;
            J && (s[Z(0x13f)](s[a0(0x112)], s[Z(0x112)]) ? H = i[Z(0x139)] || j[s[a0(0x14c)]] || k[Z(0x133)] || l[s[a0(0x10b)]] : y[Z(0x15b)](I));
            if (o?.[Z(0x107)]) {
                if (s[Z(0x11e)](s[Z(0x136)], s[a0(0x136)]))
                    throw new v[(a0(0x118))](s[Z(0x104)], 0x245c + 0x9 * 0x139 + -0xf43 * 0x3);
                else {
                    const P = {};
                    P[Z(0x12e)] = m;
                    const Q = {};
                    Q[a0(0xfe)] = P, await K[a0(0x100)](o, Q);
                }
            }
            if (p?.[a0(0x107)]) {
                const R = {};
                R[a0(0x12e)] = m;
                const S = {};
                S[Z(0xfe)] = R, await K[a0(0x149)](p, S);
            }
        } catch (T) {
            console[a0(0x168)](a0(0xf7) + Z(0x135) + Z(0xff) + z[a0(0x11c)]);
        }
    }
    return y;
}
exports[X(0xf9) + X(0x156) + X(0xed)] = ImportFileContactsService;
function a() {
    const a3 = [
        'Número\x20não',
        'zKWAt',
        'ImportFile',
        'qRDiV',
        'dgHip',
        'wIeKk',
        'FlxJU',
        'through',
        'ta\x20válida\x20',
        'setTags',
        'getWbot',
        '../../libs',
        '1155080YpwlpM',
        'NbcNs',
        'son',
        'erty',
        'length',
        'whatsapp',
        'pHWTe',
        'sheet_to_j',
        'jXIXw',
        'número',
        'nome',
        'lodash',
        'myMsE',
        'iXNfm',
        '../../erro',
        'npDdS',
        'onWhatsApp',
        'defineProp',
        'CONTACT_NO',
        '3763920RieUfh',
        'zLuLv',
        'default',
        'XXMtS',
        'ryEhm',
        'e-mail',
        'number',
        'xqKuc',
        'ajOUc',
        'uZBoM',
        'xlsx',
        'OKnti',
        'fault',
        'zsPGS',
        'exists',
        '1352ZIbTJT',
        '@$s.whatsa',
        'findOrCrea',
        '__importDe',
        'VjSoA',
        'MVjxw',
        '/wbot',
        'status',
        'Iyqgk',
        'tenantId',
        'findOne',
        'XWWWo',
        'ZgRoi',
        'jid',
        'Email',
        'has',
        '\x20é\x20uma\x20con',
        'VUSVp',
        'SvwhL',
        'split',
        'email',
        'NOT_FOUND_',
        'ckdMW',
        'replace',
        'ONNECTED',
        'T_FOUND',
        'lxGGG',
        '444904QoIBTZ',
        'iRmDR',
        'values',
        'value',
        'WHATSAPP_C',
        'vpSrn',
        'tPMdy',
        'rs/AppErro',
        'name',
        'setWallets',
        '267988CzhBek',
        'ihWQa',
        'cEhow',
        'KaDdM',
        'ls/Contact',
        'utils',
        'Número',
        '3123BoHfeg',
        'jeNNp',
        'where',
        'PEmbR',
        'Sheets',
        'ContactsSe',
        '../../mode',
        'Numero',
        'YFpqv',
        '186103eAvGSP',
        'push',
        'ls/Whatsap',
        'EVtXe',
        'defaults',
        'pp.net',
        'E-mail',
        'knzzs',
        'rabtR',
        'hEtMZ',
        'forEach',
        'OVKmq',
        'readFile',
        'Nome',
        'error',
        'path',
        'IvqMl',
        'Ltaed',
        '__esModule',
        'header',
        '60zhpELu',
        'head',
        '712645wIypZp',
        'CONNECTED',
        'Knzxw',
        'type',
        'numero',
        'rvice',
        'FYTAX',
        '11wZqzHl',
        'GlMKm',
        '3SFwsKh',
        'TXnJx',
        'UaiOp',
        'sFBXN',
        'uMyOo',
        'QekdR'
    ];
    a = function () {
        return a3;
    };
    return a();
}