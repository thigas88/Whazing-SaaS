'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x175b + 0x3 * 0xbb7 + -0x3 * 0x135e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x78)) / (0x4b * 0x4f + 0x2 * 0x482 + 0x18 * -0x157) + -parseInt(t(0x7a)) / (0x1743 + -0x1 * 0x98e + -0xa7 * 0x15) * (-parseInt(u(0x6c)) / (-0xfb * -0x26 + 0x938 + -0x2e77)) + -parseInt(u(0x8a)) / (-0x101f * 0x1 + -0x1b04 + 0x2b27 * 0x1) + parseInt(t(0x6b)) / (-0x13b8 + -0x3b * 0x47 + 0x241a) * (parseInt(u(0x81)) / (-0x25e0 + 0x21 * -0xef + 0x44b5)) + parseInt(t(0x88)) / (0x202a * 0x1 + 0x19cf + -0x2 * 0x1cf9) + parseInt(u(0x6d)) / (0x83 * 0x2f + -0x17 * -0x3d + -0x1d80) * (parseInt(u(0x89)) / (-0xbc7 + -0x15 * 0x82 + -0x89 * -0x2a)) + parseInt(t(0x70)) / (-0x1749 + 0x162 + -0x89 * -0x29) * (-parseInt(u(0x76)) / (0x6 * 0x99 + 0x180b + -0x1b96));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x2656d + -0x7691 * -0x2 + 0x7fddf));
var __importDefault = this && this[v(0x85) + v(0x69)] || function (c) {
    const x = v;
    return c && c[x(0x71)] ? c : { 'default': c };
};
const k = {};
k[w(0x87)] = !![], Object[v(0x82) + v(0x7b)](exports, v(0x71), k);
const CampaignContacts_1 = __importDefault(require(w(0x8d) + w(0x80) + w(0x86))), AppError_1 = __importDefault(require(v(0x6f) + w(0x7f) + 'r')), Campaign_1 = __importDefault(require(v(0x8d) + v(0x80) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = v, z = v, l = {};
        l[y(0x7e)] = y(0x8b) + y(0x84) + z(0x6a) + y(0x77), l[z(0x73)] = z(0x8c) + y(0x83) + z(0x7c) + 'TS';
        const m = l, n = {};
        n[y(0x66)] = h, n[y(0x67)] = i;
        const o = {};
        o['id'] = h, o[y(0x8e)] = j;
        const p = {};
        p[y(0x72)] = Campaign_1[z(0x6e)], p[z(0x75)] = !![], p[y(0x68)] = o;
        const q = {};
        q[y(0x68)] = n, q[y(0x7d)] = [p];
        const r = await CampaignContacts_1[z(0x6e)][z(0x79)](q);
        if (!r)
            throw new AppError_1[(z(0x6e))](m[y(0x7e)], -0xe9 * 0x5 + -0x1 * 0x126a + 0x188b);
        try {
            await r[y(0x74)]();
        } catch (s) {
            throw new AppError_1[(y(0x6e))](m[y(0x73)], 0x19ad + -0x1acd * 0x1 + 0x2b4);
        }
    };
function a() {
    const A = [
        'ERR_NO_CAM',
        'ERR_CAMPAI',
        '../../mode',
        'tenantId',
        'campaignId',
        'contactId',
        'where',
        'fault',
        'ACTS_NOT_F',
        '135860jCyPCg',
        '9ueozGr',
        '232alrBLH',
        'default',
        '../../erro',
        '605030ATUSnC',
        '__esModule',
        'model',
        'tvGbd',
        'destroy',
        'required',
        '143lFyiuQ',
        'OUND',
        '454250iSkHkF',
        'findOne',
        '134198bPnjPY',
        'erty',
        'S_NOT_EXIS',
        'include',
        'CqijD',
        'rs/AppErro',
        'ls/Campaig',
        '66WJakPv',
        'defineProp',
        'GN_CONTACT',
        'PAIGN_CONT',
        '__importDe',
        'nContacts',
        'value',
        '3586303AGTNHe',
        '2736qERJso',
        '1674680nDVfsI'
    ];
    a = function () {
        return A;
    };
    return a();
}
exports[v(0x6e)] = DeleteCampaignContactsService;