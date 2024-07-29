'use strict';
function a() {
    const G = [
        'length',
        'gAAFH',
        '2476FEtHoo',
        'join',
        'base64',
        'media',
        'tenantId',
        'mediaUrl',
        '../../erro',
        '663754XtAIXd',
        'DoCgr',
        'bbXZh',
        'userId',
        'qiTEE',
        'getTime',
        'qVFwZ',
        'data',
        'public',
        'Eawdx',
        'ceeeS',
        'T_FLOW_FOU',
        'YESjA',
        'erty',
        '18255CxAHeo',
        'default',
        'attributes',
        'ls/ChatFlo',
        'nodeList',
        'rs/AppErro',
        '__esModule',
        'MediaField',
        'type',
        'wLDHK',
        '11395680VlBMAx',
        '__importDe',
        'writeFile',
        'where',
        'split',
        '2946zaPMGY',
        'fault',
        'reload',
        'promisify',
        'node',
        '1734sjyFwn',
        'interactio',
        'value',
        'JtJog',
        'path',
        'JndSo',
        'ERR_NO_CHA',
        'update',
        'findOne',
        'flow',
        '124840gcliFQ',
        'RrqOp',
        'name',
        '161HvmoGE',
        'util',
        'defineProp',
        'SKPCh',
        '../../mode',
        '1059598NKauiv',
        'celularTes',
        'isActive',
        '4607352cdSecB'
    ];
    a = function () {
        return G;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xcd)) / (0x2 * -0x112d + -0x91 * 0x8 + 0x26e3) + parseInt(z(0xc0)) / (-0x20da + -0x1 * 0x1f97 + 0x4073) + -parseInt(z(0xa9)) / (0x1 * -0xc23 + -0xdfe + 0x1a24) * (-parseInt(z(0xc6)) / (-0x24ac + 0x17b5 * -0x1 + -0x3c65 * -0x1)) + parseInt(z(0xdb)) / (0x485 * 0x5 + 0x17fc + -0x2e90) * (parseInt(z(0xae)) / (-0x4 * 0x79f + 0x9 * 0x2f4 + 0x1f7 * 0x2)) + parseInt(z(0xbb)) / (-0x1 * 0x1ef5 + -0x27 * 0x5 + -0x3 * -0xa95) * (-parseInt(A(0xb8)) / (-0x2b * -0x2d + -0x1614 + -0x5 * -0x2e9)) + parseInt(A(0xc3)) / (-0x1cd9 * 0x1 + 0x324 + 0xcdf * 0x2) + -parseInt(A(0xa4)) / (-0x2 * 0xdca + -0x1ef * -0x2 + 0x17c0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x95298 + -0x2 * -0x52a96 + 0x1 * 0x74483));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe5 * -0xe + -0x17d5 + 0xbeb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0xa5) + C(0xaa)] || function (c) {
    const D = C;
    return c && c[D(0xa0)] ? c : { 'default': c };
};
const k = {};
k[B(0xb0)] = !![], Object[C(0xbd) + B(0xda)](exports, C(0xa0), k);
const util_1 = require(C(0xbc)), path_1 = require(C(0xb2)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(C(0xbf) + C(0x9d) + 'w')), AppError_1 = __importDefault(require(C(0xcc) + B(0x9f) + 'r')), writeFileAsync = (-0x3 * 0x2ff + -0x12e * 0x5 + 0x67 * 0x25, util_1[B(0xac)])(fs_1[B(0xa6)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = B, F = B, j = {
                'ceeeS': E(0xba),
                'JndSo': E(0xb7),
                'gAAFH': E(0xd0),
                'Eawdx': E(0xc2),
                'JtJog': F(0xc1) + 'te',
                'RrqOp': F(0xb4) + F(0xd8) + 'ND',
                'qVFwZ': function (v, w) {
                    return v === w;
                },
                'bbXZh': E(0xad),
                'YESjA': F(0xa1),
                'wLDHK': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'qiTEE': F(0xd5),
                'SKPCh': F(0xc8),
                'DoCgr': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[E(0xca)] = i;
        const r = {};
        r[E(0xa7)] = q, r[F(0x9c)] = [
            'id',
            j[F(0xd7)],
            j[F(0xb3)],
            j[F(0xc5)],
            j[F(0xd6)],
            j[F(0xb1)]
        ];
        const s = await ChatFlow_1[E(0xdc)][E(0xb6)](r);
        if (!s)
            throw new AppError_1[(F(0xdc))](j[F(0xb9)], 0x5 * -0x53a + -0x7b * -0x3d + -0x199);
        for await (const v of m[F(0xb7)][F(0x9e)]) {
            if (j[F(0xd3)](v[E(0xa2)], j[F(0xcf)]))
                for await (const w of v[F(0xaf) + 'ns']) {
                    if (j[F(0xd3)](w[F(0xa2)], j[E(0xd9)]) && w[F(0xd4)][E(0xc9)]) {
                        const x = new Date()[F(0xd2)]() + '-' + w[F(0xd4)][E(0xba)];
                        await j[F(0xa3)](writeFileAsync, (-0x486 + 0x1a2d * -0x1 + 0x1eb3, path_1[E(0xc7)])(__dirname, '..', '..', '..', j[E(0xd1)], x), w[E(0xd4)][E(0xc9)][F(0xa8)](j[E(0xbe)])[0x1a0b + 0x26c8 * 0x1 + -0x2069 * 0x2], j[E(0xbe)]), delete w[F(0xd4)][F(0xc9)], w[E(0xd4)][E(0xcb)] = x;
                    }
                    if (j[E(0xd3)](w[E(0xa2)], j[F(0xd9)]) && w[E(0xd4)][F(0xcb)]) {
                        const y = w[F(0xd4)][F(0xcb)][E(0xa8)]('/');
                        w[F(0xd4)][E(0xcb)] = y[j[E(0xce)](y[F(0xc4)], 0x1 * -0x25a3 + -0x1d4c + 0x88 * 0x7e)];
                    }
                }
        }
        const t = {};
        t[E(0xba)] = l, t[F(0xb7)] = m[F(0xb7)], t[F(0xd0)] = n, t[E(0xc2)] = m[F(0xc2)], t[F(0xc1) + 'te'] = m[E(0xc1) + 'te'], await s[F(0xb5)](t);
        const u = {};
        return u[F(0x9c)] = [
            'id',
            j[F(0xd7)],
            j[E(0xb3)],
            j[F(0xc5)],
            j[F(0xd6)],
            j[F(0xb1)]
        ], await s[E(0xab)](u), s;
    };
exports[B(0xdc)] = UpdateChatFlowService;