'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1f3)) / (0x4 * -0x3f3 + 0x23e * -0x1 + 0x1f * 0x95) * (parseInt(A(0x1fc)) / (0x177d + 0x9 * 0x27 + -0x18da)) + -parseInt(B(0x1f5)) / (-0x1a18 * 0x1 + -0x2 * 0x3f3 + 0x2201) + -parseInt(B(0x216)) / (-0xd0 * 0x5 + 0x195 + 0x27f) * (-parseInt(B(0x227)) / (0x416 * 0x4 + 0x10 * -0x206 + -0x7 * -0x24b)) + parseInt(B(0x224)) / (0x1c92 + 0x68 * 0x34 + -0x31ac) + parseInt(B(0x219)) / (0x3 * -0x23b + 0x4 * -0x7b9 + 0x259c) + -parseInt(A(0x208)) / (0x128f + -0x438 + 0x9 * -0x197) * (parseInt(B(0x20a)) / (0x1b55 * -0x1 + 0xcaf + 0xeaf)) + -parseInt(A(0x202)) / (0x78d + -0x1457 + 0xcd4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x20020 + -0x927df + 0x1607 * 0x5b));
var __importDefault = this && this[C(0x206) + D(0x1ef)] || function (c) {
    const E = C;
    return c && c[E(0x226)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17d1 * 0x1 + 0x20e * -0xd + 0x4d2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const H = [
        'findOne',
        '../../erro',
        '../../help',
        '12aoAJVo',
        'createAcce',
        'ls/User',
        '4189969REaeha',
        'DEyUq',
        'findAll',
        'ls/Tenant',
        'bKqOg',
        'ucuEX',
        'ERR_INVALI',
        'dfDjp',
        'status',
        'where',
        'fQCHh',
        '2151798rleYBA',
        'user',
        '__esModule',
        '395035GdXTzP',
        'refreshTok',
        'checkPassw',
        'usuariosOn',
        'rs/AppErro',
        'ALS',
        'queues',
        'Tokens',
        'value',
        'token',
        'createRefr',
        'online',
        'fault',
        'default',
        'defineProp',
        'name',
        '284643wBzKUk',
        'ord',
        '892395uEkPCx',
        'ejQof',
        'D_CREDENTI',
        'lastLogin',
        'include',
        'isOnline',
        'tenantId',
        '2zMhkqZ',
        'ODFKW',
        'active',
        'model',
        'ls/Queue',
        'eshToken',
        '4612320LYuUtc',
        'tenant',
        'line',
        'update',
        '__importDe',
        'erty',
        '8LSbaPu',
        '../../mode',
        '3723633KNlDiT',
        'ers/Create',
        'email',
        'lastOnline',
        'UPfgj',
        'bemPI',
        'SZlzk',
        'attributes',
        'ssToken'
    ];
    a = function () {
        return H;
    };
    return a();
}
k[C(0x22f)] = !![], Object[C(0x1f1) + D(0x207)](exports, C(0x226), k);
const User_1 = __importDefault(require(D(0x209) + C(0x218))), AppError_1 = __importDefault(require(D(0x214) + D(0x22b) + 'r')), CreateTokens_1 = require(D(0x215) + D(0x20b) + D(0x22e)), Queue_1 = __importDefault(require(D(0x209) + C(0x200))), Tenant_1 = __importDefault(require(C(0x209) + C(0x21c))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0x223)] = G(0x22d), n[F(0x210)] = G(0x203), n[F(0x21a)] = G(0x1fe), n[F(0x20f)] = F(0x21f) + F(0x1f7) + G(0x22c), n[F(0x20e)] = F(0x1ee), n[G(0x220)] = F(0x20c), n[F(0x1fd)] = G(0x221), n[G(0x1f6)] = F(0x20d), n[G(0x21d)] = F(0x1f2), n[F(0x21e)] = F(0x1f8);
        const o = n, p = {};
        p[F(0x20c)] = l;
        const q = {};
        q[F(0x1ff)] = Queue_1[G(0x1f0)], q['as'] = o[F(0x223)];
        const r = {};
        r[G(0x1ff)] = Tenant_1[G(0x1f0)], r['as'] = o[F(0x210)], r[F(0x222)] = {}, r[F(0x222)][G(0x221)] = o[F(0x21a)];
        const s = {};
        s[F(0x222)] = p, s[G(0x1f9)] = [
            q,
            r
        ];
        const t = await User_1[F(0x1f0)][F(0x213)](s);
        if (!t)
            throw new AppError_1[(G(0x1f0))](o[G(0x20f)], 0x26 * -0xc1 + -0x583 + 0x11 * 0x21a);
        if (!await t[F(0x229) + F(0x1f4)](m))
            throw new AppError_1[(G(0x1f0))](o[F(0x20f)], 0x9c3 + -0x7f * 0x28 + 0xba6);
        const u = (0x1062 + -0x10fd + 0x9b * 0x1, CreateTokens_1[F(0x217) + F(0x212)])(t), v = (-0x22e9 + 0x261b + -0x332, CreateTokens_1[F(0x1ed) + F(0x201)])(t);
        await t[G(0x205)]({
            'isOnline': !![],
            'status': o[F(0x20e)],
            'lastLogin': new Date()
        });
        const w = {};
        w[F(0x1fb)] = t[G(0x1fb)], w[G(0x1fa)] = !![];
        const x = {};
        x[G(0x222)] = w, x[G(0x211)] = [
            'id',
            o[F(0x220)],
            o[F(0x1fd)],
            o[F(0x1f6)],
            o[F(0x21d)],
            o[F(0x21e)]
        ];
        const y = await User_1[G(0x1f0)][G(0x21b)](x), z = {};
        return z[F(0x225)] = t, z[F(0x230)] = u, z[G(0x228) + 'en'] = v, z[F(0x22a) + F(0x204)] = y, z;
    };
exports[D(0x1f0)] = AuthUserService;