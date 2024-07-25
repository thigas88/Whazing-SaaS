'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x131)) / (0x1305 * -0x1 + 0x1 * -0xc26 + 0x1f2c) + -parseInt(s(0x12e)) / (-0x1a51 + -0x23d4 + 0x3e27 * 0x1) * (-parseInt(s(0x121)) / (0x9a3 + -0xa3 * -0xf + 0x132d * -0x1)) + -parseInt(t(0x125)) / (0x2672 + -0x800 + -0x1 * 0x1e6e) + parseInt(s(0x123)) / (0x1eb1 + -0x31 * -0x3b + -0xdfd * 0x3) + -parseInt(t(0x12d)) / (-0x2 * -0x7df + 0x107 * 0x1 + -0x3 * 0x595) * (-parseInt(t(0x133)) / (0x1f8c + 0x6c2 + -0x2647)) + parseInt(t(0x136)) / (0x1b59 + -0x7fb + 0x21 * -0x96) * (parseInt(s(0x117)) / (0xb0c + -0x184f + 0xd4c)) + -parseInt(t(0x11c)) / (0x11ef + 0x178a + 0x296f * -0x1) * (parseInt(t(0x122)) / (-0x937 * -0x1 + -0x224 * -0x7 + 0x1828 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1c1f3 + 0x41 * -0x40d + 0xdf9cb));
var __importDefault = this && this[u(0x135) + v(0x11f)] || function (c) {
    const w = u;
    return c && c[w(0x124)] ? c : { 'default': c };
};
const k = {};
function a() {
    const z = [
        'default',
        'fault',
        'campaignId',
        '3rPFZpk',
        '11WxQjSl',
        '2441560rfdFcw',
        '__esModule',
        '3085812sKxIbd',
        'tenantId',
        'destroy',
        '../../mode',
        'ERR_CAMPAI',
        'erty',
        '../../erro',
        'S_NOT_EXIS',
        '6SszXbo',
        '2846076QTOgcc',
        'DILzi',
        'nContacts',
        '618999BJrpls',
        'TS_OR_NOT_',
        '3393866iuHHgz',
        'value',
        '__importDe',
        '1651472vaRpkp',
        'rs/AppErro',
        'findOne',
        'defineProp',
        '63ThKeIs',
        'QJrdK',
        'ACESSIBLE',
        'GN_CONTACT',
        'ls/Campaig',
        '17174510Fsmfpw',
        'where'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b20 + 0x2607 + -0x9d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[v(0x134)] = !![], Object[v(0x116) + v(0x12a)](exports, u(0x124), k);
const CampaignContacts_1 = __importDefault(require(u(0x128) + u(0x11b) + u(0x130))), AppError_1 = __importDefault(require(u(0x12b) + v(0x114) + 'r')), Campaign_1 = __importDefault(require(u(0x128) + u(0x11b) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = u, j = {};
        j[x(0x118)] = x(0x129) + x(0x11a) + x(0x12c) + x(0x132) + y(0x119), j[x(0x12f)] = y(0x129) + y(0x11a) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[y(0x126)] = i;
            const n = {};
            n[x(0x11d)] = m;
            const o = await Campaign_1[x(0x11e)][x(0x115)](n);
            if (o?.['id']) {
                const p = {};
                p[y(0x120)] = h;
                const q = {};
                q[x(0x11d)] = p, await CampaignContacts_1[x(0x11e)][y(0x127)](q);
            } else
                throw new AppError_1[(y(0x11e))](l[y(0x118)], 0x1 * -0x15e2 + -0xe0e + 0x2584);
        } catch (r) {
            throw new AppError_1[(y(0x11e))](l[y(0x12f)], 0x1074 * -0x2 + -0x1 * 0x1046 + 0x32c2);
        }
    };
exports[u(0x11e)] = DeleteAllCampaignContactsService;