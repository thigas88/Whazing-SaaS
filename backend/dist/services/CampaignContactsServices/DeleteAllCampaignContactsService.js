'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1a49 + 0x1183 * 0x2 + -0x702);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x1bf)) / (0x2a2 + 0x10a7 + -0x1348) + -parseInt(t(0x1c2)) / (-0x1 * -0x593 + 0x41f + 0xf8 * -0xa) + -parseInt(t(0x1d4)) / (-0x1 * 0x2189 + 0x443 + 0x1 * 0x1d49) * (parseInt(s(0x1db)) / (-0x1 * -0x654 + -0x3 * -0x1d + -0x83 * 0xd)) + parseInt(s(0x1c5)) / (0xe91 + 0x1 * 0x1f0f + 0x5 * -0x91f) * (-parseInt(s(0x1dc)) / (-0x52 * 0x5e + 0x3 * -0x9a5 + 0x3b11 * 0x1)) + -parseInt(t(0x1d2)) / (-0x2 * -0x8f3 + -0x862 + -0x97d) + -parseInt(s(0x1be)) / (-0xd46 * -0x1 + 0xbc8 + -0x1 * 0x1906) + -parseInt(t(0x1d8)) / (0x334 * 0x5 + -0x1 * 0xb67 + -0x494) * (-parseInt(s(0x1cb)) / (-0x255 * -0x7 + -0x268a + 0xd3 * 0x1b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2f471 * -0x3 + 0x2 * -0x65b9a + -0x1 * -0x128d76));
var __importDefault = this && this[u(0x1c8) + v(0x1c9)] || function (c) {
    const w = v;
    return c && c[w(0x1d1)] ? c : { 'default': c };
};
const k = {};
k[v(0x1cd)] = !![], Object[u(0x1c4) + u(0x1c6)](exports, u(0x1d1), k);
const CampaignContacts_1 = __importDefault(require(v(0x1ca) + u(0x1d7) + v(0x1c0))), AppError_1 = __importDefault(require(v(0x1bb) + v(0x1d6) + 'r')), Campaign_1 = __importDefault(require(v(0x1ca) + u(0x1d7) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = v, y = u, j = {};
        j[x(0x1c7)] = x(0x1cc) + x(0x1da) + x(0x1bd) + x(0x1d0) + y(0x1c1), j[x(0x1cf)] = x(0x1cc) + x(0x1da) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0x1d5)] = i;
            const n = {};
            n[y(0x1ce)] = m;
            const o = await Campaign_1[y(0x1d3)][y(0x1d9)](n);
            if (o?.['id']) {
                const p = {};
                p[x(0x1bc)] = h;
                const q = {};
                q[y(0x1ce)] = p, await CampaignContacts_1[x(0x1d3)][y(0x1c3)](q);
            } else
                throw new AppError_1[(x(0x1d3))](l[y(0x1c7)], 0x2 * -0x1271 + 0xcb4 + 0x19c2);
        } catch (r) {
            throw new AppError_1[(y(0x1d3))](l[y(0x1cf)], -0x2 * -0xf59 + -0xad7 + 0x1 * -0x1247);
        }
    };
function a() {
    const z = [
        'destroy',
        'defineProp',
        '5315vVzYoJ',
        'erty',
        'qdCLR',
        '__importDe',
        'fault',
        '../../mode',
        '891350iDEZaN',
        'ERR_CAMPAI',
        'value',
        'where',
        'qBfYa',
        'TS_OR_NOT_',
        '__esModule',
        '10540530AgRuqY',
        'default',
        '33dHgMnh',
        'tenantId',
        'rs/AppErro',
        'ls/Campaig',
        '459pHRIzT',
        'findOne',
        'GN_CONTACT',
        '684548JVHPLo',
        '9132IUBjvA',
        '../../erro',
        'campaignId',
        'S_NOT_EXIS',
        '2088360qFexgR',
        '1827710RsMNHj',
        'nContacts',
        'ACESSIBLE',
        '285780HZRudp'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[u(0x1d3)] = DeleteAllCampaignContactsService;