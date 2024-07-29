'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x225)) / (-0x4f * 0x44 + 0x1ac7 + -0x26 * 0x27) * (parseInt(B(0x273)) / (-0x79d * -0x1 + -0x2074 + 0x18d9)) + -parseInt(B(0x2d4)) / (0x13f1 + -0x24e9 + -0xcf * -0x15) * (-parseInt(B(0x242)) / (0x2 * -0x1210 + -0x2534 + 0x4958)) + -parseInt(A(0x26e)) / (-0x1 * -0x485 + 0xe9b + 0x1 * -0x131b) * (parseInt(A(0x1db)) / (0x62b + 0x407 * -0x7 + 0x160c)) + parseInt(B(0x23e)) / (0xade * 0x1 + 0x40 * 0x9b + -0x3197) * (parseInt(B(0x1d0)) / (-0x105b + -0x1572 + -0xd * -0x2e9)) + -parseInt(B(0x266)) / (0xd85 + -0x1 * -0x20f9 + -0x2e75) + parseInt(B(0x223)) / (-0x1 * 0x581 + 0xc2a * 0x3 + -0x1ef3) + parseInt(A(0x20b)) / (-0x11 * -0x5a + 0x1f8e * -0x1 + 0x199f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1e6c9 + 0x14421 + 0x69876));
var __importDefault = this && this[C(0x24d) + D(0x1d9)] || function (c) {
    const E = D;
    return c && c[E(0x2c9)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x732 * 0x1 + -0x1 * -0x185 + -0x6fa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = {};
z[C(0x1d4)] = !![], Object[D(0x292) + D(0x290)](exports, C(0x2c9), z), exports[C(0x2ad) + C(0x239) + 'n'] = exports[C(0x202) + C(0x1c9)] = exports[D(0x234)] = exports[D(0x213) + D(0x26c)] = void (0x3ae + -0xc35 * 0x1 + 0x887);
const sdk_typescript_apis_efi_1 = __importDefault(require(D(0x1e0) + D(0x2b6) + D(0x1ea))), path_1 = __importDefault(require(D(0x240))), CheckSettingsGeneral_1 = __importDefault(require(D(0x256) + D(0x2cb) + D(0x27f) + C(0x28d))), logger_1 = require(C(0x243) + C(0x246)), Invoices_1 = __importDefault(require(D(0x272) + C(0x1d8) + 's')), Tenant_1 = __importDefault(require(D(0x272) + D(0x297))), AppError_1 = __importDefault(require(D(0x1e1) + D(0x1f9) + 'r')), PaymentGatewayServices_1 = require(D(0x26f) + D(0x248) + C(0x2c5)), webhookUrl = process[D(0x228)][C(0x2ae) + 'L'] + (C(0x255) + D(0x28e) + D(0x1f6));
async function getEfiOptions() {
    const F = D, G = D, d = {};
    d[F(0x286)] = G(0x25d) + 'e', d[F(0x2c1)] = G(0x1ef) + 'd', d[F(0x21f)] = F(0x270) + F(0x262);
    const e = d, f = path_1[G(0x1da)][G(0x2d3)](__dirname, G(0x1bf) + F(0x29b) + await (0x7 * 0x293 + -0x81d * -0x2 + -0x223f, CheckSettingsGeneral_1[F(0x1da)])(e[G(0x286)]));
    return {
        'sandbox': ![],
        'client_id': await (0x17 * 0xd7 + -0x1 * 0x27e + 0x49 * -0x3b, CheckSettingsGeneral_1[F(0x1da)])(e[F(0x2c1)]),
        'client_secret': await (0x1a9a * -0x1 + 0x2c + -0x1 * -0x1a6e, CheckSettingsGeneral_1[F(0x1da)])(e[F(0x21f)]),
        'pix_cert': f,
        'validateMtls': ![]
    };
}
const newEfiPayInstance = async () => {
        const H = C, I = D, c = {
                'zejkF': function (e) {
                    return e();
                }
            }, d = await c[H(0x27c)](getEfiOptions);
        return new sdk_typescript_apis_efi_1[(I(0x1da))](d);
    }, createWebHook = async e => {
        const J = C, K = C, f = {};
        f[J(0x2c0)] = function (k, l) {
            return k !== l;
        }, f[J(0x2a0)] = J(0x29e), f[J(0x278)] = function (k, l) {
            return k === l;
        }, f[K(0x263)] = K(0x2d6), f[K(0x1d3)] = K(0x24f);
        const g = f, h = { 'chave': await (-0x427 + -0xb5e + 0xf85, CheckSettingsGeneral_1[K(0x1da)])(g[K(0x1d3)]) }, i = {};
        i[J(0x1fc)] = webhookUrl;
        const j = i;
        return e[J(0x299) + K(0x1d6)](h, j)[J(0x29a)](k => {
            const L = K, M = K;
            g[L(0x2c0)](g[L(0x2a0)], g[L(0x2a0)]) ? e[M(0x22c)][L(0x1c7)](L(0x213) + L(0x1cf) + L(0x275) + f) : logger_1[L(0x22c)][M(0x22b)](M(0x299) + M(0x233));
        }, k => {
            const N = K, O = K;
            if (g[N(0x278)](g[O(0x263)], g[O(0x263)]))
                logger_1[N(0x22c)][O(0x1c7)](N(0x299) + N(0x260) + N(0x259) + k);
            else {
                const m = {};
                return m['ok'] = !![], i[O(0x215)](m);
            }
        });
    }, efiInitialize = async () => {
        const P = D, Q = D, c = {
                'tSAxw': function (e, f, g) {
                    return e(f, g);
                },
                'culOs': function (e, f) {
                    return e !== f;
                },
                'sXcZw': function (e, f) {
                    return e(f);
                },
                'Stqyq': P(0x234) + P(0x2ab) + Q(0x23f) + P(0x21d) + Q(0x214),
                'yJjwC': function (e, f) {
                    return e === f;
                },
                'ufxht': Q(0x1c5),
                'zQixk': P(0x294),
                'UXasq': function (e, f) {
                    return e !== f;
                },
                'mHdbG': Q(0x284),
                'FRdaM': Q(0x296),
                'grcpC': P(0x2a1),
                'TGyla': P(0x291) + P(0x257) + 'do',
                'XfvcK': Q(0x20f),
                'AvTuo': Q(0x25f),
                'LpGpS': function (e, f) {
                    return e !== f;
                },
                'ockwn': P(0x28a),
                'RyaOj': Q(0x2a5),
                'sPTty': P(0x261) + Q(0x2ca) + Q(0x205) + P(0x1fa) + P(0x2c2) + 'e!',
                'WTDJn': Q(0x2c8) + P(0x204),
                'fdhZx': P(0x2b7),
                'hBlgS': Q(0x237),
                'HhRQY': Q(0x1e8),
                'oYSsW': Q(0x1ea),
                'NtlpW': function (e, f) {
                    return e !== f;
                },
                'EgDcQ': Q(0x287),
                'mFUZT': function (e) {
                    return e();
                },
                'lLXrW': Q(0x24f),
                'Aazbr': P(0x226),
                'pLrNG': Q(0x29c)
            }, d = await (-0x1f50 + -0x247d + 0x43cd, CheckSettingsGeneral_1[P(0x1da)])(c[Q(0x295)]);
        if (!webhookUrl[Q(0x2b3)](c[P(0x2d1)])) {
            if (c[Q(0x1d2)](c[P(0x2a8)], c[P(0x2a8)]))
                c[P(0x20a)](f, g, h);
            else {
                logger_1[P(0x22c)][Q(0x203)](P(0x213) + P(0x2be) + Q(0x265) + Q(0x26d) + P(0x2d2));
                return;
            }
        }
        ;
        try {
            if (c[Q(0x1c4)](c[P(0x2bb)], c[Q(0x2bb)]))
                e[Q(0x22c)][Q(0x1c7)](Q(0x299) + Q(0x260) + P(0x259) + f);
            else {
                if (c[Q(0x26b)](d, c[Q(0x210)])) {
                    if (c[Q(0x236)](c[P(0x277)], c[P(0x277)]))
                        c[Q(0x1d2)](h?.[P(0x1fc)], i) ? c[P(0x218)](m, n) : o[P(0x22c)][P(0x203)](P(0x213) + Q(0x27b) + P(0x1fd) + Q(0x2c4) + P(0x267));
                    else {
                        const h = await c[Q(0x1cc)](getEfiOptions), i = new sdk_typescript_apis_efi_1[(P(0x1da))](h), j = { 'chave': await (-0x153 * -0x4 + 0xb * -0x1ad + 0xd23, CheckSettingsGeneral_1[P(0x1da)])(c[P(0x216)]) };
                        i[Q(0x1dc) + P(0x1d6)](j)[P(0x29a)](k => {
                            const R = P, S = Q, l = {};
                            l[R(0x2d8)] = c[S(0x220)];
                            const m = l;
                            if (c[R(0x26b)](c[R(0x1e3)], c[S(0x212)]))
                                return d[S(0x22c)][R(0x203)](m[R(0x2d8)]), !![];
                            else {
                                if (c[R(0x1d2)](k?.[R(0x1fc)], webhookUrl)) {
                                    if (c[S(0x1c3)](c[R(0x206)], c[R(0x206)]))
                                        return e[R(0x22c)][R(0x203)](S(0x1ce) + R(0x247) + R(0x285) + R(0x258) + f[S(0x27a)]), ![];
                                    else
                                        c[S(0x218)](createWebHook, i);
                                } else
                                    c[S(0x1c3)](c[R(0x1c1)], c[R(0x1c1)]) ? f[R(0x22c)][S(0x1c7)](S(0x213) + R(0x280) + R(0x23c) + S(0x20e) + R(0x26a) + g[R(0x21b)](h)) : logger_1[R(0x22c)][R(0x203)](S(0x213) + R(0x27b) + S(0x1fd) + R(0x2c4) + R(0x267));
                            }
                        }, k => {
                            const T = Q, U = P;
                            if (c[T(0x26b)](c[U(0x2b0)], c[U(0x2b0)])) {
                                logger_1[U(0x22c)][T(0x1c7)](T(0x1dc) + U(0x260) + U(0x259) + JSON[U(0x21b)](k));
                                if (c[T(0x26b)](k?.[U(0x22a)], c[T(0x1ec)])) {
                                    if (c[T(0x26b)](c[U(0x235)], c[U(0x1fb)])) {
                                        g[T(0x22c)][U(0x203)](T(0x25c) + U(0x1e7) + U(0x1f2) + T(0x2a9) + T(0x25a) + U(0x24e) + h['id']), (0x222f + -0x1 * -0x11f2 + 0x11 * -0x311, i[T(0x1df) + U(0x222) + 'd'])(j);
                                        return;
                                    } else
                                        c[T(0x218)](createWebHook, i);
                                } else {
                                    if (c[T(0x1c4)](c[T(0x298)], c[T(0x1e6)]))
                                        logger_1[U(0x22c)][T(0x1c7)](T(0x213) + U(0x280) + U(0x23c) + T(0x20e) + T(0x26a) + JSON[U(0x21b)](k));
                                    else {
                                        d[T(0x22c)][T(0x203)](T(0x213) + T(0x2be) + U(0x265) + U(0x26d) + T(0x2d2));
                                        return;
                                    }
                                }
                            } else {
                                const o = {};
                                return o[T(0x1da)] = j, g && h[T(0x2c9)] ? i : o;
                            }
                        });
                    }
                }
            }
        } catch (k) {
            if (c[Q(0x26b)](c[P(0x25b)], c[P(0x24c)])) {
                f[Q(0x22c)][Q(0x1c7)](Q(0x2ad) + P(0x239) + P(0x238) + g);
                throw new h[(Q(0x1da))](c[P(0x27e)], -0x13 * -0x1 + -0x1 * -0x8ab + -0x72e);
            } else
                logger_1[P(0x22c)][P(0x1c7)](P(0x213) + P(0x1cf) + P(0x275) + k);
        }
    };
exports[C(0x213) + C(0x26c)] = efiInitialize;
function a() {
    const a9 = [
        ':\x20Invoice\x20',
        'qGRVp',
        'tenant',
        'pLrNG',
        '__importDe',
        'ce\x20',
        'efiPixKey',
        'GLfjP',
        'mmediateCh',
        'XTdZQ',
        'trxch',
        'wqgGP',
        '/subscript',
        '../../help',
        'o_encontra',
        'luded:\x20',
        'or:\x20',
        '\x20for\x20invoi',
        'Aazbr',
        'efiPollChe',
        'efiCertFil',
        'ook',
        'zYyJu',
        'ebhook\x20err',
        'Problema\x20e',
        'ecret',
        'dUuVv',
        't\x20found',
        'SSL\x20webhoo',
        '1844757iKlPYm',
        'ado',
        'oicePaid',
        'uIRGi',
        'bhook:\x20',
        'yJjwC',
        'ize',
        'ks\x20are\x20sup',
        '155wqHqQg',
        './PaymentG',
        'efiClientS',
        'reload',
        '../../mode',
        '86kHoFWi',
        'Drisz',
        'error:\x20',
        'ZPdCY',
        'EgDcQ',
        'AnjzT',
        'findByPk',
        'status',
        'ize:\x20webho',
        'zejkF',
        'BcErV',
        'sPTty',
        'ettingsGen',
        'ize:\x20fail\x20',
        'pt-br',
        'UzvyB',
        'txId',
        'fyuII',
        's\x20not\x20conc',
        'MNbTk',
        'UhFSv',
        'txid',
        'TLbnV',
        'OLZeO',
        'OJUZZ',
        'Invoice\x20no',
        'eral',
        'ion/whazin',
        'atus:\x20Invo',
        'erty',
        'webhook_na',
        'defineProp',
        'LBIJb',
        'SFqyI',
        'WTDJn',
        'RBlUD',
        'ls/Tenant',
        'ockwn',
        'pixConfigW',
        'then',
        'rivate/',
        'QfZQR',
        'QLsBe',
        'hGDsL',
        'zcTht',
        'EILvC',
        'oYoPv',
        'where',
        'model',
        'clQUH',
        'OBCSu',
        'xIiYJ',
        'jpIdt',
        'hBlgS',
        'ts\x20reached',
        'valor',
        ':\x20Received',
        'CRazW',
        'efiCreateS',
        'BACKEND_UR',
        'pixDetailC',
        'grcpC',
        'WGBCk',
        'qrcode',
        'startsWith',
        'GXeWT',
        'mantg',
        'ript-apis-',
        'https://',
        'HQZGv',
        'rCkfD',
        'NjcuL',
        'HhRQY',
        'yCarF',
        '\x20as\x20paid',
        'ize:\x20only\x20',
        'marked\x20as\x20',
        'pjQAz',
        'nAQzN',
        'm\x20o\x20suport',
        'KxyOr',
        '\x20já\x20instal',
        'ices',
        'DXLyU',
        'SZrrj',
        'paymentGat',
        '__esModule',
        'ncontrado,',
        'ers/CheckS',
        'original',
        'pix',
        'pixCopiaEC',
        'CZQUy',
        'replace',
        'fdhZx',
        'ported',
        'join',
        '24BvbcFM',
        'GDmOe',
        'kDqeB',
        'EzDlG',
        'CHoqE',
        'LnHwm',
        '\x20paid',
        'bmiML',
        '../../../p',
        'xFBLJ',
        'FRdaM',
        'PjTeI',
        'UXasq',
        'LpGpS',
        'trpKe',
        '\x20payment\x20f',
        'error',
        'TFwmo',
        'atus',
        'DMOjb',
        'MgzEj',
        'mFUZT',
        'RpGEb',
        'Transactio',
        'ize\x20catch\x20',
        '1320fipLNh',
        'hAZgX',
        'culOs',
        'qwbHP',
        'value',
        'oXaXk',
        'ebhook',
        'ALYib',
        'ls/Invoice',
        'fault',
        'default',
        '6144UiOCbE',
        'pixDetailW',
        'OvLRH',
        'expiracao',
        'processInv',
        'sdk-typesc',
        '../../erro',
        'paid',
        'ufxht',
        'atus\x20error',
        'gCewZ',
        'RyaOj',
        'ckStatus:\x20',
        'fpqTz',
        'update',
        'efi',
        'teste_webh',
        'TGyla',
        'forEach',
        'wAyzo',
        'efiClientI',
        'ynmit',
        'body',
        'Max\x20attemp',
        'ctionDigit',
        'findOne',
        'nTcaU',
        'g/webhook/',
        'UjJsR',
        'ice\x20marked',
        'rs/AppErro',
        'contato\x20co',
        'AvTuo',
        'webhookUrl',
        'ok\x20correto',
        'zwADt',
        'vQwiT',
        'ATIVA',
        'CONCLUIDA',
        'efiCheckSt',
        'debug',
        'eway',
        '\x20entre\x20em\x20',
        'mHdbG',
        'MzeGz',
        'HFMJH',
        'OFXJb',
        'tSAxw',
        '856020pkVOmK',
        'minimumFra',
        'include',
        'current\x20we',
        'YlATB',
        'oYSsW',
        'harge',
        'zQixk',
        'efiInitial',
        'oice\x20value',
        'json',
        'lLXrW',
        'IVQoa',
        'sXcZw',
        'toLocaleSt',
        '#Fatura:',
        'stringify',
        'Processing',
        's\x20than\x20inv',
        'fZLYz',
        'XiNRe',
        'Stqyq',
        'pixCreateI',
        'oiceExpire',
        '2826020ajccgG',
        'VjCDm',
        '5027sEioaA',
        'fDahI',
        'QAuFs',
        'env',
        'not\x20found\x20',
        'nome',
        'info',
        'logger',
        'JVgqi',
        'gabwu',
        'FAuXv',
        'DmDYJ',
        'open',
        'or\x20pix:\x20',
        'ebhook\x20ok',
        'efiWebhook',
        'XfvcK',
        'NtlpW',
        'zZtGu',
        'n\x20error:\x20',
        'ubscriptio',
        'or\x20already',
        'ola',
        'to\x20verify\x20',
        'fHpdY',
        '8946qgbDEX',
        '\x20value\x20les',
        'path',
        'ring',
        '136096WIcPXU',
        '../../util',
        'arge',
        'HuTfM',
        's/logger',
        'n\x20status\x20i',
        'atewayServ'
    ];
    a = function () {
        return a9;
    };
    return a();
}
const efiWebhook = async (e, f) => {
    const V = D, W = C, g = {
            'uIRGi': function (j, k) {
                return j(k);
            },
            'zcTht': V(0x234) + W(0x249) + V(0x229) + W(0x23a) + W(0x1bd),
            'KxyOr': function (j, k) {
                return j(k);
            },
            'QAuFs': function (j, k) {
                return j === k;
            },
            'PjTeI': V(0x1d1),
            'MzeGz': W(0x274),
            'JVgqi': W(0x231),
            'yCarF': V(0x24b),
            'qGRVp': function (j, k) {
                return j === k;
            },
            'fZLYz': W(0x2b8),
            'SZrrj': function (j, k) {
                return j < k;
            },
            'DmDYJ': W(0x2b9),
            'TFwmo': W(0x234) + W(0x2ab) + W(0x23f) + V(0x21d) + W(0x214),
            'OvLRH': W(0x234) + V(0x249) + V(0x2bf) + V(0x1e2),
            'QLsBe': W(0x1eb) + V(0x25e),
            'bmiML': V(0x28b),
            'GLfjP': V(0x1f7),
            'TLbnV': W(0x22f),
            'xIiYJ': W(0x217)
        }, {evento: h} = e[V(0x1f1)];
    if (g[V(0x227)](h, g[V(0x29d)])) {
        if (g[V(0x24a)](g[V(0x1be)], g[W(0x250)]))
            g[V(0x269)](e, f);
        else {
            const k = {};
            return k['ok'] = !![], f[W(0x215)](k);
        }
    }
    if (e[W(0x1f1)][W(0x2cd)]) {
        if (g[V(0x24a)](g[W(0x289)], g[V(0x2a6)]))
            return i[V(0x22c)][V(0x203)](g[V(0x29f)]), !![];
        else
            e[W(0x1f1)][V(0x2cd)][V(0x1ed)](async m => {
                const Y = V, Z = W, n = {
                        'OFXJb': function (o, p) {
                            const X = b;
                            return g[X(0x2c3)](o, p);
                        }
                    };
                if (g[Y(0x227)](g[Y(0x1c2)], g[Z(0x207)]))
                    i[Y(0x22c)][Z(0x22b)](Y(0x299) + Y(0x233));
                else {
                    logger_1[Z(0x22c)][Y(0x203)](Z(0x21c) + Z(0x1c6) + Y(0x232) + JSON[Z(0x21b)](m));
                    const p = {};
                    p[Z(0x283)] = m[Y(0x288)], p[Y(0x27a)] = g[Z(0x22d)];
                    const q = {};
                    q[Y(0x2a3)] = Tenant_1[Y(0x1da)], q['as'] = g[Y(0x2bc)];
                    const r = {};
                    r[Z(0x2a2)] = p, r[Y(0x20d)] = [q];
                    const s = await Invoices_1[Y(0x1da)][Z(0x1f4)](r);
                    if (!s) {
                        if (g[Z(0x24a)](g[Y(0x21e)], g[Y(0x21e)]))
                            return logger_1[Y(0x22c)][Z(0x203)](g[Y(0x29f)]), !![];
                        else
                            return;
                    }
                    if (g[Y(0x2c7)](m[Z(0x2aa)], s[Z(0x1d4)])) {
                        if (g[Y(0x24a)](g[Z(0x230)], g[Z(0x230)]))
                            return logger_1[Z(0x22c)][Y(0x203)](g[Z(0x1c8)]), !![];
                        else
                            n[Z(0x209)](q, r);
                    }
                    return await (-0x1e40 + 0x134b + 0x5 * 0x231, PaymentGatewayServices_1[Z(0x1df) + Z(0x268)])(s), logger_1[Z(0x22c)][Y(0x203)](g[Y(0x1dd)]), !![];
                }
            });
    }
    const i = {};
    return i['ok'] = !![], f[W(0x215)](i);
};
exports[C(0x234)] = efiWebhook;
const efiCheckStatus = async (d, e = null) => {
    const a0 = C, a1 = D, f = {
            'oXaXk': a0(0x28c) + a0(0x264),
            'LBIJb': function (g, h) {
                return g === h;
            },
            'gCewZ': a0(0x291) + a1(0x257) + 'do',
            'MgzEj': function (g, h) {
                return g(h);
            },
            'HFMJH': a0(0x245),
            'jpIdt': a0(0x253),
            'clQUH': a1(0x23d),
            'wqgGP': function (g) {
                return g();
            },
            'gabwu': a1(0x200),
            'wAyzo': function (g, h) {
                return g !== h;
            },
            'CZQUy': a1(0x201),
            'UzvyB': function (g, h) {
                return g === h;
            },
            'xFBLJ': a1(0x2b1),
            'DMOjb': function (g, h) {
                return g >= h;
            },
            'GDmOe': a1(0x252),
            'nTcaU': a1(0x202) + a0(0x28f) + a1(0x1f8) + a0(0x2bd),
            'ynmit': a0(0x2ba)
        };
    try {
        if (f[a1(0x293)](f[a1(0x208)], f[a1(0x208)])) {
            if (!e) {
                if (f[a0(0x293)](f[a1(0x2a7)], f[a1(0x2a4)]))
                    return;
                else
                    e = await f[a1(0x254)](newEfiPayInstance);
            }
            const g = {};
            g[a0(0x288)] = d[a1(0x283)];
            const h = await e[a0(0x2af) + a1(0x211)](g);
            if (f[a0(0x293)](h[a0(0x27a)], f[a0(0x22e)]) || f[a0(0x1ee)](h[a0(0x27a)], f[a0(0x2cf)])) {
                if (f[a1(0x282)](f[a1(0x1c0)], f[a0(0x1c0)]))
                    return logger_1[a0(0x22c)][a1(0x203)](a0(0x1ce) + a0(0x247) + a1(0x285) + a0(0x258) + h[a0(0x27a)]), ![];
                else
                    e[a1(0x22c)][a0(0x1c7)](a0(0x202) + a0(0x1e4) + ':\x20' + f);
            }
            const {pix: i} = h;
            if (f[a1(0x1ca)](i[-0x161c * 0x1 + -0x7af + 0x1dcb][a0(0x2aa)], d[a0(0x1d4)])) {
                if (f[a1(0x293)](f[a0(0x2d5)], f[a0(0x2d5)]))
                    return await (-0x1 * 0xf63 + 0x1b3c + 0x151 * -0x9, PaymentGatewayServices_1[a1(0x1df) + a1(0x268)])(d), logger_1[a1(0x22c)][a1(0x203)](f[a1(0x1f5)]), !![];
                else
                    d[a0(0x22c)][a1(0x203)](a0(0x213) + a0(0x27b) + a1(0x1fd) + a0(0x2c4) + a1(0x267));
            }
            return ![];
        } else
            throw new d(f[a0(0x1d5)]);
    } catch (n) {
        f[a1(0x1ee)](f[a0(0x1f0)], f[a0(0x1f0)]) ? (l[a1(0x22c)][a0(0x1c7)](a1(0x1dc) + a0(0x260) + a1(0x259) + m[a0(0x21b)](n)), f[a0(0x293)](o?.[a1(0x22a)], f[a0(0x1e5)]) ? f[a1(0x1cb)](u, v) : w[a0(0x22c)][a1(0x1c7)](a0(0x213) + a1(0x280) + a1(0x23c) + a1(0x20e) + a1(0x26a) + x[a1(0x21b)](y))) : logger_1[a1(0x22c)][a1(0x1c7)](a0(0x202) + a0(0x1e4) + ':\x20' + n);
    }
    return ![];
};
exports[C(0x202) + C(0x1c9)] = efiCheckStatus;
const efiPollCheckStatus = async (c, d, e = -0x11c1 + 0x13 * -0x76 + 0x1a8d, f = -0xb738 + -0x71a3 + 0x19e0b) => {
        const a2 = C, a6 = C, g = {
                'vQwiT': function (j, k, l) {
                    return j(k, l);
                },
                'CRazW': function (j, k) {
                    return j === k;
                },
                'mantg': a2(0x1e2),
                'ZPdCY': function (j, k) {
                    return j >= k;
                },
                'RpGEb': function (j) {
                    return j();
                },
                'zwADt': function (j) {
                    return j();
                }
            };
        let h = 0x208 + 0x7a * -0x1f + 0xcbe;
        async function i() {
            const a3 = a2, a4 = a2;
            await d[a3(0x271)]();
            if (g[a4(0x2ac)](d[a4(0x27a)], g[a4(0x2b5)]))
                return;
            const j = await (0x20d2 + 0x168b * -0x1 + -0xa47, exports[a3(0x202) + a4(0x1c9)])(d, c);
            if (j)
                return;
            h += 0x1 * 0x2439 + 0x1 * 0xf94 + -0x33cc;
            if (g[a4(0x276)](h, e)) {
                logger_1[a4(0x22c)][a4(0x203)](a4(0x25c) + a4(0x1e7) + a4(0x1f2) + a3(0x2a9) + a3(0x25a) + a3(0x24e) + d['id']), (0x1 * 0x18f9 + -0x2689 + 0xd90, PaymentGatewayServices_1[a4(0x1df) + a4(0x222) + 'd'])(d);
                return;
            }
            await new Promise(k => {
                const a5 = a3;
                g[a5(0x1ff)](setTimeout, k, f);
            }), await g[a4(0x1cd)](i);
        }
        return g[a6(0x1fe)](i);
    }, efiCreateSubscription = async (h, i) => {
        const a7 = D, a8 = D, j = {
                'VjCDm': a7(0x281),
                'DXLyU': a7(0x24f),
                'ALYib': function (q) {
                    return q();
                },
                'LnHwm': a7(0x28c) + a7(0x264),
                'EzDlG': a7(0x1ea),
                'BcErV': function (q, r, s) {
                    return q(r, s);
                },
                'GXeWT': a7(0x261) + a8(0x2ca) + a8(0x205) + a8(0x1fa) + a8(0x2c2) + 'e!'
            }, {
                price: k,
                invoiceId: l
            } = h[a7(0x1f1)], m = {};
        m[a8(0x1de)] = 0x12c;
        const n = {};
        n[a7(0x20c) + a7(0x1f3) + 's'] = 0x2;
        const o = {
                'calendario': m,
                'valor': { 'original': k[a7(0x219) + a8(0x241)](j[a8(0x224)], n)[a7(0x2d0)](',', '.') },
                'chave': await (-0x12a7 + 0x2a5 + -0x801 * -0x2, CheckSettingsGeneral_1[a7(0x1da)])(j[a8(0x2c6)]),
                'solicitacaoPagador': a8(0x21a) + l
            }, p = await j[a7(0x1d7)](getEfiOptions);
        try {
            const q = await Invoices_1[a7(0x1da)][a7(0x279)](l);
            if (!q)
                throw new Error(j[a7(0x2d9)]);
            await (0x3 * -0x626 + -0x45 * 0xd + 0x3 * 0x751, exports[a7(0x213) + a8(0x26c)])();
            const r = new sdk_typescript_apis_efi_1[(a8(0x1da))](p), s = await r[a7(0x221) + a8(0x251) + a8(0x244)]([], o);
            await q[a8(0x1e9)]({
                'txId': s[a7(0x288)],
                'payGw': j[a7(0x2d7)],
                'payGwData': JSON[a8(0x21b)](s)
            }), await q[a7(0x271)](), j[a8(0x27d)](efiPollCheckStatus, r, q);
            const t = {};
            t[a8(0x2b2)] = s[a8(0x2ce) + a8(0x23b)];
            const u = {};
            u[a8(0x2cc)] = k;
            const v = {};
            return v[a7(0x2b2)] = t, v[a8(0x2aa)] = u, i[a7(0x215)](v);
        } catch (w) {
            logger_1[a8(0x22c)][a8(0x1c7)](a7(0x2ad) + a8(0x239) + a7(0x238) + w);
            throw new AppError_1[(a8(0x1da))](j[a7(0x2b4)], 0x2572 * 0x1 + -0x10b3 + 0x132f * -0x1);
        }
    };
exports[C(0x2ad) + C(0x239) + 'n'] = efiCreateSubscription;