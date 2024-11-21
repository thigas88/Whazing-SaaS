'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x1e6)) / (0x200f + -0x1e14 + 0x16 * -0x17) + parseInt(s(0x1f1)) / (-0xfa0 + 0x9f * 0x2d + 0x3 * -0x41b) + parseInt(t(0x1f3)) / (0x1 * 0x167b + 0x1fda + 0x1b29 * -0x2) * (-parseInt(t(0x1d7)) / (0x37 * -0x79 + -0x734 + 0x2137)) + -parseInt(s(0x1e0)) / (-0x1 * 0x7 + 0x2151 + -0x2145) + parseInt(s(0x1dd)) / (-0x1a3b + -0x19a5 + 0x33e6) + -parseInt(t(0x1e5)) / (0xee4 + 0x2094 + -0x2f71) + parseInt(t(0x1e3)) / (-0x1 * 0x4cd + -0xa7 * 0x11 + 0xfec) * (parseInt(t(0x1d6)) / (0x12 * 0xdb + -0x1 * -0x2595 + -0x34f2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2ae72 + 0x57e80 + -0x5 * 0x91a1));
var __importDefault = this && this[u(0x1ed) + v(0x1e7)] || function (c) {
    const w = u;
    return c && c[w(0x1da)] ? c : { 'default': c };
};
const k = {};
k[v(0x1d8)] = !![], Object[u(0x1e1) + u(0x1ef)](exports, u(0x1da), k);
const CampaignContacts_1 = __importDefault(require(u(0x1d9) + u(0x1ee) + u(0x1e4))), AppError_1 = __importDefault(require(u(0x1ec) + v(0x1eb) + 'r')), Campaign_1 = __importDefault(require(u(0x1d9) + u(0x1ee) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x1f2)] = y(0x1dc) + x(0x1de) + x(0x1d5) + x(0x1d4) + y(0x1f4), j[y(0x1df)] = x(0x1dc) + x(0x1de) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0x1f0)] = i;
            const n = {};
            n[x(0x1e2)] = m;
            const o = await Campaign_1[y(0x1db)][y(0x1e8)](n);
            if (o?.['id']) {
                const p = {};
                p[y(0x1e9)] = h;
                const q = {};
                q[x(0x1e2)] = p, await CampaignContacts_1[y(0x1db)][x(0x1ea)](q);
            } else
                throw new AppError_1[(y(0x1db))](l[x(0x1f2)], 0x619 + -0x2f * 0x75 + 0x10f6);
        } catch (r) {
            throw new AppError_1[(y(0x1db))](l[y(0x1df)], -0x212f + -0x1246 + -0x3509 * -0x1);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x25d6 + 0x16 * 0x15a + 0x9ee);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0x1db)] = DeleteAllCampaignContactsService;
function a() {
    const z = [
        '4721038FPCdhP',
        '69982FjeKXH',
        'fault',
        'findOne',
        'campaignId',
        'destroy',
        'rs/AppErro',
        '../../erro',
        '__importDe',
        'ls/Campaig',
        'erty',
        'tenantId',
        '24684PCxUdA',
        'XSCwX',
        '445209befaHn',
        'ACESSIBLE',
        'TS_OR_NOT_',
        'S_NOT_EXIS',
        '2009187tNWDOl',
        '4gkIPXp',
        'value',
        '../../mode',
        '__esModule',
        'default',
        'ERR_CAMPAI',
        '2590908uZwUHX',
        'GN_CONTACT',
        'aHVKZ',
        '2290655KYDJrw',
        'defineProp',
        'where',
        '40XcVbjB',
        'nContacts'
    ];
    a = function () {
        return z;
    };
    return a();
}