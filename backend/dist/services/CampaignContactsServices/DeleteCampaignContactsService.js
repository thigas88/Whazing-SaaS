'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xbe)) / (-0x1 * -0x2273 + 0x14c3 + 0x1 * -0x3735) * (parseInt(t(0xb5)) / (-0x1fac + 0x25 + 0x1f89)) + -parseInt(u(0xb9)) / (0x35d + 0x1 * -0xeed + 0xb93 * 0x1) * (parseInt(t(0xbd)) / (-0x893 + -0x480 + 0x45d * 0x3)) + -parseInt(t(0xb8)) / (-0x2 * -0x4f + 0xe2d * 0x2 + -0x1cf3) * (-parseInt(t(0xc7)) / (-0xcae + 0x10ff + -0x44b)) + -parseInt(u(0xa7)) / (-0xfa5 + 0x24c5 + 0xb * -0x1eb) + -parseInt(u(0xb2)) / (0x2307 + -0x13d8 + -0xf27) * (-parseInt(t(0xba)) / (-0x18fb + 0x2598 + 0x142 * -0xa)) + -parseInt(u(0xb6)) / (0x2 * 0x68b + -0x13ea + 0x6de) * (parseInt(u(0xb0)) / (0x1 * 0x2663 + -0x1661 + -0xff7 * 0x1)) + parseInt(u(0xcb)) / (0x1939 + -0x1 * -0x2681 + 0x35a * -0x13) * (parseInt(t(0xc5)) / (0x2 * -0xcb9 + -0x17d6 + 0x3155));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbd88b + 0x3 * -0x1c227 + 0x504a4));
var __importDefault = this && this[v(0xa9) + v(0xc2)] || function (c) {
    const x = w;
    return c && c[x(0xc0)] ? c : { 'default': c };
};
const k = {};
k[w(0xae)] = !![], Object[w(0xad) + v(0xbb)](exports, w(0xc0), k);
const CampaignContacts_1 = __importDefault(require(v(0xc3) + v(0xb7) + v(0xa5))), AppError_1 = __importDefault(require(w(0xc1) + w(0xac) + 'r')), Campaign_1 = __importDefault(require(v(0xc3) + v(0xb7) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = v, z = v, l = {};
        l[y(0xa6)] = z(0xb3) + y(0xa8) + y(0xcd) + y(0xbf), l[z(0xb4)] = y(0xc4) + z(0xcc) + y(0xa4) + 'TS';
        const m = l, n = {};
        n[y(0xaa)] = h, n[z(0xab)] = i;
        const o = {};
        o['id'] = h, o[y(0xbc)] = j;
        const p = {};
        p[z(0xc6)] = Campaign_1[z(0xaf)], p[y(0xce)] = !![], p[z(0xca)] = o;
        const q = {};
        q[y(0xca)] = n, q[z(0xc8)] = [p];
        const r = await CampaignContacts_1[z(0xaf)][z(0xc9)](q);
        if (!r)
            throw new AppError_1[(z(0xaf))](m[z(0xa6)], 0x1 * -0xaa9 + 0x1 * -0x8e2 + 0x151f);
        try {
            await r[z(0xb1)]();
        } catch (s) {
            throw new AppError_1[(z(0xaf))](m[y(0xb4)], -0x1dda * -0x1 + 0x16f7 + -0x333d);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0xcd1 + -0x1 * 0x16ea + 0xabd);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0xaf)] = DeleteCampaignContactsService;
function a() {
    const A = [
        '46CPSIfN',
        '10NDgten',
        'ls/Campaig',
        '6591540zseTXB',
        '3620109ByzLZY',
        '18nsvHjo',
        'erty',
        'tenantId',
        '4HgZZkT',
        '38878hvLxhC',
        'OUND',
        '__esModule',
        '../../erro',
        'fault',
        '../../mode',
        'ERR_CAMPAI',
        '6553963XwiMHh',
        'model',
        '6OrZtMl',
        'include',
        'findOne',
        'where',
        '12PsdNZi',
        'GN_CONTACT',
        'ACTS_NOT_F',
        'required',
        'S_NOT_EXIS',
        'nContacts',
        'GvtPO',
        '4548117hYttce',
        'PAIGN_CONT',
        '__importDe',
        'campaignId',
        'contactId',
        'rs/AppErro',
        'defineProp',
        'value',
        'default',
        '1827749ohEaKV',
        'destroy',
        '261688VbWdFQ',
        'ERR_NO_CAM',
        'EeksB'
    ];
    a = function () {
        return A;
    };
    return a();
}