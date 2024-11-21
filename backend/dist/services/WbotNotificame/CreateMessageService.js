'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xab0 + -0x23b2 + 0x4c9 * 0xa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const T = b, U = b;
function a() {
    const Y = [
        'fault',
        'VvTOU',
        'idFront',
        'value',
        'MLhun',
        'NG_MESSAGE',
        'mediaType',
        'mediaUrl',
        'type',
        'photo',
        'ufkqR',
        '2WjNRdt',
        'DpxEq',
        'jSRDg',
        'GdjXY',
        'body',
        'essage\x20exi',
        'include',
        '__importDe',
        's/logger',
        'ack',
        'findByPk',
        'yVCVL',
        'ysQvU',
        'findOne',
        'quotedMsg',
        'erty',
        '387mUmCOC',
        'ticketId',
        'defineProp',
        'essage\x20',
        'ls/Ticket',
        'qjojq',
        'ERR_CREATI',
        'info',
        'logger',
        'fromMe',
        'WFWYZ',
        'status',
        'sts',
        '_SYSTEM\x202',
        'onHcn',
        '1644764MvsILO',
        'tenantId',
        'BlXiG',
        'RBuMx',
        'RGVQa',
        '171149NuHiSY',
        'creating\x20m',
        'LdWXr',
        'Emit',
        'DXIZz',
        'model',
        'DqoJf',
        'hxCSJ',
        'hopRz',
        '323303vAIYYi',
        'wqiHD',
        'where',
        'EgmiG',
        'MSRhy',
        '../../help',
        'payload',
        'contactId',
        '187269DhemnN',
        'uuid',
        'scheduleDa',
        'chat:creat',
        '315182GlcIRj',
        'uDYbX',
        '580NMJtyk',
        'jnDHI',
        'warn',
        'PvKLR',
        'aRohU',
        'JZRKb',
        '../../mode',
        'ls/Message',
        'PdsLu',
        'create',
        'image',
        '__esModule',
        'received',
        'voksl',
        'ETVIj',
        '47392OMmDhc',
        'BNnJh',
        '93642ViKwyb',
        'SYcag',
        'ers/socket',
        '../../util',
        'ticket',
        'default',
        'messageId',
        'read',
        'zysAl',
        '5QGhUQj',
        'contact'
    ];
    a = function () {
        return Y;
    };
    return a();
}
(function (c, d) {
    const R = b, S = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(R(0x186)) / (-0x243a + -0x1f1c + -0x4357 * -0x1) + parseInt(R(0x1bb)) / (-0xa93 + -0x5e * 0x1a + 0x1421) * (-parseInt(R(0x18e)) / (0x833 + 0x1 * -0x12f9 + 0xac9)) + parseInt(R(0x178)) / (-0x716 + 0x2262 + 0x8 * -0x369) + -parseInt(S(0x1ae)) / (0x7b3 * 0x3 + -0x173f + 0x2b) * (parseInt(S(0x1a5)) / (-0xb * 0x82 + 0x855 + -0x2b9)) + -parseInt(S(0x192)) / (0x21d6 + -0x8a * 0x1e + -0x15 * 0xd7) + parseInt(S(0x1a3)) / (-0x29 * 0xf1 + -0x24db + 0x4b7c) * (-parseInt(S(0x1cb)) / (-0x1 * 0x143e + -0x1 * 0x389 + 0x7f * 0x30)) + parseInt(R(0x194)) / (-0x215 * -0xb + -0x5f * -0x3 + -0x17fa) * (parseInt(R(0x17d)) / (-0x232d * -0x1 + -0x2515 + -0x1 * -0x1f3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x79ae2 + 0x4 * -0x2e273 + -0x4 * -0x351e5));
var __importDefault = this && this[T(0x1c2) + T(0x1b0)] || function (c) {
    const V = T;
    return c && c[V(0x19f)] ? c : { 'default': c };
};
const m = {};
m[T(0x1b3)] = !![], Object[T(0x1cd) + T(0x1ca)](exports, T(0x19f), m);
const uuid_1 = require(U(0x18f)), Message_1 = __importDefault(require(U(0x19a) + T(0x19b))), logger_1 = require(T(0x1a8) + T(0x1c3)), socketEmit_1 = __importDefault(require(U(0x18b) + U(0x1a7) + U(0x180))), Ticket_1 = __importDefault(require(T(0x19a) + T(0x1cf))), CreateMessageService = async j => {
        const W = T, X = T, k = {};
        k[W(0x18a)] = W(0x17e) + X(0x1c0) + W(0x1d7), k[W(0x17c)] = X(0x1d1) + W(0x1b5) + W(0x1d8), k[X(0x1d9)] = function (E, F) {
            return E === F;
        }, k[W(0x1a2)] = W(0x1b9), k[X(0x195)] = X(0x19e), k[X(0x17b)] = X(0x17e) + W(0x1ce), k[X(0x1c7)] = W(0x181), k[W(0x1a1)] = X(0x189), k[W(0x1be)] = function (E, F) {
            return E === F;
        }, k[X(0x1bd)] = function (E, F) {
            return E !== F;
        }, k[W(0x1a4)] = W(0x199), k[X(0x1d0)] = X(0x1a0), k[X(0x1ad)] = W(0x19c), k[W(0x1c6)] = W(0x185), k[W(0x1a6)] = function (E, F) {
            return E === F;
        }, k[W(0x17a)] = X(0x1b4), k[X(0x1ba)] = W(0x1a9), k[X(0x198)] = W(0x1af), k[X(0x184)] = X(0x1c9), k[X(0x1d5)] = W(0x187), k[W(0x17f)] = X(0x197), k[X(0x183)] = X(0x191) + 'e', k[W(0x1b1)] = function (E, F) {
            return E === F;
        }, k[W(0x1bc)] = W(0x193);
        const l = k;
        logger_1[W(0x1d3)][W(0x1d2)](l[X(0x17b)]);
        const n = {};
        n[W(0x1ab)] = j['id'], n[W(0x179)] = j[X(0x179)];
        const o = {};
        o[W(0x188)] = n;
        const p = await Message_1[X(0x1aa)][W(0x1c8)](o);
        if (p) {
            if (l[X(0x1d9)](l[W(0x1c7)], l[W(0x1a1)])) {
                n[X(0x1d3)][X(0x1d2)](l[X(0x18a)]);
                return;
            } else {
                logger_1[X(0x1d3)][X(0x1d2)](l[W(0x18a)]);
                return;
            }
        }
        const {
            id: q,
            contactId: r,
            body: s,
            ticketId: t,
            fromMe: u,
            tenantId: v,
            fileName: w,
            mediaType: x,
            originalName: y,
            scheduleDate: z,
            ack: A
        } = j;
        if ((!s || l[W(0x1be)](s, '')) && (!w || l[X(0x1d9)](w, ''))) {
            if (l[X(0x1bd)](l[W(0x1a4)], l[W(0x1a4)]))
                throw new n(l[X(0x17c)]);
            else
                return;
        }
        const B = (-0xb55 + 0x126a + -0x715, uuid_1['v4'])(), C = {};
        C[X(0x18d)] = r, C[W(0x1bf)] = s, C[W(0x1cc)] = t, C[X(0x1d4)] = u, C[X(0x179)] = v, C[W(0x1ab)] = q, C[W(0x1c4)] = 0x1, C[W(0x1d6)] = l[W(0x1d0)], C[W(0x1b2)] = B, C[W(0x1ac)] = ![], C[X(0x1b6)] = x, C[X(0x190) + 'te'] = z;
        const D = C;
        w && (l[X(0x1bd)](l[W(0x1ad)], l[X(0x1c6)]) ? (D[W(0x1b7)] = w, D[W(0x1b6)] = l[X(0x1be)](x, l[X(0x1a2)]) ? l[X(0x195)] : x) : (h[X(0x1b7)] = i, j[X(0x1b6)] = l[X(0x1d9)](k, l[W(0x1a2)]) ? l[X(0x195)] : l));
        try {
            if (l[X(0x1a6)](l[X(0x17a)], l[X(0x17a)])) {
                const H = await Message_1[W(0x1aa)][X(0x19d)](D), I = {};
                I[W(0x179)] = v;
                const J = {};
                J[W(0x182)] = Ticket_1[W(0x1aa)], J['as'] = l[X(0x1ba)], J[X(0x188)] = I, J[W(0x1c1)] = [l[X(0x198)]];
                const K = await Message_1[X(0x1aa)][W(0x1c5)](H['id'], {
                    'include': [
                        J,
                        {
                            'model': Message_1[W(0x1aa)],
                            'as': l[X(0x184)],
                            'include': [l[W(0x198)]]
                        }
                    ]
                });
                if (!K) {
                    if (l[W(0x1a6)](l[W(0x1d5)], l[X(0x17f)]))
                        o[X(0x1d3)][X(0x196)]('e8' + C);
                    else
                        throw new Error(l[W(0x17c)]);
                }
                const L = {};
                return L[X(0x179)] = v, L[X(0x1b8)] = l[W(0x183)], L[W(0x18c)] = K, (-0x24a1 * -0x1 + -0x1 * -0x1371 + -0x3812, socketEmit_1[W(0x1aa)])(L), H;
            } else
                return;
        } catch (O) {
            if (l[W(0x1b1)](l[W(0x1bc)], l[W(0x1bc)]))
                logger_1[W(0x1d3)][W(0x196)]('e8' + O);
            else {
                const Q = {};
                return Q[W(0x1aa)] = Q, g && h[X(0x19f)] ? i : Q;
            }
        }
    };
exports[U(0x1aa)] = CreateMessageService;