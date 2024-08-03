'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x208)) / (0x20 + 0x202b * -0x1 + 0x200c) + -parseInt(p(0x20f)) / (0x2338 + 0x71f + 0x1 * -0x2a55) * (-parseInt(q(0x20b)) / (-0x2109 * -0x1 + 0x3 * -0x47a + -0x1398)) + parseInt(p(0x1e9)) / (0x3b5 + 0x2bb * -0x4 + 0x73b) * (parseInt(p(0x1f6)) / (0x12a7 * 0x1 + -0x2490 + -0x87 * -0x22)) + -parseInt(p(0x1f9)) / (0x110f + -0x12a * -0xf + -0x227f) * (parseInt(p(0x1fc)) / (0x15e4 + -0xa07 + -0xbd6)) + parseInt(q(0x1fa)) / (-0x14c1 + 0x167 * 0x17 + 0x2 * -0x5bc) * (parseInt(q(0x1fe)) / (0x1 * 0x184b + 0x1dfa + -0x363c)) + parseInt(q(0x1e5)) / (-0xc94 + 0x7 * -0x3f9 + 0x286d * 0x1) + -parseInt(p(0x1ff)) / (0x6e2 * 0x3 + -0xb * 0x1 + -0x1490) * (parseInt(p(0x207)) / (-0x674 + 0x230 + 0x450));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7b922 + -0x20b62 + 0x20e7 * 0xa9));
var __importDefault = this && this[r(0x205) + r(0x1f4)] || function (c) {
    const t = r;
    return c && c[t(0x1ec)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x455 * -0x9 + -0xc2f + 0x3511);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        'PAIGN_FOUN',
        '15212rDdhsE',
        '../../erro',
        'XDsDf',
        '__esModule',
        'CANCELED_P',
        'McXKm',
        'aYIIx',
        'GN_NOT_IN_',
        'default',
        'status',
        'bYrGK',
        'fault',
        'canceled',
        '2035yuAXJx',
        'ENDING',
        'value',
        '6QTxbxE',
        '11784ykcVcY',
        'defineProp',
        '1892401QKyERh',
        'ERR_NO_UPD',
        '549MXGVam',
        '11YDXucu',
        'destroy',
        'XISTS',
        'ATE_CAMPAI',
        'ERROR_CAMP',
        'pending',
        '__importDe',
        'AIGN_NOT_E',
        '12275400xWnfNX',
        '748223GakwNb',
        'tenantId',
        'rs/AppErro',
        '15591njUHDt',
        'ls/Campaig',
        'erty',
        'enXKc',
        '354FqujuV',
        'XtkuD',
        'ERR_NO_CAM',
        'KtxoW',
        '../../mode',
        '2673280IONzxP',
        'where',
        'findOne'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[s(0x1f8)] = !![], Object[s(0x1fb) + s(0x20d)](exports, r(0x1ec), k);
const Campaign_1 = __importDefault(require(s(0x213) + s(0x20c) + 'n')), AppError_1 = __importDefault(require(r(0x1ea) + s(0x20a) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x1ee)] = u(0x211) + u(0x1e8) + 'D', h[u(0x20e)] = function (n, o) {
            return n !== o;
        }, h[v(0x1f3)] = u(0x204), h[u(0x210)] = function (n, o) {
            return n !== o;
        }, h[u(0x212)] = u(0x1f5), h[v(0x1ef)] = u(0x1fd) + u(0x202) + u(0x1f0) + v(0x1ed) + v(0x1f7), h[v(0x1eb)] = u(0x203) + u(0x206) + v(0x201);
        const i = h, j = {};
        j['id'] = f, j[v(0x209)] = g;
        const l = {};
        l[u(0x1e6)] = j;
        const m = await Campaign_1[v(0x1f1)][v(0x1e7)](l);
        if (!m)
            throw new AppError_1[(v(0x1f1))](i[v(0x1ee)], 0x1 * -0x68e + -0x24fe + 0x2d20);
        if (i[v(0x20e)](m?.[u(0x1f2)], i[u(0x1f3)]) && i[v(0x210)](m?.[v(0x1f2)], i[u(0x212)]))
            throw new AppError_1[(v(0x1f1))](i[u(0x1ef)], 0x3a5 * 0x5 + -0xe7 * -0x7 + -0x1 * 0x16f6);
        try {
            await m[u(0x200)]();
        } catch (n) {
            throw new AppError_1[(v(0x1f1))](i[v(0x1eb)], 0x1ac3 + 0x2307 + 0x16f * -0x2a);
        }
    };
exports[s(0x1f1)] = DeleteCampaignService;