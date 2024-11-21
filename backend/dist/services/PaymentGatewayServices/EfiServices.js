'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x23b)) / (-0x8 * -0x43f + -0x1109 * 0x2 + 0x1b) * (-parseInt(B(0x1cb)) / (-0x1f0f + 0x1cd * -0x7 + -0xd7 * -0x34)) + parseInt(B(0x155)) / (0x15 * -0x1be + 0x1 * 0x1cc3 + 0x7d6) + -parseInt(A(0x227)) / (0x6a3 * -0x1 + -0xf6 * 0x1a + -0x26f * -0xd) * (parseInt(A(0x1bc)) / (-0x2 * -0x83 + -0x41c + 0x5 * 0x9f)) + parseInt(A(0x186)) / (0x1541 + -0x24e5 + 0xfaa) * (parseInt(A(0x1e6)) / (0x5 * -0x75b + 0xb93 + 0x193b)) + parseInt(A(0x1a2)) / (0x139 * -0x3 + 0x1d80 + 0x19cd * -0x1) * (-parseInt(A(0x26a)) / (0x1 * -0xf7f + -0x10e + 0x1096)) + parseInt(A(0x234)) / (-0x11f2 + 0x1 * -0xbd3 + -0xd * -0x24b) + -parseInt(A(0x1a7)) / (0x74d + -0xdc * -0xd + -0x126e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x54c3b + -0x65ec2 + -0x5e940 * -0x1));
var __importDefault = this && this[C(0x1e0) + D(0x268)] || function (c) {
    const E = D;
    return c && c[E(0x24b)] ? c : { 'default': c };
};
const z = {};
z[C(0x27c)] = !![], Object[C(0x265) + C(0x164)](exports, D(0x24b), z), exports[D(0x25b) + D(0x1f6) + 'n'] = exports[D(0x197) + C(0x1c7)] = exports[C(0x17e)] = exports[D(0x23f) + D(0x240)] = void (0xae3 + -0x199 * 0x17 + 0x19dc);
const sdk_typescript_apis_efi_1 = __importDefault(require(C(0x215) + C(0x1f0) + D(0x1b0))), path_1 = __importDefault(require(D(0x24d))), CheckSettingsGeneral_1 = __importDefault(require(C(0x247) + C(0x263) + D(0x223) + D(0x178))), logger_1 = require(D(0x1b2) + C(0x222)), Invoices_1 = __importDefault(require(D(0x22f) + D(0x272) + 's')), Tenant_1 = __importDefault(require(D(0x22f) + D(0x249))), AppError_1 = __importDefault(require(C(0x196) + D(0x175) + 'r')), PaymentGatewayServices_1 = require(C(0x1d2) + C(0x277) + C(0x1b8)), webhookUrl = process[D(0x27d)][C(0x202) + 'L'] + (C(0x1d4) + C(0x1ea) + C(0x23c));
async function getEfiOptions() {
    const F = C, G = C, d = {};
    d[F(0x1a5)] = F(0x1fc) + 'e', d[G(0x242)] = F(0x243) + 'd', d[F(0x26e)] = F(0x225) + F(0x18d);
    const e = d, f = path_1[G(0x19d)][G(0x21e)](__dirname, F(0x163) + F(0x1b7) + await (-0x1b90 + -0x1171 + -0x1 * -0x2d01, CheckSettingsGeneral_1[F(0x19d)])(e[G(0x1a5)]));
    return {
        'sandbox': ![],
        'client_id': await (-0x205e * -0x1 + 0x256d + 0x1 * -0x45cb, CheckSettingsGeneral_1[F(0x19d)])(e[G(0x242)]),
        'client_secret': await (0x16a8 + -0x1 * -0x1cad + -0x11 * 0x305, CheckSettingsGeneral_1[G(0x19d)])(e[G(0x26e)]),
        'pix_cert': f,
        'validateMtls': ![]
    };
}
const newEfiPayInstance = async () => {
        const H = D, I = C, c = {
                'KSUnB': function (e) {
                    return e();
                }
            }, d = await c[H(0x256)](getEfiOptions);
        return new sdk_typescript_apis_efi_1[(I(0x19d))](d);
    }, createWebHook = async d => {
        const J = D, K = D, e = {
                'aAdfJ': function (i, j) {
                    return i(j);
                },
                'bkOUV': function (i, j) {
                    return i === j;
                },
                'IidXk': J(0x184),
                'FcbzN': function (i, j) {
                    return i === j;
                },
                'LoJCw': K(0x267),
                'ZUOqy': J(0x273)
            }, f = { 'chave': await (0x170d + -0x8c * -0x27 + -0x3 * 0xecb, CheckSettingsGeneral_1[J(0x19d)])(e[J(0x1f4)]) }, g = {};
        g[K(0x1e5)] = webhookUrl;
        const h = g;
        return d[K(0x218) + K(0x1ef)](f, h)[K(0x216)](i => {
            const M = J, N = K, j = {
                    'SreWR': function (k, l) {
                        const L = b;
                        return e[L(0x157)](k, l);
                    }
                };
            e[M(0x1d0)](e[M(0x269)], e[N(0x269)]) ? logger_1[N(0x1bd)][N(0x1da)](N(0x218) + N(0x1b3)) : j[M(0x198)](e, f);
        }, i => {
            const O = J, P = K;
            if (e[O(0x275)](e[O(0x1fa)], e[O(0x1fa)]))
                logger_1[P(0x1bd)][O(0x174)](O(0x218) + P(0x161) + O(0x176) + i);
            else {
                g[P(0x1bd)][O(0x173)](O(0x1f3) + O(0x171) + P(0x1ee) + P(0x21b) + P(0x1fe) + P(0x212) + h['id']), (0xce2 + 0xb09 + -0x17eb, i[P(0x1bb) + P(0x274) + 'd'])(j);
                return;
            }
        });
    }, efiInitialize = async () => {
        const Q = C, R = D, c = {
                'HYoAY': Q(0x235) + R(0x1dc) + R(0x238) + Q(0x15d) + R(0x22b) + 'e!',
                'bwWFd': function (e, f) {
                    return e !== f;
                },
                'YMESx': Q(0x1d7),
                'XLzJN': Q(0x25e),
                'RkEZa': Q(0x23e),
                'nzllA': Q(0x1d6),
                'rpotc': function (e, f) {
                    return e(f);
                },
                'vnQKr': function (e, f) {
                    return e !== f;
                },
                'mBrwq': Q(0x217),
                'rxVTZ': Q(0x17f),
                'pRdGY': function (e, f) {
                    return e !== f;
                },
                'untbs': R(0x1b1),
                'oiwZi': Q(0x190),
                'TuLvi': function (e, f) {
                    return e === f;
                },
                'tfbxY': Q(0x20a) + Q(0x262) + 'do',
                'MnPKJ': Q(0x261),
                'khAQZ': function (e, f) {
                    return e(f);
                },
                'AEUxc': function (e, f) {
                    return e === f;
                },
                'TsIZm': Q(0x185),
                'vDTZE': R(0x1c9) + Q(0x248),
                'NSzPi': Q(0x1a6),
                'SKCGf': function (e, f) {
                    return e === f;
                },
                'enKZa': Q(0x276),
                'OJelw': R(0x224),
                'JPPYO': function (e, f) {
                    return e === f;
                },
                'BfQGn': Q(0x182),
                'KIfJf': Q(0x1d9),
                'gIEdP': function (e, f) {
                    return e === f;
                },
                'THbaI': R(0x1b0),
                'iNyFZ': function (e, f) {
                    return e !== f;
                },
                'uwTdF': R(0x169),
                'iHFyx': function (e) {
                    return e();
                },
                'wpAEy': Q(0x273),
                'MpeJK': R(0x18c)
            }, d = await (0x7dd + -0x4a * 0x53 + 0x1 * 0x1021, CheckSettingsGeneral_1[Q(0x19d)])(c[R(0x205)]);
        if (!webhookUrl[R(0x246)](c[R(0x187)])) {
            if (c[Q(0x21d)](c[R(0x251)], c[Q(0x167)])) {
                const f = {};
                return f[Q(0x19d)] = j, g && h[R(0x24b)] ? i : f;
            } else {
                logger_1[Q(0x1bd)][Q(0x173)](Q(0x23f) + Q(0x1d3) + R(0x1fb) + Q(0x19c) + R(0x16d));
                return;
            }
        }
        ;
        try {
            if (c[Q(0x1d1)](c[R(0x25a)], c[R(0x228)])) {
                f[R(0x1bd)][Q(0x174)](R(0x25b) + Q(0x1f6) + R(0x258) + g);
                throw new h[(Q(0x19d))](c[R(0x15e)], -0x184 * -0x2 + 0x10 * -0x17e + 0x1668);
            } else {
                if (c[R(0x206)](d, c[Q(0x1c5)])) {
                    if (c[Q(0x1e4)](c[R(0x1f8)], c[R(0x1f8)]))
                        d[R(0x1bd)][Q(0x1da)](Q(0x218) + R(0x1b3));
                    else {
                        const h = await c[R(0x1f7)](getEfiOptions), i = new sdk_typescript_apis_efi_1[(R(0x19d))](h), j = { 'chave': await (0x77d + -0x49d + -0x2e0, CheckSettingsGeneral_1[R(0x19d)])(c[R(0x17b)]) };
                        i[Q(0x1ac) + Q(0x1ef)](j)[R(0x216)](k => {
                            const S = R, T = Q;
                            if (c[S(0x200)](c[S(0x1de)], c[T(0x1bf)]))
                                c[T(0x200)](k?.[T(0x1e5)], webhookUrl) ? c[T(0x200)](c[T(0x211)], c[T(0x236)]) ? c[S(0x20f)](createWebHook, i) : f[S(0x1bd)][T(0x174)](T(0x23f) + T(0x1c6) + T(0x255) + S(0x244) + S(0x1af) + g[S(0x1b9)](h)) : c[T(0x1b5)](c[S(0x27e)], c[T(0x1fd)]) ? logger_1[T(0x1bd)][T(0x173)](S(0x23f) + S(0x25c) + S(0x162) + S(0x1a0) + T(0x279)) : d[S(0x1bd)][T(0x173)](S(0x23f) + S(0x25c) + S(0x162) + S(0x1a0) + S(0x279));
                            else {
                                d[T(0x1bd)][T(0x173)](T(0x23f) + S(0x1d3) + S(0x1fb) + T(0x19c) + S(0x16d));
                                return;
                            }
                        }, k => {
                            const U = Q, V = Q;
                            if (c[U(0x200)](c[V(0x232)], c[V(0x17c)])) {
                                logger_1[U(0x1bd)][U(0x174)](V(0x1ac) + U(0x161) + V(0x176) + JSON[U(0x1b9)](k));
                                if (c[V(0x1be)](k?.[V(0x1cc)], c[V(0x195)])) {
                                    if (c[U(0x1be)](c[U(0x16a)], c[U(0x16a)]))
                                        c[U(0x229)](createWebHook, i);
                                    else
                                        return e[U(0x1bd)][U(0x173)](U(0x26c) + U(0x264) + V(0x203) + U(0x245) + f[U(0x1f1)]), ![];
                                } else
                                    c[U(0x1c3)](c[V(0x22e)], c[U(0x22e)]) ? logger_1[V(0x1bd)][U(0x174)](U(0x23f) + U(0x1c6) + V(0x255) + V(0x244) + V(0x1af) + JSON[U(0x1b9)](k)) : e[U(0x1bd)][U(0x174)](U(0x23f) + U(0x20c) + U(0x1ca) + f);
                            } else
                                c[U(0x241)](h?.[U(0x1e5)], i) ? c[U(0x20f)](m, n) : o[V(0x1bd)][U(0x173)](U(0x23f) + U(0x25c) + U(0x162) + V(0x1a0) + V(0x279));
                        });
                    }
                }
            }
        } catch (k) {
            c[R(0x241)](c[Q(0x20e)], c[R(0x20e)]) ? e[Q(0x1bd)][Q(0x174)](Q(0x197) + R(0x1c4) + ':\x20' + f) : logger_1[R(0x1bd)][Q(0x174)](R(0x23f) + R(0x20c) + Q(0x1ca) + k);
        }
    };
