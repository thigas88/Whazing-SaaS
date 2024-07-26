'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1d0)) / (-0x2335 * 0x1 + 0x11a8 + 0x118e) * (parseInt(r(0x1be)) / (-0x2 * 0xd7c + -0x1bd1 + 0x36cb)) + -parseInt(r(0x1cd)) / (0x4 * -0x431 + -0x1 * -0x15b + -0x5e * -0x2a) + parseInt(s(0x1b0)) / (0x22ed + -0x1c1c + -0x6cd) * (parseInt(r(0x1b3)) / (-0x1598 + 0x4a * -0x13 + 0x303 * 0x9)) + -parseInt(r(0x1b8)) / (0x4f9 + -0x1 * 0x223d + -0x2e * -0xa3) * (parseInt(r(0x1ce)) / (-0x1272 + 0x22b4 + -0x33f * 0x5)) + parseInt(r(0x1cf)) / (-0x4 * 0x531 + 0x95 * 0xb + 0xe65) * (-parseInt(s(0x1bd)) / (0x15f2 + -0x6ca + -0xf1f)) + -parseInt(s(0x1d4)) / (0xa84 + -0x100e + 0xee * 0x6) + parseInt(s(0x1bc)) / (-0xa87 + 0x1 * 0x773 + 0x31f * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x700fb + 0x700d9 * -0x1 + 0x844b0));
var __importDefault = this && this[t(0x1c6) + u(0x1ca)] || function (c) {
    const v = u;
    return c && c[v(0x1b6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x157 * 0x1d + -0x220d + 0x4a98);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        '31215217ZKNHeI',
        '12186FegHys',
        '31002yEZTrs',
        'ASC',
        'ls/Contact',
        'campaignId',
        'defineProp',
        'name',
        'where',
        'order',
        '__importDe',
        'campaignCo',
        'sWOnX',
        'tenantId',
        'fault',
        'value',
        'default',
        '2182242ZiPPVf',
        '63NBGrSx',
        '4952riTuLu',
        '32AfhpXT',
        'model',
        'ls/Campaig',
        '../../mode',
        '7765440tirqHw',
        '28KnntPC',
        'nContacts',
        'erty',
        '427190yqgemJ',
        'findAll',
        'aANCo',
        '__esModule',
        'required',
        '37194hwUnLQ',
        'include',
        'qWaWP',
        'ntacts'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[t(0x1cb)] = !![], Object[u(0x1c2) + t(0x1b2)](exports, u(0x1b6), k);
const CampaignContacts_1 = __importDefault(require(t(0x1d3) + u(0x1d2) + t(0x1b1))), Contact_1 = __importDefault(require(u(0x1d3) + u(0x1c0))), ListCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x1b5)] = w(0x1c7) + w(0x1bb), j[w(0x1ba)] = w(0x1c3), j[x(0x1c8)] = x(0x1bf);
        const l = j, m = {};
        m[x(0x1c9)] = i;
        const n = {};
        n[w(0x1c1)] = h;
        const o = {};
        o[x(0x1d1)] = CampaignContacts_1[w(0x1cc)], o['as'] = l[x(0x1b5)], o[w(0x1c4)] = n, o[x(0x1b7)] = !![];
        const p = {};
        p[x(0x1c4)] = m, p[x(0x1b9)] = [o], p[x(0x1c5)] = [[
                l[w(0x1ba)],
                l[w(0x1c8)]
            ]];
        const q = await Contact_1[x(0x1cc)][x(0x1b4)](p);
        return q;
    };
exports[u(0x1cc)] = ListCampaignContactsService;