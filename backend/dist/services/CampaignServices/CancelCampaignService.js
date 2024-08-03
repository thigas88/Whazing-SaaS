'use strict';
function a() {
    const B = [
        'bull',
        'canceled',
        '__esModule',
        'ERVER',
        'IO_REDIS_P',
        'default',
        '../../mode',
        '449937cxqAND',
        '../../erro',
        'nContacts',
        'status',
        '590fMUbFT',
        'ack',
        '2672511sOYwsb',
        'defineProp',
        'rs/AppErro',
        'IO_REDIS_S',
        'IO_REDIS_D',
        'value',
        'B_SESSION',
        'update',
        '4003396zpyvEi',
        'ERROR_CAMP',
        '1310fkBfpp',
        'body',
        'SendMessag',
        'ASSWORD',
        '317054PszCJk',
        '12259695iQVkKk',
        'ls/Campaig',
        'removeJobs',
        'ampaign',
        'jiQNC',
        'campaignId',
        'findOne',
        'eWhatsappC',
        'timestamp',
        'KnAhI',
        'where',
        'tenantId',
        'STuCt',
        'ERROR:\x20',
        '12864480HfwtWD',
        'XISTS',
        'AIGN_NOT_E',
        'messageId',
        '11148FhbZfL',
        'mediaName',
        'ORT',
        'env',
        'erty',
        'fault',
        '__importDe',
        'yKRCW',
        '3WbGfwp',
        'campaginId'
    ];
    a = function () {
        return B;
    };
    return a();
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xa8)) / (0x11 * -0xf2 + 0x1689 + -0x676) * (parseInt(v(0xc5)) / (0xdc1 + 0x25f0 + -0x33af)) + -parseInt(v(0xb7)) / (-0x3 * -0x8df + -0x76 * 0x31 + -0x404) + -parseInt(v(0xbf)) / (0x1e0d + 0xfbe + 0x1 * -0x2dc7) + parseInt(v(0xc1)) / (-0x9fc + -0xd5b + 0x175c) * (-parseInt(u(0xa0)) / (-0x17 * -0x7f + -0x16 * -0x64 + 0xb * -0x1d1)) + -parseInt(u(0xc6)) / (-0x1d87 + 0x9e * -0x23 + -0x1994 * -0x2) + parseInt(u(0x9c)) / (-0x1311 * 0x2 + 0xc1b + 0x1 * 0x1a0f) + -parseInt(u(0xb1)) / (-0x2 * 0x89b + -0x1df7 + 0x2f36) * (-parseInt(v(0xb5)) / (-0x3c0 * -0x4 + 0x2ba * 0x4 + -0x19de));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfcc4d + -0x10201a + 0x2db528));
var __importDefault = this && this[w(0xa6) + w(0xa5)] || function (c) {
    const y = w;
    return c && c[y(0xac)] ? c : { 'default': c };
};
const k = {};
k[x(0xbc)] = !![], Object[w(0xb8) + x(0xa4)](exports, w(0xac), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8 * -0x9 + 0x3 * 0x63e + -0xf1 * 0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const bull_1 = __importDefault(require(w(0xaa))), Campaign_1 = __importDefault(require(x(0xb0) + w(0x8f) + 'n')), AppError_1 = __importDefault(require(w(0xb2) + w(0xb9) + 'r')), CampaignContacts_1 = __importDefault(require(x(0xb0) + x(0x8f) + w(0xb3))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = x, A = x, l = {
                'STuCt': z(0xc0) + z(0x9e) + z(0x9d),
                'KnAhI': z(0xc3) + A(0x95) + A(0x91),
                'yKRCW': function (p, q) {
                    return p(q);
                },
                'jiQNC': A(0xab)
            }, m = {};
        m['id'] = i, m[A(0x99)] = j;
        const n = {};
        n[A(0x98)] = m;
        const o = await Campaign_1[A(0xaf)][z(0x94)](n);
        if (!o)
            throw new AppError_1[(A(0xaf))](l[z(0x9a)], -0x553 + 0x36c * -0x7 + 0x1edb);
        try {
            await (-0x1304 + 0x25ed + -0x2f * 0x67, bull_1[A(0xaf)])(l[A(0x97)], {
                'redis': {
                    'port': l[z(0xa7)](Number, process[z(0xa3)][z(0xae) + A(0xa2)]),
                    'host': process[z(0xa3)][A(0xba) + z(0xad)],
                    'db': l[A(0xa7)](Number, process[z(0xa3)][z(0xbb) + z(0xbd)]) || 0x1 * -0x60a + 0xb * -0xe8 + 0x1004,
                    'password': process[z(0xa3)][z(0xae) + z(0xc4)] || undefined
                }
            })[A(0x90)](z(0xa9) + '_' + o['id'] + '*');
            const p = {};
            p[z(0xc2)] = null, p[z(0xa1)] = null, p[z(0x96)] = null, p[A(0xb6)] = 0x0, p[A(0x9f)] = null;
            const q = {};
            q[A(0x93)] = o['id'], q[z(0x9f)] = null;
            const r = {};
            r[A(0x98)] = q, await CampaignContacts_1[z(0xaf)][A(0xbe)](p, r);
            const s = {};
            s[z(0xb4)] = l[A(0x92)], await o[z(0xbe)](s);
        } catch (t) {
            throw new AppError_1[(z(0xaf))](z(0x9b) + t, 0x20 * 0x2c + 0x91 * -0x3d + 0x1ea1);
        }
    };
exports[x(0xaf)] = CancelCampaignService;