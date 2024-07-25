'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x139)) / (-0xe * 0x17f + 0x851 + 0x21 * 0x62) + parseInt(z(0x148)) / (0x11 * 0x201 + 0x1bd6 + -0x3de5 * 0x1) * (-parseInt(A(0x152)) / (0x712 + -0x2220 + 0xd * 0x215)) + parseInt(A(0x14d)) / (-0x593 * -0x2 + 0x1863 * -0x1 + 0xd41) * (-parseInt(z(0x168)) / (0x7 * 0x1 + -0x1360 + 0x25 * 0x86)) + parseInt(z(0x16d)) / (0x16cc + 0x5 * -0x32d + -0x6e5) * (-parseInt(z(0x15f)) / (-0x907 * 0x1 + 0x1d66 + -0x1458)) + parseInt(z(0x14b)) / (-0x27b + 0x285 * 0x9 + 0xb2 * -0x1d) + -parseInt(A(0x146)) / (0x4c3 + 0x3e * 0x9b + 0x2 * -0x1522) + -parseInt(A(0x13f)) / (0x2 * 0x9d9 + 0x1 * -0x1c0f + 0x867) * (-parseInt(z(0x13a)) / (0x74a * -0x2 + 0x111 + 0xd8e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1125 + 0xa4715 + 0x20241));
var __importDefault = this && this[B(0x13d) + C(0x144)] || function (c) {
    const D = C;
    return c && c[D(0x157)] ? c : { 'default': c };
};
function a() {
    const G = [
        'ERR_NO_CHA',
        'getTime',
        '3nvGRLk',
        'attributes',
        'join',
        'ls/ChatFlo',
        'kuiuq',
        '__esModule',
        'T_FLOW_FOU',
        'split',
        'data',
        'ClHnE',
        'writeFile',
        'findOne',
        'MediaField',
        '10760225maKlVW',
        'STHgA',
        'base64',
        'media',
        'interactio',
        'uoqse',
        'where',
        'node',
        'value',
        '6345CyAyAg',
        'NJjZu',
        'eqdjP',
        'default',
        'reload',
        '6CmIRsO',
        'length',
        'public',
        'defineProp',
        'LToJV',
        'promisify',
        'flow',
        'util',
        '../../erro',
        'bhAfR',
        'path',
        'name',
        '../../mode',
        'userId',
        '337150YoYAcX',
        '11944416OYZQVT',
        'update',
        'rs/AppErro',
        '__importDe',
        'type',
        '30frmmUJ',
        'vvtWu',
        'OpLSO',
        'ZPuOC',
        'tenantId',
        'fault',
        'celularTes',
        '12519297AJIjYW',
        'nodeList',
        '1182362rgPiaq',
        'erty',
        'isActive',
        '6239600tzKVKP',
        'SLUwg',
        '144PztcGI',
        'emzDX',
        'mediaUrl'
    ];
    a = function () {
        return G;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x138 + 0x1e8b + -0x3 * 0xa2f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x167)] = !![], Object[B(0x170) + C(0x149)](exports, C(0x157), k);
const util_1 = require(B(0x174)), path_1 = require(C(0x177)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(B(0x137) + C(0x155) + 'w')), AppError_1 = __importDefault(require(B(0x175) + B(0x13c) + 'r')), writeFileAsync = (-0x1885 * -0x1 + 0x3d1 * 0x6 + -0x2f6b * 0x1, util_1[B(0x172)])(fs_1[C(0x15c)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = C, F = C, j = {
                'OpLSO': E(0x136),
                'vvtWu': F(0x173),
                'ClHnE': F(0x138),
                'eqdjP': F(0x14a),
                'bhAfR': E(0x145) + 'te',
                'emzDX': F(0x150) + F(0x158) + 'ND',
                'uoqse': function (v, w) {
                    return v === w;
                },
                'ZPuOC': E(0x166),
                'NJjZu': E(0x15e),
                'kuiuq': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'STHgA': F(0x16f),
                'SLUwg': F(0x161),
                'LToJV': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[E(0x143)] = i;
        const r = {};
        r[E(0x165)] = q, r[E(0x153)] = [
            'id',
            j[E(0x141)],
            j[F(0x140)],
            j[E(0x15b)],
            j[E(0x16a)],
            j[E(0x176)]
        ];
        const s = await ChatFlow_1[E(0x16b)][F(0x15d)](r);
        if (!s)
            throw new AppError_1[(E(0x16b))](j[F(0x14e)], 0x1264 + -0x5a3 + 0xb2d * -0x1);
        for await (const v of m[E(0x173)][E(0x147)]) {
            if (j[E(0x164)](v[F(0x13e)], j[E(0x142)]))
                for await (const w of v[E(0x163) + 'ns']) {
                    if (j[E(0x164)](w[F(0x13e)], j[E(0x169)]) && w[F(0x15a)][F(0x162)]) {
                        const x = new Date()[F(0x151)]() + '-' + w[E(0x15a)][E(0x136)];
                        await j[F(0x156)](writeFileAsync, (-0x19d4 + 0x1 * -0x1d + 0x19f1, path_1[F(0x154)])(__dirname, '..', '..', '..', j[F(0x160)], x), w[F(0x15a)][E(0x162)][F(0x159)](j[F(0x14c)])[0x1908 + -0x5 * 0x4d5 + 0x4a * -0x3], j[E(0x14c)]), delete w[E(0x15a)][E(0x162)], w[E(0x15a)][F(0x14f)] = x;
                    }
                    if (j[F(0x164)](w[E(0x13e)], j[F(0x169)]) && w[F(0x15a)][E(0x14f)]) {
                        const y = w[F(0x15a)][E(0x14f)][F(0x159)]('/');
                        w[F(0x15a)][F(0x14f)] = y[j[F(0x171)](y[E(0x16e)], 0xb06 + 0x1c71 + -0x2776)];
                    }
                }
        }
        const t = {};
        t[F(0x136)] = l, t[E(0x173)] = m[F(0x173)], t[E(0x138)] = n, t[F(0x14a)] = m[E(0x14a)], t[F(0x145) + 'te'] = m[E(0x145) + 'te'], await s[E(0x13b)](t);
        const u = {};
        return u[E(0x153)] = [
            'id',
            j[F(0x141)],
            j[F(0x140)],
            j[E(0x15b)],
            j[E(0x16a)],
            j[E(0x176)]
        ], await s[F(0x16c)](u), s;
    };
exports[B(0x16b)] = UpdateChatFlowService;