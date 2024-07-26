'use strict';
const v = b, w = b;
function a() {
    const A = [
        '../../mode',
        'ERR_NO_CAM',
        '616dngUjR',
        'findOne',
        'wVpHV',
        'nContacts',
        'S_NOT_EXIS',
        '15SNbxCw',
        'ERR_CAMPAI',
        'PAIGN_CONT',
        '114140IRkFoW',
        '4960FedVry',
        'defineProp',
        'ls/Campaig',
        '1788bNKOVa',
        '689420odJwxm',
        'value',
        'fault',
        'contactId',
        '__importDe',
        '2VCaUDt',
        'model',
        'campaignId',
        '464472yHKqZd',
        'OUND',
        'GN_CONTACT',
        'tenantId',
        '144CMdqQE',
        '1412115ETccfe',
        'required',
        'PipOM',
        'ACTS_NOT_F',
        '27EWQBWk',
        '7326dYGOsm',
        'default',
        'destroy',
        'include',
        '__esModule',
        'where',
        'rs/AppErro',
        '111346rvEwvE',
        '../../erro',
        'erty'
    ];
    a = function () {
        return A;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14ad * 0x1 + 0x7ce + -0x1 * -0xd8b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xbf)) / (0x283 * -0x2 + -0x1 * -0x1953 + -0xa26 * 0x2) * (-parseInt(u(0xd6)) / (-0x16 * 0x188 + -0x4 * 0x3dd + 0x3126)) + -parseInt(t(0xb3)) / (0x545 * -0x1 + -0x2263 * -0x1 + -0x1d1b * 0x1) + parseInt(u(0xd1)) / (-0x12 * -0xb2 + -0xe9 * 0x27 + 0x1 * 0x16ff) * (-parseInt(u(0xc9)) / (0x23 * -0xfe + 0x25a4 + -0x2e5)) + -parseInt(u(0xb2)) / (0x39 * 0x9b + 0x2b9 * -0xe + 0x3a1) * (parseInt(u(0xc4)) / (0x1cdc + 0xaa * -0x22 + -0x641)) + -parseInt(t(0xae)) / (0x133 * -0x6 + -0xf * 0xb1 + 0x11 * 0x109) * (-parseInt(u(0xb7)) / (0x4 * -0x8f5 + -0x31b + 0x4 * 0x9be)) + parseInt(u(0xcd)) / (-0x1832 + 0x307 + -0x1 * -0x1535) * (-parseInt(u(0xb8)) / (-0x223 * 0xd + 0x14b1 * 0x1 + -0x721 * -0x1)) + -parseInt(t(0xd0)) / (-0x1 * -0x1a9a + -0x649 * 0x5 + 0x4df) * (-parseInt(t(0xcc)) / (-0xcea + -0x1319 + 0xd8 * 0x26));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3f59 * -0x1d + -0x13f31 + -0x18f * -0x815));
var __importDefault = this && this[v(0xd5) + v(0xd3)] || function (c) {
    const x = v;
    return c && c[x(0xbc)] ? c : { 'default': c };
};
const k = {};
k[v(0xd2)] = !![], Object[w(0xce) + w(0xc1)](exports, v(0xbc), k);
const CampaignContacts_1 = __importDefault(require(w(0xc2) + v(0xcf) + v(0xc7))), AppError_1 = __importDefault(require(w(0xc0) + v(0xbe) + 'r')), Campaign_1 = __importDefault(require(v(0xc2) + w(0xcf) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = v, z = v, l = {};
        l[y(0xb5)] = z(0xc3) + z(0xcb) + z(0xb6) + z(0xaf), l[z(0xc6)] = z(0xca) + y(0xb0) + y(0xc8) + 'TS';
        const m = l, n = {};
        n[z(0xad)] = h, n[z(0xd4)] = i;
        const o = {};
        o['id'] = h, o[z(0xb1)] = j;
        const p = {};
        p[z(0xac)] = Campaign_1[y(0xb9)], p[z(0xb4)] = !![], p[z(0xbd)] = o;
        const q = {};
        q[z(0xbd)] = n, q[z(0xbb)] = [p];
        const r = await CampaignContacts_1[z(0xb9)][y(0xc5)](q);
        if (!r)
            throw new AppError_1[(z(0xb9))](m[z(0xb5)], 0x11a5 + -0x1 * -0x211f + -0x3130);
        try {
            await r[y(0xba)]();
        } catch (s) {
            throw new AppError_1[(y(0xb9))](m[y(0xc6)], -0x185c + -0x1 * -0x10a2 + 0x94e);
        }
    };
exports[w(0xb9)] = DeleteCampaignContactsService;