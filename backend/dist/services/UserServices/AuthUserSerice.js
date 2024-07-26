'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1db)) / (-0x1492 + -0x2190 + 0x3623) + parseInt(B(0x1d7)) / (0x1 * 0x26b3 + -0x1 * 0xce + -0x25e3) + -parseInt(A(0x1f5)) / (0x372 + 0xebb + -0x5d * 0x32) + parseInt(B(0x1e0)) / (0x12 * 0xad + -0x1510 + 0x8ea) * (-parseInt(B(0x1e8)) / (0xa * -0x3df + -0x107b * -0x1 + 0x10 * 0x164)) + parseInt(A(0x1dd)) / (0x5ea + -0x63 * 0x34 + -0x8c * -0x1a) * (-parseInt(B(0x1f3)) / (-0x16 * 0x14c + 0x4cd + 0x17c2)) + -parseInt(B(0x1fe)) / (0x827 + 0x9f0 + 0x120f * -0x1) + parseInt(A(0x1be)) / (0x175 + -0x733 * 0x3 + -0x142d * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x553a9 * 0x1 + -0x637b + 0x21f * 0x33e));
var __importDefault = this && this[C(0x1f9) + C(0x1f6)] || function (c) {
    const E = D;
    return c && c[E(0x1f0)] ? c : { 'default': c };
};
const k = {};
k[D(0x1c7)] = !![], Object[D(0x1cc) + D(0x1df)](exports, C(0x1f0), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x779 * -0x1 + -0x4f4 + -0xc9 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const H = [
        'lAHFv',
        'token',
        'defineProp',
        'WUWhL',
        'keopL',
        'ssToken',
        'createRefr',
        'name',
        'ls/Tenant',
        'Tokens',
        'ers/Create',
        'findOne',
        'lastLogin',
        '357738EYKTjx',
        'FvceQ',
        'D_CREDENTI',
        'update',
        '875814amMtgx',
        'include',
        '36unywwU',
        '../../mode',
        'erty',
        '44JYXeJK',
        'OeDND',
        'online',
        'active',
        '../../help',
        'lgJHu',
        'queues',
        'tenant',
        '591365vTqpKE',
        'isOnline',
        'usuariosOn',
        'where',
        'beZbW',
        'ord',
        'checkPassw',
        '../../erro',
        '__esModule',
        'attributes',
        'default',
        '428169KbQMaW',
        'lastOnline',
        '729426gtdxyj',
        'fault',
        'status',
        'ls/Queue',
        '__importDe',
        'GLaVw',
        'model',
        'createAcce',
        'email',
        '4227944pIzhAb',
        'ALS',
        'rs/AppErro',
        '19433493NzMzlY',
        'findAll',
        'tenantId',
        'MaqsN',
        'eshToken',
        'ls/User',
        'line',
        'ERR_INVALI',
        'refreshTok',
        'value',
        'iCVxO',
        'user'
    ];
    a = function () {
        return H;
    };
    return a();
}
const User_1 = __importDefault(require(D(0x1de) + D(0x1c3))), AppError_1 = __importDefault(require(D(0x1ef) + D(0x1bd) + 'r')), CreateTokens_1 = require(C(0x1e4) + D(0x1d4) + C(0x1d3)), Queue_1 = __importDefault(require(D(0x1de) + C(0x1f8))), Tenant_1 = __importDefault(require(D(0x1de) + D(0x1d2))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = D, G = C, n = {};
        n[F(0x1e5)] = G(0x1e6), n[F(0x1cd)] = G(0x1e7), n[F(0x1e1)] = F(0x1e3), n[G(0x1ec)] = F(0x1c5) + F(0x1d9) + F(0x1bc), n[G(0x1d8)] = G(0x1e2), n[F(0x1fa)] = G(0x1fd), n[G(0x1c8)] = G(0x1f7), n[G(0x1c1)] = G(0x1f4), n[F(0x1ce)] = G(0x1d1), n[G(0x1ca)] = G(0x1d6);
        const o = n, p = {};
        p[F(0x1fd)] = l;
        const q = {};
        q[F(0x1fb)] = Queue_1[F(0x1f2)], q['as'] = o[F(0x1e5)];
        const r = {};
        r[G(0x1fb)] = Tenant_1[F(0x1f2)], r['as'] = o[F(0x1cd)], r[G(0x1eb)] = {}, r[G(0x1eb)][F(0x1f7)] = o[F(0x1e1)];
        const s = {};
        s[G(0x1eb)] = p, s[F(0x1dc)] = [
            q,
            r
        ];
        const t = await User_1[G(0x1f2)][F(0x1d5)](s);
        if (!t)
            throw new AppError_1[(G(0x1f2))](o[G(0x1ec)], 0xa84 + -0x1 * 0x19cf + 0x10dc);
        if (!await t[F(0x1ee) + G(0x1ed)](m))
            throw new AppError_1[(G(0x1f2))](o[F(0x1ec)], -0x7d8 + 0x1 * -0x123b + 0x1ba4);
        const u = (0x5 * -0x313 + -0x2139 + -0x5 * -0x9b8, CreateTokens_1[G(0x1fc) + G(0x1cf)])(t), v = (-0xa3c + 0xa32 + -0xa * -0x1, CreateTokens_1[G(0x1d0) + F(0x1c2)])(t);
        await t[G(0x1da)]({
            'isOnline': !![],
            'status': o[F(0x1d8)],
            'lastLogin': new Date()
        });
        const w = {};
        w[G(0x1c0)] = t[G(0x1c0)], w[F(0x1e9)] = !![];
        const x = {};
        x[F(0x1eb)] = w, x[G(0x1f1)] = [
            'id',
            o[G(0x1fa)],
            o[F(0x1c8)],
            o[G(0x1c1)],
            o[F(0x1ce)],
            o[F(0x1ca)]
        ];
        const y = await User_1[F(0x1f2)][G(0x1bf)](x), z = {};
        return z[F(0x1c9)] = t, z[F(0x1cb)] = u, z[G(0x1c6) + 'en'] = v, z[F(0x1ea) + F(0x1c4)] = y, z;
    };
exports[C(0x1f2)] = AuthUserService;