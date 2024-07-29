'use strict';
function a() {
    const B = [
        'ASSWORD',
        'defineProp',
        'RmhAj',
        'fault',
        'campaignId',
        '../../erro',
        'messageId',
        'mediaName',
        'canceled',
        'XISTS',
        '627474lECOoX',
        '134721Frjwka',
        '5404KNBCtS',
        'ERVER',
        'fqqRG',
        '55BXWuDw',
        'AIGN_NOT_E',
        '__esModule',
        'ZOcRw',
        'value',
        'ack',
        'ERROR:\x20',
        'B_SESSION',
        'ls/Campaig',
        '111CtetEd',
        '__importDe',
        '34534104KmxEpu',
        '56750ZotcRb',
        'IO_REDIS_D',
        'campaginId',
        'status',
        'update',
        'erty',
        '63lTjHcr',
        'IO_REDIS_S',
        '290LCLitC',
        'nContacts',
        '5649405POkMcL',
        'rs/AppErro',
        'IO_REDIS_P',
        'tenantId',
        'body',
        'where',
        'ampaign',
        'eWhatsappC',
        'env',
        'default',
        'IAHYV',
        '10092592tlAIja',
        'removeJobs',
        'findOne',
        'ORT',
        '../../mode',
        'ERROR_CAMP',
        'bull',
        'SendMessag',
        'timestamp'
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
            const f = parseInt(u(0xaf)) / (0x126b + 0x5fb * 0x4 + -0x2 * 0x152b) * (-parseInt(v(0x82)) / (0x1 * 0x182f + 0x2 * 0x10a6 + -0x3979)) + -parseInt(u(0x7f)) / (0x2 * -0x10ba + -0xf67 * -0x1 + 0x121 * 0x10) * (parseInt(u(0xac)) / (-0x2 * 0xc1a + -0x211d + 0x3955)) + parseInt(v(0x8c)) / (-0x3e * 0xd + -0x6eb + 0xa16) + parseInt(u(0xaa)) / (0x2 * 0x1156 + -0x5d6 * 0x2 + -0x22 * 0xad) * (-parseInt(u(0x88)) / (-0x885 * -0x3 + -0xbef * -0x3 + -0x3d55)) + -parseInt(u(0x97)) / (0x684 + -0x16 * 0x40 + -0xfc) + parseInt(v(0xab)) / (0x24 * 0x62 + 0x124e + -0x5 * 0x669) * (parseInt(v(0x8a)) / (0x690 + -0x12b + 0x3 * -0x1c9)) + parseInt(u(0x81)) / (0x1b68 + 0x1ebf + -0x3a1c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1923 * -0x71 + 0xeb016 + 0xc33c8 * -0x1));
var __importDefault = this && this[w(0x80) + w(0xa3)] || function (c) {
    const y = w;
    return c && c[y(0xb1)] ? c : { 'default': c };
};
const k = {};
k[w(0xb3)] = !![], Object[x(0xa1) + w(0x87)](exports, x(0xb1), k);
const bull_1 = __importDefault(require(w(0x9d))), Campaign_1 = __importDefault(require(x(0x9b) + x(0x7e) + 'n')), AppError_1 = __importDefault(require(x(0xa5) + w(0x8d) + 'r')), CampaignContacts_1 = __importDefault(require(w(0x9b) + x(0x7e) + w(0x8b))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {
                'RmhAj': z(0x9c) + z(0xb0) + A(0xa9),
                'fqqRG': z(0x9e) + A(0x93) + A(0x92),
                'IAHYV': function (p, q) {
                    return p(q);
                },
                'ZOcRw': z(0xa8)
            }, m = {};
        m['id'] = i, m[A(0x8f)] = j;
        const n = {};
        n[A(0x91)] = m;
        const o = await Campaign_1[z(0x95)][A(0x99)](n);
        if (!o)
            throw new AppError_1[(A(0x95))](l[A(0xa2)], -0x1343 + -0x4 * -0x89b + -0xd95);
        try {
            await (-0x31a + -0x21 + 0x33b, bull_1[A(0x95)])(l[A(0xae)], {
                'redis': {
                    'port': l[z(0x96)](Number, process[z(0x94)][A(0x8e) + A(0x9a)]),
                    'host': process[z(0x94)][A(0x89) + A(0xad)],
                    'db': l[z(0x96)](Number, process[z(0x94)][A(0x83) + z(0xb6)]) || -0x1 * -0x2281 + -0x8 * -0x58 + -0x253f,
                    'password': process[z(0x94)][A(0x8e) + A(0xa0)] || undefined
                }
            })[z(0x98)](z(0x84) + '_' + o['id'] + '*');
            const p = {};
            p[z(0x90)] = null, p[A(0xa7)] = null, p[A(0x9f)] = null, p[z(0xb4)] = 0x0, p[z(0xa6)] = null;
            const q = {};
            q[z(0xa4)] = o['id'], q[A(0xa6)] = null;
            const r = {};
            r[A(0x91)] = q, await CampaignContacts_1[A(0x95)][A(0x86)](p, r);
            const s = {};
            s[A(0x85)] = l[z(0xb2)], await o[z(0x86)](s);
        } catch (t) {
            throw new AppError_1[(A(0x95))](A(0xb5) + t, -0x2380 + -0xbf1 + 0x1057 * 0x3);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x57 * 0x4a + -0xbbd + -0x7 * -0x557);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x95)] = CancelCampaignService;