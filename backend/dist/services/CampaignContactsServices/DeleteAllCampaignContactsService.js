'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf8c + -0xbd0 + 0x1c95 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x13f)) / (-0x10f * -0x11 + -0xa7b + -0x281 * 0x3) * (-parseInt(t(0x13a)) / (0xcaa * -0x1 + 0x4c * -0x43 + -0x2 * -0x1048)) + parseInt(s(0x159)) / (0x169 * -0x11 + 0x1ddb * -0x1 + 0x1 * 0x35d7) + -parseInt(t(0x150)) / (0x22c0 + -0x9d * 0x13 + -0x1715) * (-parseInt(t(0x140)) / (0xbf9 * -0x1 + 0xa51 + -0x3 * -0x8f)) + -parseInt(t(0x141)) / (0x1092 * -0x2 + -0x1a86 + -0x50 * -0xbf) + -parseInt(t(0x143)) / (0xbfc + -0x4 * -0x97 + 0x5 * -0x2dd) + parseInt(s(0x14c)) / (-0x9 * -0x17e + -0x1e65 * -0x1 + -0x2bcb) + parseInt(t(0x14d)) / (0x4f1 + 0x5 * -0x425 + -0x1 * -0xfd1) * (-parseInt(s(0x14f)) / (-0xe39 * 0x1 + -0x1487 + -0x1165 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12 * 0x3ac2 + -0xb5d38 + -0x5 * -0x41d1d));
var __importDefault = this && this[u(0x149) + u(0x155)] || function (c) {
    const w = v;
    return c && c[w(0x15a)] ? c : { 'default': c };
};
function a() {
    const z = [
        '13960LvjaBx',
        '5164psNtzS',
        'where',
        'ls/Campaig',
        '../../erro',
        'rs/AppErro',
        'fault',
        'nContacts',
        'tenantId',
        'default',
        '1930104jqiUxn',
        '__esModule',
        'S_NOT_EXIS',
        '2GGMcWN',
        'ERR_CAMPAI',
        'destroy',
        '../../mode',
        'aeimq',
        '1353548FFyPzf',
        '2685GFwwrk',
        '9643968LISgUY',
        'defineProp',
        '448000gFbbsy',
        'value',
        'campaignId',
        'findOne',
        'ACESSIBLE',
        'TS_OR_NOT_',
        '__importDe',
        'GN_CONTACT',
        'dIdXH',
        '10969456jpzMTs',
        '9774xLbTfG',
        'erty'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
k[v(0x144)] = !![], Object[v(0x142) + v(0x14e)](exports, v(0x15a), k);
const CampaignContacts_1 = __importDefault(require(v(0x13d) + v(0x152) + v(0x156))), AppError_1 = __importDefault(require(v(0x153) + v(0x154) + 'r')), Campaign_1 = __importDefault(require(u(0x13d) + u(0x152) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = v, y = u, j = {};
        j[x(0x14b)] = x(0x13b) + x(0x14a) + x(0x139) + y(0x148) + x(0x147), j[y(0x13e)] = y(0x13b) + y(0x14a) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0x157)] = i;
            const n = {};
            n[x(0x151)] = m;
            const o = await Campaign_1[y(0x158)][y(0x146)](n);
            if (o?.['id']) {
                const p = {};
                p[x(0x145)] = h;
                const q = {};
                q[y(0x151)] = p, await CampaignContacts_1[x(0x158)][x(0x13c)](q);
            } else
                throw new AppError_1[(y(0x158))](l[x(0x14b)], -0xf53 * 0x1 + -0x7f * 0x39 + 0x2d2e);
        } catch (r) {
            throw new AppError_1[(y(0x158))](l[x(0x13e)], 0x118e + -0x18 * -0x153 + -0x2fc2);
        }
    };
exports[u(0x158)] = DeleteAllCampaignContactsService;