function a() {
    const aa = [
        'pixDetailW',
        'expiracao',
        'arge',
        'bhook:\x20',
        'efi',
        'hgOTL',
        '../../util',
        'ebhook\x20ok',
        'IbHke',
        'vnQKr',
        'xURHg',
        'rivate/',
        'ices',
        'stringify',
        'ATIVA',
        'processInv',
        '13660lamomb',
        'logger',
        'TuLvi',
        'XLzJN',
        'dwsRt',
        'NODYe',
        'dIVRN',
        'AEUxc',
        'atus\x20error',
        'THbaI',
        'ize:\x20fail\x20',
        'atus',
        'original',
        'paymentGat',
        'error:\x20',
        '4zRNWim',
        'nome',
        'JZDoO',
        'OzMhx',
        'pt-br',
        'bkOUV',
        'JPPYO',
        './PaymentG',
        'ize:\x20only\x20',
        '/subscript',
        'mmediateCh',
        'NCLKT',
        'CcrvD',
        'DCCtU',
        'oTvAs',
        'info',
        'CKtNH',
        'ncontrado,',
        '\x20paid',
        'YMESx',
        'nGwnN',
        '__importDe',
        'pixDetailC',
        'bBrrH',
        'XTOjx',
        'iNyFZ',
        'webhookUrl',
        '364xWaXwL',
        'JqVBl',
        'model',
        'NrfbE',
        'ion/whazin',
        'atus:\x20Invo',
        'ice\x20marked',
        'JgTmS',
        'Max\x20attemp',
        'ebhook',
        'ript-apis-',
        'status',
        '\x20as\x20paid',
        'efiPollChe',
        'ZUOqy',
        'uljgC',
        'ubscriptio',
        'iHFyx',
        'uwTdF',
        'oFhXQ',
        'LoJCw',
        'SSL\x20webhoo',
        'efiCertFil',
        'rxVTZ',
        '\x20for\x20invoi',
        'jkqKd',
        'bwWFd',
        'EmbtS',
        'BACKEND_UR',
        's\x20not\x20conc',
        'json',
        'vDTZE',
        'gIEdP',
        '#Fatura:',
        'harge',
        'HzGbJ',
        'webhook_na',
        'ajBNV',
        'ize\x20catch\x20',
        'DkjCw',
        'MpeJK',
        'rpotc',
        'Processing',
        'RkEZa',
        'ce\x20',
        'mYuKF',
        'LiLyl',
        'sdk-typesc',
        'then',
        'YktBU',
        'pixConfigW',
        'rkUbq',
        'LkqHc',
        'ts\x20reached',
        'VtwtY',
        'SKCGf',
        'join',
        'DEPxt',
        'lgivF',
        'bkckm',
        's/logger',
        'ettingsGen',
        'OvpAW',
        'efiClientS',
        'pixCreateI',
        '556VNhPFR',
        'KIfJf',
        'khAQZ',
        'body',
        'm\x20o\x20suport',
        'findOne',
        't\x20found',
        'TsIZm',
        '../../mode',
        'fkmlw',
        'HUNCM',
        'untbs',
        'KpYhk',
        '2817370vtWKtN',
        'Problema\x20e',
        'nzllA',
        'pOvpa',
        '\x20entre\x20em\x20',
        'azBqh',
        ':\x20Received',
        '101735brIuDT',
        'g/webhook/',
        'xZmEy',
        'pNFXm',
        'efiInitial',
        'ize',
        'pRdGY',
        'AlNMJ',
        'efiClientI',
        'current\x20we',
        'luded:\x20',
        'startsWith',
        '../../help',
        'eway',
        'ls/Tenant',
        'OAtBz',
        '__esModule',
        'Dnbqu',
        'path',
        's\x20than\x20inv',
        'nfvSX',
        'open',
        'enKZa',
        'findByPk',
        'pCYhc',
        '\x20value\x20les',
        'to\x20verify\x20',
        'KSUnB',
        'nLoUK',
        'n\x20error:\x20',
        'uTtYt',
        'BfQGn',
        'efiCreateS',
        'ize:\x20webho',
        'txId',
        'fYubv',
        'zuwAh',
        'ola',
        'dmEQo',
        'o_encontra',
        'ers/CheckS',
        'n\x20status\x20i',
        'defineProp',
        'teste_webh',
        'cjCJY',
        'fault',
        'IidXk',
        '9KeMYkA',
        'NDtrW',
        'Transactio',
        'tenant',
        'nRvkE',
        'tWFnt',
        'reload',
        'paid',
        'ls/Invoice',
        'efiPixKey',
        'oiceExpire',
        'FcbzN',
        'ZKjgt',
        'atewayServ',
        'AHnkE',
        'ado',
        'txid',
        ':\x20Invoice\x20',
        'value',
        'env',
        'mBrwq',
        'HjNvO',
        '1768938aCBCAR',
        'include',
        'aAdfJ',
        'CONCLUIDA',
        'NzGbh',
        'where',
        'ctionDigit',
        'oicePaid',
        'contato\x20co',
        'HYoAY',
        'Invoice\x20no',
        'OqMIY',
        'ebhook\x20err',
        'ok\x20correto',
        '../../../p',
        'erty',
        'update',
        '\x20payment\x20f',
        'OJelw',
        'uidqG',
        'LIrlt',
        'MnPKJ',
        'YuCDe',
        'YOEnI',
        'ported',
        'NuDdN',
        'dvbUu',
        'rBwJO',
        'ckStatus:\x20',
        'DcPbB',
        'debug',
        'error',
        'rs/AppErro',
        'or:\x20',
        'pXxLt',
        'eral',
        'minimumFra',
        'replace',
        'wpAEy',
        'oiwZi',
        'EFZfL',
        'efiWebhook',
        'yUzxC',
        'TUayw',
        'RzxbL',
        'MYsNe',
        'ook',
        'esZxI',
        'PtUHe',
        '33042gJvjTw',
        'NSzPi',
        'kLjEP',
        'valor',
        'pix',
        'Fxmcv',
        'yNXvs',
        'ecret',
        'not\x20found\x20',
        'oice\x20value',
        'bRyFp',
        'hqvzW',
        'forEach',
        'mZUPO',
        'pixCopiaEC',
        'tfbxY',
        '../../erro',
        'efiCheckSt',
        'SreWR',
        'VBpoo',
        'or\x20pix:\x20',
        'ring',
        'ks\x20are\x20sup',
        'default',
        'CqiBj',
        'marked\x20as\x20',
        '\x20já\x20instal',
        'MYtNX',
        '318432SxuPWj',
        'oslcO',
        'oEQLo',
        'HCekQ',
        'https://',
        '6870072zgeNhW',
        'or\x20already',
        'fAdvS',
        'toLocaleSt',
        'qrcode'
    ];
    a = function () {
        return aa;
    };
    return a();
}
exports[C(0x23f) + C(0x240)] = efiInitialize;
const efiWebhook = async (e, f) => {
    const W = C, X = D, g = {
            'nfvSX': W(0x17e) + X(0x23a) + W(0x254) + X(0x24e) + X(0x18f),
            'xZmEy': function (j, k) {
                return j === k;
            },
            'EFZfL': X(0x20a) + W(0x262) + 'do',
            'TUayw': function (j, k) {
                return j(k);
            },
            'HzGbJ': W(0x15f) + X(0x22d),
            'mZUPO': function (j, k) {
                return j !== k;
            },
            'JgTmS': X(0x181),
            'oEQLo': X(0x199),
            'oslcO': X(0x250),
            'lgivF': X(0x26d),
            'DcPbB': W(0x177),
            'zuwAh': X(0x16c),
            'XTOjx': W(0x17e) + X(0x27b) + W(0x18e) + X(0x1a8) + W(0x1dd),
            'EmbtS': function (j, k) {
                return j < k;
            },
            'NrfbE': W(0x20d),
            'JqVBl': X(0x16e),
            'OqMIY': X(0x17e) + X(0x27b) + W(0x19f) + W(0x271),
            'nLoUK': function (j, k) {
                return j === k;
            },
            'dIVRN': W(0x266) + X(0x183),
            'JZDoO': W(0x230),
            'nGwnN': X(0x1a9)
        }, {evento: h} = e[X(0x22a)];
    if (g[X(0x257)](h, g[X(0x1c2)])) {
        if (g[X(0x23d)](g[W(0x1cd)], g[X(0x1cd)])) {
            const j = {};
            return j['ok'] = !![], f[X(0x204)](j);
        } else
            return i[X(0x1bd)][X(0x173)](g[W(0x24f)]), !![];
    }
    if (e[X(0x22a)][W(0x18a)]) {
        if (g[W(0x257)](g[X(0x1df)], g[W(0x1df)]))
            e[W(0x22a)][X(0x18a)][X(0x192)](async l => {
                const Y = W, Z = W;
                if (g[Y(0x193)](g[Z(0x1ed)], g[Y(0x1a4)])) {
                    logger_1[Y(0x1bd)][Y(0x173)](Z(0x210) + Y(0x166) + Y(0x19a) + JSON[Z(0x1b9)](l));
                    const m = {};
                    m[Z(0x25d)] = l[Y(0x27a)], m[Z(0x1f1)] = g[Y(0x1a3)];
                    const n = {};
                    n[Y(0x1e8)] = Tenant_1[Z(0x19d)], n['as'] = g[Z(0x220)];
                    const o = {};
                    o[Z(0x15a)] = m, o[Z(0x156)] = [n];
                    const p = await Invoices_1[Y(0x19d)][Y(0x22c)](o);
                    if (!p) {
                        if (g[Y(0x23d)](g[Z(0x172)], g[Y(0x25f)]))
                            l[Y(0x1bd)][Z(0x174)](Y(0x1ac) + Z(0x161) + Y(0x176) + m[Y(0x1b9)](n)), g[Z(0x23d)](o?.[Z(0x1cc)], g[Z(0x17d)]) ? g[Y(0x180)](u, v) : w[Y(0x1bd)][Y(0x174)](Z(0x23f) + Z(0x1c6) + Z(0x255) + Z(0x244) + Y(0x1af) + x[Z(0x1b9)](y));
                        else
                            return logger_1[Z(0x1bd)][Z(0x173)](g[Z(0x1e3)]), !![];
                    }
                    if (g[Z(0x201)](l[Z(0x189)], p[Y(0x27c)])) {
                        if (g[Y(0x23d)](g[Y(0x1e9)], g[Y(0x1e7)]))
                            throw new m(g[Z(0x209)]);
                        else
                            return logger_1[Z(0x1bd)][Y(0x173)](g[Y(0x24f)]), !![];
                    }
                    return await (0x2421 * 0x1 + 0x1530 + -0x3951, PaymentGatewayServices_1[Y(0x1bb) + Y(0x15c)])(p), logger_1[Z(0x1bd)][Y(0x173)](g[Y(0x160)]), !![];
                } else
                    return;
            });
        else
            return i[X(0x1bd)][X(0x173)](g[X(0x1e3)]), !![];
    }
    const i = {};
    return i['ok'] = !![], f[X(0x204)](i);
};
exports[C(0x17e)] = efiWebhook;
const efiCheckStatus = async (d, e = null) => {
    const a0 = C, a1 = C, f = {
            'HjNvO': function (g, h) {
                return g(h);
            },
            'OAtBz': function (g, h, i) {
                return g(h, i);
            },
            'azBqh': function (g, h) {
                return g === h;
            },
            'ajBNV': a0(0x1ff),
            'hqvzW': function (g, h) {
                return g !== h;
            },
            'YuCDe': a0(0x219),
            'pOvpa': a1(0x1b6),
            'HUNCM': function (g) {
                return g();
            },
            'Dnbqu': function (g, h) {
                return g === h;
            },
            'IbHke': a1(0x1ba),
            'tWFnt': function (g, h) {
                return g !== h;
            },
            'dwsRt': a0(0x158),
            'dvbUu': function (g, h) {
                return g === h;
            },
            'oFhXQ': a0(0x278),
            'bBrrH': a0(0x233),
            'rBwJO': function (g, h) {
                return g >= h;
            },
            'bkckm': function (g, h) {
                return g === h;
            },
            'OzMhx': a1(0x188),
            'LkqHc': a1(0x197) + a1(0x1eb) + a1(0x1ec) + a1(0x1f2),
            'Fxmcv': function (g, h) {
                return g === h;
            },
            'NzGbh': a0(0x214)
        };
    try {
        if (f[a0(0x239)](f[a0(0x20b)], f[a1(0x20b)])) {
            if (!e) {
                if (f[a1(0x191)](f[a1(0x16b)], f[a0(0x237)]))
                    e = await f[a0(0x231)](newEfiPayInstance);
                else {
                    const k = {};
                    return k['ok'] = !![], d[a0(0x204)](k);
                }
            }
            const g = {};
            g[a0(0x27a)] = d[a0(0x25d)];
            const h = await e[a1(0x1e1) + a1(0x208)](g);
            if (f[a1(0x24c)](h[a1(0x1f1)], f[a0(0x1b4)]) || f[a0(0x26f)](h[a1(0x1f1)], f[a0(0x1c0)])) {
                if (f[a0(0x16f)](f[a1(0x1f9)], f[a1(0x1e2)]))
                    e[a1(0x1bd)][a0(0x174)](a0(0x218) + a1(0x161) + a0(0x176) + f);
                else
                    return logger_1[a1(0x1bd)][a0(0x173)](a0(0x26c) + a0(0x264) + a0(0x203) + a1(0x245) + h[a0(0x1f1)]), ![];
            }
            const {pix: i} = h;
            if (f[a0(0x170)](i[-0x149b + -0x1f03 + -0x2 * -0x19cf][a1(0x189)], d[a0(0x27c)])) {
                if (f[a0(0x221)](f[a0(0x1ce)], f[a0(0x1ce)]))
                    return await (0x1f75 * -0x1 + -0x12 * 0x18d + -0x3b5f * -0x1, PaymentGatewayServices_1[a1(0x1bb) + a0(0x15c)])(d), logger_1[a1(0x1bd)][a1(0x173)](f[a0(0x21a)]), !![];
                else
                    return;
            }
            return ![];
        } else
            f[a1(0x154)](e, f);
    } catch (n) {
        f[a1(0x18b)](f[a1(0x159)], f[a0(0x159)]) ? logger_1[a1(0x1bd)][a1(0x174)](a0(0x197) + a0(0x1c4) + ':\x20' + n) : f[a1(0x24a)](f, g, h);
    }
    return ![];
};
exports[C(0x197) + D(0x1c7)] = efiCheckStatus;
const efiPollCheckStatus = async (c, d, e = 0x1 * 0x2033 + 0x21c3 + -0x41ec, f = -0x9f2b + -0xc081 * 0x1 + -0x32b * -0x94) => {
        const a2 = C, a7 = D, g = {
                'CqiBj': function (j, k, l) {
                    return j(k, l);
                },
                'NODYe': function (j, k) {
                    return j === k;
                },
                'CKtNH': a2(0x271),
                'pCYhc': function (j, k) {
                    return j >= k;
                },
                'uidqG': function (j) {
                    return j();
                }
            };
        let h = 0x364 + -0x96d * -0x3 + -0x2e1 * 0xb;
        async function i() {
            const a4 = a2, a5 = a2, j = {
                    'NDtrW': function (l, m, n) {
                        const a3 = b;
                        return g[a3(0x19e)](l, m, n);
                    }
                };
            await d[a4(0x270)]();
            if (g[a5(0x1c1)](d[a5(0x1f1)], g[a4(0x1db)]))
                return;
            const k = await (0x7 * -0x4e1 + 0x6 * 0x43b + 0x1c1 * 0x5, exports[a4(0x197) + a5(0x1c7)])(d, c);
            if (k)
                return;
            h += -0x88f * -0x3 + -0x10c9 * -0x1 + -0x2a75;
            if (g[a5(0x253)](h, e)) {
                logger_1[a5(0x1bd)][a4(0x173)](a4(0x1f3) + a5(0x171) + a5(0x1ee) + a4(0x21b) + a4(0x1fe) + a5(0x212) + d['id']), (-0x1 * 0x39b + 0x99a + 0x5 * -0x133, PaymentGatewayServices_1[a5(0x1bb) + a4(0x274) + 'd'])(d);
                return;
            }
            await new Promise(l => {
                const a6 = a4;
                j[a6(0x26b)](setTimeout, l, f);
            }), await g[a5(0x168)](i);
        }
        return g[a7(0x168)](i);
    }, efiCreateSubscription = async (h, i) => {
        const a8 = D, a9 = C, j = {
                'mYuKF': a8(0x1cf),
                'DCCtU': a8(0x273),
                'MYtNX': function (q) {
                    return q();
                },
                'DEPxt': a8(0x15f) + a8(0x22d),
                'uljgC': a9(0x1b0),
                'uTtYt': function (q, r, s) {
                    return q(r, s);
                },
                'VtwtY': a8(0x235) + a8(0x1dc) + a8(0x238) + a8(0x15d) + a9(0x22b) + 'e!'
            }, {
                price: k,
                invoiceId: l
            } = h[a9(0x22a)], m = {};
        m[a9(0x1ad)] = 0x12c;
        const n = {};
        n[a8(0x179) + a9(0x15b) + 's'] = 0x2;
        const o = {
                'calendario': m,
                'valor': { 'original': k[a8(0x1aa) + a9(0x19b)](j[a9(0x213)], n)[a8(0x17a)](',', '.') },
                'chave': await (0xd08 + 0x1 * -0x181a + -0x589 * -0x2, CheckSettingsGeneral_1[a8(0x19d)])(j[a9(0x1d8)]),
                'solicitacaoPagador': a8(0x207) + l
            }, p = await j[a8(0x1a1)](getEfiOptions);
        try {
            const q = await Invoices_1[a9(0x19d)][a9(0x252)](l);
            if (!q)
                throw new Error(j[a9(0x21f)]);
            await (-0x135b + 0x2 * -0x27b + -0x5 * -0x4dd, exports[a9(0x23f) + a8(0x240)])();
            const r = new sdk_typescript_apis_efi_1[(a9(0x19d))](p), s = await r[a8(0x226) + a8(0x1d5) + a8(0x1ae)]([], o);
            await q[a9(0x165)]({
                'txId': s[a8(0x27a)],
                'payGw': j[a8(0x1f5)],
                'payGwData': JSON[a9(0x1b9)](s)
            }), await q[a9(0x270)](), j[a9(0x259)](efiPollCheckStatus, r, q);
            const t = {};
            t[a8(0x1ab)] = s[a9(0x194) + a9(0x260)];
            const u = {};
            u[a9(0x1c8)] = k;
            const v = {};
            return v[a8(0x1ab)] = t, v[a8(0x189)] = u, i[a8(0x204)](v);
        } catch (w) {
            logger_1[a9(0x1bd)][a9(0x174)](a9(0x25b) + a9(0x1f6) + a8(0x258) + w);
            throw new AppError_1[(a9(0x19d))](j[a8(0x21c)], -0x1b3 * -0xa + -0x1eda + 0x7 * 0x234);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5b6 * -0x4 + 0x11ff * 0x1 + 0x62d);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[D(0x25b) + C(0x1f6) + 'n'] = efiCreateSubscription;