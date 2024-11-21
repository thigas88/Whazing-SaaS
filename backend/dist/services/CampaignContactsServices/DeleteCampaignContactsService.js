'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1a8)) / (0x53a + -0xb * -0x96 + 0x1d * -0x67) * (-parseInt(t(0x1b0)) / (0x1b5f + -0x156b + -0x5f2)) + -parseInt(t(0x1a3)) / (0x1 * -0x22a5 + -0x113 * 0xe + -0x18d9 * -0x2) + parseInt(u(0x1a0)) / (-0x15e6 + 0xb * 0x1c1 + 0x29f) + parseInt(t(0x1b6)) / (0x125 * 0xe + -0xc33 * 0x1 + -0x2 * 0x1e7) + -parseInt(u(0x1b9)) / (-0x3b * 0x1a + -0x3 * -0x1 + 0x601 * 0x1) + parseInt(u(0x19b)) / (0x45 * -0x55 + 0x1 * 0x1d8b + 0x1 * -0x69b) * (parseInt(u(0x1b3)) / (-0x20f0 + -0xd3 * -0x26 + 0x1a6 * 0x1)) + -parseInt(t(0x1b4)) / (0x661 * 0x1 + 0xd * -0x1ef + 0x11 * 0x11b) * (-parseInt(t(0x1bc)) / (0x16a7 + -0x7 * 0x8b + -0x12d0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x58351 * 0x1 + 0x73fc1 + -0x941 * 0x6));
var __importDefault = this && this[v(0x19f) + v(0x198)] || function (c) {
    const x = v;
    return c && c[x(0x1be)] ? c : { 'default': c };
};
const k = {};
function a() {
    const A = [
        'destroy',
        '__importDe',
        '927008KTuBji',
        'tenantId',
        '../../mode',
        '3100629pLwTXM',
        'ERR_CAMPAI',
        'nContacts',
        '../../erro',
        'defineProp',
        '1qpcXTR',
        'include',
        'campaignId',
        'GN_CONTACT',
        'required',
        'default',
        'value',
        'findOne',
        '1093252sLuWGX',
        'S_NOT_EXIS',
        'OUND',
        '534328htMUqV',
        '1467xMVtyM',
        'erty',
        '600970VHkxtu',
        'rs/AppErro',
        'contactId',
        '8977962LhgEGU',
        'model',
        'ERR_NO_CAM',
        '147930TnvzCz',
        'ls/Campaig',
        '__esModule',
        'ACTS_NOT_F',
        'fault',
        'PAIGN_CONT',
        'kPAIO',
        '119MuRxyT',
        'where',
        'CmkKj'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[w(0x1ae)] = !![], Object[w(0x1a7) + w(0x1b5)](exports, w(0x1be), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x892 * -0x2 + -0x4e5 + 0x1 * -0xaa7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CampaignContacts_1 = __importDefault(require(w(0x1a2) + w(0x1bd) + w(0x1a5))), AppError_1 = __importDefault(require(v(0x1a6) + w(0x1b7) + 'r')), Campaign_1 = __importDefault(require(w(0x1a2) + w(0x1bd) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = w, z = v, l = {};
        l[y(0x19a)] = z(0x1bb) + z(0x199) + z(0x1bf) + y(0x1b2), l[y(0x19d)] = y(0x1a4) + y(0x1ab) + y(0x1b1) + 'TS';
        const m = l, n = {};
        n[z(0x1aa)] = h, n[y(0x1b8)] = i;
        const o = {};
        o['id'] = h, o[y(0x1a1)] = j;
        const p = {};
        p[y(0x1ba)] = Campaign_1[z(0x1ad)], p[y(0x1ac)] = !![], p[y(0x19c)] = o;
        const q = {};
        q[y(0x19c)] = n, q[z(0x1a9)] = [p];
        const r = await CampaignContacts_1[z(0x1ad)][y(0x1af)](q);
        if (!r)
            throw new AppError_1[(y(0x1ad))](m[z(0x19a)], -0xdef + -0xdcf + -0x9c6 * -0x3);
        try {
            await r[z(0x19e)]();
        } catch (s) {
            throw new AppError_1[(y(0x1ad))](m[z(0x19d)], -0x12b7 + -0x82a + 0x1c75);
        }
    };
exports[w(0x1ad)] = DeleteCampaignContactsService;