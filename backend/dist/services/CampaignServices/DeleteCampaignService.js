'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x86 + -0x1 * 0x39f + 0xd * 0x49);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xba)) / (0x1c8d + -0x2624 + -0x2 * -0x4cc) + -parseInt(q(0xc4)) / (-0x1 * -0xb64 + -0x6e5 + -0x17f * 0x3) * (parseInt(p(0xbb)) / (0x1f63 + 0x2e9 * 0xd + -0x4535)) + parseInt(q(0x9c)) / (-0x91 * -0x41 + -0x685 + -0x1e48) + -parseInt(q(0xb8)) / (-0x31 * -0x70 + 0x1fad + -0x3518) * (parseInt(q(0xc6)) / (0x67 * -0x4f + -0x15ab * 0x1 + -0xb9 * -0x4a)) + parseInt(q(0xbf)) / (-0xd81 * -0x1 + 0x3d * 0x5d + -0x23a3 * 0x1) + -parseInt(p(0xc3)) / (0x39 * -0x2c + -0x65 * -0x3b + -0xd73) + -parseInt(q(0xc7)) / (-0x1 * 0x10a3 + 0x1 * -0x67 + 0x1113) * (-parseInt(q(0xa9)) / (-0xa5 * -0xd + 0x2e * 0x7 + -0x999));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8c9e6 + 0x164198 + -0x13052 * -0x1));
var __importDefault = this && this[r(0x9f) + r(0xb3)] || function (c) {
    const t = s;
    return c && c[t(0xa3)] ? c : { 'default': c };
};
const k = {};
k[s(0xa4)] = !![], Object[s(0xac) + s(0xa5)](exports, s(0xa3), k);
const Campaign_1 = __importDefault(require(r(0xb6) + r(0xbd) + 'n')), AppError_1 = __importDefault(require(r(0xb7) + r(0xa6) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0xa8)] = u(0xbe) + v(0xad) + 'D', h[u(0xaf)] = function (n, o) {
            return n !== o;
        }, h[v(0xb2)] = u(0xa0), h[u(0xae)] = u(0xbc), h[v(0xc0)] = u(0xc2) + u(0xab) + u(0xa2) + v(0xb5) + u(0xaa), h[v(0xb9)] = v(0xb0) + u(0xa7) + u(0x9e);
        const i = h, j = {};
        j['id'] = f, j[v(0xc5)] = g;
        const l = {};
        l[v(0xb4)] = j;
        const m = await Campaign_1[v(0xc1)][v(0xb1)](l);
        if (!m)
            throw new AppError_1[(v(0xc1))](i[u(0xa8)], 0x185a + -0x4c2 + -0x2 * 0x902);
        if (i[u(0xaf)](m?.[v(0xa1)], i[v(0xb2)]) && i[v(0xaf)](m?.[u(0xa1)], i[u(0xae)]))
            throw new AppError_1[(v(0xc1))](i[v(0xc0)], -0x13c * -0x18 + -0xcfb + -0xf11);
        try {
            await m[u(0x9d)]();
        } catch (n) {
            throw new AppError_1[(u(0xc1))](i[u(0xb9)], 0x5 * -0x325 + 0x39b * -0x1 + -0xa74 * -0x2);
        }
    };
exports[s(0xc1)] = DeleteCampaignService;
function a() {
    const w = [
        '6MxkiCv',
        '36MOIMrQ',
        '550068gAXshl',
        'destroy',
        'XISTS',
        '__importDe',
        'pending',
        'status',
        'GN_NOT_IN_',
        '__esModule',
        'value',
        'erty',
        'rs/AppErro',
        'AIGN_NOT_E',
        'tnMuf',
        '7596040rSjLlr',
        'ENDING',
        'ATE_CAMPAI',
        'defineProp',
        'PAIGN_FOUN',
        'mniHc',
        'EgoHP',
        'ERROR_CAMP',
        'findOne',
        'ONFDL',
        'fault',
        'where',
        'CANCELED_P',
        '../../mode',
        '../../erro',
        '4292125eGdsRI',
        'yNEEa',
        '1223709dKoyZM',
        '1899162cykpUS',
        'canceled',
        'ls/Campaig',
        'ERR_NO_CAM',
        '4318524uoRsCt',
        'GpTST',
        'default',
        'ERR_NO_UPD',
        '937288KLHqqb',
        '2iiTZYg',
        'tenantId'
    ];
    a = function () {
        return w;
    };
    return a();
}