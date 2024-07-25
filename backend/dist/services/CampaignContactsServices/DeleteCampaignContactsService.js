'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xc2)) / (0x234f + -0xbb4 + -0x179a) + -parseInt(u(0xab)) / (0x2335 * -0x1 + 0x22b * 0xc + 0x933) * (parseInt(u(0xae)) / (0x16e6 + -0x1 * -0x2221 + -0x3904)) + -parseInt(t(0xbb)) / (0xd03 + 0x2a5 + -0xfa4) * (-parseInt(u(0xaf)) / (0x6db * 0x1 + 0x17d2 * -0x1 + -0x4 * -0x43f)) + -parseInt(u(0xa0)) / (-0x2445 + -0x3ab * -0x5 + 0x11f4 * 0x1) * (parseInt(u(0xbc)) / (-0xf5 * 0x8 + -0xa9b + 0x124a * 0x1)) + parseInt(t(0x9e)) / (-0x1 * 0x8b8 + 0x7b * 0x6 + -0x1 * -0x5de) * (-parseInt(u(0xaa)) / (-0x1302 + -0x2f9 * 0x1 + 0x1 * 0x1604)) + parseInt(t(0x9d)) / (0x1 * -0x656 + 0x23 * -0xf6 + -0x3 * -0xd56) * (-parseInt(t(0x9c)) / (0x1909 * -0x1 + 0x792 + -0x2eb * -0x6)) + parseInt(t(0xac)) / (0x1e30 + 0x1 * 0x20eb + -0x3 * 0x1505);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4ef * -0x229 + 0x17691 * -0xc + -0x2 * -0x80383));
var __importDefault = this && this[v(0xa4) + w(0xad)] || function (c) {
    const x = v;
    return c && c[x(0xa6)] ? c : { 'default': c };
};
function a() {
    const A = [
        '../../mode',
        'rWdlk',
        'include',
        'destroy',
        'contactId',
        '128YpZDxL',
        '14784YyByUo',
        '../../erro',
        'erty',
        'campaignId',
        'PAIGN_CONT',
        'defineProp',
        '1010133jMUxHs',
        'rs/AppErro',
        'default',
        'ACTS_NOT_F',
        '55CrEbkg',
        '1081180LteGgy',
        '56FcUrfX',
        'GN_CONTACT',
        '546yaHPKu',
        'where',
        'tjKBA',
        'ls/Campaig',
        '__importDe',
        'S_NOT_EXIS',
        '__esModule',
        'tenantId',
        'findOne',
        'required',
        '41202jrFszd',
        '594178PFxyLc',
        '25870308QctHyj',
        'fault',
        '3UbKMeB',
        '80365mbymNh',
        'OUND',
        'ERR_NO_CAM',
        'nContacts',
        'model',
        'ERR_CAMPAI',
        'value'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[w(0xb5)] = !![], Object[v(0xc1) + w(0xbe)](exports, w(0xa6), k);
const CampaignContacts_1 = __importDefault(require(v(0xb6) + v(0xa3) + v(0xb2))), AppError_1 = __importDefault(require(v(0xbd) + v(0xc3) + 'r')), Campaign_1 = __importDefault(require(w(0xb6) + w(0xa3) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = w, z = w, l = {};
        l[y(0xb7)] = z(0xb1) + y(0xc0) + y(0x9b) + y(0xb0), l[z(0xa2)] = y(0xb4) + z(0x9f) + z(0xa5) + 'TS';
        const m = l, n = {};
        n[z(0xbf)] = h, n[z(0xba)] = i;
        const o = {};
        o['id'] = h, o[z(0xa7)] = j;
        const p = {};
        p[z(0xb3)] = Campaign_1[y(0x9a)], p[z(0xa9)] = !![], p[z(0xa1)] = o;
        const q = {};
        q[y(0xa1)] = n, q[y(0xb8)] = [p];
        const r = await CampaignContacts_1[y(0x9a)][z(0xa8)](q);
        if (!r)
            throw new AppError_1[(z(0x9a))](m[z(0xb7)], 0x1d57 + -0x539 + 0x2 * -0xb45);
        try {
            await r[z(0xb9)]();
        } catch (s) {
            throw new AppError_1[(y(0x9a))](m[z(0xa2)], -0x609 + 0x2530 + 0x71 * -0x43);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x36a + 0x27b * 0x8 + -0xfd4);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0x9a)] = DeleteCampaignContactsService;