'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xc3)) / (-0x2 * -0x860 + -0x20e + -0xeb1) * (-parseInt(y(0xca)) / (0x1381 + -0x2 * 0x165 + -0x10b5)) + parseInt(x(0xe0)) / (0x1 * -0xc63 + 0x26c + 0x9fa) * (-parseInt(x(0xc7)) / (-0x455 * -0x9 + -0x19d3 + -0xb * 0x132)) + -parseInt(x(0xc4)) / (0xb43 + -0xb3b + -0x3) + -parseInt(y(0xdf)) / (-0x141f + 0x3ba + 0x9 * 0x1d3) + -parseInt(y(0xe4)) / (-0x1c28 + 0x67c * -0x1 + 0x19 * 0x163) * (parseInt(x(0xce)) / (-0x560 * 0x6 + 0x1 * 0x1414 + -0x61a * -0x2)) + parseInt(x(0xd2)) / (0xdaf + 0x912 + -0x16b8) + parseInt(x(0xe5)) / (0x9b4 + 0x1c55 * -0x1 + -0x1b * -0xb1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x1ff39 + 0x1 * 0x15196a + -0xc09c5 * 0x1));
var __importDefault = this && this[z(0xe2) + z(0xe8)] || function (c) {
    const B = z;
    return c && c[B(0xc6)] ? c : { 'default': c };
};
function a() {
    const E = [
        'reload',
        'O_REPLY_FO',
        '34086xHJvnS',
        '4085655RBuULN',
        'attributes',
        '__esModule',
        '4xKtTNG',
        '../../mode',
        'celularTes',
        '2eRrKkZ',
        'action',
        'name',
        'default',
        '12072yhEEHq',
        'BRDGf',
        '../../erro',
        'update',
        '3754089FtOyrX',
        'where',
        'rs/AppErro',
        'tenantId',
        'findOne',
        'JoynX',
        'userId',
        'UND',
        'ls/AutoRep',
        'HpTux',
        'iowTj',
        'RnAzf',
        'Rddav',
        '2503662BCgshs',
        '449850GqcywB',
        'defineProp',
        '__importDe',
        'ERR_NO_AUT',
        '2345CzpQbQ',
        '22315400iIaVqr',
        'value',
        'erty',
        'fault',
        'isActive'
    ];
    a = function () {
        return E;
    };
    return a();
}
const k = {};
k[z(0xe6)] = !![], Object[A(0xe1) + z(0xe7)](exports, z(0xc6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x746 + -0x22b + -0x45b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(z(0xd0) + A(0xd4) + 'r')), AutoReply_1 = __importDefault(require(z(0xc8) + z(0xda) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = z, D = z, l = {};
        l[C(0xd7)] = D(0xcc), l[D(0xdd)] = C(0xcb), l[D(0xcf)] = D(0xd8), l[D(0xdb)] = C(0xc0), l[D(0xde)] = C(0xc9) + 'te', l[D(0xdc)] = C(0xe3) + C(0xc2) + C(0xd9);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0xd5)] = j;
        const t = {};
        t[D(0xd3)] = s, t[C(0xc5)] = [
            'id',
            m[C(0xd7)],
            m[C(0xdd)],
            m[D(0xcf)],
            m[D(0xdb)],
            m[D(0xde)]
        ];
        const u = await AutoReply_1[D(0xcd)][C(0xd6)](t);
        if (!u)
            throw new AppError_1[(D(0xcd))](m[C(0xdc)], 0x1313 + -0x4f1 + -0xc8e);
        const v = {};
        v[D(0xcc)] = n, v[D(0xcb)] = o, v[C(0xd8)] = p, v[C(0xc0)] = q, v[D(0xc9) + 'te'] = r, await u[D(0xd1)](v);
        const w = {};
        return w[C(0xc5)] = [
            'id',
            m[C(0xd7)],
            m[D(0xdd)],
            m[C(0xcf)],
            m[C(0xdb)],
            m[D(0xde)]
        ], await u[C(0xc1)](w), u;
    };
exports[A(0xcd)] = UpdateAutoReplyService;