'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x21e)) / (0x100 * -0x8 + -0xe9c + 0x33b * 0x7) + -parseInt(v(0x202)) / (-0xa2f * 0x2 + 0x1a58 + 0x1 * -0x5f8) * (parseInt(u(0x211)) / (0x152c + 0x130a * -0x1 + 0x1 * -0x21f)) + parseInt(u(0x1ef)) / (0x5c8 + -0x2412 + -0x12 * -0x1af) * (parseInt(v(0x207)) / (-0x1e55 + -0x1883 + 0x36dd)) + parseInt(u(0x217)) / (0x1f0e + -0x1978 + -0x590 * 0x1) + parseInt(v(0x210)) / (-0x24f9 + 0xce0 + 0x1820) + parseInt(u(0x1fa)) / (0x11ca * 0x1 + 0xb * 0x112 + -0x1d88) + -parseInt(v(0x1e8)) / (-0xf8b + 0xb * -0x5e + 0x139e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x51777 * 0x5 + -0x1db79 * -0x5 + -0xa60f7 * 0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xec2 + -0x10 * -0x146 + 0x5f * -0xa);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x219) + x(0x1f2)] || function (c) {
    const y = w;
    return c && c[y(0x1ec)] ? c : { 'default': c };
};
function a() {
    const B = [
        'ERROR_CAMP',
        'update',
        'campaginId',
        '10xIeczs',
        'defineProp',
        'default',
        'env',
        'messageId',
        '844925jEANvt',
        'XISTS',
        'campaignId',
        'where',
        'mediaName',
        'AIGN_NOT_E',
        'ack',
        'tenantId',
        'ORT',
        '11265233JraVfd',
        '679281HyWYYL',
        'value',
        'erty',
        'bull',
        'SendMessag',
        'ampaign',
        '2673174xYCMSN',
        'zovsJ',
        '__importDe',
        'IO_REDIS_P',
        'findOne',
        'IxRus',
        'Qwwci',
        '1603254bclvvO',
        '23867289GazgRJ',
        'IO_REDIS_S',
        'eWhatsappC',
        'nContacts',
        '__esModule',
        'B_SESSION',
        'timestamp',
        '4OLYYNJ',
        'body',
        'IO_REDIS_D',
        'fault',
        'status',
        'canceled',
        'removeJobs',
        'ERVER',
        'ZGxqF',
        '../../erro',
        'ASSWORD',
        '6989144KnIETc',
        'rs/AppErro',
        '../../mode',
        'ERROR:\x20',
        'ls/Campaig'
    ];
    a = function () {
        return B;
    };
    return a();
}
const k = {};
k[w(0x212)] = !![], Object[x(0x203) + w(0x213)](exports, x(0x1ec), k);
const bull_1 = __importDefault(require(x(0x214))), Campaign_1 = __importDefault(require(x(0x1fc) + x(0x1fe) + 'n')), AppError_1 = __importDefault(require(w(0x1f8) + w(0x1fb) + 'r')), CampaignContacts_1 = __importDefault(require(x(0x1fc) + w(0x1fe) + x(0x1eb))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = x, A = w, l = {
                'Qwwci': z(0x1ff) + z(0x20c) + z(0x208),
                'ZGxqF': z(0x215) + A(0x1ea) + A(0x216),
                'IxRus': function (p, q) {
                    return p(q);
                },
                'zovsJ': A(0x1f4)
            }, m = {};
        m['id'] = i, m[z(0x20e)] = j;
        const n = {};
        n[A(0x20a)] = m;
        const o = await Campaign_1[z(0x204)][A(0x21b)](n);
        if (!o)
            throw new AppError_1[(A(0x204))](l[A(0x21d)], -0x903 + 0x16f * -0x13 + 0x25d4);
        try {
            await (0x106 * 0xc + 0x1933 * -0x1 + -0x1 * -0xceb, bull_1[z(0x204)])(l[A(0x1f7)], {
                'redis': {
                    'port': l[z(0x21c)](Number, process[A(0x205)][A(0x21a) + A(0x20f)]),
                    'host': process[A(0x205)][z(0x1e9) + z(0x1f6)],
                    'db': l[A(0x21c)](Number, process[A(0x205)][z(0x1f1) + A(0x1ed)]) || 0x17a7 + -0x43f * 0x7 + 0x614,
                    'password': process[A(0x205)][A(0x21a) + z(0x1f9)] || undefined
                }
            })[A(0x1f5)](z(0x201) + '_' + o['id'] + '*');
            const p = {};
            p[A(0x1f0)] = null, p[z(0x20b)] = null, p[A(0x1ee)] = null, p[A(0x20d)] = 0x0, p[z(0x206)] = null;
            const q = {};
            q[A(0x209)] = o['id'], q[z(0x206)] = null;
            const r = {};
            r[A(0x20a)] = q, await CampaignContacts_1[z(0x204)][A(0x200)](p, r);
            const s = {};
            s[A(0x1f3)] = l[A(0x218)], await o[z(0x200)](s);
        } catch (t) {
            throw new AppError_1[(A(0x204))](A(0x1fd) + t, 0x37c * -0x1 + 0x4 * 0x3a + 0x428);
        }
    };
exports[x(0x204)] = CancelCampaignService;