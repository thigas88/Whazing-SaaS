'use strict';
function a() {
    const w = [
        'TUawG',
        'CANCELED_P',
        'ERR_NO_UPD',
        '47456230FRFZxF',
        'zdVBt',
        '9271575zKOAUJ',
        'canceled',
        'value',
        'oMpYa',
        'ERR_NO_CAM',
        'pending',
        'XISTS',
        'ls/Campaig',
        '__importDe',
        'ENDING',
        'tenantId',
        '1302qQVzrJ',
        '7550QNZfQt',
        'status',
        'PAIGN_FOUN',
        'rs/AppErro',
        'gnalu',
        'AIGN_NOT_E',
        '2605912hOUJrC',
        'ERROR_CAMP',
        'erty',
        'where',
        'GN_NOT_IN_',
        'ATE_CAMPAI',
        'findOne',
        'LyFbL',
        '466FImQCI',
        'zXKZO',
        'fault',
        'default',
        '../../mode',
        '../../erro',
        '2793430DFzTHr',
        'defineProp',
        '11ZHCVUX',
        '24808agxPeX',
        '1407IImuGL',
        'destroy',
        '__esModule',
        'AZzay',
        '220TXpZZo'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2112 + 0x2ab + -0x7 * -0x488);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x177)) / (0x12ac * -0x1 + 0x493 + 0xe1a) * (parseInt(p(0x169)) / (-0x20e * 0x8 + 0x984 + -0x6ee * -0x1)) + parseInt(p(0x153)) / (0x5d3 * -0x2 + -0x455 + 0xffe) * (-parseInt(p(0x157)) / (-0x1 * 0x20e + 0x5 * 0x31 + 0x11d)) + -parseInt(p(0x17d)) / (0x263d + -0x5b2 * -0x3 + 0x2 * -0x1ba7) + parseInt(p(0x168)) / (-0x650 + -0xd * 0x2ce + 0x2acc) * (-parseInt(q(0x152)) / (0x1f0d + -0x1046 + -0xec0)) + parseInt(q(0x16f)) / (0x455 * 0x2 + -0x22f2 + 0x1a50 * 0x1) + -parseInt(q(0x15d)) / (0x66c + -0x1ad9 + 0x1476) + -parseInt(q(0x15b)) / (0x2707 * 0x1 + 0xd28 + -0x3425) * (-parseInt(q(0x151)) / (0x258a + 0xdeb + -0x2 * 0x19b5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x7f3c1 + -0xde2fb + -0x2 * -0xa0d1b));
var __importDefault = this && this[r(0x165) + s(0x179)] || function (c) {
    const t = r;
    return c && c[t(0x155)] ? c : { 'default': c };
};
const k = {};
k[s(0x15f)] = !![], Object[r(0x17e) + s(0x171)](exports, r(0x155), k);
const Campaign_1 = __importDefault(require(r(0x17b) + s(0x164) + 'n')), AppError_1 = __importDefault(require(r(0x17c) + s(0x16c) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0x160)] = v(0x161) + v(0x16b) + 'D', h[u(0x178)] = function (n, o) {
            return n !== o;
        }, h[v(0x16d)] = u(0x162), h[v(0x15c)] = function (n, o) {
            return n !== o;
        }, h[u(0x176)] = u(0x15e), h[v(0x156)] = u(0x15a) + v(0x174) + u(0x173) + u(0x159) + u(0x166), h[v(0x158)] = u(0x170) + u(0x16e) + v(0x163);
        const i = h, j = {};
        j['id'] = f, j[u(0x167)] = g;
        const l = {};
        l[v(0x172)] = j;
        const m = await Campaign_1[v(0x17a)][u(0x175)](l);
        if (!m)
            throw new AppError_1[(v(0x17a))](i[u(0x160)], 0xa6a + 0x527 * 0x4 + -0x1d72);
        if (i[u(0x178)](m?.[v(0x16a)], i[v(0x16d)]) && i[v(0x15c)](m?.[v(0x16a)], i[v(0x176)]))
            throw new AppError_1[(u(0x17a))](i[v(0x156)], -0x1 * 0x997 + -0x5a1 + 0x5 * 0x35c);
        try {
            await m[v(0x154)]();
        } catch (n) {
            throw new AppError_1[(u(0x17a))](i[u(0x158)], -0x917 * -0x1 + -0x22b3 * -0x1 + -0x2a36);
        }
    };
exports[s(0x17a)] = DeleteCampaignService;