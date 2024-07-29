'use strict';
const u = b, v = b;
function a() {
    const z = [
        'where',
        'GN_CONTACT',
        '54594vnTzsO',
        'zrxCj',
        'ERR_CAMPAI',
        '47789BNSEyf',
        '23511268AYGBuT',
        'defineProp',
        'nContacts',
        'erty',
        '588409qjFiuF',
        '__importDe',
        'fault',
        '../../mode',
        '1799316pIuyEL',
        '951155YVzTHV',
        'campaignId',
        '9GRGQlV',
        'tenantId',
        'default',
        '40tCpYeJ',
        'destroy',
        'ls/Campaig',
        '352QybXHA',
        '__esModule',
        '1766691TneOuu',
        'findOne',
        'ACESSIBLE',
        '6EhHxdp',
        'yIbrX',
        'value',
        'TS_OR_NOT_',
        'rs/AppErro',
        '../../erro',
        'S_NOT_EXIS'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xd4)) / (-0x16e5 * -0x1 + 0x26e4 + 0x3 * -0x1498) + -parseInt(t(0xcc)) / (0x1011 + -0x1d90 + 0xd81 * 0x1) * (-parseInt(t(0xdb)) / (-0x841 + 0x1 * 0x25f3 + 0x11 * -0x1bf)) + -parseInt(s(0xd8)) / (-0x37 * -0x9d + 0x1 * -0x13eb + -0xdcc) + parseInt(s(0xd9)) / (-0x4 * 0x5d4 + 0x26d5 + -0xf80) * (-parseInt(s(0xe6)) / (-0x2 * 0x451 + 0x3b * -0x2e + -0x1 * -0x1342)) + -parseInt(s(0xcf)) / (0xc5f * -0x2 + -0x1 * -0x931 + 0xf94) * (-parseInt(s(0xe1)) / (-0x248 * -0x1 + 0x5f7 + -0x837)) + -parseInt(t(0xe3)) / (0x1613 * 0x1 + 0x27 * 0x2f + -0x1d33) * (parseInt(t(0xde)) / (0x183c + 0x205c + -0x72 * 0x7f)) + parseInt(s(0xd0)) / (0x1 * -0x238b + 0x5a7 * -0x1 + -0x1 * -0x293d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1267f + -0x38a57 + -0x7 * -0x171c6));
var __importDefault = this && this[u(0xd5) + u(0xd6)] || function (c) {
    const w = v;
    return c && c[w(0xe2)] ? c : { 'default': c };
};
const k = {};
k[u(0xe8)] = !![], Object[v(0xd1) + u(0xd3)](exports, v(0xe2), k);
const CampaignContacts_1 = __importDefault(require(u(0xd7) + v(0xe0) + u(0xd2))), AppError_1 = __importDefault(require(u(0xc8) + u(0xc7) + 'r')), Campaign_1 = __importDefault(require(u(0xd7) + v(0xe0) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0xcd)] = x(0xce) + x(0xcb) + y(0xc9) + y(0xc6) + x(0xe5), j[x(0xe7)] = x(0xce) + x(0xcb) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0xdc)] = i;
            const n = {};
            n[x(0xca)] = m;
            const o = await Campaign_1[x(0xdd)][x(0xe4)](n);
            if (o?.['id']) {
                const p = {};
                p[x(0xda)] = h;
                const q = {};
                q[x(0xca)] = p, await CampaignContacts_1[x(0xdd)][y(0xdf)](q);
            } else
                throw new AppError_1[(y(0xdd))](l[y(0xcd)], -0xe3 * 0x11 + -0xc79 + 0x8 * 0x3a4);
        } catch (r) {
            throw new AppError_1[(y(0xdd))](l[y(0xe7)], -0x31d * -0x9 + -0x22bd + 0x3b * 0x24);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2a4 * -0x2 + -0x2217 + 0x1d95);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0xdd)] = DeleteAllCampaignContactsService;