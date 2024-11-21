'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1e1)) / (-0x23fd + 0x9a * -0xa + 0x2a02) * (parseInt(u(0x1e4)) / (0x1553 + 0x1 * -0x25ed + 0x109c)) + parseInt(u(0x201)) / (0xa53 + 0x531 * 0x1 + -0xf81) * (parseInt(u(0x209)) / (0x1 * -0x1f46 + 0x10a6 + 0xea4)) + -parseInt(u(0x1ed)) / (0xfa7 * -0x1 + 0x1625 * -0x1 + 0x25d1) + parseInt(u(0x1fb)) / (0x95 * 0x29 + -0x1fb3 + -0x1f7 * -0x4) + -parseInt(v(0x212)) / (0x955 + -0x677 + -0x2d7) + -parseInt(v(0x1e0)) / (0x1b7d * -0x1 + -0x47f + 0x2004) + parseInt(v(0x1ec)) / (0x114e + -0x5c9 * -0x2 + -0x1cd7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7fd67 * -0x1 + -0x1 * -0xbc81f + -0xba7ae));
var __importDefault = this && this[w(0x20d) + x(0x20e)] || function (c) {
    const y = w;
    return c && c[y(0x1df)] ? c : { 'default': c };
};
const k = {};
k[x(0x1f3)] = !![], Object[w(0x20c) + x(0x20a)](exports, x(0x1df), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6a * -0x4d + 0x2 * -0x54a + -0x1371);
        let h = e[f];
        return h;
    }, b(c, d);
}
const bull_1 = __importDefault(require(x(0x1e5))), Campaign_1 = __importDefault(require(w(0x1f9) + w(0x1fe) + 'n')), AppError_1 = __importDefault(require(x(0x206) + x(0x1e3) + 'r')), CampaignContacts_1 = __importDefault(require(x(0x1f9) + x(0x1fe) + x(0x1fd))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = x, A = x, l = {
                'GsLVy': z(0x1f5) + A(0x1ee) + A(0x203),
                'asGfG': A(0x1fc) + z(0x1fa) + z(0x1e6),
                'IvvQg': function (p, q) {
                    return p(q);
                },
                'KjCvN': function (p, q) {
                    return p(q);
                },
                'wXCLs': z(0x1f8)
            }, m = {};
        m['id'] = i, m[A(0x202)] = j;
        const n = {};
        n[z(0x1e8)] = m;
        const o = await Campaign_1[z(0x1ea)][A(0x205)](n);
        if (!o)
            throw new AppError_1[(z(0x1ea))](l[A(0x1eb)], 0xd48 + 0x1 * 0x61b + 0x11cf * -0x1);
        try {
            await (-0x1559 + -0x127a + -0x27d3 * -0x1, bull_1[z(0x1ea)])(l[z(0x1e9)], {
                'redis': {
                    'port': l[z(0x204)](Number, process[z(0x20b)][z(0x20f) + z(0x200)]),
                    'host': process[z(0x20b)][A(0x1e7) + A(0x1f6)],
                    'db': l[z(0x1f2)](Number, process[z(0x20b)][z(0x1f7) + z(0x213)]) || 0x3 * 0x4c1 + -0x24b0 + -0x1 * -0x166f,
                    'password': process[A(0x20b)][A(0x20f) + z(0x1e2)] || undefined
                }
            })[z(0x1de)](A(0x210) + '_' + o['id'] + '*');
            const p = {};
            p[A(0x211)] = null, p[A(0x1f1)] = null, p[A(0x1ff)] = null, p[A(0x1dd)] = 0x0, p[z(0x1f0)] = null;
            const q = {};
            q[A(0x207)] = o['id'], q[A(0x1f0)] = null;
            const r = {};
            r[A(0x1e8)] = q, await CampaignContacts_1[z(0x1ea)][A(0x214)](p, r);
            const s = {};
            s[A(0x1ef)] = l[z(0x208)], await o[A(0x214)](s);
        } catch (t) {
            throw new AppError_1[(A(0x1ea))](z(0x1f4) + t, -0x5 * 0x78d + -0x8 * -0x29 + 0x33 * 0xbf);
        }
    };
function a() {
    const B = [
        'timestamp',
        'ORT',
        '3OQXywg',
        'tenantId',
        'XISTS',
        'IvvQg',
        'findOne',
        '../../erro',
        'campaignId',
        'wXCLs',
        '3391720FmlUpW',
        'erty',
        'env',
        'defineProp',
        '__importDe',
        'fault',
        'IO_REDIS_P',
        'campaginId',
        'body',
        '6368992HDiWCk',
        'B_SESSION',
        'update',
        'ack',
        'removeJobs',
        '__esModule',
        '2109112pIaEbd',
        '1NUoVKo',
        'ASSWORD',
        'rs/AppErro',
        '1438238lXgbry',
        'bull',
        'ampaign',
        'IO_REDIS_S',
        'where',
        'asGfG',
        'default',
        'GsLVy',
        '17709282GkOeZT',
        '2766670QUEwuv',
        'AIGN_NOT_E',
        'status',
        'messageId',
        'mediaName',
        'KjCvN',
        'value',
        'ERROR:\x20',
        'ERROR_CAMP',
        'ERVER',
        'IO_REDIS_D',
        'canceled',
        '../../mode',
        'eWhatsappC',
        '973488zbAKUg',
        'SendMessag',
        'nContacts',
        'ls/Campaig'
    ];
    a = function () {
        return B;
    };
    return a();
}
exports[x(0x1ea)] = CancelCampaignService;