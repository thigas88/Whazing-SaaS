'use strict';
function a() {
    const B = [
        'campaignId',
        '5WVRqVa',
        'mediaName',
        'eWhatsappC',
        'removeJobs',
        'default',
        'ORT',
        'ampaign',
        'IO_REDIS_D',
        'ERVER',
        'FNngD',
        'IO_REDIS_S',
        'env',
        'messageId',
        '4TbpASs',
        'SendMessag',
        'campaginId',
        'status',
        'fault',
        '../../mode',
        'body',
        'ERROR:\x20',
        '__esModule',
        'tenantId',
        '100cmwazI',
        'nContacts',
        'value',
        'timestamp',
        'IO_REDIS_P',
        '173703vVnhWZ',
        '545994RfbdEY',
        'AIGN_NOT_E',
        'update',
        'bull',
        '../../erro',
        '135416RVwaCv',
        'BxITW',
        'ack',
        'erty',
        '217YNAwxG',
        'ERROR_CAMP',
        'XISTS',
        'ls/Campaig',
        'oGitw',
        'findOne',
        'where',
        'ASSWORD',
        'defineProp',
        '579571mrwwcP',
        '49775VTQtja',
        'usvsb',
        'rs/AppErro',
        '__importDe',
        'B_SESSION',
        '708928KklqBo',
        'pEqsT',
        'canceled',
        '3101178kygpcY'
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
            const f = -parseInt(u(0x1ff)) / (-0xbd3 + -0x1 * 0x329 + 0xefd) + parseInt(u(0x205)) / (-0x193e * 0x1 + -0xf50 + 0x512 * 0x8) + -parseInt(u(0x1ec)) / (0x19 * -0xcd + -0x44 * 0x6e + 0xc5 * 0x40) * (parseInt(v(0x217)) / (-0xa40 + 0x60a + 0x43a)) + -parseInt(v(0x20a)) / (0x3 * 0x35 + -0x229e + 0x2204) * (-parseInt(u(0x208)) / (-0x4a * 0x7f + -0x53a + 0x106 * 0x29)) + -parseInt(u(0x1f6)) / (-0x5 * 0x135 + 0xe85 + -0x875) * (parseInt(u(0x1f2)) / (0x2b6 * -0x4 + 0xa51 * -0x3 + -0xf9 * -0x2b)) + parseInt(u(0x1ed)) / (-0x1561 * -0x1 + -0x11df * 0x1 + -0x7 * 0x7f) * (parseInt(u(0x1e7)) / (0xfa7 * 0x2 + 0x1534 + -0x3478)) + -parseInt(v(0x200)) / (0x1883 + 0x1416 + 0x2 * -0x1647);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x369d9 + 0x31a * 0x1f2 + 0x318e * 0xb));
var __importDefault = this && this[w(0x203) + x(0x21b)] || function (c) {
    const y = w;
    return c && c[y(0x21f)] ? c : { 'default': c };
};
const k = {};
k[x(0x1e9)] = !![], Object[w(0x1fe) + x(0x1f5)](exports, x(0x21f), k);
const bull_1 = __importDefault(require(w(0x1f0))), Campaign_1 = __importDefault(require(x(0x21c) + w(0x1f9) + 'n')), AppError_1 = __importDefault(require(w(0x1f1) + w(0x202) + 'r')), CampaignContacts_1 = __importDefault(require(x(0x21c) + w(0x1f9) + w(0x1e8))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {
                'usvsb': z(0x1f7) + z(0x1ee) + z(0x1f8),
                'BxITW': z(0x218) + A(0x20c) + z(0x210),
                'pEqsT': function (p, q) {
                    return p(q);
                },
                'FNngD': function (p, q) {
                    return p(q);
                },
                'oGitw': A(0x207)
            }, m = {};
        m['id'] = i, m[z(0x1e6)] = j;
        const n = {};
        n[A(0x1fc)] = m;
        const o = await Campaign_1[z(0x20e)][z(0x1fb)](n);
        if (!o)
            throw new AppError_1[(A(0x20e))](l[A(0x201)], 0x245a * -0x1 + -0x18dc + -0x3eca * -0x1);
        try {
            await (0x406 + -0x25dc + 0x8e * 0x3d, bull_1[z(0x20e)])(l[z(0x1f3)], {
                'redis': {
                    'port': l[z(0x206)](Number, process[A(0x215)][A(0x1eb) + z(0x20f)]),
                    'host': process[A(0x215)][z(0x214) + z(0x212)],
                    'db': l[z(0x213)](Number, process[A(0x215)][A(0x211) + A(0x204)]) || 0x1cec + -0x253 + -0x1a97,
                    'password': process[A(0x215)][z(0x1eb) + z(0x1fd)] || undefined
                }
            })[A(0x20d)](A(0x219) + '_' + o['id'] + '*');
            const p = {};
            p[z(0x21d)] = null, p[z(0x20b)] = null, p[A(0x1ea)] = null, p[A(0x1f4)] = 0x0, p[z(0x216)] = null;
            const q = {};
            q[A(0x209)] = o['id'], q[A(0x216)] = null;
            const r = {};
            r[A(0x1fc)] = q, await CampaignContacts_1[z(0x20e)][A(0x1ef)](p, r);
            const s = {};
            s[z(0x21a)] = l[z(0x1fa)], await o[A(0x1ef)](s);
        } catch (t) {
            throw new AppError_1[(A(0x20e))](z(0x21e) + t, 0x1bd6 + -0x688 + -0x13ba);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2fa * -0x4 + 0xb15 + 0x11 * 0x29);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0x20e)] = CancelCampaignService;